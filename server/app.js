import createError from "http-errors"
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/database.js"
import { fileURLToPath } from "url"
import { dirname } from "path"
import mongoose from "mongoose"
import ConnectMongo from "connect-mongo"
import session from "express-session"
// Import the exams router
import examsRouter from "./routes/exams.js"

dotenv.config({ path: "./.env" })

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import indexRouter from "./routes/index.js"
import usersRouter from "./routes/users.js"

connectDB()

const app = express()

// Use the exams router for all requests that start with '/api/exams'
// This means that the routes defined in the exams router will be prefixed with '/api/exams'
app.use("/api/exams", examsRouter)

// Connect to the database
const MongoStore = ConnectMongo.create({
	mongoUrl: process.env.DB_STRING,
})

app.use(
	session({
		secret: "backendsessionsecret",
		resave: false,
		saveUninitialized: false,
		store: MongoStore,
	})
)

console.log(
	`Connecting to MongoDB with connection string: ${process.env.DB_STRING}`
)

// middleware
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// listen for requests

app.use(logger("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "client/build")))

app.use("/", indexRouter)
app.use("/users", usersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
})

export default app

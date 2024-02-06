import express from "express"
const router = express.Router()

import UserController from "../controllers/user-controller"

router.get("/", UserController.getUser)

export default router

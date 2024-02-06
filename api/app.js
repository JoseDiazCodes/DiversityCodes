var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var glob = require("glob");
var { type } = require('os');
var swaggerJsDoc = require('swagger-jsdoc')
var swaggerUI = require('swagger-ui-express')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Patient Records API',
      version: '1.0.0'
    }
  },
  apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));
/**
 * @swagger
 * /createExam:
 *   post:
 *     summary: Creates a new exam object with all of its attributes.
 *     description: Use this endpoint to create a new exam.
 *     parameters:
 *       - name: patient_id
 *         description: patient id
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: notes
 *         description: key findings
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: age
 *         description: patient age
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: zip_code
 *         description: patient zip code
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Success. The exam object has been created.
 *       409:
 *         description: Conflict. Duplicate.
 *       500:
 *         description: Internal Server Error. An error ocurred while creating the student.
 */
app.post('/createExam', function (req, res) {//creates a new exam obj with all of it's attributes.

  console.log('Received POST request to add exam:', req.body);
  var exam_id= new Date().getTime();

  var obj = {};
  obj.exam_id = exam_id;
  obj.patient_id = req.body.patient_id;
  obj.notes = req.body.notes;
  obj.age = req.body.age;
  obj.zip_code = req.body.zip_code;

  var str = JSON.stringify(obj, null, 2);

  console.log("Exam being added: ", str)
  
  const fs = require('fs');

  const dir = 'examRecords';

  fs.access(dir, (err) => {
    if (err) {
      fs.mkdir(dir, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Exam created successfully!');
        }
      });
    } else {
      console.log('Directory exists!');
    }


  fs.writeFile("./examRecords/" + exam_id + ".json", str, function (err) {//writes to the patient directory
    var rsp_obj = {};
    if (err) {
      rsp_obj.patient_id = -1;
      rsp_obj.message = 'Internal Server Error. An error ocurred while creating the exam record';
      return res.status(500).send(rsp_obj);
    } else {
      rsp_obj.exam_id = exam_id;
      rsp_obj.message = 'exam successfully created';
      return res.status(201).send(rsp_obj);
    }
  }) //end writeFile method
});
}); //end post method



app.listen(5678); //start the server
console.log('Server is running...');
console.log('Webapp:   http://localhost:5678/')
console.log('API Docs: http://localhost:5678/api-docs')

module.exports = app;

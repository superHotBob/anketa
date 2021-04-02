const express = require('express');
const {  Client } = require('pg');
const cors = require('cors');
const fs = require('fs').promises;
var multer = require('multer')
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());      


var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public/myFile')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
app.use(express.static('public'));
const client = new Client ({
   user: "postgres",
   database: "postgres",
   password: "1",
   host: "localhost",
   port: "5432"
 });

 client.connect(err=>{
   if (err) {
     console.error('connection error', err.stack)
   } else {
     console.log('connected to base postgres')
   }
 });
const upload = multer({ storage: storage }).array('file[]')
//app.use(fileUpload());
// file upload api
app.post('/upload', (req, res) => {
	console.log(req)
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send("file uploaded")

    })
})




app.post("/addmember",  function( req, res) {
	 /* const text = INSERT INTO account (username, password) VALUES ( " + req.body.name + "," + req.body.password + "); */
	const {name, password } = req.body;
	client.query('INSERT INTO account (username, password) VALUES($1,$2)',[name,password],function (err, result) {
    if (err) {
      throw err
    }
   
	
 }); 
    res.status(201).send(`<h1>name:${req.body.name}/password:${req.body.password}</h1>`);
}); 





app.get('/', async function (req, res) {
  fs.readFile(__dirname + "/index.html")
  .then(contents => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
  })
})
const port = process.env.PORT || 5001;
app.listen(port, () => console.log("Server is running on 5001 port"));
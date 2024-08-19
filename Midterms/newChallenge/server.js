// Pamintuan, Eljan Joel Y. | WD - 302

var express = require('express');
var app = express();

// Require body-parser for this method
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/process_post', urlencodedParser, function(req, res) {
    // Prepare output in JSON format with all form fields
    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        id_number: req.body.id_number,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        concerns: req.body.concerns,  
        gender: req.body.gender,     
        subject: req.body.subject  
    };

    console.log('Received data:', response);

    // Send JSON response back to client
    res.json(response);
});



//import statements for path, mimetype and multer
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

app.use('/', express.static(__dirname));

//use multer to support file upload feature
const fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); //Specify the destination directory for the uploaded files
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); //Use the original name of the file
    },
});

const upload = multer({ storage: fileStorage });
//File upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);

//Set the correct MIME type for the uploaded file.
/*Use to verify that the uploaded file is of the expected 
type before further processing it.*/
    req.file.mimetype = mime.lookup(req.file.originalname);

    //Send a customized page to the client
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

//Route to upload
app.get('/file-upload', (req, res) => {
    res.sendFile(__dirname + '/' + 'file-upload.html');
});

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});

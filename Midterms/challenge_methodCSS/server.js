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


app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});

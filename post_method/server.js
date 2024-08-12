// Pamintuan, Eljan Joel Y. | WD - 302

var express = require('express');
var app = express();

// Require body-parser for this method
var bodyParser =  require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html" );
});

app.post('/process_post', urlencodedParser, function(req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };

    console.log(response);
    res.send(JSON.stringify(response));
});

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});
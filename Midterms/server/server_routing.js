// Pamintuan, Eljan Joel Y. | WD-302

var express = require('express');
var app = express();

// This responds with 'Hello World' on the homepage
app.get('/', function(req, res) {
    console.log("There is GET request for the homepage! ");
    res.send('Here is the GET Method! ');
});

// This responds a POST request for the homepage
app.post('/post', function(req, res) {
    console.log("A POST request for the homepage is accessed. ");
    res.send('Here is the POST Method! ');
});

// This responds to GET request for the /list_user page.
app.get('/list_user', function(req, res) {
    console.log("Got a GET request for /list_user. ");
    res.send("This is the Page Listing");
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/student_profile', function(req, res) {
    console.log("Got a GET request for /student_profile");
    res.send("Pamintuan, Eljan Joel Y. | WD - 302");
});

var server = app.listen(4000, function() {
    var host = server.address().address;
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
})


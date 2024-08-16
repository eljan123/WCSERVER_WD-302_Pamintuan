// Pamintuan, Eljan Joel Y.
// WD - 302
const express = require('express');
const app = express();

app.get ('/', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res) {
    // Prepare output in JSON Format
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };

    console.log(response);
    res.send(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
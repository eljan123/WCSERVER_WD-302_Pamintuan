const express = require('express');
const app = express();

app.use(express.static('css'));

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {    
    res.render('index', {
        title: 'Pug Demo', message:
        'Hello EJ, Welcome to the Pug template engine!'
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
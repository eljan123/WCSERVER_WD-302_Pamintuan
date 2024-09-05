// Pamintuan, Eljan Joel Y. | WD - 302

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1></br><p>Pamintuan, Eljan Joel Y. | WD - 302</p>');
});


app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});


app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
});


app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});


// Array for GET Method
const movies = [
    {
        "id": 1,
        "title": "Superman"
    },
    {
        "id": 2,
        "title": "Thor"
    },
    {
        "id": 3,
        "title": "Iron Man"
    }
];


// Get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

// Get movie by ID
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    
    res.send(movie);
});


app.listen(3000, () => console.log('Listening on port 3000'));

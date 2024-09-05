// Pamintuan, Eljan Joel Y. | WD - 302

app.use(express.json()); 

// Add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
});


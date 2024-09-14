/**
 *  Pamintuan, Eljan Joel Y.
 *  WD - 302
 */
const express = require('express');
const app = express();
const port = 3000;

const dishes = [
  { type: 'Sisig', province: 'Pampanga', price: 270 },
  { type: 'Salpicao', province: 'Quezon', price: 180 },
  { type: 'Bagnet', province: 'Ilocos', price: 370}
];

app.get('/', (req, res) => {
    res.send('<html><body><h1>Midterm Examination</h1><p>Name: Pamintuan, Eljan Joel Y.</p><p>Section: WD - 302</p></body></html>');
}) ;

app.get('/dishes', (req, res) => {
  res.json(dishes);
});


app.get('/dishes/:type', (req, res) => {
    const { type } = req.params;
    const dish = dishes.find(d => d.type.toLowerCase() === type.toLowerCase());
  
    if (dish) {
      res.json(dish);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  });
  
  app.use((req, res) => {
    res.status(404).json({ message: 'Record not found' });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
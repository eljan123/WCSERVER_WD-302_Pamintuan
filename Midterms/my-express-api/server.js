const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 

const app = express();
const port = 3000;

app.use(cors()); 
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './public')));

// Sample user data
let users = [
  { id: 1, name: 'Name: ' + 'Carmela', email: 'Email: ' + 'mela@gmail.com', age: "Age:" + " " + 25, salary: 'Salary: ' + 25000 },
  { id: 2, name: 'Name: ' + 'Joseph', email: 'Email: ' + 'joe@gmail.com', age: "Age:" + " " + 30, salary: 'Salary: ' + 45000 },
  { id: 3, name: 'Name: ' + 'James', email: 'Email: ' + 'james@gmail.com', age: "Age:" + " " + 35, salary: 'Salary: ' + 30000 },
  { id: 4, name: 'Name: ' + 'John', email: 'Email: ' + 'john@gmail.com', age: "Age:" + " " + 40, salary: 'Salary: ' + 25000 },
  { id: 5, name: 'Name: ' + 'Frank', email: 'Email: ' + 'franky@gmail.com', age: "Age:" + " " + 45, salary: 'Salary: ' + 45000 },
  { id: 6, name: 'Name: ' + 'Alex', email: 'Email: ' + 'alex@gmail.com', age: "Age:" + " " + 21, salary: 'Salary: ' + 33000 }
];

// Root route to display available routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET /api/users - Returns all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Fetch a specific user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST /api/users - Add a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE /api/delete/:id - Delete a user by ID
app.delete('/api/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(200).send(`User with ID ${userId} deleted`);
    } else {
      res.status(404).send('User not found');
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

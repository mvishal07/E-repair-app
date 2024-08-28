const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/api/locations', (req, res) => {
  db.query('SELECT * FROM locations', (error, results) => {
    if (error) {
      console.error('Error fetching appliance types:', error);
      res.status(500).send('Error fetching appliance types');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/suggest-appliances', (req, res) => {
  const query = req.query.query.toLowerCase();
  db.query('SELECT type_name FROM appliance_types WHERE type_name LIKE ?', [`%${query}%`], (error, results) => {
    if (error) {
      console.error('Error fetching appliance suggestions:', error);
      res.status(500).send('Error fetching appliance suggestions');
    } else {
      res.json(results.map(row => row.type_name));
    }
  });
});

app.get('/api/technicians', (req, res) => {
  db.query('SELECT * FROM technicians', (error, results) => {
    if (error) {
      console.error('Error fetching technicians:', error);
      res.status(500).send('Error fetching technicians');
    } else {
      res.json(results);
    }
  });
});


app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Error during user login:', error);
      res.status(500).send('Error during login');
    } else if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});


app.post('/technician/login', (req, res) => {
  const { email, password, businessName } = req.body;
  db.query('SELECT * FROM technicians WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Error during technician login:', error);
      res.status(500).send('Error during login');
    } else if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid login credentials' });
    }
  });
});


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

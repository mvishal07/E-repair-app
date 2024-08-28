const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: 'Vishal@1662',          
  database: 'technician_service' 
});


connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;

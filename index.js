const fs = require('fs');

const json = fs.readFileSync('credentials.json', 'utf8');
const credentials = JSON.parse(json);

const fs = require('fs');
const mysql = require('mysql');

const json = fs.readFileSync('credentials.json', 'utf8');
const credentials = JSON.parse(json);

const connection = mysql.createConnection(credentials);
connection.connect(error => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
});

// TODO: issue queries.

connection.end();

const selectQuery = 'SELECT * FROM memory';
connection.query(selectQuery, (error, rows) => {
  if (error) {
    console.error(error);
  } else {
    console.log(rows);
  }
});
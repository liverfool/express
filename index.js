const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./database.js')
const connection = mysql.createConnection(dbconfig);
const app = express();

app.get('/', (req,res) => {
  res.send('Root');
});

app.get('/users', (req,res) => {
  connection.query('SELECT * from select_test', (error,rows) => {
  if(error) throw error;
  console.log('User info is: ', rows);
  res.send(rows[0]);
  });
});

app.get('/song', (req,res) => {
  connection.query('SELECT * from song', (error,rows) => {
    if(error) throw error;
    console.log('song name:', rows);
    res.send(rows);
  })
})

app.listen(4000);
const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./database2.js')
const logger = require('morgan');
const cookiePaser = require('cookie-parser');
const bodyParser = require('body-parser');
const connection = mysql.createConnection(dbconfig);
const app = express();

//use
app.use(logger('dev'));
app.use(cookiePaser());
app.use(bodyParser.urlencoded({extended:true}))
//get
app.get('/', (req,res) => {
  res.send('Root');
});

app.get('/users', (req,res) => {
  connection.query('SELECT * from select_test', (error,rows) => {
  if(error) throw error;
  console.log('User info is: ', rows);
  res.send(rows);
  });
});

app.get('/cookie', (req,res) => {
  res.cookie('myCookie', 'set Cookie')
  console.log(req.cookies);
});

app.get('/song', (req,res) => {
  connection.query('SELECT * from song', (error,rows) => {
    if(error) throw error;
    console.log('song name:', rows);
    res.send(rows);
  });
});

app.get('/id', (req,res) => {
  connection.query('SELECT * from person', (error,rows) => {
    if(error) throw error;
    res.send(rows);
  })
})

/*
app.get('/login', function(req, res, next) {
  res.render('login');
});

app.post('/loginAf', function (req, res, next) {
  console.log("id : " + req.body.id);
  console.log("pwd : " + req.body.pwd);
  console.log("아이디 저장? : " + req.body.rememberId);

  if(req.body.rememberId === "checked"){
    console.log("아이디 저장 체크!");

    // cookie생성
    // res.cookie('cookie 이름', 'cookie 내용');
    res.cookie('loginId', req.body.id);
  
    // cookie 읽기
    console.log(req.cookies);
  }
  res.render('home');
});
*/
app.listen(4000);
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const item = [{
  id: 1,
  name: "홍길동",
  height: 175.6
}];

const ID = {
  id:'moon',
  password: '0319'
};

app.get('/', (req,res) =>{
  res.send("Hello")
})
app.get('/user', (req, res) => {
  res.send(item[0])
})

let ages;
app.post('/user/check', (req, res) => {
  if(req.body.age === 17) 
  {ages = '1학년'}
  else if(req.body.age === 18)
  {ages = '2학년'}
  else if(req.body.age === 19)
  {ages = '3학년'}
  else{ages = '고등학생이 아닌'}
  res.send({msg: `${ages} ${req.body.name}님 반갑습니다`})
  console.log({msg: `${ages} ${req.body.name}님 반갑습니다`})
})

app.post('/user/login', (req,res) =>{
  if(req.body.id == ID.id && req.body.password == ID.password){
    console.log(`${req.body.id} 님 반갑습니다`)
    res.send(`${req.body.id} 님 반갑습니다`)
  }
  else {
    console.log('msg: id or password false')
    res.send('msg: id or password false')
  }
})

app.listen(4000)
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const item = [{
  id: 1,
  name: "홍길동",
  height: 175.6
}];

app.get('/', (req,res) =>{
  res.send("Hello")
})
app.get('/user', (req, res) => {
  res.send(item[0])
})

let ages;
app.post('/user', (req, res) => {
  if(req.body.age === 17)
  {ages = '1학년'}
  else if(req.body.age === 18)
  {ages = '2학년'}
  else if(req.body.age === 19)
  {ages = '3학년'}
  else{ages = '고등학생이 아닌'}

  res.send({msg: `${ages} ${req.body.name}님 반갑습니다`})
})
app.listen(4000)
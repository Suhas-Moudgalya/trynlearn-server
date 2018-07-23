var express = require('express');
var bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose');
var { Message } = require('./models/message');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var message = new Message({
//   name : 'SuhasMS',
//   email: 'sms@sms.com',
//   message: 'Hello Hello Hello'
// });

app.get('/getMessages', (req, res) => {
  Message.find().then((message) => {
    res.send(message);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.post('/postMessage', (req, res) =>{
  var myData = new Message(req.body);
  myData.save().then((message)=>{
    res.send(message);
  },(e)=>{
     res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
var express = require('express');

var app = express();

var contacts = [{
  name: 'Edward'
},{
  name:'Robert'
}];

app.get('/contacts', function(req, res, next){
  res.status(200).json(contacts);
});

app.listen(9001);
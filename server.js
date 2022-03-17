const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

const {createConcertList, getConcertList} = require('./db');

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.disable('etag');

app.get('/shows', function(req, res) {
  getConcertList({})
  .then(data => res.status(200).send(data))
  .catch(err => console.log(err));
});

app.get('/cocktailbars/:apiKey/:location', function(req, res) {
  const {apiKey, location} = req.params;
  console.log(apiKey)
  console.log(location)
  axios({
    url: 'https://api.yelp.com/v3/businesses/search' + '?term=cocktail bars&location=' + location,
    method: 'get',
    headers: { Authorization: `Bearer ${apiKey}` }
  })
  .then(data => res.status(200).send(data.data))
  .catch(err => console.log(err));
});

app.get('/restaurants/:apiKey/:location', function(req, res) {
  const {apiKey, location} = req.params;
  axios({
    url: 'https://api.yelp.com/v3/businesses/search' + '?term=restaurants&location=' + location,
    method: 'get',
    headers: { Authorization: `Bearer ${apiKey}` }
  })
  .then(data => res.status(200).send(data.data))
  .catch(err => console.log(err));
});

app.post('/', function(req, res) {
  createConcertList(req.body)
  .then(success => "Successfully added concerts")
  .catch(err => console.log(err));

  res.status(200).end()
});


app.get('/fixData', function(req, res) {
  getConcertList({})
  .then(data =>{
    res.send(data)
  })
  .catch(err => console.log(err));
});


app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
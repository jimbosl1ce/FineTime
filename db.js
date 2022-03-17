//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = ``;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var concertInfo = new Schema({
  city: String,
  date: String,
  location: String,
  eventUrl: String,
  type: String,
});

// Compile model from schema
var ConcertInfo = mongoose.model('ConcertInfo', concertInfo );


const createConcertList = (rsvp) => {
  return ConcertInfo.create(rsvp)
};

const getConcertList = () => {
  return ConcertInfo.find({});
};

module.exports = {
  createConcertList,
  getConcertList
}
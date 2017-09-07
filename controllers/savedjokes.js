var Joke = require('../models/joke');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function saveJoke(req, res) {
  console.log(req.body)
  var joke = new Joke(req.body);
  joke.save()
    res.json(joke)

  // .then(joke => {
  //   console.log("test")
  //   res.json(joke)
  // })
  // .catch(err => res.status(400).json(err));
}

function jokeIndex(req, res) {

}

module.exports = {
  saveJoke: saveJoke
};
var Joke = require('../models/joke');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function saveJoke(req, res) {
  console.log(req.body)
  // res.json({cat: "hello"})
  var joke = new Joke(req.body);
  joke.save()
    res.json(joke)

  // .then(joke => {
  //   console.log("test")
  //   res.json(joke)
  // })
  // .catch(err => res.status(400).json(err));
}

module.exports = {
  saveJoke: saveJoke
};
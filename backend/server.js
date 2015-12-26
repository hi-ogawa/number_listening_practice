var express = require("express");
var faker = require("faker");
var cors = require("cors");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

// NOTE: in real situation, this should be given runtime.
var jwtSecret = "fghjkkh";

var user = {
  username: "hiroshi",
  password: "p"
}

var app = express();
app.use(cors({
  origin: "http://localhost:8080"
}));
app.use(bodyParser.json());

app.get("/random-user", function(req, res) {
  var user = faker.helpers.createCard();
  user.avatar = faker.image.avatar();
  res.json(user);
});

app.post("/login", authenticate, function(req, res) {
  // NOTE: in real situation, more parameters should be passed to generate a token.
  var token = jwt.sign({
    username: req.body.username
  }, jwtSecret);
  res.end(JSON.stringify({
    token: token,
    user: user
  }));
});

app.listen(3000, function(){
  console.log("App listening on localhost:3000");
});


function authenticate(req, res, next) {
  var body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end("must give username and password.")
  }
  if (body.username !== user.username || body.password !== user.password) {
    res.status(401).end("username or password incorrect.")
  }
  next();
}

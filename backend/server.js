var express = require("express");
var faker = require("faker");
var cors = require("cors");
var bodyParser = require("body-parser");

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
  res.send(user);
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

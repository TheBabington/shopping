const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//=====Keep 3000 open for react....env for heroku
const PORT = process.env.PORT || 3001;
const app = express();

const items = require('./routes/api/items')

/* Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
*/

//Bodyparser middleware
app.use(bodyParser.json());

//DB CONFIG
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser: true})
 .then(() => console.log("ALL YOUR DATABASE ARE BELONG TO US"))
 .catch(err => console.log(err));

//===USE THE ROUTES FOLDER****DOESNTWORK*******************************
app.use('/api/items', items);

  // Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
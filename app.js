

const express = require('express');
const app = express();
app.use(express.json());
// Serve the static files
app.use(express.static(__dirname + '/public'));

const port = 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${port}`);
});

 //Routes
app.get('/',(req, res) => {
  res.sendFile('contact.html',{root : __dirname})});



  
const express = require('express');
const app = express();
const port = 3000;

app.set(`view engine`, `ejs`);
app.use(express.static(__dirname));


var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = "Home Page";
  res.render('pages/index', { 'title': title });
});

app.get('/about', (req, res) => {
var title = "About Page";
res.render('pages/about', { 'title': title });
});


app.get('/contacts', (req, res) => {
var title = "Contacts Page";
res.render('pages/contacts', { 'title': title });
});




app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {
    title: title,
    users: data
  });
});

app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});
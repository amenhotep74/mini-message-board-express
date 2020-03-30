var express = require('express');
var router = express.Router();

// Array to render
const messages = [
  {
    text: 'Hi There!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  // calling the messages inside the render method which then renders it to the page.
  res.render('index', { title: 'Mini Message App', messages: messages });
});

// New route
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Post New Message' });
});

// Post request for form
router.post('/new', (req, res, next) => {
  // store form inputs
  // console.log form inputs
  console.log(req.body.name);
  console.log(req.body.message);
  // push the form inputs to the new array
  messages.push({
    user: req.body.user,
    text: req.body.message,
    added: new Date()
  });
  // then redirect
  res.redirect('/');
});

module.exports = router;

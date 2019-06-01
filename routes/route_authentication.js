var express = require('express');
var router = express.Router();
var passport = require('../controllers/controller_authentication.js');


app.post('/signup', 
  passport.authenticate('local-signup', { 
      failureRedirect: '/signupError', 
      failureFlash: true
    }),
  function(req, res) {
    res.redirect('/indexLogin?username=' + req.user.user_name);
    });

app.post('/login', 
    passport.authenticate('local-login', { 
        failureRedirect: '/loginError',
        failureFlash: true
   }),
    function(req, res) {
      res.redirect('/indexLogin?username=' + req.user.user_name);
    });





module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportService = require('../passport');
const authenticationController = require('../controllers/controllerAuthentication');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/login', authenticationController.login);
router.post('/registration', authenticationController.registration);
router.get('/facebook',
  passport.authenticate('facebook'));
router.get('/facebook/callback',
  passport.authenticate('facebook', {  session:false}), function(req, res){authenticationController.fbCallback(req, res)});
module.exports = router;


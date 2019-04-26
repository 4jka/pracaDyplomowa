const dataController = require('./controllers/controllerDB');
const config = require('./config');

const passport = require('passport');

const FacebookStrategy = require('passport-facebook');
const jwt = require('jsonwebtoken');

module.exports.requireToken = (req,res,next) => 
{
  config.consoleInfo('SECURITY!!!');
  const token = req.headers['jwt'];
  console.log('Client token: ', token);
  
  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: err.message })
    }
    // console.log('Decoded token: ',decoded);
    req.params.userId = decoded._id,
    next()
  })
}


passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['displayName', 'photos', 'email', 'interested_in']

},  function(accessToken, refreshToken, profile, done)
    {cbFacebook(accessToken, refreshToken, profile, done)}
)); 


function cbFacebook(accessToken, refreshToken, profile, done) {
  dataController.dbtest(
    `SELECT id_user, user_name, email FROM user WHERE email = '${profile._json.email}'`,
    function (err, user) 
    {   
      if (err) return done(err);
      if (user[0]) 
      {
        done(null, user[0]);
      }else
      {
        dataController.dbtest(
        "INSERT INTO user (`user_name`,`email`) VALUES ('" + profile._json.name + "','" + profile._json.email + "');",
        function (err, data) 
        {
          if (err) throw err;
          console.log('Created new user');
          var newUser = {};
          newUser.id_user = data.insertId;
          newUser.user_name = profile._json.name;
          newUser.email = profile._json.email;
          return done(null, newUser);
        });
      }
    }
  );
}



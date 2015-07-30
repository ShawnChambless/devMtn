var passport          = require( 'passport' ) ,
    LocalStrategy     = require( 'passport-local' ).Strategy ,
    userCtrl          = require( '../controllers/userCtrl.js' ) ;
    // mongoose          = require( 'mongoose' ) ,
    // User              = mongoose.model('User', require('../models/userSchema.js')) ;

// Passport Session Serialization
passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function(obj, done) { done(null, obj); });

// Passport Strategies
// Creation of req.qpromise in both of these strategies is for 'q' promise functionality in userCtrl.js
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  // FIND OR CREATE USER BY EMAIL AND PASSWORD
  req.qpromise = true;
  userCtrl.retrieve(req, res).then(function(user, err) {
    if (err){
      console.log('Error in SignUp: ' + err);
      return done(err);
    }
    else if (user) {
      console.log('User already exists with email: ' + email);
      return done(null, 'User already exists with email: ' + email);
      // return done(null, false, req.flash('message','User Already Exists'));
    } else {
      userCtrl.create(req.body).then(
        function(newUser){
          console.log('User Registration succesful');
          return done(null, newUser);
        }, function(createErr){
          console.log('Error in Saving user: ' + createErr);
          return done(createErr);
        }
      );
    }
  });
}));
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  req.qpromise = true;
  userCtrl.retrieve(req, res).then(
    function(user) {
      return done(null, user);
    }, function(retrieveError) {
      return done(retrieveError);
    }
  );
}));

module.exports = passport;

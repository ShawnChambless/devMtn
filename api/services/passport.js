var passport          = require( 'passport' ) ,
    LocalStrategy     = require( 'passport-local' ).Strategy ,
    // GitHubStrategy    = require( 'passport-github' ).Strategy ,
    // LinkedInStrategy  = require( 'passport-linkedin' ).Strategy ,
    mongoose          = require( 'mongoose' ) ,
    userCtrl          = require( '../controllers/userCtrl.js' ) ;
    // User              = mongoose.model('User', require('../models/userSchema.js')) ;


// Passport Session Serialization
passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function(obj, done) { done(null, obj); });

// Passport Strategies
passport.use('local-signup', new LocalStrategy({
  // emailField: 'email',
  // passwordField: 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  // FIND OR CREATE USER BY EMAIL AND PASSWORD
  userCtrl.retrieve(req, null, null, true).then(function(user, err) {
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
  // emailField: 'email',
  // passwordField: 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  userCtrl.retrieve(req, null, null, true).then(
    function(user) {
      return done(null, user);
    }, function(retrieveError) {
      return done(retrieveError);
    }
  );
}));
// passport.use('github', new GitHubStrategy({
//   clientID: config.github.key,
//   clientSecret: config.github.secret,
//   callbackURL: srvUri + '/auth/github/callback'
// }, function(request, accessToken, refreshToken, profile, done) {
// //     console.log('GIIIIIIIIITHUUUUUUUUUUUUB ', profile);
//     userCtrl.create(profile, done).then(function(user){
//       return done(null, user);
//     });
//   }
// ));
// passport.use('linkedin', new LinkedInStrategy({
//   clientID: config.linkedin.key,
//   clientSecret: config.linkedin.secret,
//   callbackURL: srvUri + '/auth/linkedin/callback'
// }, function(request, accessToken, refreshToken, profile, done) {
// //     console.log('LIIIIIIINNNNNNNNKEDIIIIIN ', profile);
//     userCtrl.create(profile, done).then(function(user){
//       return done(null, user);
//     });
//   }
// ));

module.exports = passport;

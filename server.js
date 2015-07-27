/* jslint node: true */
'use strict';
var port        = process.argv[2] || 8080 ,
    config      = require( './api/config.js' ) ,
    express     = require( 'express' ) ,
    app         = express() ,
    http        = require( 'http' ) ,
    httpServer  = http.createServer(app) ,
    // https       = require( 'https' ) ,
    // creds       = {key: config.sslcert.key, cert: config.sslcert.cert} ,
    // httpsServer = https.createServer(creds, app) ,

    bodyParser  = require( 'body-parser' ).json() ,
    cors        = require( 'cors' ) ,

    mongoose    = require( 'mongoose' ) ,
    userCtrl    = require( './api/ctrls/userCtrl.js' ) ,
    postCtrl    = require( './api/ctrls/postCtrl.js' ) ,

    session     = require( 'express-session' ) ,
    passport    = require( 'passport' ) ,
    GitHubStrategy    = require( 'passport-google-oauth2' ).Strategy ,
    LinkedInStrategy  = require( 'passport-facebook' ).Strategy ;

// Connect to MongoDB via Mongoose
mongoose.connect('mongodb://localhost:27017/devmtn');
mongoose.connection.once('open', function(){console.log('mdb listening on 27017');});

// Passport session setup
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Passport Strategies
passport.use('github', new GitHubStrategy({
  clientID: config.github.key,
  clientSecret: config.github.secret,
  callbackURL: 'http://localhost:8080/auth/github/callback'
  }, function(request, accessToken, refreshToken, profile, done) {
//     console.log('GIIIIIIIIITHUUUUUUUUUUUUB ', profile);
    userCtrl.create(profile, done).then(function(user){
      return done(null, user);
    });
  }
));
passport.use('linkedin', new LinkedInStrategy({
  clientID: config.linkedin.key,
  clientSecret: config.linkedin.secret,
  callbackURL: 'http://localhost:8080/auth/linkedin/callback'
  }, function(request, accessToken, refreshToken, profile, done) {
//     console.log('LIIIIIIINNNNNNNNKEDIIIIIN ', profile);
    userCtrl.create(profile, done).then(function(user){
      return done(null, user);
    });
  }
));

// configure Express
app.use('/', express.static(__dirname + '/public'));
app.use('/', bodyParser);
app.use('/', cors());
app.use(session({
  secret: 'dev-mtn-portal-express-session',
  resave: 'false',
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', ensureAuthenticated);


// AUTH ENDPOINTS
app.get('/auth/local', passport.authenticate('local', {scope: [ 'email' ] } ));
app.get('/auth/local/callback', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}));
app.get('/auth/github', passport.authenticate('github', {scope: [ 'email' ] }));
app.get('/auth/github/callback', passport.authenticate('github', {
  successRedirect: '/',
  failureRedirect: '/'
}));
app.get('/auth/linkedin', passport.authenticate('linkedin', {scope: [ 'email' ] }));
app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/'
}));
app.get('/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// FRONTEND ENDPOINTS
app.post(   '/api/users',          userCtrl.create );
app.get(    '/api/users',          userCtrl.retrieve );
app.put(    '/api/users/:user_id', userCtrl.update );
app.delete( '/api/users/:user_id', userCtrl.remove );

app.post(   '/api/posts',          postCtrl.create );
app.get(    '/api/posts',          postCtrl.retrieve );
app.put(    '/api/posts/:post_id', postCtrl.update );
app.delete( '/api/posts/:post_id', postCtrl.remove );


// app.listen(port, function(){console.log('srv listening on', port);});
httpServer.listen(port, function(){console.log('srv listening on', port);});
// httpsServer.listen(443);


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.status(403).send('not authenticated');
}

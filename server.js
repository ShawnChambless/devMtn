/* jslint node: true */
'use strict';
var config      = require( './api/config.js' ) ,
    srvport     = process.argv[2] || config.srvport ,
    srvUri      = config.srvUri ,
    mdbport     = config.mdbport ,
    express     = require( 'express' ) ,
    app         = express() ,
    http        = require( 'http' ) ,
    httpServer  = http.createServer(app) ,
    // SECURE CONNECTION
    // https       = require( 'https' ) ,
    // creds       = {key: config.sslcert.key, cert: config.sslcert.cert} ,
    // httpsServer = https.createServer(creds, app) ,
    // MIDDLEWARE
    favicon     = require( 'serve-favicon' ) ,
    bodyParser  = require( 'body-parser' ).json() ,
    cors        = require( 'cors' ) ,
    mongoose    = require( 'mongoose' ) ,
    session     = require( 'express-session' ) ,
    ensureAuthenticated = function(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.status(403).send('not authenticated');
    } ,
    // CONTROLLERS
    userCtrl    = require( './api/controllers/userCtrl.js' ) ,
    postCtrl    = require( './api/controllers/postCtrl.js' ) ,
    // SERVICES
    passport    = require( './api/services/passport.js' ) ;

// Connect to MongoDB via Mongoose
mongoose.connect( config.mdbUri );
mongoose.connection.once('open', function(){console.log('mdb listening on', mdbport);});

// Configure Express and Session
app.use('/', favicon(__dirname + '/public/favicon.ico'));
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
// app.use('/api', ensureAuthenticated);

// AUTH ENDPOINTS
app.post('/auth/local/signup', passport.authenticate( 'local-signup' , {
  successRedirect: '/',
  failureRedirect: '/',
  // failureFlash: true
}));
app.post('/auth/local/login', passport.authenticate( 'local-login' , {
  successRedirect: '/',
  failureRedirect: '/',
  // failureFlash: true
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
  return res.send('logged out');
});

// FRONTEND ENDPOINTS
app.post(   '/api/users',          userCtrl.create );
app.get(    '/api/users/:user_id', userCtrl.retrieve );
app.put(    '/api/users/:user_id', userCtrl.update );
app.delete( '/api/users/:user_id', userCtrl.remove );

app.post(   '/api/posts',                 postCtrl.create );
app.get(    '/api/posts/:post_id',        postCtrl.retrieve );
app.get(    '/api/posts/cats/:cat_name',  postCtrl.retrieveCat );
app.put(    '/api/posts/:post_id',        postCtrl.update );
app.delete( '/api/posts/:post_id',        postCtrl.remove );

// app.listen(port, function(){console.log('srv listening on', port);});
httpServer.listen(srvport, function(){console.log('srv listening on', srvport);});
// httpsServer.listen(443);

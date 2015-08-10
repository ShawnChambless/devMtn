/* jslint node: true */
'use strict';
var config      = require( './api/config.js' ) ,
    srvport     = process.argv[2] || config.srvport ,
    srvUri      = config.srvUri  + ':' + srvport ,
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
    bodyParser  = require( 'body-parser' ) ,
    cors        = require( 'cors' ) ,
    mongoose    = require( 'mongoose' ) ,
    db          = mongoose.connection ,
    session     = require( 'express-session' ) ,
    ensureAuthenticated = function(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.status(403).send('not authenticated');
    } ,
    // CONTROLLERS
    userCtrl    = require( './api/controllers/userCtrl.js' ) ,
    postCtrl    = require( './api/controllers/postCtrl.js' ) ,
    bountyCtrl  = require( './api/controllers/bountyCtrl.js' ) ,
    // SERVICES
    passport    = require( './api/services/passport.js' ) ;


// Configure Express and Session
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'dev-mtn-portal-express-session',
  resave: 'false',
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use('/api', ensureAuthenticated);

// AUTH ENDPOINTS
app.post('/auth/local/signup', passport.authenticate( 'local-signup' ), function(req, res){
  res.json(req.user);
});
app.post('/auth/local/login', passport.authenticate( 'local-login' ), function(req, res){
  res.json(req.user);
});
app.get('/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// FRONTEND ENDPOINTS
app.post(   '/api/users',          userCtrl.create );
app.get(    '/api/user/',          userCtrl.getSessionUser );
app.get(    '/api/users',          userCtrl.retrieveAll );
app.get(    '/api/users/:user_id', userCtrl.retrieveOne );
app.put(    '/api/users/:user_id', userCtrl.update );
app.put(    '/api/users/:user_id/posts/:post_id', userCtrl.updatePosts );
app.put(    '/api/users/:user_id/bounties/:bounty_id', userCtrl.updateBounties );
app.put(    '/api/users/:user_id/favorites/:post_id', userCtrl.updateFavorites );
app.put(    '/api/users/:user_id/viewLater/:post_id', userCtrl.updateviewLater );
app.delete( '/api/users/:user_id/favorites/:post_id', userCtrl.removeFavorite );
app.delete( '/api/users/:user_id/viewLater/:post_id', userCtrl.removeviewLater );
app.delete( '/api/users/:user_id', userCtrl.remove );

app.post(   '/api/posts',          postCtrl.create );
app.get(    '/api/posts/pending',  postCtrl.retrievePending );
app.get(    '/api/posts/approved', postCtrl.retrieveApproved );
app.get(    '/api/posts/:post_id', postCtrl.retrieveOne );
app.get(    '/api/posts/cats/:cat/pending',  postCtrl.retrieveCatPending );
app.get(    '/api/posts/cats/:cat/approved',  postCtrl.retrieveCatApproved );
app.get(    '/api/posts/cats/:cat/tag/:tag',  postCtrl.retrieveCatByTag );
app.put(    '/api/posts/:post_id', postCtrl.update );
app.delete( '/api/posts/:post_id', postCtrl.remove );

app.post(   '/api/bounties',       bountyCtrl.create );
app.get(    '/api/bounties',       bountyCtrl.retrieveAll );
app.get(    '/api/bounties/:bounty_id', bountyCtrl.retrieveOne );
app.put(    '/api/bounties/:bounty_id', bountyCtrl.update );
app.delete( '/api/bounties/:bounty_id', bountyCtrl.remove );

// Connect to MongoDB via Mongoose
mongoose.connect( config.mdbUri );
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){console.log('mdb listening on', mdbport);});

// app.listen(port, function(){console.log('srv listening on', port);});
httpServer.listen(srvport, function(){console.log('srv listening on', srvport);});
// httpsServer.listen(443);

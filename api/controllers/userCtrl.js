var mongoose    = require('mongoose') ,
    $q          = require('q') ,
    bcrypt      = require( 'bcryptjs' ) ,
    User        = mongoose.model('User', require('../models/userSchema.js')) ,
    createHash  = function(password){ return bcrypt.hashSync(password); } ,
    checkHash   = function(password, hash){ return bCrypt.compareSync(password, hash); } ;

module.exports = {

  create: function(req, res){
    // var def = $q.defer();
    var newUser = new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = createHash(req.body.password);
    newUser.save(function(err, createdUser) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(createdUser);
      // if (err) {def.reject(err);}
      // else def.resolve(newUser);
    });
    // return def.promise;
  } ,

  retrieve: function(req, res){
    // var def = $q.defer();
    User.findOne({ "email": req.body.email })
    .exec().then(function(user, err){
      if (err) {
        return res.status(500).json(err);
      }
      if (checkHash(req.body.password, user.password)) {
        return res.status(200).json(createdUser);
      }
      // if (checkHash(req.body.password, user.password)) {def.resolve(user); }
      // else def.reject(err);
    });
    // return def.promise;
  } ,

  update: function(req, res){
    User.findByIdAndUpdate(req.params.user_id, {subs: req.body.newMySubs}, {new: true}, function(err, updatedUser){
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(updatedUser);
    });
  } ,

  remove: function(req, res){
    User.findByIdAndRemove(req.params.user_id, function(err){
      if (err) return res.status(500).json(err);
      return res.status(200).json();
    });
  }

};

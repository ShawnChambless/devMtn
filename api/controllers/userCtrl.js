var mongoose    = require('mongoose') ,
    $q          = require('q') ,
    bcrypt      = require( 'bcryptjs' ) ,
    User        = mongoose.model('User', require('../models/userSchema.js')) ,
    createHash  = function(password){ return bcrypt.hashSync(password); } ,
    checkHash   = function(password, hash){ return bCrypt.compareSync(password, hash); } ;

module.exports = {

  create: function(req, res, q){
    var def = $q.defer();
    var newUser = new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = createHash(req.body.password);
    newUser.save(function(err, createdUser) {
      if (err) {
        if (q) {def.reject(err);}
        else {return res.status(500).json(err);}
      }
      else {
        if (q) {def.resolve(createdUser);}
        else {return res.status(200).json(createdUser);}
      }
    });
    return def.promise;
  } ,

  retrieve: function(req, res, q){
    var def = $q.defer();
    User.findOne({ "email": req.body.email })
    .exec().then(function(user, err){
      if (err) {
        if (q) {def.reject(err);}
        else {return res.status(500).json(err);}
      }
      if (checkHash(req.body.password, user.password)) {
        if (q) {def.resolve(user);}
        else {return res.status(200).json(createdUser);}
      }
      if (!checkHash(req.body.password, user.password)) {
        if (q) {def.reject('Invalid password');}
        else {return res.status(401).send('Invalid password');}
      }
    });
    return def.promise;
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

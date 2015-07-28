var mongoose    = require('mongoose') ,
    $q          = require('q') ,
    User        = mongoose.model('User', require('../models/userSchema.js')) ,
    createHash  = function(password){ return bcrypt.hashSync(password); } ,
    checkHash   = function(password, hash){ return bCrypt.compareSync(password, hash); } ;

module.exports = {

  create: function(reqbody){
    var def = $q.defer();
    var newUser = new User();
    newuser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = createHash(req.body.password);
    newUser.save(function(err, newUser) {
      if (err) {def.reject(err);}
      else def.resolve(newUser);
    });
    return def.promise;
  } ,

  retrieve: function(email, password){
    var def = $q.defer();
    User.findOne({ "email": email })
    .exec().then(function(user, err){
      if (checkHash(password, user.password)) {def.resolve(user); }
      else def.reject(err);
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

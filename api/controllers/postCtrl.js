var mongoose    = require( 'mongoose' ) ,
    $q          = require( 'q' ) ,
    Post        = mongoose.model('Post', require('../models/postSchema.js')) ;

module.exports = {

  create: function(req, res, q){
    console.log(q);
    var def = $q.defer();
    var newPost = new Post();
    newPost.type = req.body.type;
    newPost.url = req.body.url;
    newPost.title = req.body.title;
    newPost.desc = req.body.desc;
    newPost.cat = req.body.cat;
    newPost.tags = req.body.tags;
    newPost.user = req.body.user;
    newPost.save(function(err, createdPost) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
        // if (q) {def.reject(err);}
        // else {return res.status(500).json(err);}
      }
      else {
        return res.status(200).json(createdPost);
        // if (q) {def.resolve(createdPost);}
        // else {return res.status(200).json(createdPost);}
      }
    });
    return def.promise;
  } ,

  retrieve: function(req, res, q){
    var def = $q.defer();
    Post.find(req.params.post_id)
    .exec().then(function(post, err){
      if (err) {
        return res.status(500).json(err);
        // if (q) {def.reject(err);}
        // else {return res.status(500).json(err);}
      }
      else {
        return res.status(200).json(post);
        // if (q) {def.resolve(post);}
        // else {return res.status(200).json(post);}
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

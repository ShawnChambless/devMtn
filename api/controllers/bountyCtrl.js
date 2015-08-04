var mongoose    = require( 'mongoose' ) ,
    $q          = require( 'q' ) ,
    Bounty        = mongoose.model('Bounty', require('../models/bountySchema.js')) ;

module.exports = {

  create: function(req, res){
    console.log(11111, req.body)
    var newBounty = new Bounty();
    newBounty.type  = req.body.type;
    newBounty.title = req.body.title;
    newBounty.desc  = req.body.desc;
    newBounty.cat   = req.body.cat;
    newBounty.tags  = req.body.tags;
    newBounty.value = req.body.value;
    newBounty.save(function(err, createdBounty) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(createdBounty);
    });
  } ,

  retrieveAll: function(req, res){
    Bounty.find( {} )
    .exec().then(function(bounties, err){
      if (err) return res.status(500).json(err);
      else return res.status(200).json(bounties);
    });
  } ,

  retrieveOne: function(req, res){
    Bounty.find( { "_id": req.params.bounty_id } )
    .exec().then(function(bounty, err){
      if (err) return res.status(500).json(err);
      else return res.status(200).json(bounty);
    });
  } ,

  update: function(req, res){
    Bounty.findByIdAndUpdate(req.params.bounty_id, req.body, {new: true}, function(err, updatedBounty){
      if (err) return res.status(500).json(err);
      return res.status(200).json(updatedBounty);
    });
  } ,

  remove: function(req, res){
    Bounty.findByIdAndRemove(req.params.Bounty_id, function(err){
      if (err) return res.status(500).json(err);
      return res.status(200).send('Bounty ' + req.params.bounty_id + ' has been deleted');
    });
  }

};

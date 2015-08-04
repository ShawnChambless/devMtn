var mongoose    = require( 'mongoose' ) ;

var userSchema = {
  firstName:  { type: String, required: true } ,
  lastName:   { type: String, required: true } ,
  email:      { type: String, required: true, unique: true } ,
  password:   { type: String, required: true } ,
  isAdmin:    { type: Boolean, required: true , default: false} ,
  posts:      [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ] ,
  favorites:  [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ] ,
  watchLater: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ] ,
  bounties:   [ { type: mongoose.Schema.Types.ObjectId, ref: 'Bounty' } ] ,
  devBucks:   { type: Number, required: true }
};

module.exports = new mongoose.Schema( userSchema );

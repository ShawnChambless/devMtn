var mongoose    = require( 'mongoose' ) ;

var postSchema = {
  type:         { type: String, required: true, enum: ['video', 'article', 'code'] } ,
  url:          { type: String, required: true } ,
  title:        { type: String, required: true } ,
  desc:         { type: String, required: true } ,
  cat:          { type: String, required: true, enum: ['html', 'css', 'javascript', 'angular', 'mongo', 'mongoose', 'node', 'express', 'react'] } ,
  tags:         [ { type: String } ] ,
  user:         { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ,
  isApproved:   { type: Boolean, required: true, default: false } ,
  bounty:       { type: mongoose.Schema.Types.ObjectId, ref: 'Bounty' } ,
  votes:        { type: Number, required: true, default: 0 },
  thumbnail:    { type: String }
};

module.exports = new mongoose.Schema( postSchema );

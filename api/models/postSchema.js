var mongoose    = require( 'mongoose' ) ;

var postSchema = {
  type:         { type: String, required: true, enum: ['video', 'article', 'image'] } ,
  url:          { type: String, required: true } ,
  title:        { type: String, required: true } ,
  desc:         { type: String, required: true } ,
  cat:          { type: String, required: true, enum: ['html', 'css', 'javascript', 'angular', 'mongo', 'mongoose', 'node', 'express', 'react', 'git'] } ,
  tags:         [ { type: String } ] ,
  user:         { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } ,
  isApproved:   { type: Boolean, required: true, default: false } ,
  bounty:       { type: mongoose.Schema.Types.ObjectId, ref: 'Bounty' } ,
  votes:        { type: Number, required: true, default: 0 }
};

module.exports = new mongoose.Schema( postSchema );

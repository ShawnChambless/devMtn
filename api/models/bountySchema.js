var mongoose    = require( 'mongoose' ) ;

var bountySchema = {
  type:      { type: String, required: true, enum: ['video', 'article', 'code'] } ,
  title:     { type: String, required: true } ,
  desc:      { type: String, required: true } ,
  cat:       { type: String, required: true, enum: ['html', 'css', 'javascript', 'angular', 'mongo', 'mongoose', 'node', 'express', 'react'] } ,
  tags:      [ { type: String } ] ,
  value:     { type: Number, required: true, default: 1 } ,
  quantityNeeded:  { type: Number, required: true, default: 1 } ,
  quantityClaimed: { type: Number } ,
  posts:     [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ] ,
  isOpen: {type: Boolean, required: true, default: true}
};

module.exports = new mongoose.Schema( bountySchema );

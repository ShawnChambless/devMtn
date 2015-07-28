var mongoose    = require( 'mongoose' ) ;
    // userSchema  = require( './userSchema.js' ) ;

var userSchema = {
  type:         { type: String, required: true, enum: [] } ,
  url:          { type: String, required: true } ,
  title:        { type: String, required: true } ,
  description:  { type: String, required: true } ,
  category:     { type: String, required: true, enum: [] } ,
  tags:         [ { type: String } ] ,
  user:         { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ,
  isApproved:   { type: Boolean, required: true } ,
  // rank:         { type: Number, required: true }
};

module.exports = new mongoose.Schema( userSchema );

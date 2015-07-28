var baseUri   = 'localhost' , //'localhost.group-project.com' ,
    srvport   = 8080 ,
    mdbport   = 27017 ;
    dbname    = 'devmtn' ;

module.exports = {
  srvport: srvport ,
  mdbport: mdbport ,
  srvUri: 'http://' + baseUri + ':' + srvport ,
  mdbUri: 'mongodb://' + baseUri + ':' + mdbport + '/' + dbname ,
  sslcert: {
    key: '' ,
    cert: ''
  } ,
  github: {
    key: '' ,
    secret: ''
  } ,
  linkedin: {
    key: '' ,
    secret: ''
  }
};

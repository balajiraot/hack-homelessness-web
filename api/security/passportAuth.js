const  passport = require('passport');
const  BasicStrategy = require('passport-http').BasicStrategy;


passport.use(new BasicStrategy(
  function(username, password, callback) {
        const apiUser = process.env.API_USER
        const apiPassword = process.env.API_PASSWORD
        if(apiUser ===username && apiPassword ===password){
          console.log("success")
          return callback(null, {username:apiUser});
        }else{
          callback(null,false)
        }
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session : false });
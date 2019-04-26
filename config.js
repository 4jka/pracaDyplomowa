const FACEBOOK_APP_ID = '324797741580062';
const FACEBOOK_APP_SECRET = '7cc58df7f02b0e27d22f096e9c06b2a0';

const JWT_SECRET = 'vadim_petuch';

var consoleInfo = function(info){
    console.log("=======================================================");
    console.log(info);
    console.log("=======================================================");
}


module.exports = {
    FACEBOOK_APP_ID: FACEBOOK_APP_ID, 
    FACEBOOK_APP_SECRET: FACEBOOK_APP_SECRET,
    JWT_SECRET : JWT_SECRET,
    consoleInfo: consoleInfo
};  


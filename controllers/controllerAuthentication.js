const dataController = require('../controllers/controllerDB');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
var bcrypt = require('bcrypt');
const config = require('../config');
function consoleInfo(info){
    console.log("=======================================================");
    console.log(info);
    console.log("=======================================================");
}



module.exports.login = function(req, res)
{
    consoleInfo("LOGIN");
     console.log('FORM email: ', req.body.infoLogForm.email);

    dataController.dbtest(`SELECT id_user, user_name, email, password FROM user WHERE email = '${req.body.infoLogForm.email}'`, 
    function(err, user)
    {   
        console.log(' user value: ',user[0]);
        if(user[0] && user.length){
            bcrypt.compare(req.body.infoLogForm.password, user[0].password).then(function(result) {
            console.log('FROM BD: ', result);
            console.log(user);
            var userData = {}
            userData.id = user[0].id_user;
            userData.username = user[0].user_name;
            userData.email = user[0].email;
            var token = jwt.sign(userData, config.JWT_SECRET);
            console.log(token);
            res.json(
                {
                    msg: 'Hello ' + userData.username,
                    token: token,
                    id: userData.id,
                    username: userData.username,
                    email: userData.email
                });
            });
            }else{
                res.send({
                    success: false, 
                    msg: 'User not found'
                });
            }
     })   
}

module.exports.registration = function (req, res)
{
    consoleInfo("REGISTRATION");
    var hashPass;
    bcrypt.genSalt(10, function (err, salt) 
    {
        if (err) {
            return next(err);
        }
        bcrypt.hash(req.body.infoSignForm.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            hashPass = hash;

            dataController.dbtest(`INSERT INTO user(user_name, password, email) VALUES('${req.body.infoSignForm.user_name}', '${hashPass}', '${req.body.infoSignForm.email}') `, 
            function (err, data) 
            {
                if (err) {
                    return res.send({
                    success: false, 
                    msg: err.message
                });
                    
                }

                
                console.log('FROM BD: ', data);
                var userData = {}
                userData.id = data.insertId;
                userData.username = req.body.infoSignForm.user_name;
                userData.email = req.body.infoSignForm.email;
                var token = jwt.sign(userData, config.JWT_SECRET);
                console.log('Success registration, user token: ',token);
                res.send({
                    success: true, 
                    msg: 'You are registered',
                    token: token
                });

            })
        });
    });
}

module.exports.fbCallback = function(req, res)
{
    var userData = {}
    config.consoleInfo('successful login!');
    console.log('logged in user: ',res.req.user);
    userData.id_user = res.req.user.id_user;
    userData.user_name = res.req.user.user_name;
    userData.email = res.req.user.email;
    var token = jwt.sign(userData, config.JWT_SECRET);
    res.json(
    {
      User : userData, 
      token: token
    });
}

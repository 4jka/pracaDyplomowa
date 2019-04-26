var mysql = require('mysql');
const db = require('../database.js');

// async function dbRequest(sqlString, params) {
//     var connection = mysql.createConnection(db.configConnection);
//     connection.connect(function (err) {
//         if (err) { throw err; }
//     });

//     let result = await connection.query(sqlString, params, function (error, results) {
//             if (error) throw error;
//             connection.end();
//             return results;
//     });
    
// }

function dbRequest(sqlString, params) {
    var connection = mysql.createConnection(db.configConnection);
    connection.connect(function (err) {
        if (err) { throw err; }
    });
 
    return new Promise(function(resolve, reject){
        
        connection.query(sqlString, params, function (error, results) {
            if (error){
                console.log('after request error');
                throw error
            };
            connection.end(
                console.log('END connection whith promise to BD!')
            );
            return resolve(results);
        });        
    });
   
}

function dbtest(sqlString, params) {
    var connection = mysql.createConnection(db.configConnection);
    connection.connect(function (err) {
        
        if (err) { throw err; }
    });

        connection.query(sqlString, params, function (error, results) {
            if (error){ throw error;}
            console.log('Request callback');
              
            return results;
        });  
        connection.end(
                // console.log('END connection to BD!')
            );      
}

module.exports = {
    dbRequest: dbRequest, 
    dbtest: dbtest
};  


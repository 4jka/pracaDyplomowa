const dataController = require('../controllers/controllerDB');
function consoleInfo(info){
    console.log("=======================================================");
    console.log(info);
    console.log("=======================================================");
}

module.exports.getRandFoto = function(req, res){
    consoleInfo("SELECTING 20 FOTO");
     
    dataController.dbtest("SELECT `path_foto`, `title`, `id_place_fk` id_place FROM foto WHERE is_main = 1 ORDER BY RAND() LIMIT 20", 
        function(err, data){
        console.log('POLUCHENO:', data);
        res.send(data);});
}

module.exports.placesByUserInterest = function(req, res, next){
    consoleInfo("PLACES BY USER INTEREST");
      var places = [];
    dataController.dbtest(`SELECT f.path_foto, f.title, f.id_place_fk from foto AS f JOIN
(
	SELECT DISTINCT place_id_place from place_has_category as placeCategory
	JOIN (SELECT id_category, name_category from category AS c JOIN preference AS p ON name_preference = name_category WHERE p.id_user_fk = '${req.query.id_user}')
    AS userPref
    ON placeCategory.category_id_category = userPref.id_category)
    AS desiredPlaces ON desiredPlaces.place_id_place = id_place_fk WHERE is_main = 1;`, 
        function(err, data){
        console.log('PLACES ID:', data);
        places.byPreference = data;
    
          
        console.log('PLACES BY PREFERENCE:', places);
        console.log('__________________________________________')
        });
        
        dataController.dbtest(`SELECT path_foto, title, id_place_fk id_place FROM foto WHERE is_main = 1 AND id_place_fk NOT IN (SELECT DISTINCT place_id_place from place_has_category as placeCategory
	JOIN (SELECT id_category, name_category from category AS c JOIN preference AS p ON name_preference = name_category WHERE p.id_user_fk = '60')
    AS userPref
    ON placeCategory.category_id_category = userPref.id_category) ORDER BY RAND() LIMIT 20`, 
        function(err, data){
            console.log('DATA RANDOM: ', data);
            console.log('__________________________________________')
            places.random = data;
            console.log('FINAL PLACES: ', places);
        res.send(places);});

}

module.exports.placeMainFoto = function (req, res) {
    consoleInfo("SELECTING MAIN FOTO");
    dataController.dbRequest(`SELECT path_foto FROM foto f JOIN place p ON f.id_place_fk = p.id_place WHERE f.id_place_fk = ? AND f.is_main = 1;`, req.params.id)
        .then(function (data) {
            console.log('POLUCHENO:')
            console.log(data)
            res.send(data);

        });
}
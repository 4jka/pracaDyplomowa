const dataController = require('../controllers/controllerDB');

function consoleInfo(info){
    console.log("=======================================================");
    console.log(info);
    console.log("=======================================================");
}

function placeByIdCategory(id_category){
    return dataController.dbRequest(`SELECT f.path_foto, place_id.place_id_place id_place FROM (
                                SELECT place_id_place FROM place_has_category WHERE category_id_category = '${id_category}')
                                AS place_id
                                JOIN foto AS f
                                ON f.id_place_fk = place_id.place_id_place WHERE f.is_main=1;`);
}
module.exports.searchRegionPlaces = function (req, res) {

    consoleInfo("SEARCHING PLACES");

    dataController.dbtest(
        "SELECT  region.`id_region` id, region.`name_region` name, 1  id_table FROM region WHERE name_region LIKE '" + req.query.valueSearch + "%'" +
        "UNION " +
        "SELECT city.`id_city`, city.`name_city` , 2 FROM city WHERE name_city LIKE '" + req.query.valueSearch + "%'", 
        function(err, data){
            if(err) throw err;      
            console.log('DB response:', data);
            res.send(data);
    })
}


module.exports.categoryList = function (req, res) {
    consoleInfo("CATEGORIES LIST");
    dataController.dbtest("SELECT `id_category`, `name_category` FROM category ORDER BY RAND() LIMIT 10", 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}

module.exports.searchCategory = function (req, res) {
    consoleInfo("CATEGORIES LIST");
    dataController.dbtest("SELECT  `id_category`, `name_category` FROM category WHERE name_category LIKE '" + req.query.valueSearch + "%'", 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}
  
    module.exports.placesByRegion = function (req, res) {
    consoleInfo("PLACES BY REGION");

    dataController.dbtest(`SELECT f.path_foto, p.id_place FROM place p JOIN foto f on f.id_place_fk= p.id_place WHERE f.is_main=1 AND p.id_region_fk = '${req.query.id_region}';`, 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}
module.exports.placesByCity = function (req, res) {
    consoleInfo("PLACES BY City");

    dataController.dbtest(`SELECT p.id_place, p.name_place, f.path_foto FROM place p JOIN foto f on f.id_place_fk= p.id_place WHERE f.is_main=1 AND p.id_city_fk = '${req.query.id_city}';`, 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}
module.exports.placesByIdCategory = async function (req, res) {
    consoleInfo("PLACE BY ID CATEGORY");
    
    placeByIdCategory(req.query.id_category)
        .then(function (data) {
            console.log('DB response:', data);
            res.send(data);
        });
}
module.exports.placesByNameCategory = function (req, res) {
    consoleInfo("PLACE BY NAME CATEGORY");
    
    var resData = {
        id_category: undefined,
        allPhoto: []
    };
    dataController.dbRequest(`SELECT id_category FROM category WHERE name_category LIKE '${req.query.name_category}';`)
        .then(function (data) {
            console.log('DB response:', data);
            console.log(data);
            resData.id_category = data[0].id_category;
            console.log(resData.id_category);

            placeByIdCategory(resData.id_category)
                .then(function (data) {
                    console.log('DB response:', data);
                    resData.allPhoto = data;
                    // resData.push(data);
                    console.log(resData);
                    res.send(resData);
                });
        });
}
module.exports.placeAllInfo = function (req, res) {
    consoleInfo("PLACE ALL INFO");
    console.log('ID PLACE: ',req.query.id_place);
    var placeData = {};
    //Semper in excremento, sole profundum qui variat
    dataController.dbRequest(`
    SELECT 
        p.name_place,
        p.place_coordinate,
        p.title,
        p.description
    FROM place p  
    JOIN city AS c ON p.id_city_fk = c.id_city
    JOIN region AS r ON p.id_region_fk = r.id_region 
    WHERE p.id_place = '${req.query.id_place}';`)
        .then(function (data) {
            var arr = data[0].place_coordinate.split(',');
            placeData.coordinate_x = + arr[0];
            placeData.coordinate_y = + arr[1];
            placeData.title = data[0].title;
            placeData.description = data[0].description;        
        }).then(function (data) {
            placeData.foto = data;
            dataController.dbRequest(`SELECT path_foto, title FROM foto WHERE id_place_fk = '${req.query.id_place}';`)
                .then(function (data) {
                    console.log('DB response:');
                    placeData.foto = data;
                    console.log(placeData);
                    res.send(placeData);            
                });           
        });

        
}
module.exports.placeFoto = function (req, res) {
    consoleInfo("PLACE ID AND FOTO");
    
    dataController.dbtest(`
    SELECT p.id_place, f.path_foto
    FROM place p  
    JOIN foto AS f ON f.id_place_fk = p.id_place
    WHERE p.id_place LIKE ? AND f.is_main = 1;`, [req.query.id_place], 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}



module.exports.placeCategoryRegionId = function (req, res) {
    consoleInfo("PLACE BY CATEGORY & REGION");

    console.log('ID_CATEGORY', req.query.id_category);
    console.log('ID_CITY', req.query.id_region);

    dataController.dbtest(`SELECT p.id_place, p.name_place, f.path_foto FROM place AS p
            JOIN place_has_category AS c
            ON p.id_place = c.place_id_place
            JOIN foto AS f 
            ON p.id_place = f.id_place_fk
            WHERE c.category_id_category = '${req.query.id_category}' AND p.id_region_fk='${req.query.id_region}' AND f.is_main = 1;`, 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}


module.exports.placeCategoryCityId = function (req, res) {
    
    consoleInfo("PLACE BY CATEGORY & CITY");

    console.log('ID_CATEGORY', req.query.id_category);
    console.log('ID_CITY', req.query.id_city);

    dataController.dbtest(`SELECT p.id_place, p.name_place, f.path_foto FROM place AS p
            JOIN place_has_category AS c
            ON p.id_place = c.place_id_place
            JOIN foto AS f 
            ON p.id_place = f.id_place_fk
            WHERE c.category_id_category = '${req.query.id_category}' AND p.id_city_fk='${req.query.id_city}' AND f.is_main = 1;;`, 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}

module.exports.placeAllVideo = function (req, res) {
    consoleInfo("PLACE ALL VIDEO");

    var placeID = req.params.id;
    console.log('ID = ' + placeID);

    dataController.dbtest("SELECT id_video, path_video FROM video v JOIN place p ON v.`id_place_fk` = p.`id_place` WHERE v.`id_place_fk` = ?;", [placeID], 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}

module.exports.regionList = function (req, res) {
    consoleInfo("SELECTING REGIONS");

    dataController.dbtest("SELECT id_region id, name_region name, 1 as id_table FROM region ORDER BY `name_region` ASC LIMIT 10;", 
        function(err, data){
            if(err) throw err;             
            console.log('DB response:', data);
            res.send(data);
    })
}
module.exports.insertPlace = function (req, res) {
    consoleInfo("INSERTING PLACE");

    var formData = {
        id_country_fk: req.body.id_country,
        id_region_fk: req.body.id_region,
        id_city_fk: req.body.id_city,
        place_coordinate: req.body.place_coordinate,
        name_place: req.body.name_place,
        title: req.body.title,
        description: req.body.description
    };

    dataController.dbtest(`SELECT id_country FROM country WHERE name_country LIKE '${formData.id_country_fk}';`, function(err, data){
         if(err) throw err;
         console.log('DB response:', data);
         if (data == '') {
                console.log('Country nie ma w BD, Zapisujemy...');
            }else {                
                formData.id_country_fk = data[0].id_country;
            }
     })    

    dataController.dbtest(`SELECT id_region FROM region WHERE name_region LIKE '${formData.id_region_fk}';`, 
        function(err, data){
            if (data == '') {
                console.log('Regionu niema w BD, zapisujemy...');
                dataController.dbtest(`INSERT INTO region (name_region) VALUES ('${formData.id_region_fk}');`)
            }else formData.id_region_fk = data[0].id_region;
        });
    
    dataController.dbRequest(`SELECT id_city FROM city WHERE name_city LIKE '${formData.id_city_fk}';`)
        .then(function (data) {
            if (data == '') {
                console.log('Miasta niema w BD, zapisujemy');
                dataController.dbRequest(`INSERT INTO city (name_city, capital) VALUES ('${formData.id_city_fk}', 0);`)
            }else {
                formData.id_city_fk = data[0].id_city;
                return formData;
            }
        }).then(function (arrToBd){
            console.log('============================================');
            console.log(arrToBd);
            dataController.dbRequest('INSERT INTO place SET ?', arrToBd);
        });
}
module.exports.insertFoto = function (req, res) {
    consoleInfo("INSERTING FOTO");

    var fotoData = {
        id_place_fk: req.body.id_place_fk,
        path_foto: req.body.path_foto
    };
    
    dataController.dbtest(`SELECT id_place FROM place WHERE name_place LIKE '${fotoData.id_place_fk}';`, function(err, data){
         if(err) throw err;
         console.log('DB response:', data);
         if (data == '') {
                console.log('Nie ma takiego mejsca.');
            }else {                
                fotoData.id_place_fk = data[0].id_place;
                dataController.dbRequest('INSERT INTO foto SET ?', fotoData);
            }
     })
}
module.exports.insertCategory = function (req, res) {
    consoleInfo("INSERTING CATEGORY");
    console.log(req.body);

    var categoryData = {
        name_category: req.body.name_category,
        place_id_place: req.body.place_id_place
    };


        dataController.dbtest(`SELECT id_category FROM category WHERE name_category LIKE '${categoryData.name_category}';`, 
        function(err, data){
            console.log('DB response:', data);
            if (data == '') {
                console.log('Category niema w BD, zapisujemy...');
                dataController.dbRequest(`INSERT INTO category (name_category) VALUES ('${categoryData.name_category}');`).then(function (data) {
                    console.log('Добавлено сообщение с id = ' + data.insertId); 
                    dataController.dbRequest(`INSERT INTO place_has_category (place_id_place, category_id_category) VALUES ('${categoryData.place_id_place}', '${data.insertId}');`)
                    res.redirect('/');
                });           
            }else{
                dataController.dbRequest(`INSERT INTO place_has_category (place_id_place, category_id_category) VALUES ('${categoryData.place_id_place}', '${data[0].id_category}');`)
                res.redirect('/');
            } 
        });
    }
    

    
    




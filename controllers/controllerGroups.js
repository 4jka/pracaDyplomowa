const dataController = require('../controllers/controllerDB');
const userController = require('../controllers/controllerUser');
const config = require('../config');
const passportService = require('../passport');
module.exports.groupByUserId = function(req, res){

    config.consoleInfo('GROUP BY USER ID');

     dataController.dbtest(`SELECT id_group, name_group FROM ugroups WHERE id_user_fk = '${req.query.id_user}';`, function(err, data){
         if (err) {
                return res.status(400).json({ error: err.message })
            }
         console.log('FROM BD: ', data);
         res.send(data);
     })    
}


module.exports.addGroup = function(req, res){
    config.consoleInfo('ADD GROUP');
    dataController.dbtest(`INSERT INTO ugroups (name_group, id_user_fk) VALUES('${req.body.name_group}', '${req.body.id_user}');`, function(err, data){
        if (err) {
            return res.status(400).json({ error: err.message })
        }
        console.log('FROM BD: ', data);
        res.send(data);
    })
}

module.exports.addPlaceToGroup = function(req, res, next)
{
    config.consoleInfo('ADD PLACE TO GROUP');
    console.log('user ID',req.body.id_user)
    dataController.dbtest(
       `INSERT INTO place_has_group (groups_id_group, place_id_place) 
        VALUES ('${ req.body.id_group }', '${ req.body.id_place }');`,
        function(err, data)
        {
            if (err) {
                    return res.send({
                    success: false, 
                    msg: err.message
                });
            } 
            next();
        })  
}


module.exports.coordinateByGroupId = function (req, res) {
    
    config.consoleInfo('COORDINATE, FOTO, NAME PLECES BY GROUP ID...!')
    console.log(req.query.id_group);

    dataController.dbtest(`SELECT 
                            p.id_place, p.name_place, p.place_coordinate, f.path_foto, GROUP_CONCAT(r.union_point) as markerUnion
                            FROM(
                            SELECT union_id, place_id_place FROM place_has_group WHERE groups_id_group = '${req.query.id_group}')
                            AS place_id
                            JOIN place AS p
                            ON place_id.place_id_place = p.id_place
                            JOIN foto AS f ON place_id.place_id_place = f.id_place_fk
							LEFT JOIN route_unions AS r ON r.union_id_fk = place_id.union_id 
							WHERE (place_id.place_id_place = f.id_place_fk AND f.is_main = 1)
							GROUP BY  p.name_place`, 
    function(err, data){
    if (err) {        
        
        return res.status(400).json({ error: err.message })

    }
    data.forEach(element => {
    if(element.markerUnion){
    element.markerUnion = element.markerUnion.split(',');
    }else{
        element.markerUnion = [];
    }
        console.log( element);
    });
    res.send(data);
    })
}

module.exports.deletePlaceFromGroup = function (req, res) {
    config.consoleInfo('DELETING PLACE FROME GROUPE');
    dataController.dbtest("DELETE FROM `travel`.`place_has_group` WHERE (`groups_id_group`='" + req.body.id_group +"')and(`place_id_place`='" + req.body.id_place +"');", function(err, data){
    if (err) {
                    return res.send({
                    success: false, 
                    msg: err.message
                });
            }
        console.log(data);
         res.send(data);
     })
}

module.exports.deleteGroup = function (req, res) {
    config.consoleInfo('DELETING GROUPE');
    console.log('ID group: ', req.body.id_group);
    dataController.dbtest("DELETE FROM `travel`.`ugroups` WHERE (`id_group`='" + req.body.id_group + "');", function(err, data){
    if (err) 
    {
        return res.send({
        success: false, 
        msg: err.message
        });
    }
        console.log(data);
         res.send(data);
     })
}

module.exports.addUnionPoint = function (req, res) {
    config.consoleInfo('ADD UNION POINT');
    console.log('OT VADIMKI: ', req.body.id_group, req.body.id_place, req.body.union_point);
    console.log("INSERT INTO `travel`.`route_unions`(`union_id_fk`,`union_point`) VALUES((SELECT union_id from place_has_group WHERE groups_id_group = '" + req.body.id_group + "' and place_id_place = '" + req.body.id_place +"'),'" + req.body.union_point +"');");
    dataController.dbtest("INSERT INTO `travel`.`route_unions`(`union_id_fk`,`union_point`) VALUES((SELECT union_id from place_has_group WHERE groups_id_group = '" + req.body.id_group + "' and place_id_place = '" + req.body.id_place +"'),'" + req.body.union_point +"');", 
    function(err, data){
    if (err){
                console.log('ERROR: ', err.message);
                    return res.send({
                    success: false, 
                    msg: err.message
                });
            }
        console.log(data);
         res.send(data);
     })
}

module.exports.deleteUnion = function (req, res) {
    config.consoleInfo('DELETING UNION');
    console.log('OT VADIMKI: ', req.body.id_group, req.body.id_place, req.body.union_point);
    console.log("DELETE FROM `travel`.`route_unions` WHERE (union_id_fk = (SELECT union_id from place_has_group WHERE groups_id_group = '" + req.body.id_place +"' and place_id_place = '" + req.body.id_place +"') AND union_point = '" + req.body.union_point +"');");
    dataController.dbtest("DELETE FROM `travel`.`route_unions` WHERE (union_id_fk = (SELECT union_id from place_has_group WHERE groups_id_group = '" + req.body.id_group +"' and place_id_place = '" + req.body.id_place +"') AND union_point = '" + req.body.union_point +"');", 
    function(err, data){
    if (err) {
                    return res.send({
                    success: false, 
                    msg: err.message
                });
            }
        console.log(data);
         res.send(data);
     })
}


    
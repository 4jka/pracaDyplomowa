const dataController = require('../controllers/controllerDB');


function consoleInfo(info){
    console.log("=======================================================");
    console.log(info);
    console.log("=======================================================");
}

module.exports.userInterests = function(req, res, next){
    consoleInfo("Cheking user interests");
	console.log('user ID',req.body.id_user);
	console.log('_______________________________________________________');
    dataController.dbtest(`SELECT c.name_category from category c JOIN (
	SELECT pHc.category_id_category, count(pHc.category_id_category) FROM
	(
		SELECT DISTINCT p.place_id_place FROM
		( 
			SELECT id_group FROM travel.ugroups WHERE id_user_fk = '${req.body.id_user}' 
		)AS contact 
		JOIN place_has_group AS p ON contact.id_group = p.groups_id_group
	)AS places_id JOIN place_has_category as pHc ON places_id.place_id_place = pHc.place_id_place 
	GROUP BY pHc.category_id_category HAVING ( COUNT(*) >= 2) 
	)
AS userInterests 	
ON  c.id_category = userInterests.category_id_category LIMIT 3;`, 
        function(err, data){
        console.log('INTERESTS:', data);
		console.log('_______________________________________________________');
		var interests = [];
		data.forEach( (element,index) => {
			interests[index] = element.name_category
			});
	
		if(data){
			console.log('interests ARR: ', interests);
			console.log('_______________________________________________________');
			console.log('ID USER : ', req.body.id_user);
			console.log('_______________________________________________________');	
			dataController.dbtest(`SELECT id_preference FROM preference WHERE id_user_fk = '${req.body.id_user}'` ,
				function(err, data){
					if(err) console.log(err);	
					console.log('data', data);
					console.log('_______________________________________________________');
					if(data.length>2){	
						consoleInfo("UPDATE INTERESTS");

						console.log('id_preference IN BD: ',data);	
						console.log('_______________________________________________________');
							data.forEach((element,index) => {
							
							dataController.dbtest(`UPDATE preference SET
							name_preference = '${interests[index]}', id_user_fk = '${req.body.id_user}'
							WHERE id_preference = '${element.id_preference}'`,
							function(err, data){
								if(err) console.log(err);				
							});	
						});
					}else
					{
						consoleInfo("REPLACE INTERESTS");
						console.log('Esli net interesow w BD:'	);
						console.log('_______________________________________________________');

						interests.forEach((element,index) => {

								console.log('v CYKLE name_preference: ', interests[index]);
								console.log('_______________________________________________________');
								console.log('v CYKLE id_user_fk', req.body.id_user);
								console.log('_______________________________________________________');
							dataController.dbtest(`INSERT INTO preference (name_preference, id_user_fk) VALUES 
							('${interests[index]}', '${req.body.id_user}') ON DUPLICATE KEY UPDATE id_preference = id_preference	`,
							function(err, data){
								if(err) console.log(err);	
								console.log(data);
								console.log('dobavleno', interests[index]);			
							});		
						});

						
					}
				});
		
		}
		
	});
}


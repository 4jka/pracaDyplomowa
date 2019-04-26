const express = require('express');
const router = express.Router();
const config = require('../config');
const fotoController = require('../controllers/controllerFoto');
const placeController = require('../controllers/controllerPlace');
const groupsController = require('../controllers/controllerGroups');
const userController = require('../controllers/controllerUser');
const authenticationController = require('../controllers/controllerAuthentication');
const passportService = require('../passport');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/test', (req, res, next) => {
})

router.post('/', (req, res) => {
  console.log("api")
  res.send(`API`)});''

router.get('/userInterests', userController.userInterests);

router.get('/userInterests', (req, res) =>{
  var unions = `['1', '2', ]`;

});

router.get('/placesByUserInterest', fotoController.placesByUserInterest);
router.get('/foto', fotoController.getRandFoto); //foto
router.post('/deletePlaceFromGroup', passportService.requireToken, groupsController.deletePlaceFromGroup);
router.post('/deleteGroup', passportService.requireToken, groupsController.deleteGroup);
router.get('/searchRegionsPlaces', placeController.searchRegionPlaces);
router.get('/groupByUserId', passportService.requireToken, groupsController.groupByUserId);
router.get('/coordinateByGroupId', passportService.requireToken,  groupsController.coordinateByGroupId);
router.post('/addPlaceToGroup', passportService.requireToken, groupsController.addPlaceToGroup, userController.userInterests);
router.post('/addUnionPoint', passportService.requireToken, groupsController.addUnionPoint);
router.post('/deleteUnion', passportService.requireToken, groupsController.deleteUnion);
router.post('/addGroup', passportService.requireToken, groupsController.addGroup);
router.get('/placeById', placeController.placeAllInfo);
router.get('/placeFoto', placeController.placeFoto);
router.get('/regions', placeController.regionList);
router.get('/randCategories', placeController.categoryList); //categoriesList
router.get('/searchCategory', placeController.searchCategory);
router.get('/placesByCategory', placeController.placesByIdCategory);
router.get('/placesByRegion', placeController.placesByRegion);
router.get('/placesByCity', placeController.placesByCity);
router.get('/placesByNameCategory', placeController.placesByNameCategory);
router.get('/placesByRegionAndCategory', placeController.placeCategoryRegionId);
router.get('/placesByCityAndCategory', placeController.placeCategoryCityId);
router.post('/addPlace', placeController.insertPlace);
router.post('/addFoto', placeController.insertFoto);
router.post('/addCategory', placeController.insertCategory);

router.post('/login', authenticationController.login);
router.post('/registration', authenticationController.registration);
router.get('/facebook',
  passport.authenticate('facebook'));
router.get('/facebook/callback',
  passport.authenticate('facebook', {  session:false}), function(req, res){authenticationController.fbCallback(req, res)});

module.exports = router;
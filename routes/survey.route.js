const covidSurveyController = require('../controllers/surveyController');
const router = require('express').Router();

// router end point to save survey data 
router.post('/', covidSurveyController.addCovidSurveyQuestion);

router.get('/', covidSurveyController.getCovidSurveyData);


module.exports = router;
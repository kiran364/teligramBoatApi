const covidSurvey = require('../models/covidSurveyModel');


// save the questions and selected options on database 
exports.addCovidSurveyQuestion = async (req, res) => {
    try{
        const {question, selectedOption} = req.body;
        const newSurveyData = new covidSurvey({
            question, 
            selectedOption
        })

        const savedSurveyData = await newSurveyData.save();
        res.status(201).json(saveGoods)

    }catch(err){
        res.status(404).json(arr);
    }

}

// gives all survey data
exports.getCovidSurveyData = async (req, res) => {
    try{

        const surveyData = await covidSurvey.find();
        res.status(200).json(surveyData);

    }catch(err){
        res.status(404).json(arr);

    }
}

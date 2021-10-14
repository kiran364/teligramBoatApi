const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    selectedOption: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('CovidSurvey', surveySchema);
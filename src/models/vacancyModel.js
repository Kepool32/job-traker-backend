const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    salaryRange: { type: String, required: true },
    applicationStatus: { type: String, required: true },
    note: { type: String, required: false },
});

module.exports = mongoose.model('Vacancy', vacancySchema);

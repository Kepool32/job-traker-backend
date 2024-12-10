const express = require('express');
const vacancyController = require('../controllers/vacancyController');
const {validateVacancy, handleValidationErrors} = require("../middleware/vacancyValidation");

const router = express.Router();

router.post('/', validateVacancy, handleValidationErrors, vacancyController.createVacancy);
router.get('/', vacancyController.getVacancies);
router.put('/:id', validateVacancy, handleValidationErrors, vacancyController.updateVacancy);
router.delete('/:id', vacancyController.deleteVacancy);

module.exports = router;


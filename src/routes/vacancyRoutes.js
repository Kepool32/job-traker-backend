const express = require('express');
const vacancyController = require('../controllers/vacancyController');

const router = express.Router();

// Роуты для вакансий
router.post('/', vacancyController.createVacancy);
router.get('/', vacancyController.getVacancies);
router.put('/:id', vacancyController.updateVacancy);
router.delete('/:id', vacancyController.deleteVacancy);

module.exports = router;

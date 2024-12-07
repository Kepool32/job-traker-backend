const VacancyService = require('../services/vacancyService');

// Получить все вакансии
const getVacancies = (req, res) => {
    VacancyService.getAllVacancies()
        .then((vacancies) => res.json(vacancies))
        .catch((error) => res.status(500).json({ error: 'Failed to fetch vacancies' }));
};

// Создать новую вакансию
const createVacancy = (req, res) => {
    VacancyService.createVacancy(req.body)
        .then((newVacancy) => res.status(201).json(newVacancy))
        .catch((error) => res.status(500).json({ error: 'Failed to create vacancy' }));
};

// Обновить вакансию
const updateVacancy = (req, res) => {
    VacancyService.updateVacancy(req.params.id, req.body)
        .then((updatedVacancy) => res.json(updatedVacancy))
        .catch((error) => res.status(500).json({ error: 'Failed to update vacancy' }));
};

// Удалить вакансию
const deleteVacancy = (req, res) => {
    VacancyService.deleteVacancy(req.params.id)
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).json({ error: 'Failed to delete vacancy' }));
};

module.exports = {
    getVacancies,
    createVacancy,
    updateVacancy,
    deleteVacancy
};

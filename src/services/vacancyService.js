const Vacancy = require('../models/vacancyModel');

class VacancyService {
    // Создание новой вакансии
    createVacancy(data) {
        const vacancy = new Vacancy(data);
        return vacancy.save();
    }

    // Получение всех вакансий
    getAllVacancies() {
        return Vacancy.find();
    }

    // Обновление вакансии по ID
    updateVacancy(id, data) {
        return Vacancy.findByIdAndUpdate(id, data, { new: true }).then((updatedVacancy) => {
            if (!updatedVacancy) {
                return Promise.reject(new Error('Vacancy not found'));
            }
            return updatedVacancy;
        });
    }

    // Удаление вакансии по ID
    deleteVacancy(id) {
        return Vacancy.findByIdAndDelete(id).then((deletedVacancy) => {
            if (!deletedVacancy) {
                return Promise.reject(new Error('Vacancy not found'));
            }
            return { message: 'Vacancy deleted' };
        });
    }
}

module.exports = new VacancyService();

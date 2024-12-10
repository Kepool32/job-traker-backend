const { body, validationResult } = require('express-validator');

const validateVacancy = [
    body('company')
        .isString()
        .notEmpty()
        .withMessage('Компания обязательна'),

    body('position')
        .isString()
        .notEmpty()
        .withMessage('Должность обязательна'),

    body('salaryRange')
        .isString()
        .matches(/^(\d+|\d+-\d+|-\d+)$/)
        .withMessage('Зарплата должна быть числом или диапазоном чисел (например, "5000-10000")')
        .notEmpty()
        .withMessage('Зарплата обязательна'),

    body('applicationStatus')
        .isString()
        .notEmpty()
        .withMessage('Статус обязательен'),

    body('note')
        .optional()
        .isString()
        .isLength({ max: 30 })
        .withMessage('Примечание не может быть длиннее 30 символов'),
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateVacancy, handleValidationErrors };

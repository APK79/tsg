import { body } from 'express-validator';

export const regValidation = [
    body ('email', 'Неверный формат почты').isEmail(),
    body ('password', 'Пароль должен быть не менее 5 символов').isLength({ min: 5 }),
    body ('fullName', 'Укажите имя').isLength({ min: 2 }),
    body ('phone', 'укажите телефон (без +7, 10 символов)').isLength({ min: 10, max: 10 }),
    body ('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];
import { body } from 'express-validator';


export const loginValidation = [
    body ('email', 'Неверный формат почты').isEmail(),
    body ('password', 'Пароль должен быть не менее 5 символов').isLength({ min: 5 }),
];

export const regValidation = [
    body ('email', 'Неверный формат почты').isEmail(),
    body ('password', 'Пароль должен быть не менее 5 символов').isLength({ min: 5 }),
    body ('fullName', 'Укажите имя').isLength({ min: 2 }),
    body ('phone', 'укажите телефон (без +7, 10 символов)').isLength({ min: 10, max: 20 }),
    body ('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
    body ('title', 'Введите заголовок').isLength({ min: 5 }).isString(),
    body ('text', 'Введите текст').isLength({ min: 25 }).isString(),
    body ('imgUrl', 'Неверная ссылка на аватарку').isString(),
    body ('tags', 'Неверный формат тэгов (укажите через запятую)').optional().isLength({ min: 2 }).isString(),
];
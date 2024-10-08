import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import UserModel from "../models/user-model.js";


export const registration = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
    
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
    
        const doc = new UserModel({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        }); 
    
        const user = await doc.save();


        const token = jwt.sign(
            {
                id: user._id, 
            },
                'Secretkey55555',
            {
                expiresIn: "30d",
            });
        
        const { passwordHash, ...userData} = user._doc;

        res.json({
            ...userData, 
            token,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось зарегистрироваться",
        });
    }
};

export const login = async (req, res) => {
    try {

        const user = await UserModel.findOne({ email: req.body.email });
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!user || !isValidPass) { 
            res.status(404).json({ massage:'неверный логин или пароль'})
        }

        const token = jwt.sign(
            {
                id: user._id, 
            },
                'Secretkey55555',
            {
                expiresIn: "30d",
            });

            const { passwordHash, ...userData } = user._doc;

            res.json({
                ...userData,
                token,
            });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось авторизоваться",
        });
    }
};

export const getUser = async (req, res) => {
    try {

        const user = await UserModel.findById(req.userId);
        const { passwordHash, ...userData} = user._doc;

        if (!user) {
            return res.status(404).json ({
                massage: 'не удалось найти пользователя'
            });
        }

        res.json( userData );
    
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "нет доступа",
        });
    }
};
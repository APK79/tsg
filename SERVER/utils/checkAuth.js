import jwt from 'jsonwebtoken';

export default (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {

            const decoded = jwt.verify(token, 'Secretkey55555');

            req.userId = decoded.id;
            next();

        } catch (err) {

            return res.status(403).json({
            massage: 'нет доступа'

        });
        }

    } else {
        return res.status(403).json({
            massage: 'нет доступа'
        });
    } 
};
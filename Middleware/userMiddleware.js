import jwt from 'jsonwebtoken';
import 'dotenv/config.js';
export default function(req, res, next){
    if (req.method === 'OPTIONS'){
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token){
            res.status(403).json({error: "User is not authorizated"});
        }
        const decodedData = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedData;
        req.body.userId = decodedData.id;
        next();
    } catch (e) {
        res.status(403).json({error: "User is not authorizated"});
    }
}
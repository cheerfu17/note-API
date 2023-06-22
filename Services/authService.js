import User from "../db_models/User.js";
import bcrypt from "bcryptjs";
import 'dotenv/config.js';
import jwt from 'jsonwebtoken'


const generateAccessToken = (id, nick_name) => {
    const payload = {
        id,
        nick_name
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY || "SECRET_KEY", {expiresIn: "24h"}); 
    return token;
}
class authService{
    async sign_up(nick, password){
        const candidate = await User.findOne({where: {nick_name: nick}});
        if (candidate){
            throw new Error("User with this nickname already exists");
        }
        const hashPassword = await bcrypt.hashSync(password, 5);
        const user = await User.create({nick_name: nick, password: hashPassword});
        return user.toJSON();
    }
    async sign_in(nick, password){
        const user = await User.findOne({where: {nick_name: nick}});
        if (!user){
            throw new Error("No user found with this nickname");
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword){
            throw new Error("Incorrect password");
        }
        const token = generateAccessToken(user.id, user.nick_name);
        return {"token": token};
    }
}

export default new authService();
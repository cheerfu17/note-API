import User from "../db_models/User.js";
import bcryptjs from 'bcryptjs'
class authService{
    async sign_up(nick, password){
        const candidate = await User.findOne({where: {nick_name: nick}});
        if (candidate){
            console.log(candidate);
            throw new Error("User with this nickname already exists");
        }
        const hashPassword = bcryptjs.hashSync(password, 5);
        const user = await User.create({nick_name: nick, password: hashPassword});
        return user.toJSON();
    }
    async sing_in(User){

    }
}

export default new authService();
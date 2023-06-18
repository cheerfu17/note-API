import authService from "../Services/authService.js";
import { validationResult } from "express-validator";
class authController{
    async sign_up(req, res){
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return res.status(400).json({"error": "Registation error", errors});
            }
            const {nick_name, password} = req.body;
            const user = await authService.sign_up(nick_name, password);
            res.json(user);
        }catch(e){
            console.log(e);
            return res.status(400).json({"error": e.message});
        }
    }
    async sign_in(req, res){
        try{
            const {nick_name, password} = req.body;
            const login = await authService.sign_in(nick_name, password);
            return res.json(login);
        }catch(e){
            console.log(e);
            res.status(400).json({"error": "Login error", "message": e.message});
        }
    }
}

export default new authController();
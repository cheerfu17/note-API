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
            console.log(user);
            res.json(user);
        }catch(e){
            console.log(e);
            return res.status(400).json({"error": e.message});
        }
    }
    async sign_in(req, res){
        try{
            
        }catch(e){
            console.log(e);
            res.status(400).json({"error": "Registration error", "message": e.message});
        }
    }
}

export default new authController();
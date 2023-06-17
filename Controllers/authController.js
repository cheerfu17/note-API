import authService from "../Services/authService.js";
class authController{
    async sign_up(req, res){
        try{
            const {nick_name, password} = req.body;
            const user = await authService.sign_up(nick_name, password);
            console.log(user);
            res.json(user);
        }catch(e){
            console.log(e);
            res.status(400).json({"error": "Login error"});
        }
    }
    async sign_in(req, res){
        try{
            
        }catch(e){
            console.log(e);
            res.status(400).json({"error": "Registration error"});
        }
    }
}

export default new authController();
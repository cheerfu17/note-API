import { body } from "express-validator";
import fileService from "../Services/fileService.js";

class fileController{
    async uploadFiles(req, res){
        try {
            const file = req.files;
            if (!file){
                res.status(400).json({error: "File not uploaded"});
            }

            const result = await fileService.fileSave(file.picture);
            res.json({path: result});
            
        } catch (error) {
            res.status(400).json();
        }
    }
}

export default new fileController();
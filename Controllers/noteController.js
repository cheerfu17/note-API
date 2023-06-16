import noteService from "../Services/noteService.js";
class noteController{
    async create(req, res){
        try{
            const note = await noteService.create(req.body);
            res.json(note);
        }catch(e){
            res.status(500).json(e);
        }
    }
    async get(req, res){
        try{
            const notes = await noteService.get();
            res.json(notes);
        }catch(e){ 
            res.status(500).json(e);
        }
    }
    async get_one(req, res){
        try{
            const note = await noteService.get_one(req.params.id);
            res.json(note);
        }catch(e){
            res.status(500).json(e);
        }
    }
    async delete(req, res){
        try{
            const result = await noteService.delete(req.params.id);
            res.json(result)
        }catch(e){
            res.status(500).json(e);
        }
    }

    async put(req, res){
        try{
            const note = await noteService.put(req.params.id, req.body);
            res.json(note);
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export default new noteController();
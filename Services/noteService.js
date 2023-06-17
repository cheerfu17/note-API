import Note from "../db_models/Note.js";
class noteService{
    async create(note){     
        const createdNote = await Note.create(note);
        return createdNote.toJSON();
    }
    async get(){
        const notes = await Note.findAll();
        return notes.toJSON();
    }
    async get_one(id){
        if (!id){
            throw new Error("id not found");
        }
        const note = await Note.findByPk(id);
        if (!note)
            return {"message": "Note with this id not found"}
        return note.toJSON();
    }
    async delete(id){
        if (!id){
            throw new Error("id not found");
        }
        await Note.destroy({where: {'id': id}});
        return {message: "Note has been deleted"};
    }

    async put(id, note){
        if (!id){
            throw new Error("id not found");
        }
        const _note = await Note.findByPk(id);
        if (!_note)
            return {"message": "Note with this id not found"}
        _note.update(note);
        return _note.toJSON();
    }
}

export default new noteService();
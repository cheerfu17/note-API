import Note from "../db_models/Note.js";
class noteService{
    async create(note){
        
        const createdNote = await Note.create(note);
        return createdNote;
    }
    async get(){
        const notes = await Note.findAll();
        return notes;
    }
    async get_one(id){
        if (!id){
            throw new Error('id not found');
        }
        const note = await Note.findOne({where: {'id': id}});
        if (!note)
            return {message: "Not Found"}
        return note;
    }
    async delete(id){
        if (!id){
            throw new Error('id not found');
        }
        await Note.destroy({where: {'id': id}});
        return {message: "Note has been deleted"};
    }

    async put(id, note){
        if (!id){
            throw new Error('id not found');
        }
        const _note = await Note.findOne({where: {'id': id}});
        _note.update(note);
        return _note;
    }
}

export default new noteService();
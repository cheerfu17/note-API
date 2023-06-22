import { json } from "sequelize";
import Note from "../db_models/Note.js";
class noteService{
    async create(note){
        const createdNote = await Note.create(note);
        return createdNote.toJSON();
    }
    async get(user_id){
        const notes = await Note.findAll({where: {userId: user_id}});
        return notes;
    }
    async get_one(id, user_id){
        if (!id){
            throw new Error("id not found");
        }
        const note = await Note.findByPk(id);
        if (!note)
            return {"message": "Note with this id not found"}
        return note.toJSON();
    }
    async delete(id, user_id){
        if (!id){
            throw new Error("id not found");
        }
        const note = await Note.findOne({where: {id: id, userId: user_id}});
        if (!note){
            throw new Error("Note not found");
        }
        await Note.destroy({where: {'id': id}});
        return {message: "Note has been deleted"};
    }

    async put(id, body, user_id){
        if (!id){
            throw new Error("id not found");
        }
        const _note = await Note.findOne({where: {id: id, userId: user_id}});
        if (!_note)
            throw new Error ("Note with this id not found")
        _note.update(body);
        return _note.toJSON();
    }
}

export default new noteService();
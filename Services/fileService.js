import * as ud from 'uuid';
import * as path from 'path';

class fileService{
    async fileSave(picture){
        try {
            const fileName = ud.v4() + "." + picture.name.split('.')[1];
            const filePath = path.resolve('upload', fileName);
            console.log(filePath);
            picture.mv(filePath);
            return fileName;
        } catch (error) {
            console.log(error);
        }

    }
}

export default new fileService();
import { asignaciones, users } from "./data.js";

export function getUserById(id, callback){
    const user = users.find(function(user){
        return user.id === id;
    });
    if(!user){
       callback(`No encontramos al usuario con el id ${id}`);
    }
    callback(null, user)
}
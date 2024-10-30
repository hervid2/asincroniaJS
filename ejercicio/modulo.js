import { asignaciones, users } from "./data.js";

export function getUserById(id, callback){
    const user = users.find(function(user){
        return user.id === id;
    });
    if(user){
        callback(null, user) 
    }else{ 
      callback(`No encontramos al usuario con el id ${id}`); 
    }
}

export function getAsignacionById(id, callback){
    const asignacion = asignaciones.find(function(asignacion){
        return asignacion.id === id;
    })
    if(asignacion){
        callback(null, asignacion)
    }else{
        callback(`No tiene asignaciones con el id ${id}`);
    }
}
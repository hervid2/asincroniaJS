import { getUserById } from "./modulo.js";

getUserById(66, function (error, user){
    if (error){

    }
    else{
        console.log(user);
    }
    
});

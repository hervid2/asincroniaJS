import { asignaciones } from "./data.js";
import { getAsignacionById, getUserById } from "./modulo.js";

getUserById(14, function (error, user) {
  if (!error) {
    console.log(user);
    if (user.asignaciones.length > 0) {
      for (let i = 0; user.asignaciones.length > i; i++) {
        getAsignacionById(user.asignaciones[i], function (error, asignacion) {
          console.log(asignacion.name);
        });
      }
    }else{
        console.log("no tiene asignaciones");
        
    }
  } else {
    console.log(error);
  }
});

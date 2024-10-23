// let uno = setTimeout(()=> {
//     console.log("Buscando en red");
// },8000);
// console.log("Solucionado");

// let interval = setInterval(() => {
//    console.log("¿Cada cuánto?");
    
// }, 10000);
// console.log("Finalizamos");

// console.log(uno, interval);


// setTimeout(() => {
//     clearInterval(interval)
// }, 20000);

function callback(message){
    console.log(message);
}

function saludo(name, callback){
    let message = `Hola ${name}`
    callback(message);
}
saludo("Hernan David Cardona", callback);
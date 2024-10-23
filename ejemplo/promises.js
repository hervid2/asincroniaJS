function cuadrado(valor){
    if (typeof valor !== "number") {
        return Promise.reject("Cuidado, el valor que ingresó no es un número!");
    }
    return new  Promise((resolve, reject) =>{
        setTimeout(() =>{
        resolve({
            valor : valor,
            resultado : valor * valor
        });
    },4000);
});
}

cuadrado(2).then((obj)=>{
    console.log(obj);
    return cuadrado(++obj.resultado);
}).then((obj) => {
    console.log(obj);
    return cuadrado(++obj.resultado);
}).then((obj)=>{
    console.log(obj);
}).then((a)=>{
    console.log("meta");
})




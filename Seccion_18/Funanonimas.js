function sumar(a,b,cb) {
    const resultado = a + b
    cb(resultado)
}

function callback(result) {
    console.log('resultado ', result);
}

sumar(2,3,function(resultado) {
    console.log('Soy una funtion anonima y el resultado anonima es :', resultado);
    
})
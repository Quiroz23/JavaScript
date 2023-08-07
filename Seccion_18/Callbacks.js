//CALLBASK esto lo que hara es una funcion que se ejecutara al final de una funcion

function sumar(a,b,cb) {
    const resultado = a + b
    cb(resultado)
}

function callback(result) {
    console.log('resultado ', result);
}

callback(6)
sumar(2,3,callback)
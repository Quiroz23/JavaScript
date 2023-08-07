//Con esto podemos ejecutar con diferentes arreglos

function iterar(arg1) {

    for(let i =0;i<arg1.length; i++){
        console.log(arg1[i]);
    }
}

const numero = [1,2,"Hola",4,5]
const nombres = ['Pedro','Juan','Felipe','Maria','Juana']

iterar(numero)
iterar(nombres)
function calcularMediaAritmetica(lista){
    //Forma 2 para recorrer la lista con métodos de array
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promediolista = sumaLista / lista.length;

    return promediolista;
}

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];
function calcularMediana(lista1){

    listaOrder = lista1.sort();
    console.log(listaOrder);
    const mitadLista1 = parseInt(listaOrder.length / 2);

    function esPar(numero){
        if(numero % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if(esPar(listaOrder.length)) {
        const elemento1 = listaOrder[mitadLista1 - 1];
        const elemento2 = listaOrder[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, 
            elemento2,
        ]);

        mediana = promedioElemento1y2;

    }else{
        mediana = listaOrder[mitadLista1];
    }

    return mediana;
}    

// [■,■,■,■].map(■→●) ⇒ [●,●,●,●]
// [■,●,■,▲].filter(■→true) ⇒ [■,■]
// [■,●,■,▲].find(●→true) ⇒ ●
// [■,●,■,▲].findIndex(●→true) ⇒ 1
// [■,●,■,▲].fill(●) ⇒ [●,●,●,●]
// [■,●,■,▲].some(●→true) ⇒ true
// [■,●,■,▲].every(●→true) ⇒ false

// const lista = [100, 200, 300, 500];

function calcularMediaAritmetica(lista){
    //Forma 1 para recorrer la lista con for
    // let sumaLista = 0;
    
    // for (let i = 0; i < lista.length; i++) {
        //     sumaLista += lista[i];
        // }
        
    //Forma 2 para recorrer la lista con métodos de array

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promediolista = sumaLista / lista.length;

    return promediolista;
}


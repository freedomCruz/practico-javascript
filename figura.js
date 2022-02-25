//Código del cuadrado
// console.group("Cuadrado");
// const ladosCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladosCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado){
    return lado * lado;
}
  
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);

// console.groupEnd();

//Código del triángulo
// console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

// console.log(`El perimetro del triángulo es: ${perimetroTriangulo}cm`);

function areaTriangulo (base, altura){
    return (base * altura)/2;
} 
// console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);

// console.groupEnd();

//Código circulo
// console.group("Circulos");
// //radio
// const ratioCirculo = 4;
// console.log('El radio del círculo es: ' + 4 + "cm");  

//diametro
function diametroCirculo(radio){
    return radio * 2;
};
//PI
const pi = Math.PI;
console.log(`Pi es igual a: ${pi}`);
//Circunferencia
function perimetroCircunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}; 
// console.log(`El perimetro del circulo es: ${perimetroCircunferencia.toFixed(2)}cm`);
//Área
function areaCirculo(radio){
    return (radio * radio) * pi;
}  
// console.log(`El área del ciruclo es: ${areaCirculo.toFixed(2)}cm^2`);

// console.groupEnd();

// Aquí interactuamos con el Html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    location.reload();
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    location.reload();
}

function calcularPerimetroTriangulo() {
    // Captura el lado A en el html
    const input = document.getElementById("InputLadoa");
    const valueA = input.valueAsNumber;

    const inputb = document.getElementById("InputLadob");
    const valueB = inputb.valueAsNumber;

    const inputc = document.getElementById("InputBase");
    const valueC = inputc.valueAsNumber;

    let perimetroTri = perimetroTriangulo(valueA, valueB, valueC);
    console.log(perimetroTri);
    alert(perimetroTri);
    location.reload();
}
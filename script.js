var peso;
var altura;
var imc;
var resultado;

function calcular(event) {

    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    resultado = document.getElementById("resultado");
    imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 17) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Abaixo do peso!</p>`;
    } else if (imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Abaixo do peso!</p>`;
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Peso ideal!</p>`;
    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Sobrepeso!</p>`;
    } else if (imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Obesidade grau I!</p>`;
    } else if (imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Obesidade grau II!</p>`;
    } else if (imc >= 40) {
        resultado.innerHTML = `<p>Seu resultado foi: ${imc} - Obesidade grau III!</p>`;
    }
}
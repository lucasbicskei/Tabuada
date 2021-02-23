
//Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário.
function calcular() {
    let tabuada = parseInt(document.getElementById("tabuada").value);

    let resultado = "";
    for (let vez = 1; vez <= 10; vez++) {
        resultado += (`${tabuada} x ${vez} = ${tabuada * vez}<br>`)
    }
    document.getElementById("erro").innerHTML = resultado;

}


const menorValor = 1;
const maiorValor = 10;
const numeroSecreto = gerarNumeroAleatorio();



function gerarNumeroAleatorio(){

    let numeroAleatorio = parseInt(Math.random() * (maiorValor + 1));

    if(numeroAleatorio < menorValor){
        numeroAleatorio = parseInt(Math.random() * (maiorValor + 1));
    }


    return numeroAleatorio;
}

console.log(numeroSecreto);


const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;



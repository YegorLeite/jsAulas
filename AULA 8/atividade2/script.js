function valorInput() {

    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    
    let valor1 = parseFloat(input1.value);
    let valor2 = parseFloat(input2.value);
    
    let soma = valor1 + valor2;
    
    let resultado = document.getElementById('resultado');
    
    resultado.innerText = 'A soma é: ' + soma;
}

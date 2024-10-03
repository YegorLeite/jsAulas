async function obterCotacaoMoeda(moedaBase, moedaDestino, valor) {
    const apiKey = '4b5213aa3f8a00a07ea836564df8e453';
    const url = `http://api.exchangeratesapi.io/v1/convert?access_key=${apiKey}&from=${moedaBase}&to=${moedaDestino}&amount=${valor}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao obter dados da API: ' + response.statusText);
        }

        const data = await response.json();
        console.log(data);
        if (!data.result) {
            throw new Error('Erro ao realizar a conversão.');
        }

        return data.result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function exemploConversaoMoeda() {
    const moedaBase = document.getElementById('moedaBase').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
    const valorBase = parseFloat(document.getElementById('valorBase').value);

    console.log(`Moeda Base: ${moedaBase}`);
    console.log(`Moeda Destino: ${moedaDestino}`);
    console.log(`Valor a Converter: ${valorBase}`);

    if (isNaN(valorBase)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    try {
        const valorConvertido = await obterCotacaoMoeda(moedaBase, moedaDestino, valorBase);
        if (valorConvertido) {
            document.getElementById('resultado').textContent = `${valorBase} ${moedaBase} é igual a ${valorConvertido.toFixed(2)} ${moedaDestino}`;
        } else {
            document.getElementById('resultado').textContent = 'Erro ao realizar a conversão.';
        }
    } catch (error) {
        console.error(error.message);
        document.getElementById('resultado').textContent = 'Erro ao realizar a conversão.';
    }
}

document.getElementById('converterButton').addEventListener('click', exemploConversaoMoeda);

exemploConversaoMoeda()
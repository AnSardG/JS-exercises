function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const apiKey = '8b77a889b48c18d487e462bfb54bb9eb';

    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `${amount} ${fromCurrency} equivale a ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API', error);
        });
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    convertCurrency();
})

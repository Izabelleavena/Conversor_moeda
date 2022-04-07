
    function ConverterDolar(){
        var valorElemento = document.getElementById('valor').value;
        var valorEmReal = parseFloat(valorElemento);
        var valorEmDolar = valorEmReal / 5;
        var inserirNaPagina = document.getElementById('valorConvertido');
        var valorConvertido = "O resultado em Dolar é $" + valorEmDolar.toFixed(2);
        inserirNaPagina.innerHTML = valorConvertido;
    }
    function ConverterEuro(){
        var valorElemento = document.getElementById('valor').value;
        var valorEmReal = parseFloat(valorElemento);
        var valorEmEuro = valorEmReal / 5.58;
        var inserirNaPagina = document.getElementById('valorConvertido');
        var valorConvertido = "O resultado em Euro é Є" + valorEmEuro.toFixed(2);
        inserirNaPagina.innerHTML = valorConvertido;
    }
// Converter Temperaturas

function convert() {
    const unidadesTemperaturaDe = document.getElementById("unidades-temperatura-de").value;
    const unidadesTemperaturaPara = document.getElementById("unidades-temperatura-para").value;
    const valor = document.getElementById("inputValor").value;
}

function calcularTemperatura() {
    valorCelsius = valorEmCelsius(valor, unidadesTemperaturaDe);

    document.getElementById("ResultadoFinal").value = valorParaUnidade(valorCelsius, unidadesTemperaturaPara);

    function valorEmCelsius(valor, unidadesTemperaturaDe) {
        // Converter em CELSIUS  (1º caso)

        switch (unidadesTemperaturaDe) {
            case 'f':     //"Fahrenheit"
                valorCelsius = (valor - 32) * (5 / 9);
                return valorCelsius;
            case 'k':    //"kelvin"
                valorCelsius = (valor - 273.15);
                return valorCelsius;
            case "n":     //"newton"
                valorCelsius = (valor * (100 / 33));
                return valorCelsius;
            case "c":     //Celsius
                valorCelsius = valor * 1;
                return valorCelsius;
            case "r":     //"rankine"
                valorCelsius = (valor - 491.67) * (5 / 9);
                return valorCelsius;
            case "re":    //"réaumur"
                valorCelsius = valor * (5 / 4);
                return valorCelsius;
            case "ro":   //"romer"
                valorCelsius = (valor - 7, 5) * (40 / 21);
                return valorCelsius;
            case "de":    //"delisle"
                valorCelsius = 100 - valor * (2 / 3);
                return valorCelsius;
        }
    }

    function valorParaUnidade(valorCelsius, unidadesTemperaturaPara) {
        // Converter a partir de CELSIUS (2º caso)

        switch (unidadesTemperaturaPara) {
            case 'f':     //"Fahrenheit"
                Resultado = valorCelsius * (9 / 5) + 32;
                return Resultado;
            case 'k':    //"kelvin"
                Resultado = valorCelsius + 273.15;
                return Resultado;
            case "n":     //"newton"
                Resultado = valorCelsius * (33 / 100);
                return Resultado;
            case "c":     //Celsius
                Resultado = valorCelsius * 1;
                return Resultado;
            case "r":     //"rankine"
                Resultado = (valorCelsius + 273.15) * (9 / 5);
                return Resultado;
            case "re":    //"réaumur"
                Resultado = valorCelsius * (4 / 5);
                return Resultado;
            case "ro":   //"romer"
                Resultado = valorCelsius * (21 / 40) + 7, 5;
                return Resultado;
            case "de":    //"delisle"
                Resultado = (100 - valorCelsius) * (5 / 6);
                return Resultado;
        }

    }
}


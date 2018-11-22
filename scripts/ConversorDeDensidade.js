// Converter Densidade

function calcularDensidade() {

            unidadesDensidadeDe = document.getElementById("unidadesDensidadeDe").value;
            unidadesDensidadePara = document.getElementById("unidadesDensidadePara").value;
            valor = document.getElementById("inputValor").value;

            valorKGM3 = valorEmKGM3(valor, unidadesDensidadeDe);

            document.getElementById("ResultadoFinal").value = valorParaUnidade(valorKGM3, unidadesDensidadePara);

            document.getElementById("").value = valor
            document.getElementById("").value = valorKGM3;
 

            function valorEmKGM3(valor, unidadesDensidadeDe) {
                // Converter para Kg/m3 (1º caso)                   c=k;c=ro
                              
                switch (unidadesDensidadeDe) {
                    case 'Kg/m3':     //"Quilograma por metro cúbico (kg/m3)"
                        valorKGM3 = valor*1;
                        return valorKGM3;
                    case 'g/cm3':     //"Grama por centímetro cúbico (g/cm3)"
                        valorKGM3 = valor*1000;
                        return valorKGM3;
                    case 'g/m3':     //"Grama por metro cúbico (g/m3)"
                        valorKGM3 = valor*0.001;
                        return valorKGM3;
                    case 'mg/m3':     //"Miligrama por metro cúbico (mg/m3)"
                        valorKGM3 = valor*0.000001;
                        return valorKGM3;
                    case 'oz/gal':     //"Onça por Galeão (oz/gal)"
                        valorKGM3 = valor*7.4891517091;
                        return valorKGM3;
                    case 'lb/ft3':     //"Libra por pé cúbico (lb/ft3)"
                        valorKGM3 = valor*16.018463373;
                        return valorKGM3;
                    case 'in/ft3':     //"Libra por polegada cúbica (lb/in3)"
                    valorKGM3 = valor*27679.90471;
                        return valorKGM3; 
                    
                }
 
            }

            function valorParaUnidade(valorKGM3, unidadesDensidadePara) {
                // Converter de TUDO PARA KG/M3 (2º caso)    K=c;ro=c;

                switch (unidadesDensidadePara) {
                    case 'Kg/m3':     //"Quilograma por metro cúbico (kg/m3)"
                        Resultado = valorKGM3*(1/1);
                        return Resultado;
                    case 'g/cm3':     //"Grama por centímetro cúbico (g/cm3)"
                        Resultado = valorKGM3*(1/1000);
                        return Resultado;
                    case 'g/m3':     //"Grama por metro cúbico (g/m3)"
                        Resultado = valorKGM3*(1/0.001);
                        return Resultado;
                    case 'mg/m3':     //"Miligrama por metro cúbico (mg/m3)"
                        Resultado = valorKGM3*(1/0.000001);
                        return Resultado;
                    case 'oz/gal':     //"Onça por Galeão (oz/gal)"
                        Resultado = valorKGM3*(1/7.4891517091);
                        return Resultado;
                    case 'lb/ft3':     //"Libra por pé cúbico (lb/ft3)"
                        Resultado = valorKGM3*(1/16.018463373);
                        return Resultado;
                    case 'in/ft3':     //"Libra por polegada cúbica (lb/in3)"
                        Resultado = valorKGM3*(1/27679.90471);
                        return Resultado;
                    
                }
            }
        }
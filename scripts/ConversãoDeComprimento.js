// Converter Comprimento

function calcularComprimento() {

            unidadesComprimentoDe = document.getElementById("unidadesComprimentoDe").value;
            unidadesComprimentoPara = document.getElementById("unidadesComprimentoPara").value;
            valor = document.getElementById("inputValor").value;

            valorM = valorEmM(valor, unidadesComprimentoDe);

            document.getElementById("ResultadoFinal").value = valorParaUnidade(valorM, unidadesComprimentoPara);

            document.getElementById("").value = valor
            document.getElementById("").value = valorM;
 

            function valorEmM(valor, unidadesComprimentoDe) {
                // Converter para M  (1º caso)                   c=k;c=ro
                              
                switch (unidadesComprimentoDe) {
                    case 'm':     //"Metro"
                        valorM = valor*1;
                        return valorM;
                    case 'km':     //"Quilómetro"
                        valorM = valor*1000;
                        return valorM;
                    case 'dm':     //"Decímetro"
                        valorM = valor*0.1;
                        return valorM;
                    case 'cm':     //"Centímetro"
                        valorM = valor*0.01;
                        return valorM;
                    case 'mm':     //"Milímetro"
                        valorM = valor*0.001;
                        return valorM;
                    case 'um':     //"Micrómetro"
                        valorM = valor*0.000001;
                        return valorM;
                    case 'nm':     //"Nanómetro"
                        valorM = valor*0.000000001;
                        return valorM;
                    case 'A':     //"Angstrom"
                        valorM = valor*Math.pow(10,-10);
                        return valorM;
                    case 'li':     //"Liga"
                        valorM = valor*4828.032;
                        return valorM;
                    case 'mi':     //"Milha"
                        valorM = valor*1609.344;
                        return valorM;
                    case 'fu':     //"Furlong"
                        valorM = valor*201.168;
                        return valorM;
                    case 'rd':     //"Barra"
                        valorM = valor*5.0292;
                        return valorM;
                    case 'yd':     //"Jarda"
                        valorM = valor*0.9144;
                        return valorM;
                    case 'ft':     //"Pé"
                        valorM = valor*0.3048;
                        return valorM;
                    case 'lk':     //"Link"
                        valorM = valor*0.201168;
                        return valorM;
                    case 'mao':     //"Mao"
                        valorM = valor*0.1016;
                        return valorM;
                    case 'in':     //"Polegada"
                        valorM = valor*0.0542;
                        return valorM;
                    case 'lin':     //"Linha"
                        valorM = valor*0.00254;
                        return valorM;
                    case 'mil':     //"Mil"
                        valorM = valor*0.0000254;
                        return valorM;
                    case 'thou':     //"Thou"
                        valorM = valor*0.0000254;
                        return valorM;
                    case 'mim':     //"Milha Marítima"
                        valorM = valor*1852;
                        return valorM;
                    case 'br':     //"Braça"
                        valorM = valor*1.8288;
                        return valorM;
                    case 'pc':     //"Parsec"
                        valorM = valor*3.0856778571*Math.pow(10,16);
                        return valorM;
                    case 'al':     //"Ano-luz"
                        valorM = valor*9.4607304726*Math.pow(10,15);
                        return valorM;
                    case 'ae':     //"Unidade Astronómica"
                        valorM = valor*1.4959782868*Math.pow(10,11);
                        return valorM;
                    case 'mluz':     //"Minuto-luz"
                        valorM = valor*1.7987539672*Math.pow(10,10);
                        return valorM;
                    case 'sluz':     //"Segundo-luz"
                        valorM = valor*2.9979236381*Math.pow(10,8);
                        return valorM;
                    
                }
 
            }

            function valorParaUnidade(valorM, unidadesComprimentoPara) {
                // Converter de TUDO PARA M (2º caso)    K=c;ro=c;

                switch (unidadesComprimentoPara) {
                    case 'm':     //"Metro"
                        Resultado = valorM*(1/1);
                        return Resultado;
                    case 'km':     //"Quilómetro"
                        Resultado = valorM*(1/1000);
                        return Resultado;
                    case 'dm':     //"Decímetro"
                        Resultado = valorM*(1/0.1);
                        return Resultado;
                    case 'cm':     //"Centímetro"
                        Resultado = valorM*(1/0.01);
                        return Resultado;
                    case 'mm':     //"Milímetro"
                        Resultado = valorM*(1/0.001);
                        return Resultado;
                    case 'um':     //"Micrómetro"
                        Resultado = valorM*(1/0.000001);
                        return Resultado;
                    case 'nm':     //"Nanómetro"
                        Resultado = valorM*(1/0.000000001);
                        return Resultado;
                    case 'A':     //"Angstrom"
                        Resultado = valorM*(1/Math.pow(10,-10));
                        return Resultado;
                    case 'li':     //"Liga"
                        Resultado = valorM*(1/4828.032);
                        return Resultado;
                    case 'mi':     //"Milha"
                        Resultado = valorM*(1/1609.344);
                        return Resultado;
                    case 'fu':     //"Furlong"
                        Resultado = valorM*(1/201.168);
                        return Resultado;
                    case 'rd':     //"Barra"
                        Resultado = valorM*(1/5.0292);
                        return Resultado;
                    case 'yd':     //"Jarda"
                        Resultado = valorM*(1/0.9144);
                        return Resultado;
                    case 'ft':     //"Pé"
                        Resultado = valorM*(1/0.3048);
                        return Resultado;
                    case 'lk':     //"Link"
                        Resultado = valorM*(1/0.201168);
                        return Resultado;
                    case 'mao':     //"Mao"
                        Resultado = valorM*(1/0.1016);
                        return Resultado;
                    case 'in':     //"Polegada"
                        Resultado = valorM*(1/0.0542);
                        return Resultado;
                    case 'lin':     //"Linha"
                        Resultado = valorM*(1/0.00254);
                        return Resultado;
                    case 'mil':     //"Mil"
                        Resultado = valorM*(1/0.0000254);
                        return Resultado;
                    case 'thou':     //"Thou"
                        Resultado = valorM*(1/0.0000254);
                        return Resultado;
                    case 'mim':     //"Milha Marítima"
                        Resultado = valorM*(1/1852);
                        return Resultado;
                    case 'br':     //"Braça"
                        Resultado = valorM*(1/1.8288);
                        return Resultado;
                    case 'pc':     //"Parsec"
                        Resultado = valorM*(1/(3.0856778571*Math.pow(10,16)));
                        return Resultado;
                    case 'al':     //"Ano-luz"
                        Resultado = valorM*(1/(9.4607304726*Math.pow(10,15)));
                        return Resultado;
                    case 'ae':     //"Unidade Astronómica"
                        Resultado = valorM*(1/(1.4959782868*Math.pow(10,11)));
                        return Resultado;
                    case 'mluz':     //"Minuto-luz"
                        Resultado = valorM*(1/(1.7987539672*Math.pow(10,10)));
                        return Resultado;
                    case 'sluz':     //"Segundo-luz"
                        Resultado = valorM*(1/(2.9979236381*Math.pow(10,8)));
                        return Resultado;
                    
                }
            }
        }
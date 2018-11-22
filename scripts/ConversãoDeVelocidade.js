// Converter Velocidade

function calcularVelocidade() {

            unidadesVelocidadeDe = document.getElementById("unidadesVelocidadeDe").value;
            unidadesVelocidadePara = document.getElementById("unidadesVelocidadePara").value;
            valor = document.getElementById("inputValor").value;

            valorKMH = valorEmKMH(valor, unidadesVelocidadeDe);

            document.getElementById("ResultadoFinal").value = valorParaUnidade(valorKMH, unidadesVelocidadePara);

            document.getElementById("").value = valor
            document.getElementById("").value = valorKMH;
 

            function valorEmKMH(valor, unidadesVelocidadeDe) {
                // Converter  (1º caso)                   c=k;c=ro
                              
                switch (unidadesVelocidadeDe) {
                    case 'Km/h':     //"Quilómetro por hora (km/h)"
                        valorKMH = valor*1;
                        return valorKMH;
                    case 'km/s':     //"Quilómetro por segundo (km/s)"
                        valorKMH = valor*3600;
                        return valorKMH;
                    case 'm/s':     //"Metros por segundo (m/s)"
                        valorKMH = valor*3.6;
                        return valorKMH;
                    case 'mm/s':     //"Milímetros por segundo (mm/s)"
                        valorKMH = valor*0.0036;
                        return valorKMH;
                    case 'um/s':     //"Micrómetro por segundo (um/s)"
                        valorKMH = valor*0.0000036;
                        return valorKMH;
                    case 'mi/s':     //"Milha por segundo (mps)"
                        valorKMH = valor*5793.6384;
                        return valorKMH;
                    case 'mi/h':     //"Milha por segundo (mph)"
                        valorKMH = valor*1.609344;
                        return valorKMH;
                    case 'ft/s':     //"Pé por segundo (mph)"
                        valorKMH = valor*1.09728;
                        return valorKMH;
                    case 'no':     //"Nó"
                        valorKMH = valor*1.852;
                        return valorKMH;
                    
                }
 
            }

            function valorParaUnidade(valorKMH, unidadesVelocidadePara) {
                // Converter de TUDO PARA KM/h (2º caso)    K=c;ro=c;

                switch (unidadesVelocidadeDe) {
                    case 'Km/h':     //"Quilómetro por hora (km/h)"
                        Resultado = valorKMH*(1/1);
                        return Resultado;
                    case 'km/s':     //"Quilómetro por segundo (km/s)"
                        Resultado = valorKMH*(1/3600);
                        return Resultado;
                    case 'm/s':     //"Metros por segundo (m/s)"
                        Resultado = valorKMH*(1/3.6);
                        return Resultado;
                    case 'mm/s':     //"Milímetros por segundo (mm/s)"
                        Resultado = valorKMH*(1/0.0036);
                        return Resultado;
                    case 'um/s':     //"Micrómetro por segundo (um/s)"
                        Resultado = valorKMH*(1/0.0000036);
                        return Resultado;
                    case 'mi/s':     //"Milha por segundo (mps)"
                        Resultado = valorKMH*(1/5793.6384);
                        return Resultado;
                    case 'mi/h':     //"Milha por segundo (mph)"
                        Resultado = valorKMH*(1/1.609344);
                        return Resultado;
                    case 'ft/s':     //"Pé por segundo (mph)"
                        Resultado = valorKMH*(1/1.09728);
                        return Resultado;
                    case 'no':     //"Nó"
                        Resultado = valorKMH*(1/1.852);
                        return Resultado; 
                }
            }
        }
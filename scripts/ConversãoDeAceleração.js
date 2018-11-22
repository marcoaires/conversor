// Converter Aceleração

function calcularAceleracao() {

            unidadesAceleracaoDe = document.getElementById("unidadesAceleracaoDe").value;
            unidadesAceleracaoPara = document.getElementById("unidadesAceleracaoPara").value;
            valor = document.getElementById("inputValor").value;

            valorMS2 = valorEmMS2(valor, unidadesAceleracaoDe);

            document.getElementById("ResultadoFinal").value = valorParaUnidade(valorMS2, unidadesAceleracaoPara);

            document.getElementById("").value = valor
            document.getElementById("").value = valorMS2;
 

            function valorEmMS2(valor, unidadesAceleracaoDe) {
                // Converter para m/s2  (1º caso)                   c=k;c=ro
                              
                switch (unidadesAceleracaoDe) {
                    case 'm/s2':     //"Metros por segundo ao quadrado (m/s2)"
                        valorMS2 = valor*1;
                        return valorMS2;
                    case 'ft/s2':     //"Pés por segundo ao quadrado (m/s2)"
                        valorMS2 = valor*0.3048006096;
                        return valorMS2;
                    case 'gal':     //"Gal"
                        valorMS2 = valor*0.01;
                        return valorMS2;
                    case 'mgal':     //"MiliGal"
                        valorMS2 = valor*0.00001;
                        return valorMS2;
                    case 'grav':     //"Gravidade padrão"
                        valorMS2 = valor*9.80665;
                        return valorMS2;
                   
                }
 
            }

            function valorParaUnidade(valorMS2, unidadesAceleracaoPara) {
                // Converter de TUDO PARA m/s2 (2º caso)    K=c;ro=c;

                switch (unidadesAceleracaoPara) {
                    case 'm/s2':     //"Metros por segundo ao quadrado (m/s2)"
                        Resultado = valorMS2*(1/1);
                        return Resultado;
                    case 'ft/s2':     //"Pés por segundo ao quadrado (m/s2)"
                        Resultado = valorMS2*(1/0.3048006096);
                        return Resultado;
                    case 'gal':     //"Gal"
                        Resultado = valorMS2*(1/0.01);
                        return Resultado;
                    case 'mgal':     //"MiliGal"
                        Resultado = valorMS2*(1/0.00001);
                        return Resultado;
                    case 'grav':     //"Gravidade padrão"
                        Resultado = valorMS2*(1/9.80665);
                        return Resultado;
                    
                }
            }
        }
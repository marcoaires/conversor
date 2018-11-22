
// Converter Áreas

function calcularArea() {

            unidadesAreaDe = document.getElementById("unidadesAreaDe").value;
            unidadesAreaPara = document.getElementById("unidadesAreaPara").value;
            valor = document.getElementById("inputValor").value;

            valorM2 = valorEmM2(valor, unidadesAreaDe);

            document.getElementById("ResultadoFinal").value = valorParaUnidade(valorM2, unidadesAreaPara);

            document.getElementById("").value = valor
            document.getElementById("").value = valorM2;
 

            function valorEmM2(valor, unidadesAreaDe) {
                // Converter para M2  (1º caso)                   c=k;c=ro
                              
                switch (unidadesAreaDe) {
                    case 'm2':     //"Metro Quadrado"
                        valorM2 = valor*1 ;
                        return valorM2;
                    case 'km2':     //"Quilómetro Quadrado"
                        valorM2 = valor*1000000;
                        return valorM2;
                    case 'hec':     //"Hectare"
                        valorM2 = valor*10000;
                        return valorM2;
                    case 'are':     //"Are"
                        valorM2 = valor*100;
                        return valorM2;
                    case 'dm2':     //"Decímetro Quadrado"
                        valorM2 = valor*0,01;
                        return valorM2;
                    case 'cm2':     //"Centímetro Quadrado"
                        valorM2 = valor*0.0001;
                        return valorM2;
                    case 'mm2':     //"Milímetro Quadrado"
                        valorM2 = valor*0.000001 ;
                        return valorM2;
                    case 'um2':     //"Micrómetro Quadrado"
                        valorM2 = valor*10*Math.pow(10,-13);
                        return valorM2;
                    case 'nm2':     //"Nanómetro Quadrado"
                        valorM2 = valor*Math.pow(10,-18);
                        return valorM2;
                    case 'mi2':     //"Milha Quadrada"
                        valorM2 = valor*2.5899878322*Math.pow(10,6);
                        return valorM2;
                    case 'ft2':     //"Pé Quadrado"
                        valorM2 = valor*0,0929030436;
                        return valorM2;
                    case 'in2':     //"Polegada Quadrada"
                        valorM2 = valor*0,00064516;
                        return valorM2;
                    
                }
 
            }

            function valorParaUnidade(valorM2, unidadesAreaPara) {
                // Converter de TUDO PARA M2 (2º caso)    K=c;ro=c;

                switch (unidadesAreaPara) {
                    case 'm2':     //"Metro Quadrado"
                        Resultado = valorM2*1;
                        return Resultado;
                    case 'km2':     //"Quilómetro Quadrado"
                        Resultado = valorM2*0.000001;
                        return Resultado;
                    case 'hec':     //"Hectare"
                        Resultado = valorM2*0.0001;
                        return Resultado;
                    case 'are':     //"Are"
                        Resultado = valorM2*0.01;
                        return Resultado;
                    case 'dm2':     //"Decímetro Quadrado"
                        Resultado = valorM2*100;
                        return Resultado;
                    case 'cm2':     //"Centímetro Quadrado"
                        Resultado = valorM2*10000;
                        return Resultado;
                    case 'mm2':     //"Milímetro Quadrado"
                        Resultado = valorM2*1000000;
                        return Resultado;
                    case 'um2':     //"Micrómetro Quadrado"
                        Resultado = valorM2*Math.pow(10,12);
                        return Resultado;
                    case 'nm2':     //"Nanómetro Quadrado"
                        Resultado = valorM2*Math.pow(10,18);
                        return Resultado;
                    case 'mi2':     //"Milha Quadrada"
                        Resultado = valorM2*3.861022*Math.pow(10,-7);
                        return Resultado;
                    case 'ft2':     //"Pé Quadrado"
                        Resultado = valorM2*10.76391;
                        return Resultado;
                    case 'in2':     //"Polegada Quadrada"
                        Resultado = valorM2*1550.003;
                        return Resultado;
                    
                }
            }
        }

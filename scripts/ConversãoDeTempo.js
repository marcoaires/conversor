// Converter Tempo

function calcularTempo (){
	
	unidadesTempoDe = document.getElementById ("unidadesTempoDe").value;
	unidadesTempoPara = document.getElementById ("unidadesTempoPara").value;
    valor = document.getElementById("inputValor").value;
    
    valorSegundos=valorEmSegundos(valor,unidadesTempoDe);
    document.getElementById("ResultadoFinal").value=valorParaUnidade(valorSegundos,unidadesTempoPara);
    
    function valorSegundos (valor,unidadesTempoDe){
     // Converter em SEGUNDO (1º caso)     

     switch (unidadesTempoDe) {
        case "ano":     //ANO
            valorSegundos =valor*31557600;
            return valorSegundos;
        case "mes":    //MESES
            valorSegundos =valor*2629800;
            return valorSegundos;
        case "sem":     //SEMANAS
            valorSegundos =valor*6.0480001656*Math.pow(10,5);
            return valorSegundos;
        case "dia":     //DIAS
            valorSegundos =valor*86400;
            return valorSegundos;
        case "hrs":     //HORAS
            valorSegundos =valor*3600;
            return valorSegundos;
        case "min":    //MINUTOS
            valorSegundos =valor*60;
            return valorSegundos;
        case "s":    //SEGUNDOS
            valorSegundos =valor*1;
            return valorSegundos;
        case "ms":    //MILISEGUNDOS
            valorSegundos =valor*0.001;
            return valorSegundos;
        case "us":    //MICROSEGUNDOS
            valorSegundos =valor*0.000001;
            return valorSegundos;
        case "ns":    //NANOSEGUNDOS
            valorSegundos =valor*Math.pow(10,-9);
            return valorSegundos;    
    }
    }


    function valorParaUnidade(valorSegundos,unidadesTempoPara){
	// Converter a partir SEGUNDO (2º caso)    
    switch (unidadesTempoPara) {
        case "ano":     //ANO
            Resultado =valorSegundos*(1/31557600);
            return Resultado;
        case "mes":    //MESES
            Resultado =valorSegundos*(1/2629800);
            return Resultado;
        case "sem":     //SEMANAS
            Resultado =valorSegundos*(1/(6.0480001656*Math.pow(10,5)));
            return Resultado;
        case "dia":     //DIAS
            Resultado =valorSegundos*(1/86400);
            return Resultado;
        case "hrs":     //HORAS
            Resultado =valorSegundos*(1/3600);
            return Resultado;
        case "min":    //MINUTOS
            Resultado =valorSegundos*(1/60);
            return Resultado;
        case "s":    //SEGUNDOS
            Resultado =valorSegundos*1
            return Resultado;
        case "ms":    //MILISEGUNDOS
            Resultado =valorSegundos*(1/0.001);
            return Resultado;
        case "us":    //MICROSEGUNDOS
            Resultado =valorSegundos*(1/0.000001);
            return Resultado;
        case "ns":    //NANOSEGUNDOS
            Resultado =valorSegundos*(1/Math.pow(10,-9));
            return Resultado;
   
       }
    }
	
}
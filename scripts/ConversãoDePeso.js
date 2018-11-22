// Converter Peso

function calcularPeso (){
	
	unidadesPesoDe = document.getElementById ("unidadesPesoDe").value;
	unidadesPesoPara = document.getElementById ("unidadesPesoPara").value;
    valor = document.getElementById("inputValor").value;
    
    valorGramas=valorEmGramas(valor,unidadesPesoDe);
    document.getElementById("ResultadoFinal").value=valorParaUnidade(valorGramas,unidadesPesoPara);
    
    function valorEmGramas (valor,unidadesPesoDe){
     // Converter em GRAMAS (1º caso)     

     switch (unidadesPesoDe) {
        case "g":     //GRAMA
            valorGramas =valor*1;
            return valorGramas;
        case "kg":    //QUILOGRAMA
            valorGramas =valor*1000;
            return valorGramas;
        case "hg":     //HECTOGRAMA
            valorGramas =valor*100;
            return valorGramas;
        case "kN":     //KILONEWTON
            valorGramas =valor*(1.019716005*Math.pow(10,5));
            return valorGramas;
        case "ql":     //QUILATE
            valorGramas =valor*0.2;
            return valorGramas;
        case "mg":    //MILIGRAMA
            valorGramas =valor*0.001;
            return valorGramas;
        case "ug":    //MICROGRAMA
            valorGramas =valor*0.000001;
            return valorGramas;
        case "ng":    //NANOGRAMA
            valorGramas =valor*(Math.pow(10,-9));
            return valorGramas;
        case "t":    //TONELADA
            valorGramas =valor*1000000;
            return valorGramas;
        case "cg":    //CENTIGRAMA
            valorGramas =valor*0.01;
            return valorGramas;  
        case "lb":    //LIBRA
            valorGramas =valor*453.59237;
            return valorGramas; 
        case "oz":    //ONÇA
            valorGramas =valor*28.349523125;
            return valorGramas; 
        case "gr":    //GRÃOS
            valorGramas =valor*0.06479891;
            return valorGramas; 
        case "dr":    //DRACMA
            valorGramas =valor*1.7718451953;
            return valorGramas; 
        case "pdr":    //PEDRA
            valorGramas =valor*6350.29318;
            return valorGramas; 
    }
    }


    function valorParaUnidade(valorGramas,unidadesPesoPara){
	// Converter a partir GRAMAS (2º caso)    
    switch (unidadesPesoPara) {
        case "g":     //GRAMA
            Resultado =valorGramas*1;
            return Resultado;
        case "kg":    //QUILOGRAMA
            Resultado =valorGramas*(1/1000);
            return Resultado;
        case "hg":     //HECTOGRAMA
            Resultado =valorGramas*(1/100);
            return Resultado;
        case "kN":     //KILONEWTON
            Resultado =valorGramas*(1/(1.019716005*Math.pow(10,5)));
            return Resultado;
        case "ql":     //QUILATE
            Resultado =valorGramas*(1/0.2);
            return Resultado;
        case "mg":    //MILIGRAMA
            Resultado =valorGramas*(1/0.001);
            return Resultado;
        case "ug":    //MICROGRAMA
            Resultado =valorGramas*(1/0.000001);
            return Resultado;
        case "ng":    //NANOGRAMA
            Resultado =valorGramas*(1/(Math.pow(10,-9)));
            return Resultado;
        case "t":    //TONELADA
            Resultado =valorGramas*(1/1000000);
            return Resultado;
        case "cg":    //CENTIGRAMA
            Resultado =valorGramas*(1/0.01);
            return Resultado;
        case "lb":    //LIBRA
            Resultado =valorGramas*(1/453.59237);
            return Resultado;
        case "oz":    //ONÇA
            Resultado =valorGramas*(1/28.349523125);
            return Resultado; 
        case "gr":    //GRÃOS
            Resultado =valorGramas*(1/0.06479891);
            return Resultado;
        case "dr":    //DRACMA
            Resultado =valorGramas*(1/1.7718451953);
            return Resultado; 
        case "pdr":    //PEDRA
            Resultado =valorGramas*(1/6350.29318);
            return Resultado;
    }
    }
	
}
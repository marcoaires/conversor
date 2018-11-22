// Converter Força

function calcularForça (){
	
	unidadesForçaDe = document.getElementById ("unidadesForçaDe").value;
	unidadesForçaPara = document.getElementById ("unidadesForçaPara").value;
    valor = document.getElementById("inputValor").value;
    
    valorNewton=valorEmNewton(valor,unidadesForçaDe);
    document.getElementById("ResultadoFinal").value=valorParaUnidade(valorNewton,unidadesForçaPara);
    
    function valorNewton (valor,unidadesForçaDe){
     // Converter em NEWTON (1º caso)     

     switch (unidadesPesoDe) {
        case "nN":     //NANONEWTON
            valorNewton =valor*Math.pow(10,-9);
            return valorNewton;
        case "uN":    //MICRONEWTON
            valorNewton =valor*0.000001;
            return valorNewton;
        case "mN":     //MILI NEWTON
            valorNewton =valor*0.001;
            return valorNewton;
        case "N":     //NEWTON
            valorNewton =valor*1;
            return valorNewton;
        case "kN":     //QUILONEWTON
            valorNewton =valor*1000;
            return valorNewton;
        case "megN":    //MEGANEWTON
            valorNewton =valor*1000000;
            return valorNewton;
        case "gN":    //GIGANEWTON
            valorNewton =valor*(10*Math.pow(10,8));
            return valorNewton;
        case "dyn":    //DINA
            valorNewton =valor*0.00001;
            return valorNewton;
        case "pdl":    //POUNDAL
            valorNewton =valor*0.1382549544;
            return valorNewton;
        case "kp":    //KILOPOLGADA
            valorNewton =valor*9.80665;
            return valorNewton; 
        case "sn":    //STHÈNE
            valorNewton =valor*1000;
            return valorNewton; 
        case "kgf":    //KILOGRAMAFORÇA
            valorNewton =valor*9.80665;
            return valorNewton;
        case "tnf":    //TONELADAFORÇA
            valorNewton =valor*9806.65;
            return valorNewton; 
    }
    }


    function valorParaUnidade(valorNewton,unidadesForçaPara){
	// Converter a partir NEWTON (2º caso)    
    switch (unidadesForçaPara) {
        case "nN":     //NANONEWTON
            Resultado =valorNewton*(1/Math.pow(10,-9));
            return Resultado;
        case "uN":    //MICRONEWTON
            Resultado =valorNewton*(1/0.000001);
            return Resultado;
        case "mN":     //MILI NEWTON
            Resultado =valorNewton*(1/0.001);
            return Resultado;
        case "N":     //NEWTON
            Resultado =valorNewton*1;
            return Resultado;
        case "kN":     //QUILONEWTON
            Resultado =valorNewton*(1/1000);
            return Resultado;
        case "megN":    //MEGANEWTON
            Resultado =valorNewton*(1/1000000);
            return Resultado;
        case "gN":    //GIGANEWTON
            Resultado =valorNewton*(1/(10*Math.pow(10,8)));
            return Resultado;
        case "dyn":    //DINA
            Resultado =valorNewton*(1/0.00001);
            return Resultado;
        case "pdl":    //POUNDAL
            Resultado =valorNewton*(1/0.1382549544);
            return Ressultado;
        case "kp":    //KILOPOLGADA
            Resultado =valorNewton*(1/9.80665);
            return Resultado;
        case "sn":    //STHÈNE
            Resultado =valorNewton*(1/1000);
            return Resultado; 
        case "kgf":    //KILOGRAMAFORÇA
            Resultado =valorNewton*(1/9.80665);
            return Resultado;
        case "tnf":    //TONELADAFORÇA
            Resultado =valorNewton*(1/9806.65);
            return Resultado;
    }
    }
	
}
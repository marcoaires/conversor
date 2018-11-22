// Converter Carga Elétrica

function calcularCargaEletrica (){
	
	unidadesCargaEletricaDe = document.getElementById ("unidadesCargaEletricaDe").value;
	unidadesCargaEletricaPara = document.getElementById ("unidadesCargaEletricaPara").value;
    valor = document.getElementById("inputValor").value;
    
    valorCoulomb=valorEmCoulomb(valor,unidadesCargaEletricaDe);
    document.getElementById("ResultadoFinal").value=valorParaUnidade(valorCoulomb,unidadesCargaEletricaPara);
    
    function valorEmCoulomb (valor,unidadesCargaEletricaDe){
     // Converter em COULOMB (1º caso)     

     switch (unidadesCargaEletricaDe) {
        case "nC":     //NANOCOULOMB
            valorCoulomb =valor*Math.pow(10,-9);
            return valorCoulomb;
        case "uC":    //MICROCOULOMB
            valorCoulomb =valor*Math.pow(10,-6);
            return valorCoulomb;
        case "mC":     //MILICOULOMB
            valorCoulomb =valor*Math.pow(10,-3);
            return valorCoulomb;
        case "C":     //COULOMB
            valorCoulomb =valor*1;
            return valorCoulomb;
        case "kC":     //KILOCOULOMB
            valorCoulomb =valor*1000;
            return valorCoulomb;
        case "mgC":    //MEGACOULOMB
            valorCoulomb =valor*1000000;
            return valorCoulomb;
        case "abC":    //ABCOULOMB
            valorCoulomb =valor*10;
            return valorCoulomb;
        case "mAh":    //MILIAMPERE-HORA
            valorCoulomb =valor*3.6;
            return valorCoulomb;
        case "F":    //FARADAY
            valorCoulomb =valor*(9.64853415*(Math.pow(10,4)));
            return valorCoulomb;
        case "e":    //CARGA ELEMENTAR
            valorCoulomb =valor*(1.6021765314*(Math.pow(10,-19)));
            return valorCoulomb; 
    
    }
    }


    function valorParaUnidade(valorCoulomb,unidadesCargaEletricaPara){
	// Converter a partir COULOMB (2º caso)    
    switch (unidadesCargaEletricaPara) {
        case "nC":     //NANOCOULOMB
            Resultado =valorCoulomb*(1/Math.pow(10,-9));
            return Resultado;
        case "uC":    //MICROCOULOMB
            Resultado =valorCoulomb*(1/Math.pow(10,-6));
            return Resultado;  
        case "mC":     //MILICOULOMB
            Resultado =valorCoulomb*(1/Math.pow(10,-3));
            return Resultado;
        case "C":     //COULOMB
            Resultado =valorCoulomb*(1);
            return Resultado;
        case "kC":     //KILOCOULOMB
            Resultado =valorCoulomb*(1/1000);
            return Resultado;
        case "mgC":    //MEGACOULOMB
            Resultado =valorCoulomb*(1/1000000);
            return Resultado;
        case "abC":    //ABCOULOMB
            Resultado =valorCoulomb*(1/10);
            return Resultado;
        case "mAh":    //MILIAMPERE-HORA
            Resultado =valorCoulomb*(1/3.6);
            return Resultado;
        case "F":    //FARADAY
            Resultado =valorCoulomb*(1/(9.64853415*(Math.pow(10,4))));
            return Resultado;
        case "e":    //CARGA ELEMENTAR
            Resultado =valorCoulomb*(1/(1.6021765314*(Math.pow(10,-19))));
            return Resultado;
    }
    }
	
}
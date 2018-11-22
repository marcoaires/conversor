

function ConverterPeso() {

    de = document.getElementById('test1').value;
    para = document.getElementById('test2').value;
    valoraconverter = parseInt(document.getElementById('inputPeso').value);

    document.getElementById('outputPeso').style = "display:initial";
    


    if (de === "kg" && para === "g") {
        
        resultado = valoraconverter / 1000;
        document.getElementById('outputPeso').innerHTML = resultado;
    }

    
}
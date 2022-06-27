function encriptar(elemento){

    var texto=document.getElementById("mensaje").value;
    var codigoEncrip=texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    document.getElementById("tex").innerHTML=codigoEncrip;
    document.getElementById("foto").style.display="none";
    document.getElementById("frame5").style.display="none";
    document.getElementsByClassName("rectangulo").style.display="none";
    document.getElementById("btnCopiar").style.display= "block";

    }



    function desencriptar(elemento){
    var texto1=document.getElementById("mensaje").value;
    var codigoDesen=texto1.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.getElementById("tex").innerHTML=codigoDesen;
    
   

    }

    /*funcion copiar texto encriptado/desencriptado*/
    function copiarAlPortapapeles(elemento) {
      /* campo de texto */
      var aux = document.getElementById("tex");
      /* seleccionar el texto*/
      aux.select();
      /* copiar texto*/
      document.execCommand("copy");
    }
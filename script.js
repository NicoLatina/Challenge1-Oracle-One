function encriptar() {
    var texto = document.getElementById("input").value.toLowerCase();
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("persona").style.display = "none";
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("resultado1").innerHTML = txtcifrado;
    document.getElementById("input").innerHTML = " ";
    document.getElementById("copiar").style.display = "grid";
  }
  
  function desencriptar() {
    var texto = document.getElementById("input").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("persona").style.display = "none";
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("resultado1").innerHTML = txtcifrado;
    document.getElementById("input").innerHTML = " ";
    document.getElementById("copiar").style.display = "grid";
  }
  
function copia() {
  let copyText = document.querySelector("#resultado1");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("resultado1").innerHTML = " ";
}
let valor1;
let valor2;
let operacion;
let valorTotal;

function init(){
let  resultado = document.getElementById('resultado')
let  borrar = document.getElementById('borrar')
let  uno = document.getElementById('uno')
let  dos = document.getElementById('dos')
let  tres = document.getElementById('tres')
let  cuatro = document.getElementById('cuatro')
let  cinco = document.getElementById('cinco')
let  seis = document.getElementById('seis')
let  siete = document.getElementById('siete')
let  ocho = document.getElementById('ocho')
let  nueve = document.getElementById('nueve')
let  cero = document.getElementById('cero')
let  suma = document.getElementById('suma')
let  resta = document.getElementById('resta')
let  multiplicacion = document.getElementById('multiplicacion')
let  division = document.getElementById('division')
let  raiz = document.getElementById('raiz')
let  porciento = document.getElementById('porciento')
let  punto = document.getElementById('punto')
let  igual = document.getElementById('igual')
}
uno.onclick = function(e){
resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
borrar.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
raiz.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "**";
    limpiar();
}
igual.onclick = function(e){
    valor2 = resultado.textContent;
    resolver();
}
function resetear(){
    resultado.textContent = "";
    valor1 = 0;
    valor2 = 0;
    operacion = "";
  }
  function limpiar(){
    resultado.textContent = "";
  }
  function resolver(){
    let igual = 0;
    switch(operacion){
      case "+":
        valorTotal = Number(valor1) + Number(valor2);
        resultado.textContent = valorTotal;
        break;
      case "-":
          valorTotal = Number(valor1) - Number(valor2);
          resultado.textContent = valorTotal;
          break;
      case "*":
        valorTotal = Number(valor1) * Number(valor2);
        resultado.textContent = valorTotal;
        break;
      case "/":
        valorTotal = Number(valor1) / Number(valor2);
        if (valor2 === 0){alert("¡Error!, no se puede dividir entre '0'"),console.error("No se puede dividir entre '0'")}
        else {console.log(`El resultado es: ${resultado}`)}
        resultado.textContent = valorTotal;
        break;
      case "**":
        valorTotal = Math.sqrt(valor1) ;
        resultado.textContent = valorTotal;
        break;
    }
  }
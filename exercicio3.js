var cor = prompt("Informe uma das cores a seguir AZUL, VERDE e VERMELHO:");

if (cor == "azul") {
  document.getElementById("1").style.background = "#0000FF";
}
else if (cor == "verde") {
  document.getElementById("1").style.background = "#00FF00";
}
else if (cor == "vermelho") {
  document.getElementById("1").style.background = "#FF0000";
}
else {
  alert("Cor Invalida");
}

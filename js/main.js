function main() {
var tablero=initTablero();
var winner=startGame();
finishGame(winner);
}

function initTablero() {
  var tablero=[[],[],[],[],[],[],[],[],[]];
  tablero=minarTablero(tablero);
  tablero=calcularMinasAdyacentes(tablero);
  return tablero;
}

function startGame(tablero) {
  var tablero2=[["-"],["-"],["-"],["-"],["-"],["-"],["-"],["-"],["-"]];;
  var contador=81;
  var entrada;
  var x;
  var y;
  while(contador>10){
    entrada=solicitarEntradaTablero2();
    var x=entrada[0];
    var y=entrada[1];
    switch(verificarCoordenadas(x,y,tablero,tablero2){
        case 0:
      return false;
    case 1:
      contador--;
      actualizarTablero(x,y,tablero,tablero2);
      break;
    case 2:
      break;
    case 3:
      break;
  }
return true;
}

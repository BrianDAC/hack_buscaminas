function minarTablero(tablero) {
var contador;
var max =0;
//Dentro de la variable, llamo a un número aleatoria del 1 al 10. Si el número excede 5, entonces 
// se inserta una mina. Hasta alcanzar las 10.

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j <9; j++) {
      var contador = Math.floor((Math.random() * 10) + 1);
        if (contador > 5 && max < 10){
          tablero[i][j] = "*";
          max++;
        }
    }
    }
  return tablero;
  //Retorno el tablero con las minas.
}
	

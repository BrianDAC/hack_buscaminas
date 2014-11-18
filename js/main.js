function main() {
var tablero=initTablero();
var winner=startGame(tablero);
finishGame(winner);
}

function initTablero() {
  var tablero=[[],[],[],[],[],[],[],[],[]];
  console.log(tablero)
  tablero=minarTablero(tablero);
  tablero=calcularMinasAdyacentes(tablero);
  return tablero;
}

function startGame(tablero) {
  var tablero2=[["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-","-","-"]];

  var contador=81;
  var entrada;
  var x;
  var y;

  while(contador>10){
    entrada=solicitarEntrada(tablero2);
    var x=entrada[0];
    var y=entrada[1];
    switch(verificarCoordenadas(x,y,tablero,tablero2)){
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
}
return true;
}

function actualizarTablero(x,y,tab1,tab2)
{
 tab2[x][y]=tab1[x][y]
 return tab2
}

function calcularMinasAdyacentes(tablero){ //Probada
  var auxl=0;
  var auxs=0;
  var cont=0;
  var l=0;
  var s=0;
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      if (tablero[i][j]!="*"){
        auxl=i+1;
        auxs=j+1;
        cont=0;
        if (i-1>=0)
          l=i-1;
        else
          l=i;

        if (j-1>=0)
          s=j-1;
        else
          s=j;

        for (l;l<=auxl && l<9;l++){
          for (s;s<=auxs && s<9;s++){
            if (tablero[l][s] =="*")
              cont++;
          }
          if (j-1>=0)
            s=j-1;
          else
            s=j;

        }
        tablero[i][j]=cont;
      }
    }
  }
  return tablero;
}

function finishGame(winner){
  if(winner==true)
    alert("Felicidades has terminado el juego!");
  else
    alert("Lo siento has perdido, intenta de nuevo!");
}

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
  
//var tablero=[[-,-,-],[-,-,-],[-,-,-]]
//var ver=solicitarEntrada(tablero);

function solicitarEntrada(tablero2){
  var mostrar="";
  for(i=0; i<tablero2.length; i++){
    for(j=0; j<tablero2.length; j++){
      mostrar+=tablero2[i][j];
      
    }
  mostrar=mostrar + "\n";
  }
  var entrada= prompt(mostrar+"\nIndicar las coordenadas donde desea jugar: ");
return entrada;
}

function verificarCoordenadas(x, y, tablero, tablero2){


  if(x < tablero.length && y < tablero.length){
    if(tablero2[x][y] == "-"){
      if(tablero[x][y] == "1" || tablero[x][y] == "2" || tablero[x][y] == "3"||tablero[x][y] == "0"){
        return 1;
      }else{
        return 0;
      };
    }else{
      return 2;
    };
  }else{
    return 3;
  };
};

main()
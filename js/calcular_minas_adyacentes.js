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

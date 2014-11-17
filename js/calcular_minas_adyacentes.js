function calcularMinasAdyacentes(tablero){ //NO HE PROBADO TODAVIA!
  var auxl=0;
  var auxs=0;
  var cont=0;
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      if (tablero[i][j]!="*"){
        auxl=i+1;
        auxs=j+1;
        cont=0;
        for (var l=i-1;l<auxl;l++){
          for (var s=j-1;s<auxs;s++){
            if (tablero[l][s]!=undefined && tablero[l][s] =="*" && (l!=i || s!=j))
              cont++;
          }
        }
        tablero[i][j]=cont;
      }
    }
  }
  return tablero;
}

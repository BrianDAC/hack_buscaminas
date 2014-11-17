//var tablero=[[-,-,-],[-,-,-],[-,-,-]]
//var ver=solicitarEntrada(tablero);

function solicitarEntrada(tablero2){
	var mostrar="";
	for(i=0; i<tablero2.length; i++){
		for(j=0; j<tablero2.length; j++){
			mostrar+=tablero2[i][j];
			
		}
	mostrar="\n";
	}
	var entrada= prompt(mostrar+"\nIndicar las coordenadas donde desea jugar: ");
return entrada;
}

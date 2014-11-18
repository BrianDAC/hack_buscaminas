function verificarCoordenadas(x, y, tablero, tablero2){
	if(x < tablero.length && y < tablero.length){
		if(tablero2[x][y] == "-"){
			if(tablero[x][y] == "1" || tablero[x][y] == "2" || tablero[x][y] == "3"){
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

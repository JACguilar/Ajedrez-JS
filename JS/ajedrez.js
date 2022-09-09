const mesa = document.getElementById("box_tablero");
const tablero = mesa.getContext("2d");
const ancho = mesa.width;
const fila = 8;
const columna = 8;
const casilla = ancho / 8;
let colorClaro = "#EEEEEE";
let colorOscuro = "#398AB9";
const colorPieza = "black";


//se dibuja el tablero
let TEMA = {
  //casillas color de relleno segun tema
  claro: colorClaro,
  oscuro: colorOscuro,
};


let chessBoard = []; //tablero inicializado
for (let x = 0; x < fila; x++) {
  chessBoard[x] = [];

  for (let y = 0; y < columna; y++) {
    chessBoard[x][y] = null;
  }
}
//fin tablero

/* llenado de tablero con piezas */

chessBoard[0][1] = {
  piezaTipo: chessPiece.pawn,
};

chessBoard[1][1] = {
  piezaTipo: chessPiece.pawn,
};
chessBoard[2][1] = {
  piezaTipo: chessPiece.pawn,
};
chessBoard[3][1] = {
  piezaTipo: chessPiece.pawn,
};
chessBoard[4][1] = {
  piezaTipo: chessPiece.pawn,
};
chessBoard[5][1] = {
  piezaTipo: chessPiece.pawn,
};
chessBoard[6][1] = {
  piezaTipo: chessPiece.pawn,
};
chessBoard[7][1] = {
  piezaTipo: chessPiece.pawn,
};

renderChessBoard();



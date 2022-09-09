const mesa = document.getElementById("box_tablero");
const tablero = mesa.getContext("2d");
const ancho = mesa.width;
const fila = 8;
const columna = 8;
const casilla = ancho / 8;
let colorClaro = "#EEEEEE";
let colorOscuro = "#398AB9";
const bando0 = "#992b00";
const bando1 = "#1b008f";

//se dibuja el tablero
let chessBoard = []; //tablero inicializado
for (let x = 0; x < fila; x++) {
  chessBoard[x] = [];

  for (let y = 0; y < columna; y++) {
    chessBoard[x][y] = null;
  }
}
//fin tablero

/* llenado de tablero con piezas */
for (let i = 0; i < fila; i += 1) {
  chessBoard[i][1] = {
    piezaTipo: chessPiece.pawn,
    bando: bando0,
  };
  chessBoard[i][6] = {
    piezaTipo: chessPiece.pawn,
    bando: bando1,
  };
}

for (i = 0; i < 2; i += 1) {
  chessBoard[0][i * 7] = {
    piezaTipo: chessPiece.tower,
    bando: !i ? bando0 : bando1,
  };

  chessBoard[1][i * 7] = {
    piezaTipo: chessPiece.knigth,
    bando: !i ? bando0 : bando1,
  };

  chessBoard[2][i * 7] = {
    piezaTipo: chessPiece.bishop,
    bando: !i ? bando0 : bando1,
  };

  chessBoard[3][i * 7] = {
    piezaTipo: chessPiece.queen,
    bando: !i ? bando0 : bando1,
  };
  chessBoard[4][i * 7] = {
    piezaTipo: chessPiece.king,
    bando: !i ? bando0 : bando1,
  };

  chessBoard[5][i * 7] = {
    piezaTipo: chessPiece.bishop,
    bando: !i ? bando0 : bando1,
  };

  chessBoard[6][i * 7] = {
    piezaTipo: chessPiece.knigth,
    bando: !i ? bando0 : bando1,
  };
  chessBoard[7][i * 7] = {
    piezaTipo: chessPiece.tower,
    bando: !i ? bando0 : bando1,
  };
}

renderChessBoard();

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  tablero.beginPath();
  tablero.strokeStyle = color;
  tablero.moveTo(xinicial, yinicial);
  tablero.lineTo(xfinal, yfinal);
  tablero.stroke();
  tablero.closePath();
}

function renderChessBoard() {
  tablero.textBaseline = "middle";
  tablero.textAlign = "center";
  let TEMA = {
    //casillas color de relleno segun tema
    claro: colorClaro,
    oscuro: colorOscuro,
  };

  for (let x = 0; x < fila; x++) {
    for (let y = 0; y < columna; y++) {
      let recColor = TEMA.oscuro;
      let textColor = TEMA.claro;
      if ((x + y) % 2) {
        recColor = TEMA.claro;
        textColor = TEMA.oscuro;
      }
      tablero.fillStyle = recColor;
      tablero.fillRect(x * casilla, y * casilla, casilla, casilla);
      tablero.fillStyle = textColor;
      tablero.font = "10px Arial";

      tablero.fillText(
        `${x}:${y}`,
        x * casilla + 10,
        y * casilla + 10,
        casilla,
        casilla
      );
      const pieza = chessBoard[x][y];
      if (pieza) {
        textColor = chessBoard[x][y].bando;
        tablero.fillStyle = textColor;
        tablero.font = "75px Arial";
        tablero.fillText(
          chessBoard[x][y].piezaTipo,
          x * casilla + casilla / 2,
          y * casilla + casilla / 2,
          casilla,
          casilla
        );
      }
    }
  }
  console.log(chessBoard);
}

chessPiece = {
  //piezas ♔♕♖♗♘♙♚♛♜♝♞♟
  queen: "♛",
  king: "♚",
  tower: "♜",
  bishop: "♝",
  knigth: "♞",
  pawn: "♟",
};

class Piece {
  constructor(nombre, simbolo, grupo) {
    this.name = nombre;
    this.sound;
    this.move;
    this.specialMove;
    this.value;
    this.imagen = simbolo;
    this.cluster = grupo;
    /*    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor]; */
  }
  /* let imagenes = []; */
  /*  mostrar() {
    document.body.appendChild(this.imagen) + "<br />";
  } */
}

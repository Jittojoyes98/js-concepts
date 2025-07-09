import React, { useCallback, useState } from "react";
import "./Machine1.css";

const Machine1 = () => {
  const Board = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));
  const [pieces, setPieces] = useState([
    { type: "P1", x: 1, y: 2 },
    { type: "P2", x: 2, y: 3 },
  ]);
  const [selectedPiece, setSelectedPiece] = useState();
  const [moves, setMoves] = useState();

  const placePiece = (checkX, checkY) => {
    let piece = "";
    const placedPiece = pieces.map((p) => {
      if (p.x === checkX && p.y === checkY) {
        piece = p.type;
      }
    });
    return piece;
  };
  const handleMove = (i, j) => {
    let direction = 1;
    let left = placePiece(i + direction, j + 1);
    let right = placePiece(i + direction, j - 1);
    let ans = [{ mX: i + direction, mY: j, class: "move" }];
    if (left) {
      ans.push({ mX: i + direction, mY: j + 1, class: "move kill" });
    }
    if (right) {
      ans.push({ mX: i + direction, mY: j - 1, class: "move kill" });
    }
    setMoves(ans);
  };
  const handleSelectedPiece = (currentPiece, i, j) => {
    if (!currentPiece) {
      setSelectedPiece();
      setMoves();
      return;
    }
    setSelectedPiece({ type: currentPiece, sX: i, sY: j });
    handleMove(i, j);
  };
  const checkMoveType = useCallback(
    (x, y) => {
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].mX === x && moves[i].mY === y) {
          return moves[i].class;
        }
      }
      return "";
    },
    [moves]
  );
  const handleDragDrop = (e) => {
    let y = e.target.id % 10;
    let x = Math.floor(e.target.id / 10);
    if (!e.target.classList.contains("drag-over")) {
      return;
    }
    e.target.classList.remove("drag-over");
    let removePiece = pieces.filter(
      (piece) => !(piece.x == x - 1 && piece.y == y - 1)
    );
    let currentPieces = removePiece.map((piece) => {
      if (piece.type === selectedPiece.type) {
        piece.x = x - 1;
        piece.y = y - 1;
      }
      return piece;
    });
    setPieces([...currentPieces]);
    setMoves();
    setSelectedPiece();
  };
  const handleDragStart = (e) => {
    console.log(e.target);
  };

  function dragOver(e) {
    e.preventDefault();
    let y = e.target.id % 10;
    let x = Math.floor(e.target.id / 10);
    if (checkMoveType(x - 1, y - 1)) {
      e.target.classList.add("drag-over");
    }
  }
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove("drag-over");
  };
  return (
    <div>
      <p>Chess movements for pawns</p>
      {Board.map((row, i) => {
        return (
          <div className="row" key={i}>
            {row.map((col, j) => {
              let currentPiece = placePiece(i, j);
              let selected = selectedPiece?.sX === i && selectedPiece?.sY == j;
              let idNumber = (i + 1) * 10 + (j + 1);
              return (
                <div
                  key={idNumber}
                  id={`${idNumber.toString()}`}
                  className={`${(i + j) % 2 == 0 ? "black" : "white"} ${
                    selected ? "selected" : ""
                  }  ${moves ? checkMoveType(i, j) : ""} node`}
                  onClick={() => handleSelectedPiece(currentPiece, i, j)}
                  onDragOver={dragOver}
                  onDragStart={handleDragStart}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDragDrop}
                >
                  <p
                    id={`${idNumber.toString()}`}
                    draggable={selected}
                    className={selected ? "draggable" : ""}
                  >
                    {currentPiece}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Machine1;

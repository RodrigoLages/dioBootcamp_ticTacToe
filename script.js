const squares = document.getElementsByClassName("square");
const playerSelected = document.getElementById("player-selected");
const winnerSelected = document.getElementById("winner-selected");
const button = document.getElementById("reset");
var player = null;

function changePlayer(value) {
  player = value;
  playerSelected.innerHTML = player;
}

changePlayer("X");

function isSequence(s1, s2, s3) {
  if (
    s1.innerHTML != "-" &&
    s1.innerHTML == s2.innerHTML &&
    s1.innerHTML == s3.innerHTML
  ) {
    s1.style.background = "#0f0";
    s2.style.background = "#0f0";
    s3.style.background = "#0f0";
    return true;
  } else {
    return false;
  }
}

function hasWinner() {
  if (isSequence(squares[0], squares[3], squares[6])) {
    return true;
  }
  if (isSequence(squares[1], squares[4], squares[7])) {
    return true;
  }
  if (isSequence(squares[2], squares[5], squares[8])) {
    return true;
  }
  if (isSequence(squares[0], squares[1], squares[2])) {
    return true;
  }
  if (isSequence(squares[3], squares[4], squares[5])) {
    return true;
  }
  if (isSequence(squares[6], squares[7], squares[8])) {
    return true;
  }
  if (isSequence(squares[0], squares[4], squares[8])) {
    return true;
  }
  if (isSequence(squares[2], squares[4], squares[6])) {
    return true;
  }

  return false;
}

//Each click
for (let element of squares) {
  element.addEventListener("click", function () {
    if (element.innerHTML != "-" || winnerSelected.innerHTML != "") {
      return;
    }

    element.innerHTML = player;
    element.style.color = "#000";

    if (hasWinner()) {
      winnerSelected.innerHTML = player;
    }

    if (player == "X") {
      changePlayer("O");
    } else {
      changePlayer("X");
    }
  });
}

//Reset button
button.addEventListener("click", function () {
  winnerSelected.innerHTML = "";
  changePlayer("X");

  for (let element of squares) {
    element.innerHTML = "-";
    element.style.color = "#eee";
    element.style.background = "#eee";
  }
});

var squares = document.getElementsByClassName("square");
var player = null;
var playerSelected = document.getElementById("player-selected");

function changePlayer(value) {
  player = value;
  playerSelected.innerHTML = player;
}

changePlayer("X");

//Each click
for (let element of squares) {
  element.addEventListener("click", function () {
    if (element.innerHTML != "-") {
      return;
    }

    element.innerHTML = player;
    element.style.color = "#000";

    if (player == "X") {
      changePlayer("O");
    } else {
      changePlayer("X");
    }
  });
}

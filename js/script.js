const squares = document.querySelectorAll(".square");
let currentPlayer = "X";
let gameActive = true;

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (gameActive && square.textContent === "") {
      square.textContent = currentPlayer;
      if (checkWin()) {
        document.getElementById(
          "error_message1"
        ).innerHTML = `${currentPlayer} Thắng!`;
        gameActive = false;
      } else if (checkDraw()) {
        document.getElementById("error_message1").innerHTML = `Hòa!`;
        gameActive = false;
      } else {
        switchPlayer();
      }
    }
  });
});

document.querySelector(".reset-btn").addEventListener("click", resetGame);

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return checkRows() || checkColumns() || checkDiagonals();
}

function checkRows() {
  for (let i = 0; i < 9; i += 3) {
    if (
      squares[i].textContent !== "" &&
      squares[i].textContent === squares[i + 1].textContent &&
      squares[i + 1].textContent === squares[i + 2].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkColumns() {
  for (let i = 0; i < 3; i++) {
    if (
      squares[i].textContent !== "" &&
      squares[i].textContent === squares[i + 3].textContent &&
      squares[i + 3].textContent === squares[i + 6].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  if (
    squares[0].textContent !== "" &&
    squares[0].textContent === squares[4].textContent &&
    squares[4].textContent === squares[8].textContent
  ) {
    return true;
  }
  if (
    squares[2].textContent !== "" &&
    squares[2].textContent === squares[4].textContent &&
    squares[4].textContent === squares[6].textContent
  ) {
    return true;
  }
  return false;
}

function checkDraw() {
  return Array.from(squares).every((square) => square.textContent !== "");
}

function resetGame() {
  squares.forEach((square) => {
    square.textContent = "";
  });
  document.getElementById("error_message1").innerHTML = "";
  currentPlayer = "X";
  gameActive = true;
}

// login

function dangnhap() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user == "admin") {
  } else {
  }
  if (user == "admin" && pass == "admin" && gameActive) {
    window.open("index.html");
    window.close();
  } else {
    document.getElementById("error_message").innerHTML =
      "Tên đăng nhập hoặc mật khẩu không đúng.";
    return false;
  }
}

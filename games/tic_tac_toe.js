function drawMessage() {
  console.log("it's tiee");
}

function winMessage(player) {
  console.log(`${player} won the game`);
}

function board() {
  const ticTacToeBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  return ticTacToeBoard;
}

function formatBoard(board) {
  for (let index = 0; index < 3; index++) {
    console.log(board[index].join(' | '));
    if (index < board.length - 1) {
      console.log('-'.repeat(9));
    }
  }
  return board;
}

function rowIndex(position) {
  return Math.floor((position - 1) / 3);
}

function colIndex(position) {
  return Math.floor((position - 1) % 3);
}

function enterPosition(player) {
  return parseInt(prompt('heyy ' + player + ',enter your position (1-9): '));
}

function isValidPosition(pos) {
  return pos >= 1 && pos <= 9;
}

function isCellOccupied(pos, ticTacBoard) {
  const row = rowIndex(pos);
  const col = colIndex(pos);
  return ticTacBoard[row][col] !== ' ';
}

function updateBoard(pos, symbol, ticTacBoard) {
  const row = rowIndex(pos);
  const col = colIndex(pos);
  ticTacBoard[row][col] = symbol;
  formatBoard(ticTacBoard);
}

function isGameOver(currentMoves) {
  const winningCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let index = 0; index < winningCombinations.length; index++) {
    if (checkCombinations(currentMoves, winningCombinations[index])) {
      return true;
    }
  }
  return false;
}

function checkCombinations(currentMoves, combo) {
  let matchFound = 0;
  for (let term = 0; term < currentMoves.length; term++) {
    const element = currentMoves[term];
    if (combo.includes(element)) {
      matchFound++;
    }
  }
  return matchFound === 3;
}

function playedMoves(p1Moves, p2Moves) {
  return p1Moves.length + p2Moves.length;
}

function currentPlayerDetails(moves, player1, player2) {
  const playerDetails = [];

  if (moves % 2 === 0) {
    playerDetails.push(player1, '❌');
    return playerDetails;
  }
  playerDetails.push(player2, '🔴');
  return playerDetails;
}

function getUserInput(playerDetails, ticTacBoard) {
  const pos = enterPosition(playerDetails[0]);

  if (!isValidPosition(pos) || isCellOccupied(pos, ticTacBoard)) {
    console.log('invalid input');
    return getUserInput(playerDetails, ticTacBoard);
  }

  return pos;
}

function playGame(player1, player2, ticTacBoard) {
  const p1Moves = [];
  const p2Moves = [];
  while (playedMoves(p1Moves, p2Moves) < 9) {
    const moves = playedMoves(p1Moves, p2Moves);
    const playerDetails = currentPlayerDetails(moves, player1, player2);
    const pos = getUserInput(playerDetails, ticTacBoard);

    updateBoard(pos, playerDetails[1], ticTacBoard);
    const currentMoves = moves % 2 === 0 ? p1Moves : p2Moves;
    currentMoves.push(pos);

    if (isGameOver(currentMoves)) {
      return winMessage(playerDetails[0]);
    }
  }
  drawMessage();
}

function startGame() {
  const player1 = prompt('Enter player1 Name : ');
  const player2 = prompt('Enter player2 Name : ');

  const ticTacBoard = board();
  formatBoard(ticTacBoard);
  playGame(player1, player2, ticTacBoard);
}

startGame();

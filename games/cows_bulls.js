
function startGame() {
  const randomNumber1 = Math.floor(Math.random() * 10);
  const randomNumber2 = Math.floor(Math.random() * 10);
  const randomNumber3 = Math.floor(Math.random() * 10);
  const randomNumber4 = Math.floor(Math.random() * 10);
  const randomArray = [];
  randomArray.push(randomNumber1, randomNumber2, randomNumber3, randomNumber4);
  return chance(randomArray);
}

function chance(randomArray) {
  const NoOfChance = prompt('How many chances do you need?');
  const chance = parseInt(NoOfChance);

  return PlayCowsAndBulls(randomArray, chance);
}
function playAgain() {
  const isInterest = confirm('yeaah congrats...Do you want to play again?');
  return isInterest ? startGame() : '🤩' + 'Thanks for Playing';
}
function moreChance(randomArray) {
  const isInterest = confirm('you lost...Do you want more chance?');
  return isInterest ? chance(randomArray) : '🤩' + 'Thanks for Playing';
}

function PlayCowsAndBulls(randomArray, chance) {
  let isFound = false;
  for (let curChance = 0; curChance < chance && !isFound; curChance++) {
    const guess = prompt('guess ur number :');
    const guessedArray = [];
    guessedArray.push(parseInt(guess[0]),parseInt(guess[1]),parseInt(guess[2]),parseInt(guess[3]));
    isFound = isMatch(randomArray, guessedArray);
  }
  console.log('-'.repeat(20)); 
  return isFound ? playAgain() : moreChance(randomArray);
}

function isMatch(randomArray, guessedArray) {
  let cows = 0, bulls = 0;
  if (randomArray.includes(guessedArray[0])) 
    randomArray[0] === guessedArray[0] ? bulls++ :cows++;
  
  if (randomArray.includes(guessedArray[1])) 
    randomArray[1] === guessedArray[1] ? bulls++ : cows++;
  
  if (randomArray.includes(guessedArray[0])) 
    randomArray[2] === guessedArray[2] ? bulls++ : cows++;

  if (randomArray.includes(guessedArray[0])) 
    randomArray[3] === guessedArray[3] ? bulls++ : cows++;  

  console.log('Cows : ' + cows + '|' + ' Bulls : ' + bulls);
  return bulls === 4;
}

console.log(startGame());

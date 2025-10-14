function startGame() {
  const randomNumber1 = Math.floor(Math.random() * 10);
  const randomDigits = [];
  randomDigits.push(randomNumber1);
  while (randomDigits.length < 4) {
    const newValue =  Math.floor(Math.random() * 10);
    if (!randomDigits.includes(newValue)){
      randomDigits.push(newValue);
    }
  }
  return chance(randomDigits);
}

function chance(randomDigits) {
  const NoOfChance = prompt('How many chances do you need?');
  const chance = parseInt(NoOfChance);
  return PlayCowsAndBulls(randomDigits, chance);
}
function playAgain() {
  const isInterest = confirm('yeaah congrats...Do you want to play again?');
  return isInterest ? startGame() : '🤩' + 'Thanks for Playing';
}
function moreChance(randomDigits) {
  const isInterest = confirm('you lost...Do you want more chance?');
  return isInterest ? chance(randomDigits) : '🤩' + 'Thanks for Playing , the Number was ' + randomDigits;
}

function getGuess() {
  const guess = prompt('guess ur number :');
  if (guess.length < 4 || guess.length > 4) {
    console.log('invalid input');
    return getGuess();
  }
  const numbers = '0123456789';
  let string = '';
  for (let index = 0; index < guess.length; index++) {
    if (!numbers.includes(guess[index]) || string.includes(guess[index])) {
      console.log('invalid input');
      return getGuess();
    }
    string += guess[index];
  }
  return guess;
}

function PlayCowsAndBulls(randomDigits, chance) {
  let isFound = false;
  for (let curChance = 0; curChance < chance && !isFound; curChance++) {
    const guess = getGuess();  
    const guessedDigits = guessDigits(guess);
    
    const bulls = countBull(randomDigits, guessedDigits);
    const cows = countCows(randomDigits, guessedDigits, bulls);
    console.log('Cows : ' + cows + '|' + ' Bulls : ' + bulls);
    isFound = bulls === 4;
  }
  console.log('-'.repeat(20));
  return isFound ? playAgain() : moreChance(randomDigits);
}

function guessDigits(guess) {
  const guessedArray = [];
  guessedArray.push(parseInt(guess[0]));
  guessedArray.push(parseInt(guess[1])); 
  guessedArray.push(parseInt(guess[2])); 
  guessedArray.push(parseInt(guess[3]));
  return guessedArray;
}

function requestFourDigit(randomString, chance) {
  console.log('heyy enter 4digit number');
  return PlayCowsAndBulls(randomString, chance);
}

function countBull(randomArray, guessedArray) {
  let bulls = 0;
  for (let index = 0; index < randomArray.length; index++) {
    if (guessedArray[index] === randomArray[index]) {
      bulls++;
    }
  }
  return bulls;
}

function countCows(randomArray, guessedArray, bulls) {
  let count = 0;
  for (let index = 0; index < randomArray.length; index++) {
    if (randomArray.includes(guessedArray[index])) {
      count++;
    }
  }
  console.log(randomArray);
  
  return count - bulls;
}

console.log(startGame());

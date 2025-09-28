function distanceBwVowels(text) {
  let distance = 0;
  let prevDistance = 0;
  let shortestDistance = 0;
  let prevVowel = -1000;

  for (let index = 0; index < text.length; index++){
    let vowel;
    
    if (isVowel(text[index])) {
      vowel = index;
      distance = vowel - prevVowel;      
      prevVowel = vowel;

      shortestDistance = distance < prevDistance ? distance : prevDistance;
      prevDistance = distance;
      
    }
  }

  return shortestDistance === 0 ? -1 : shortestDistance;
}

function isVowel(character) {
  const vowel = "aeiou";

  for (let index = 0; index < vowel.length; index++) {
    if (vowel[index] === character) {
      return true;
    }
  }

  return false;
}



function testDistanceBwVowels(text,expectedResult) {
  const realValue = distanceBwVowels(text);
  const message = composeMessage(text, realValue, expectedResult);

  console.log(message);
}

function composeMessage(text, realValue, expectedResult) {
  const actual = " real value is " + realValue;
  const expected = " expecteed value " + expectedResult;
  const symbol = realValue === expectedResult ? " ✅ " : " ❌ ";

  return symbol + text + actual + expected;
}

function testAll() {
  testDistanceBwVowels('ab', -1);
  testDistanceBwVowels('abcb', -1);
  testDistanceBwVowels('abab', 2);
  testDistanceBwVowels('abcaba', 2);
  testDistanceBwVowels('hello', 3);
  testDistanceBwVowels('lkjhgf', -1)
}

testAll();

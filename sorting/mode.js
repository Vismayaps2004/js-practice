function randomData(noOfElements, lower, upper) {
  const randomNumbers = [];

  for (let index = 0; index < noOfElements; index++) {
    const elements = lower + (Math.random() * (upper - lower));
    randomNumbers.push(Math.floor(elements));
  }

  return randomNumbers;
}

function frequencyOf(value, data, index) {
  let count = 0;
  
  for (let i = index; i < data.length; i++) {
    if (data[i] === value) {
      count++;
    }
  }
  
  return count;
}

function modeValues(value, modes, freq, highestFreq) {
  if (freq === 1)
    return modes;
  
  if (freq === highestFreq) {
    modes.push(value)
    return modes;
  }
  
  return [value];
}

function modeOf(data) {
  let modes = [-1];
  let highestFrequency = 0;
  
  for (let index = 0; index < data.length - 1; index++) {
    const frequency = frequencyOf(data[index], data, index);
    if (frequency >= highestFrequency) {
      modes = modeValues(index, modes, frequency, highestFrequency);
      highestFrequency = frequency;
    }
  }
  
  return modes;
}

function main() {
  const noOfElements = 5;
  const lowerLimit = 1;
  const upperLimit = 10;
  // const data = [1, 3, 5, 6];
  const data = randomData(noOfElements, lowerLimit, upperLimit);
  console.log('Random Data :', `${data}`);
  console.log('Mode :', `${modeOf(data)}`);
}

main();

function randomData(noOfElements, lower, upper) {
  const randomNumbers = [];

  for (let index = 0; index < noOfElements; index++) {
    const elements = lower + (Math.random() * (upper - lower));
    randomNumbers.push(Math.floor(elements));
  }

  return randomNumbers;
}

function sort(data) {
  const sortedData = data.slice();

  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

function median(data) {
  const midPoint = Math.floor(data.length / 2);
  return sort(data)[midPoint];
}

function sum(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }

  return sum;
}

function mean(data) {
  const sumOfElements = sum(data);
  return (Math.round(sumOfElements / data.length));
}

function square(value) {
  return value * value;
}

function squares(data) {
  let squaresOfElement = [];

  for (let index = 0; index < data.length; index++) {
    squaresOfElement.push(square(data[index]));
  }

  return squaresOfElement;
}

function deviationArray(data) {
  const meanValue = mean(data);
  const deviation = [];

  for (let index = 0; index < data.length; index++) {
    deviation.push(meanValue - data[index]);
  }

  return deviation;
}

function standardDeviation(data) {
  const deviation = deviationArray(data);
  const square = squares(deviation);
  const sumOfSquare = sum(square);

  return Math.sqrt(sumOfSquare / data.length);
}


function statistics(data) {
  console.log('Mean :', `${mean(data)}`);
  console.log('Median :', `${median(data)}`);
  console.log('Standard deviation :', `${standardDeviation(data)}`);
  
}

function main() {
  const noOfElements = 5;
  const lowerLimit = 1;
  const upperLimit = 10;
  // const data = [1, 3, 5, 6];
  const data = randomData(noOfElements, lowerLimit, upperLimit);
  console.log('Random Data', `${data}`);
  console.log('Sorted Data', `${sort(data)}`);
  
  statistics(data);
}

main();

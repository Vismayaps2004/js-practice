const inputNumber = 15;
for (let count = 1; count <= inputNumber; count++){
    let value = 0;
    let finalResult = 1;
    while (value < count){
        finalResult = finalResult * ( value + 1 );
        value++;
    }
    console.log("Factorial of ", value, "is", finalResult);
}

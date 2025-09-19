const totalNumbers = 99;
for (let value = 2; value<= totalNumbers; value++){
    let isPrime = true;
    let divisor = 2;
    while (divisor < value && isPrime){
        if (value % divisor === 0){
            isPrime = false; 
        }
        divisor++;
    }

    const finalOutput = isPrime ? "is prime" : "is composite" ;
    console.log(value,finalOutput );
}

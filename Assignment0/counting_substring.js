// converting to binary
let dividend = 19;
let divisor = 2;
let binary = "";
console.log("Input number :", dividend);
while (divisor - 1 <= dividend){
    let reminder = dividend % divisor;
    let integer = (dividend - reminder) / divisor;
    dividend = integer;
    binary = reminder + binary;
}
console.log("Binary :" , binary );
// counting number of substrings
let i = 0;
let count = 0;
let substring = "01";
for (let value = binary[i]; value <= binary.length - 1; value++ ){
    let string = binary[i] + binary[i+1]
    if (substring === string ){
        count++;
    }
    i++;
}
console.log("Substring :",substring);

console.log("Count : ", count);

let dividend = 255;
let divisor = 2;
let string = "";
while (divisor <= dividend){
    let reminder = dividend % divisor;
    let integer = (dividend - reminder) / divisor;
    dividend = integer;
    string = string + reminder;

}
string = string + dividend;
console.log("Binary  is " , string );

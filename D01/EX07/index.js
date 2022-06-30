function getRandomInt(max) {
  //your code
  return Math.floor(Math.random() * max);
}
let number1 = getRandomInt(101)
let number2 = getRandomInt(101)

function moduloEx7(number1, number2) {
  //your code
  let string = ``
  if (number1 > number2) {
    string =`The number ${number1} is bigger than ${number2}`;

    if(number1 % number2 !== 0) {
      string = string + `. But the modulo of ${number1} % ${number2} is ${number1 % number2}`;
    } 
  } else if(number1 === number2) {
       string = `The number ${number1} is equal to ${number2}`;
    } else {
       string = `The number ${number1} is less than ${number2}`;
    }
    console.log(string);
   
    
    document.getElementById("output").innerHTML = string; 
}
let string = moduloEx7(number1,number2);
console.log(document.getElementById("output").innerHTML);


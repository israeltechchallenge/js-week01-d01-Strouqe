function moduloEx5(number1,number2) {
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
    console.log(string)
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };

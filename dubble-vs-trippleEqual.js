// double equal just check the value but Triple equal check both value and types

// double equal
const first = 2;
const second = '2';        
if (first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
// result true


// triple equal
const firstNum = 2;
const secondNum = '2';        
if (firstNum === secondNum){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
// result false


// something Advanced
const firstNumber = 0;               // or firstNumber = 1 and secondNumber = true ==> condition is true ___ but triple equal dile false
const secondNumber = false;        
if (firstNumber == secondNumber){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
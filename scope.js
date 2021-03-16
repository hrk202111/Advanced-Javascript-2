const bonus = 30;          // global scope a ace ===> jekhan the icca call kora jabe

function sum(first,second) {
    let result = first + second + bonus;   // bonus global scope
    // console.log(result);          // scope er vitor ei call krsi.. tai paoa jabe
    return result
}
const output = sum(3 , 7);
// console.log(output);
// console.log(bonus);        //global scope 
// console.log(result);    // hobe na...karon result er man function er vitor tai ata nirdisto scope er vitor ace




function sum2(first,second) {
    let result2 = first + second   
    if(result2 > 9){
        let mood = 'happy'
        mood = 'funky'
        // console.log(mood);    // scope er vitor tai hobe tobe var dile scope lage na
    }   
    // console.log(mood);     // scope er baire tai hobe na tobe __ otai var diye declare korle leek hobe 
           
}
const output2 = sum2(6,9)
console.log(output2);





// summery
// let and const scope variable but var whesting kore and leak hoy

// for more know search thatjsdude.com  and click scope related article and read
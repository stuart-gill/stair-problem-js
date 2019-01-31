

let num = prompt("Enter a number");
num = parseInt(num);
console.log(twoSpeed(num));

function twoSpeed(stairs) {
    let answerSet = [0,1,2];

    if (stairs>2){
        for(let i=2;i<(stairs);i++){
            let newElement = answerSet[i] + answerSet[i-1];
            answerSet.push(newElement);
        }
    }
    return(`num of combos is ${answerSet[stairs]}`);
 }




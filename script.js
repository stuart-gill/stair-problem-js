

let num = prompt("Enter a number");
num = parseInt(num);
console.log(twoSpeed(num));

function twoSpeed(n) {
    let answerSet = [1,2];

    if (n>2){
        for(let i=1;i<(n-1);i++){
            let newElement = answerSet[i] + answerSet[i-1];
            answerSet.push(newElement);
        }
    }
    return(`num of combos is ${answerSet[n-1]}`);
 }




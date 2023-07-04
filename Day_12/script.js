// Write a function min that takes two arguments 
// and returns their minimum.
function min(num1, num2){
    return num1 < num2 ?  num1 : num2
}

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

// Write a function countChar that takes two arguments 
// and returns character count in a string
function countChar(word, char){
    let count = i = 0;
    for (; i < word.length; i++)
        if (word[i] === char) count++;
    return count;
}

// Using countChar(), write a function countBs that takes an 
// arguments and returns character 'B' count in a string
function countBs(word){
    return countChar(word, 'B');
}

console.log(countChar("kakkerlak", 'k')) // → 4
console.log(countBs("BBC")) // → 2
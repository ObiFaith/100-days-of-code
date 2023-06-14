// The environment is the set of bindings (variables) that are defined.

// Exercises on Program Structure (Eloquent JS)
    // Task 1 : Looping through Triangle 
for (let i = 0; i <= 7; i++){
    let hash = "";
    for (let j = 0; j < i; j++){
        hash += '#';
    }
    console.log(hash);
} 

    // Task 2 : FizzBuzz
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 !== 0)
        console.log("Fizz");
    else if (i % 5 === 0 && i % 3 !== 0)
        console.log("Buzz");
    else if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else
        console.log(i);
}
    //OR

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else
        console.log(i);
}

        // Task 3 : Chessboard (8 * 8 Grid)
    // Lazy Code ( Cheat... Lol )
let firstChar = " # # # #";
let secondChar = "# # # # ";

for (let i = 0; i < 8; i++){
    if (i % 2 === 0)
        console.log(firstChar);
    else
        console.log(secondChar);
} 

    // Better code for Task 3
for (let i = 1; i <= 8; i++){
    let char = '';
    for (let j = 0; j < 8; j++){
        if ((i + j) % 2 === 0)
            char += '#';
        else
            char += ' ';
    }
    console.log(char);
}

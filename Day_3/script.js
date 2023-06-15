    //Function
// A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it.

// NB: In Js, there is a difference between Function Definition and Declaration
// let square = function(num) {return num * num}; // Function Definition : Can be used in an expression as a value (Known as Function Expression)
// function square(num) {return num * num} // Function Declaration 
// const square = num => num * num // Arrow Function 

    // Difference between Function Definition (FDF) and Function Declaration (FDC):
/*
1. FDF requires a semi-colon while FDC doesn't
2. FDF is treated as a value and can be reassign while FDC must be called if it needs to return a value
3. FDF are part of the top-to-bottom flow of control while FDC are not (without worrying about having to define all functions before they are used)
*/

const square = num => num * num;
let sq = square;
console.log(sq(4));
    // Expression
/* Expression are anything that returns a value. A function can be an expression if it has a return a value */

    // isNaN() and Number.isNaN()
/* isNaN() returns true if the value is not a number while Number.isNaN() returns true only if a number is not a number */

// console.log(isNaN(undefined)); // returns true since undefined is not a number
// console.log(Number.isNaN(0 / 0)) // returns false. 0 / 0 in maths is infinity (which is a Number) but not a number(NaN) in JS

    // Numbers used for each tasks
let num1 = 2, num2 = 5, num3 = -1, num4 = -5, num5 = 0; // Modify the value of each variable and guess the output for each task

    // Task 1 : Displays the largest integer between two integers.    
if (num1 < num2)
    console.log("The largest integer between the two integers is ", num2);
else
    console.log("The largest integer between the two integers is ", num1); 


    // Task 2 : Find the sign of the product of three numbers. Display an alert box with the specified sign.
if (num1 * num2 * num3 < 0)
    alert("The sign is -");
else
    alert("The sign is +"); 

    // Task 3 : Sort three numbers. Display an alert box to show the results.


    // Task 4 : Find the largest of five numbers. Display an alert box to show the results.
let arr = [num1, num2, num3, num4, num5]; // Sorry, I used an array
let max = 0;

for (let i = 0; i < 5; i++)
    if (max < arr[i])
        max = arr[i];

alert(max);

    // Task 5 :  Iterates from 0 to 15, check if the current number is odd or even, and displays a message on the screen.
for (let i = 0; i <= 15; i++)
{
    if (i % 2 === 0)
        console.log(i + " is even");
    else
        console.log(i + " is odd");
}
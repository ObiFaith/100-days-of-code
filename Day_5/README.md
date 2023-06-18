## Day 5 : June 17, 2023

### Today's Progress : 
- Understood different types of Function in JS
  - Closure
  - Recursive Function

```javascript
let square = function (num) {return num * num};

let sq = square;
console.log(sq(4)); // 16
```

> Closure in JS
```javascript
let square = (num) => {return (n) => n * num};
let sq = square;

console.log(sq(3)(4)); // 12
```
  
### Thoughts : 
- It is interesting the way functions are used in JS (Really flexible)
- Function in JS behave like Pointers in C

> Quote of the day : _"You don't always need an answer before you do what needs to be done"_
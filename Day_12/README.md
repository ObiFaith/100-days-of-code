## Day 12 | June 4, 2023

### Today's Progress :
- Practice on Function
- Able to solve two exercise on Function from Eloquent JavaScript

### Thought :
- Able to practice the concept of Default Parameter in a Function

```javascript
function countChar(word, char){
    let count = i = 0;
    for (; i < word.length; i++)
        if (word[i] === char) count++;
    return count;
}

function countBs(word){
    return countChar(word, 'B');
}
```
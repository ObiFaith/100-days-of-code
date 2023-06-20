## Day 8 | June 20, 2023

### Today's Progress :
- Practice on HTML DOM
- Added features to the project content I used for learning

### Thought :
- console.log() is your friend for debugging in JS

```javascript
const revealBtn = document.querySelector('.reveal-btn');
const hiddenBtn = document.querySelector('.hidden-btn');
revealBtn.addEventListener('click', () => {    
    hiddenBtn.classList.toggle('d-block');
    if (hiddenBtn.classList.contains('d-block'))
        revealBtn.innerHTML = "Hide...";
    else
        revealBtn.innerHTML = "Reveal More...";
});
```

> Quote of the Day : **_There will always be distractions but find a way to stick to the learning process_**
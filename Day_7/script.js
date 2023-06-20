    // HTML DOM
// HTMLCollection or NoteLsitCollection

const boxes = document.querySelector('.boxes');
console.log(boxes)
const box5 = document.createElement('div');

box5.classList.add('box5');
box5.innerHTML = "box 5";

boxes.append(box5);

box5.innerHTML = `I am the child in the div <div> I am a nested div</div>`;

const nestedDiv = box5.querySelector('div');
box5.setAttribute('class', 'nestedDiv');
nestedDiv.classList.add('nestedDiv');

/* console.log(box5);
console.log(nestedDiv); */

box5.removeAttribute('class');
nestedDiv.classList.remove('class');

/* console.log(box5);
console.log(nestedDiv); */

nestedDiv.remove();
console.log(box5);

const revealBtn = document.querySelector('.reveal-btn');
const hiddenBtn = document.querySelector('.hidden-btn');
revealBtn.addEventListener('click', () => {    
    hiddenBtn.classList.toggle('d-block');
    if (hiddenBtn.classList.contains('d-block'))
        revealBtn.innerHTML = "Hide...";
    else
        revealBtn.innerHTML = "Reveal More...";
});
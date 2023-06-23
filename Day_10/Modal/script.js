const modal = document.querySelector('.btn');
const btn = modal.nextElementSibling;
const closeBtn = btn.querySelector('span');
const body = document.querySelector('body');

modal.addEventListener('click', function (){
    modal.style.display = "none";
    btn.style.display = "block";
});

closeBtn.addEventListener('click', ()=>{
    btn.style.display = "none";
    modal.style.display = "block";
})

window.addEventListener('click', (e)=>{
    if (e.target === body){
        btn.style.display = "none";
        modal.style.display = "block";
    }
})
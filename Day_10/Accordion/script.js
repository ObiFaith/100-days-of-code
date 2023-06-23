const container = document.querySelector('.container');

container.addEventListener('click', function (e){    
    const target = e.target;
    if (target.classList.contains('question')){
        target.nextElementSibling.classList.toggle('d-block');
        target.classList.toggle('active');
    }
});
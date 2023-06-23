const container = document.querySelector('.container');
const addTask = document.querySelector('.addTask');
const input = document.querySelector('input');

let error = document.querySelector('p');

addTask.addEventListener('click', ()=>{
    if (input.value.length >= 1)
    {
        error.style.display = 'none';
        const newTask = document.createElement('div');
        newTask.classList.add('addedTask');

        const taskTitle = document.createElement('p');    
        taskTitle.innerText = input.value;
        newTask.appendChild(taskTitle);
        
        const buttons = document.createElement('div');
        buttons.classList.add('btns');

        const btnCheck = document.createElement('div');
        btnCheck.innerHTML = `
            <svg class="btn-check" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 7L10 17l-5-5"/>
            </svg>
        `;

        const btnDelete = document.createElement('div');
        btnDelete.innerHTML = `
            <div class = "btn-del">&times;</div>
        `; 

        buttons.appendChild(btnCheck);
        buttons.appendChild(btnDelete);

        btnCheck.addEventListener('click', (e)=>{
            let taskTitle = e.target.parentElement.parentElement.previousElementSibling;
            taskTitle.style.textDecoration = "line-through";
        })

        newTask.appendChild(buttons);
        container.appendChild(newTask);

        btnDelete.addEventListener('click', (e)=>{
            let newTask = e.target.parentElement.parentElement.parentElement;
            container.removeChild(newTask);
        })

        input.value = null;
    }
    else                             
        error.style.display = 'block';    
})
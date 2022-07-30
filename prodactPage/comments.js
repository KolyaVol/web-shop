const addTaskBtn = document.querySelector(".btn__add");
const inputText = document.querySelector(".input__text");
const taskTemplate = document.querySelector(".task__container")
const deleteTaskBtn = document.querySelector(".btn__delete")


let users = JSON.parse(localStorage.getItem('users'));;

const usersLastEl = users[users.length - 1];

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task (description) {
    this.description = description;
    this.completed = false;
};

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));    
};

const createTemplate = ( task, index) => {
    return`
        <div class="task__part">
            <div class="commenter">${usersLastEl.name}</div>
            <div class="task__description">${task.description}</div>
            <div class="right__part">
                <input onclick="completeTask(${index})" type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
                <button onclick="deleteTask(${index})" class="btn__delete">Delete</button>
            </div>
        </div>
    `
};

const fillHTMLList = () => {
    taskTemplate.innerHTML = "";
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            taskTemplate.innerHTML += createTemplate(item, index);
        });

    }
}

addTaskBtn.addEventListener('click', (e) =>{
    tasks.push(new Task(inputText.value));
    updateLocal();
    fillHTMLList();
    inputText.value = '';
});

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    updateLocal();
    fillHTMLList();
};

const deleteTask = index => {
    tasks.splice(index,1);
    updateLocal();
    fillHTMLList();
}

fillHTMLList()


// const taskInput = document.querySelector('.task-input input');

// taskInput.addEventListener("keyup",(e)=>{
//     let userTask = taskInput.value;
//     if(e.key == "Enter"){
//         console.log(userTask);
//     }
// })


const taskInput = document.querySelector('.task-input input');
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = ''
    todos.forEach((todo, id) => {
        li += `<li class="task">
                <label for="${id}">
                    <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                    <p class="${completed}">${todo.name}</p>
                </label>
                <div class="settings">
                    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="task-menu">
                        <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                        <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </li>`
    });
}

taskInput.addEventListener('keyup', (e) => {
    let userTask = taskInput.value.trim();
    if (e.key == 'Enter' && userTask) {
        // get list form localstroage
        if (!todos) {
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = { name: userTask, status: "pending" };
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos))
        showTodo()
    }
})

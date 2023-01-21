// const taskInput = document.querySelector('.task-input input');

// taskInput.addEventListener("keyup",(e)=>{
//     let userTask = taskInput.value;
//     if(e.key == "Enter"){
//         console.log(userTask);
//     }
// })


const taskInput = document.querySelector('.task-input input');

taskInput.addEventListener('keyup', (e) => {
    let userTask = taskInput.value.trim();
    if (e.key == 'Enter' && userTask) {
        // get list form localstroage
        let todos = JSON.parse(localStorage.getItem("todo-list"));
        if (!todos) {
            todoss = [];
        }
        taskInput.value = "";
        let taskInfo = { name: userTask, status: "pending" };
        todoss.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todoss))
    }
})

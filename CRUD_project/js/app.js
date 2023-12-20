import { saveTask, getTasks, onGetTasks, deleteTask } from './firebase.js';

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

window.addEventListener("DOMContentLoaded", async (e) => {    

    const querySnapshot = await getTasks();

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = taskForm['task-title'];
        const description = taskForm['task-description'];

        saveTask(title.value, description.value);
    });
    onGetTasks((querySnapshot) => {
        tasksContainer.innerHTML = "";

        //Entendemos por "doc" a cada registro de la tabla
        querySnapshot.forEach(doc => {
            const task = doc.data();
    
            tasksContainer.innerHTML += `
                <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                    <div>
                        <button class="btn-delete" data-id="${doc.id}">
                            Delete
                        </button>
                        <button>
                            Edit
                        </button>
                    </div>
                </div>
            `
        })    

        //Logica borrado de registros
        const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    
        btnsDelete.forEach((btn) =>                 
            btn.addEventListener("click", async (e) => {
                await deleteTask(e.target.dataset.id);
            })              
        );
    })    
    
});
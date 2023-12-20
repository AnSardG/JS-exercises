import { saveTask, getTasks, onGetTasks } from './firebase.js';

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

        querySnapshot.forEach(doc => {
            const task = doc.data();
    
            tasksContainer.innerHTML += `
                <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                    <div>
                        <button class="btn-delete>
                            Delete
                        </button>
                        <button>
                            Edit
                        </button>
                    </div>
                </div>
            `
        })    
    })
    
    
    
});
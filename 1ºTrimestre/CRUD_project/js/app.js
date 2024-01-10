import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask } from './firebase.js';

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {

    const querySnapshot = await getTasks();

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
                        <button class="btn-edit" data-id="${doc.id}">
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

        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");

        btnsEdit.forEach((btn) =>
            btn.addEventListener("click", async (e) => {
                const doc = await getTask(e.target.dataset.id);
                const task = doc.data();
                taskForm["task-title"].value = task.title;
                taskForm["task-description"].value = task.description;

                editStatus = true;
                id = doc.id;
                taskForm["btn-task-form"].innerText = "Actualizar";

            }));
    })

    taskForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = taskForm['task-title'];
        const description = taskForm['task-description'];

        if (!editStatus) {
            saveTask(title.value, description.value);
        } else {
            await updateTask(id, {
                title: title.value,
                description: description.value
            });

            editStatus = false;
            id = "";
            taskForm["btn-task-form"].innerText = "Guardar";
        }        

        taskForm.reset();
        title.focus();
    });

});
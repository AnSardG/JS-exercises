// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    //ENTER YOUR CONFIG
    apiKey: "AIzaSyBn3ct3wmbxdzi2ojlBnv5F03rul8sDLro",
    authDomain: "crud-js-5aaa3.firebaseapp.com",
    projectId: "crud-js-5aaa3",
    storageBucket: "crud-js-5aaa3.appspot.com",
    messagingSenderId: "787309194109",
    appId: "1:787309194109:web:d77269942dfc4496deba14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export const saveTask = (title, description) => {
    //El primer parámetro es una referencia a la tabla tareas de la base de datos.
    //El segundo parámetro es un objeto en formato JSON.    
    addDoc(collection(db, "tareas"), { title, description });
}

export const getTasks = () => getDocs(collection(db, "tareas"));

export const getTask = (id) => getDoc(doc(db, "tareas", id));

export const onGetTasks = (callback) => onSnapshot(collection(db, "tareas"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tareas", id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tareas", id), newFields);
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_ID",
appId: "YOUR_APP_ID"
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

export const onGetTasks = (id) => onSnapshot(collection(db, "tareas"), id);

export const deleteTask = (id) => deleteDoc(doc(db, "tareas"), id);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// Add Firebase products that you want to use
import {
getAuth,
signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUwCahKmFmOzH44mjQNoc5eioUZq1EJc4",
    authDomain: "alephconnect-8ef88.firebaseapp.com",
    projectId: "alephconnect-8ef88",
    storageBucket: "alephconnect-8ef88.appspot.com",
    messagingSenderId: "600944690700",
    appId: "1:600944690700:web:eb00757006bdb01b349029",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

form.addEventListener("submit", async (e) => {
e.preventDefault();

try {
    const emailVal = email.value;
    const passwordVal = password.value;

    const auth = getAuth();

    button.innerHTML = "Loading";

    const response = await signInWithEmailAndPassword(auth, emailVal, passwordVal);

    localStorage.setItem("session", JSON.stringify(response))

    if (emailVal === "admin@gmail.com") {
        window.location.href = "/Admin_userProfile.html";
      } else {
        window.location.href = "/Dashboard.html";
      }

} catch (error) {

    alert(error.message);
} finally {

    button.innerHTML = "Sign in"
}
});
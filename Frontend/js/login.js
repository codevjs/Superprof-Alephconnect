import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// Add Firebase products that you want to use
import {
getAuth,
signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX1sJqp_1f_T3tEpy0lKaBFd3e6quARSo",
    authDomain: "aleph-connect.firebaseapp.com",
    projectId: "aleph-connect",
    storageBucket: "aleph-connect.appspot.com",
    messagingSenderId: "188156861152",
    appId: "1:188156861152:web:a1efdbfb47148e79898e85"
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
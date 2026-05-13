const firebaseConfig = {
  apiKey: "AIzaSyCy6EC39gQp5tIzJ7D1UpcYsQAYIfumN8w",
  authDomain: "opportunity-bridge-665bc.firebaseapp.com",
  projectId: "opportunity-bridge-665bc",
  storageBucket: "opportunity-bridge-665bc.firebasestorage.app",
  messagingSenderId: "297976846293",
  appId: "1:297976846293:web:93ccad90c2cfd8a8310f5c",
  measurementId: "G-0LHSX3R63X"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
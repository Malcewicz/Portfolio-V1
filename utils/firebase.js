import firebase from "firebase";
import "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBtZaUpTW-6qGZgHgcW1y6UyhhKBLf-yEQ",
  authDomain: "mb-portfolio-16dff.firebaseapp.com",
  projectId: "mb-portfolio-16dff",
  storageBucket: "mb-portfolio-16dff.appspot.com",
  messagingSenderId: "976318470982",
  appId: "1:976318470982:web:78c498b5f25b526a356347",
  measurementId: "G-E6EBPF9CQN",
};

// Initialize Firebase
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  if ("measurementId" in firebaseConfig) firebase.analytics();
}

export default firebase;

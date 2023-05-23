import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

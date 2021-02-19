import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJc3ToolPoi6uwzGOA25UZXtQoGp6Q_KY",
  authDomain: "autocare-auth.firebaseapp.com",
  projectId: "autocare-auth",
  storageBucket: "autocare-auth.appspot.com",
  messagingSenderId: "922296795296",
  appId: "1:922296795296:web:0435dd3d2f9a0311f689c5",
  measurementId: "G-KJZYBJTJL3",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");

// export utils/refs
export { db, auth, usersCollection };

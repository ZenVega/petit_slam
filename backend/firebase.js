import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB6hYajfNU3AT9uszSarF7QHJVEroVNO0o",
  authDomain: "petit-slam.firebaseapp.com",
  projectId: "petit-slam",
  storageBucket: "petit-slam.appspot.com",
  messagingSenderId: "462564998621",
  appId: "1:462564998621:web:d1c018d8d12b133f858a34",
  measurementId: "G-8BZE52L36D"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUm0l1wcJlnc0a7j6fkqh-QTMwZD4Ub0Q",
  authDomain: "fir-demo-705e7.firebaseapp.com",
  projectId: "fir-demo-705e7",
  storageBucket: "fir-demo-705e7.appspot.com",
  messagingSenderId: "13429294239",
  appId: "1:13429294239:web:c54db485729cbf5e25ceaa",
  measurementId: "G-SD2LSFWYXY"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

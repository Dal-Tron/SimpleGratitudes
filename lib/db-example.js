import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadDB() {
  try {
    var config = {
      apiKey: "YOUR INFO",
      authDomain: "YOUR INFO.firebaseapp.com",
      databaseURL: "YOUR INFO.firebaseio.com",
      projectId: "YOUR INFO",
      storageBucket: "YOUR INFO.appspot.com",
      messagingSenderId: "YOUR INFO",
      appId: "YOUR INFO"
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}
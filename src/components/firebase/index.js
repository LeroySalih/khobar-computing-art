import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDvaFwJPjADu2G12PFDdB3LXYOrHXKMweE",
  authDomain: "khobarcomputingart.firebaseapp.com",
  databaseURL: "https://khobarcomputingart.firebaseio.com",
  projectId: "khobarcomputingart",
  storageBucket: "khobarcomputingart.appspot.com",
  messagingSenderId: "56331611134",
  appId: "1:56331611134:web:7c2ceadbd8c7b81302aeaf",
  measurementId: "G-HNPC84VK27"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();

  }

   
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  sketches = () => this.db.ref('sketches');
  sketch = (sketchId) => this.db.ref('sketches').child(sketchId);

  doSaveSketch = (uid, sketchId, xmlText) => this.db.ref('users').child(uid).child('sketches').child(sketchId).child('xml').set(xmlText);
  getSaveSketch = (uid, sketchId) => this.db.ref('users').child(uid).child('sketches').child(sketchId).child('xml');
  user = (uid) => this.db.ref('users').child(uid);

  //testRef = () => this.db.ref('test'); 
}

const firebase = new Firebase(); 
export default firebase;
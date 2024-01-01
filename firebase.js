import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvAzb2KVdp6cSbaS4XSujQpOrp3aeAGfA",
  authDomain: "notes-app-5f678.firebaseapp.com",
  projectId: "notes-app-5f678",
  storageBucket: "notes-app-5f678.appspot.com",
  messagingSenderId: "451763224317",
  appId: "1:451763224317:web:84dc26c758f29ed62f8894"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
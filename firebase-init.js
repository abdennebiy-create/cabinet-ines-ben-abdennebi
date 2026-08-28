import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, getDocFromServer } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  projectId: "gen-lang-client-0869776379",
  appId: "1:989204836090:web:59b74b5dead40896daa343",
  apiKey: "AIzaSyDvE9r0KGcODNCkJYi4U1uJDG1UlLyO0eA",
  authDomain: "gen-lang-client-0869776379.firebaseapp.com",
  storageBucket: "gen-lang-client-0869776379.firebasestorage.app",
  messagingSenderId: "989204836090",
  measurementId: ""
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-cabinetinesbenab-5873b9bd-6efc-4ede-b05f-776288fc4245");
export const auth = getAuth(app);

// Test Connection
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase initialized successfully.");
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

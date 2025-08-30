// src/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // Kendi Firebase projenizin bilgilerini buraya girin
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let appDataDocRef = null;

export let localData = {
     negativeThought: "",
     reframedThought: "",
     achievements: [],
     journalEntries: [],
     accomplishmentToday: "",
     gratefulFor: ""
};

export function initFirebase(onDataLoad) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userId = user.uid;
            // appId'yi global bir değişkenden veya başka bir yerden alabilirsiniz. Şimdilik 'default-app-id' kullanılıyor.
            const appId = 'default-app-id'; 
            appDataDocRef = doc(db, "artifacts", appId, "users", userId, "appData", "data");
            
            onSnapshot(appDataDocRef, (doc) => {
                if (doc.exists()) {
                    localData = { ...localData, ...doc.data() };
                    onDataLoad(localData); // UI'ı güncellemek için callback çağır
                } else {
                    setDoc(appDataDocRef, localData);
                }
            });

        } else {
            await signInAnonymously(auth);
        }
    });
}
        
const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export const saveData = debounce(async (data) => {
    if (!appDataDocRef) return;
    try {
        await setDoc(appDataDocRef, data, { merge: true });
    } catch (error) {
        console.error("Error saving data: ", error);
    }
}, 500);
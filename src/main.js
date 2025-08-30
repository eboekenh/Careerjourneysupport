// src/main.js

import { switchLanguage } from './i18n.js';
// import { initFirebase, localData, saveData } from './firebase.js'; // BU SATIR SİLİNDİ
import { 
    // updateUIFromData, // BU SATIR SİLİNDİ
    addAchievement,
    showRandomAffirmation,
    saveJournalEntry,
    showRandomJournalPrompt,
    toggleDictation,
    exportData
} from './ui.js';

function main() {
    // initFirebase(updateUIFromData); // BU SATIR SİLİNDİ
    
    document.getElementById('lang-tr').addEventListener('click', () => switchLanguage('tr'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    
    document.getElementById('export-data').addEventListener('click', exportData);
    
    // Input alanlarından çıkıldığında veriyi kaydetme özelliği geçici olarak kaldırıldı.
    /*
    ['negative-thought', 'reframed-thought', 'accomplishment-today', 'grateful-for'].forEach(id => {
         document.getElementById(id).addEventListener('blur', (e) => {
             let camelCaseKey = e.target.id.replace(/-(\w)/g, (_, p1) => p1.toUpperCase());
             localData[camelCaseKey] = e.target.value;
             saveData(localData);
         });
    });
    */

    const achievementInput = document.getElementById('achievement-input');
    document.getElementById('add-achievement').addEventListener('click', addAchievement);
    achievementInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addAchievement();
        }
    });
    
    document.getElementById('new-affirmation').addEventListener('click', showRandomAffirmation);
    
    document.getElementById('save-journal').addEventListener('click', saveJournalEntry);
    document.getElementById('prompt-journal').addEventListener('click', showRandomJournalPrompt);
    document.getElementById('dictate-journal').addEventListener('click', toggleDictation);

    switchLanguage('tr');
}

document.addEventListener('DOMContentLoaded', main);

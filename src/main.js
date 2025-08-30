// src/main.js

import { switchLanguage } from './i18n.js';
import { initFirebase, localData, saveData } from './firebase.js';
import { 
    updateUIFromData,
    addAchievement,
    showRandomAffirmation,
    saveJournalEntry,
    showRandomJournalPrompt,
    toggleDictation,
    exportData
} from './ui.js';

// Uygulama başladığında çalışacak ana fonksiyon
function main() {
    // Firebase'i başlat ve veri yüklendiğinde UI'ı güncelle
    initFirebase(updateUIFromData);
    
    // Dil değiştirme butonlarına olay dinleyicileri ekle
    document.getElementById('lang-tr').addEventListener('click', () => switchLanguage('tr'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    
    // Veri dışa aktarma
    document.getElementById('export-data').addEventListener('click', exportData);
    
    // Input alanlarından çıkıldığında veriyi kaydet (blur event)
    ['negative-thought', 'reframed-thought', 'accomplishment-today', 'grateful-for'].forEach(id => {
         document.getElementById(id).addEventListener('blur', (e) => {
             // Anahtar ismini camelCase'e çevir (örn: negative-thought -> negativeThought)
             let camelCaseKey = e.target.id.replace(/-(\w)/g, (_, p1) => p1.toUpperCase());
             localData[camelCaseKey] = e.target.value;
             saveData(localData);
         });
    });

    // Başarı ekleme
    const achievementInput = document.getElementById('achievement-input');
    document.getElementById('add-achievement').addEventListener('click', addAchievement);
    achievementInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addAchievement();
        }
    });
    
    // Yeni olumlama
    document.getElementById('new-affirmation').addEventListener('click', showRandomAffirmation);
    
    // Journal işlemleri
    document.getElementById('save-journal').addEventListener('click', saveJournalEntry);
    document.getElementById('prompt-journal').addEventListener('click', showRandomJournalPrompt);
    document.getElementById('dictate-journal').addEventListener('click', toggleDictation);

    // Başlangıç dilini ayarla ve ilk olumlamayı göster
    switchLanguage('tr');
}

// DOM tamamen yüklendiğinde uygulamayı başlat
document.addEventListener('DOMContentLoaded', main);


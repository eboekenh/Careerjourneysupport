// src/ui.js

import { affirmations, journalPrompts, currentLang, translations } from './i18n.js';
import { localData, saveData } from './firebase.js';

const achievementInput = document.getElementById('achievement-input');
const achievementsList = document.getElementById('achievements-list');
const journalEntryInput = document.getElementById('journal-entry');
const journalHistory = document.getElementById('journal-history');
const affirmationText = document.getElementById('affirmation-text');
const dictateBtn = document.getElementById('dictate-journal');

export function updateUIFromData(data) {
    document.getElementById('negative-thought').value = data.negativeThought || "";
    document.getElementById('reframed-thought').value = data.reframedThought || "";
    document.getElementById('accomplishment-today').value = data.accomplishmentToday || "";
    document.getElementById('grateful-for').value = data.gratefulFor || "";
    
    achievementsList.innerHTML = '';
    (data.achievements || []).forEach(text => {
        addAchievementToUI(text);
    });

    journalHistory.innerHTML = '';
    (data.journalEntries || []).sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(entry => {
        addJournalEntryToUI(entry);
    });
}

function addAchievementToUI(text) {
     const li = document.createElement('li');
     li.textContent = text;
     achievementsList.appendChild(li);
}

export function addAchievement() {
    const text = achievementInput.value.trim();
    if (text) {
        if (!localData.achievements) localData.achievements = [];
        localData.achievements.push(text);
        saveData(localData); // Firebase'e kaydet
        achievementInput.value = '';
    }
}

export function showRandomAffirmation() {
    const langAffirmations = affirmations[currentLang];
    const randomIndex = Math.floor(Math.random() * langAffirmations.length);
    affirmationText.textContent = `"${langAffirmations[randomIndex]}"`;
}

function addJournalEntryToUI(entry) {
     const entryDiv = document.createElement('div');
     entryDiv.className = 'p-2 bg-gray-50 rounded';
     const entryDate = new Date(entry.date).toLocaleString(currentLang);
     entryDiv.innerHTML = `<p class="font-semibold">${entryDate}</p><p>${entry.text.replace(/\n/g, '<br>')}</p>`;
     journalHistory.prepend(entryDiv);
}

export function saveJournalEntry() {
    const text = journalEntryInput.value.trim();
    if (text) {
        const newEntry = { text: text, date: new Date().toISOString() };
        if (!localData.journalEntries) localData.journalEntries = [];
        localData.journalEntries.push(newEntry);
        saveData(localData); // Firebase'e kaydet
        journalEntryInput.value = '';
    }
}

export function showRandomJournalPrompt() {
     const langPrompts = journalPrompts[currentLang];
     const randomIndex = Math.floor(Math.random() * langPrompts.length);
     journalEntryInput.value = langPrompts[randomIndex];
     journalEntryInput.focus();
}

// Dictation Logic
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isDictating = false;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = currentLang === 'tr' ? 'tr-TR' : 'en-US';

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = journalEntryInput.value;
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript + '. ';
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        journalEntryInput.value = finalTranscript + interimTranscript;
    };
    
    recognition.onend = () => {
        isDictating = false;
        dictateBtn.classList.remove('bg-red-500');
        dictateBtn.textContent = translations[currentLang].dictateBtn;
    };
}

export function toggleDictation() {
    if (!recognition) return;
    if (isDictating) {
        recognition.stop();
    } else {
        recognition.lang = currentLang === 'tr' ? 'tr-TR' : 'en-US';
        recognition.start();
        isDictating = true;
        dictateBtn.classList.add('bg-red-500');
        dictateBtn.textContent = currentLang === 'tr' ? 'Durdur' : 'Stop';
    }
}

export function exportData() {
    const dataStr = JSON.stringify(localData, null, 2);
    const dataBlob = new Blob([dataStr], {type: "application/json"});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kariyer-destek-verileri-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

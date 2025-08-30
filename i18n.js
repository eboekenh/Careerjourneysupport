// src/i18n.js

import { showRandomAffirmation } from '../ui.js';

export const translations = {
    tr: {
        appTitle: "Kariyer Yolculuğu Destek Uygulaması",
        appSubtitle: "Bu zorlu süreçte kendine nazik davran ve adımlarını kutla.",
        exportData: "Veriyi Dışa Aktar",
        thoughtFlipTitle: "1. Düşünceyi Yeniden Çerçeveleme (Thought Flip)",
        thoughtFlipDesc: "Aklına gelen olumsuz bir düşünceyi yaz ve onu bir arkadaşına söyler gibi daha nazik ve gerçekçi bir tona dönüştür.",
        negativeThought: "Olumsuz Düşünce:",
        reframedThought: "Yeniden Çerçevelenmiş Hali:",
        negativeThoughtPlaceholder: "Örn: 'Bu roller için yeterince iyi değilim.'",
        reframedThoughtPlaceholder: "Örn: 'Doğru rol henüz beni bulmadı. Her başvuruda öğreniyor ve adapte oluyorum.'",
        strengthsTitle: "2. Güçlü Yönlerini Hatırla",
        strengthsDesc: "Geçmiş başarılarını listele. Bu senin 'Kanıt Portfolyon' olsun.",
        achievementPlaceholder: "Bir başarın...",
        addBtn: "Ekle",
        affirmationTitle: "3. Günün Olumlaması",
        newAffirmationBtn: "Yeni Olumlama",
        journalTitle: "4. Serbest Yazı Alanı",
        journalDesc: "Aklındakileri buraya dök. Yazmak veya konuşmak, düşüncelerini netleştirmene yardımcı olabilir.",
        journalPlaceholder: "Bugün aklından neler geçiyor?",
        saveJournalBtn: "Girdiyi Kaydet",
        dictateBtn: "Dikte Et",
        promptBtn: "Yeni Konu Öner",
        pastEntriesTitle: "Geçmiş Girdiler",
        dailyWinsTitle: "5. Günlük Kazanımlar ve Şükran Defteri",
        dailyWinsDesc: "Her akşam sadece 1 dakikanı ayırarak odağını ilerlemeye çevir.",
        accomplishmentLabel: "Bugün başardığın 1 şey:",
        accomplishmentPlaceholder: "Örn: 'CV'mi bir role özel güncelledim.'",
        gratefulLabel: "Minnettar olduğun 1 şey:",
        gratefulPlaceholder: "Örn: 'Destek olan bir arkadaşımla konuştum.'",
    },
    en: {
        appTitle: "Career Journey Support App",
        appSubtitle: " Be kind to yourself during this challenging process and celebrate your steps.",
        exportData: "Export Data",
        thoughtFlipTitle: "1. Thought Flip",
        thoughtFlipDesc: "Write down a negative thought and reframe it in a kinder, more realistic tone, as if you were talking to a friend.",
        negativeThought: "Negative Thought:",
        reframedThought: "Reframed Version:",
        negativeThoughtPlaceholder: "e.g., 'I'm not good enough for these roles.'",
        reframedThoughtPlaceholder: "e.g., 'The right role hasn't found me yet. I'm learning and adapting with every application.'",
        strengthsTitle: "2. Remember Your Strengths",
        strengthsDesc: "List your past achievements. Let this be your 'Proof Portfolio'.",
        achievementPlaceholder: "An achievement...",
        addBtn: "Add",
        affirmationTitle: "3. Affirmation of the Day",
        newAffirmationBtn: "New Affirmation",
        journalTitle: "4. Free Journaling Space",
        journalDesc: "Pour your thoughts out here. Writing or speaking can help you clarify your mind.",
        journalPlaceholder: "What's on your mind today?",
        saveJournalBtn: "Save Entry",
        dictateBtn: "Dictate",
        promptBtn: "Suggest a Prompt",
        pastEntriesTitle: "Past Entries",
        dailyWinsTitle: "5. Daily Wins & Gratitude Log",
        dailyWinsDesc: "Shift your focus to progress by taking just 1 minute each evening.",
        accomplishmentLabel: "1 thing you accomplished today:",
        accomplishmentPlaceholder: "e.g., 'I updated my resume for a specific role.'",
        gratefulLabel: "1 thing you are grateful for:",
        gratefulPlaceholder: "e.g., 'I talked to a supportive friend.'",
    }
};

export const affirmations = {
    tr: ["Yetenekliyim, becerikliyim ve her gün öğreniyorum.", "Doğru fırsat doğru zamanda beni bulacak.", "Bu süreçte gösterdiğim çaba ve dayanıklılık çok değerli.", "Her başvuru yeni bir öğrenme deneyimidir.", "Geçmişteki zorlukların üstesinden geldim, bunun da üstesinden geleceğim."],
    en: ["I am skilled, resourceful, and learning every day.", "The right opportunity will find me at the right time.", "My effort and resilience in this process are valuable.", "Every application is a new learning experience.", "I have overcome challenges in the past, and I will overcome this one too."]
};

export const journalPrompts = {
    tr: ["Bugün işte aradığım 3 temel özellik nedir?", "Kendimi en yetenekli hissettiğim bir anı anlat.", "5 yıl sonraki ideal iş günüm nasıl görünüyor?", "Bu hafta iş arama sürecimde öğrendiğim en önemli şey neydi?", "Bugün beni ne gülümsetti?"],
    en: ["What are 3 core qualities I'm looking for in a job today?", "Describe a time when I felt most competent.", "What does my ideal workday look like 5 years from now?", "What was the most important thing I learned in my job search this week?", "What made me smile today?"]
};

export let currentLang = 'tr';

export function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-lang-placeholder-key]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder-key');
         if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    // Aktif dil butonunu güncelle
    document.getElementById('lang-tr').classList.toggle('font-semibold', lang === 'tr');
    document.getElementById('lang-tr').classList.toggle('text-gray-700', lang === 'tr');
    document.getElementById('lang-tr').classList.toggle('text-gray-500', lang !== 'tr');
    document.getElementById('lang-en').classList.toggle('font-semibold', lang === 'en');
    document.getElementById('lang-en').classList.toggle('text-gray-700', lang === 'en');
    document.getElementById('lang-en').classList.toggle('text-gray-500', lang !== 'en');
    
    showRandomAffirmation();
}
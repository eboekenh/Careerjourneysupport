# Careerjourneysupport
Career Journey Support App / Kariyer Yolculuğu Destek Uygulaması

A simple, interactive web application designed to support individuals during the challenging period of a job search. This tool provides practical exercises to reframe negative thoughts, boost confidence, and maintain a proactive mindset.

Bu uygulama, iş arama gibi zorlu bir süreçte olan bireyleri desteklemek için tasarlanmış basit ve interaktif bir web uygulamasıdır. Olumsuz düşünceleri yeniden çerçevelemek, özgüveni artırmak ve proaktif bir zihniyeti sürdürmek için pratik egzersizler sunar.

Features / Özellikler
🌐 Bilingual Interface (EN/TR): Easily switch between English and Turkish. / İki Dilli Arayüz (EN/TR): İngilizce ve Türkçe arasında kolayca geçiş yapın.

🤔 Thought Flip Exercise: A dedicated section to identify negative thoughts and reframe them into positive, realistic ones. / Düşünce Çevirme Egzersizi: Olumsuz düşünceleri belirleyip onları pozitif ve gerçekçi olanlarla yeniden çerçevelemek için özel bir bölüm.

🏆 Strengths Portfolio: Keep a running list of your achievements to remind yourself of your capabilities. / Güçlü Yönler Portfolyosu: Yeteneklerinizi kendinize hatırlatmak için başarılarınızın bir listesini tutun.

✨ Daily Affirmations: Get a new, uplifting affirmation each day to boost your motivation. / Günlük Olumlamalar: Motivasyonunuzu artırmak için her gün yeni ve moral verici bir olumlama alın.

✍️ Free Journaling with Prompts: A space to write freely, with optional prompts to inspire your writing and a dictation feature. / Konu Önerili Serbest Yazı: Dikte özelliği ve yazınıza ilham verecek isteğe bağlı konular ile serbestçe yazabileceğiniz bir alan.

🔒 Firebase Integration: All your entries (achievements, journal notes) are securely saved to a personal database, so you never lose your progress. / Firebase Entegrasyonu: Tüm girdileriniz (başarılar, günlük notları) kişisel bir veritabanına güvenli bir şekilde kaydedilir, böylece ilerlemenizi asla kaybetmezsiniz.

📥 Data Export: Download all your data as a JSON file anytime to keep a local backup. / Veri Dışa Aktarma: Yerel bir yedeğe sahip olmak için tüm verilerinizi istediğiniz zaman bir JSON dosyası olarak indirin.

Tech Stack / Kullanılan Teknolojiler
Frontend: HTML5, Tailwind CSS, JavaScript (ES Modules)

Backend & Database: Firebase (Authentication, Firestore)

How to Use / Nasıl Kullanılır
1. For Personal Use (Online) / Kişisel Kullanım İçin (Çevrimiçi)
You can directly use the deployed version on Netlify (once you deploy it).
Bu repoyu Netlify'a deploy ettikten sonra doğrudan canlı link üzerinden kullanabilirsiniz.

2. For Local Development / Yerel Geliştirme İçin
Clone the repository / Repoyu klonlayın:

git clone [your-repository-url]

Navigate to the project directory / Proje dizinine gidin:

cd [repository-name]

Open KariyerDestekUygulamasi.html in your browser / KariyerDestekUygulamasi.html dosyasını tarayıcınızda açın.

Note: For Firebase features to work, you'll need to set up your own Firebase project.
(Not: Firebase özelliklerinin çalışması için kendi Firebase projenizi kurmanız gerekmektedir.)

Setting up Firebase / Firebase Kurulumu
Go to the Firebase Console and create a new project. / Firebase Konsolu'na gidin ve yeni bir proje oluşturun.

Add a new web app to your project. / Projenize yeni bir web uygulaması ekleyin.

Enable Anonymous Authentication in the "Authentication" -> "Sign-in method" tab. / "Authentication" -> "Sign-in method" sekmesinden Anonim Kimlik Doğrulamayı etkinleştirin.

Create a Firestore Database and start in "test mode" for easy setup (you can secure it later with rules). / Bir Firestore Veritabanı oluşturun ve kolay kurulum için "test modunda" başlatın (daha sonra kurallarla güvenli hale getirebilirsiniz).

Find your Firebase configuration object in your project settings. / Proje ayarlarınızdan Firebase yapılandırma nesnenizi bulun.

In KariyerDestekUygulamasi.html, replace the placeholder firebaseConfig object with your own config. / KariyerDestekUygulamasi.html dosyasındaki yer tutucu firebaseConfig nesnesini kendi yapılandırmanızla değiştirin.

License / Lisans
This project is licensed under the MIT License.
Bu proje MIT Lisansı altında lisanslanmıştır.

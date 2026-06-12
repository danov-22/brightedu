/* ===========================
   B'Right Education & Training
   Main JavaScript
   =========================== */

// ===== Language System =====
const translations = {
  en: {
    // NAV
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_teachers: "Teachers",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_consult: "Free Consult",
    lang_toggle_label: "ID",

    // HERO
    hero_tag: "Integrated Education Center",
    hero_title: "Shape Your Child's",
    hero_title_gold: "Bright Future",
    hero_slogan: '"We provide a complete package of Homeschooling and Course for your beloved children. Awesome Be Champion!"',
    hero_desc: "Jakarta's trusted homeschooling, tutoring, and training institution with 20+ years of experience. From preschool through college — we guide every step.",
    hero_btn_primary: "Explore Programs",
    hero_btn_secondary: "WhatsApp Us",
    hero_stat1_num: "20+",
    hero_stat1_lbl: "Years of Experience",
    hero_stat2_num: "500+",
    hero_stat2_lbl: "Students Graduated",
    hero_stat3_num: "2",
    hero_stat3_lbl: "Curricula Available",

    // STRIP
    strip_text: "Preschool — Elementary — Junior High — Senior High — College · <strong>National & Cambridge International Curriculum</strong> · Legal & Certified Diplomas",

    // SECTION LABELS
    label_services: "What We Offer",
    label_why: "Why Choose Us",
    label_curriculum: "Our Curriculum",
    label_testimonials: "Testimonials",

    // SERVICES SECTION
    services_title: "Our Programs & Services",
    services_desc: "Comprehensive education solutions tailored to your child's potential and future goals.",
    svc1_title: "Homeschooling",
    svc1_desc: "Flexible homeschooling with National and Cambridge International curriculum. Legal diplomas with NPSN registration and official permits.",
    svc1_tag: "Primary – Senior High",
    svc2_title: "Private Tutoring",
    svc2_desc: "Semi-private tutoring system with experienced teachers across all subjects. Personalized attention for maximum learning outcomes.",
    svc2_tag: "Preschool – College",
    svc3_title: "Online Classes",
    svc3_desc: "Flexible online learning that fits your schedule. Interactive sessions with qualified instructors via video conferencing.",
    svc3_tag: "All Levels",
    svc4_title: "Training Programs",
    svc4_desc: "Skill development and academic training programs designed to prepare students for exams and real-world challenges.",
    svc4_tag: "All Ages",

    // WHY
    why_title: "Why B'Right Education?",
    why_desc: "We combine experience, certified curriculum, and personalized care to bring out the best in every learner.",
    why1_title: "20 Years Experience",
    why1_desc: "Two decades of dedicated educational excellence",
    why2_title: "Certified Diplomas",
    why2_desc: "Legal NPSN-registered diplomas and Cambridge certificates",
    why3_title: "Dual Curriculum",
    why3_desc: "National and International Cambridge curriculum choices",
    why4_title: "Personal Approach",
    why4_desc: "Small class sizes for personalized attention",
    badge1_num: "20+",
    badge1_text: "Years of Experience",
    badge1_sub: "Since 2004",
    badge2_num: "2",
    badge2_text: "Curriculum Choices",
    badge2_sub: "National & Cambridge",
    badge3_num: "100%",
    badge3_text: "Legal & Certified",
    badge3_sub: "NPSN Registered",
    badge4_num: "A+",
    badge4_text: "Quality Education",
    badge4_sub: "Trusted by Families",

    // CURRICULUM TABS
    tab_national: "National Curriculum",
    tab_cambridge: "Cambridge International",
    curr_national_title: "National Curriculum",
    curr_national_sub: "Kurikulum Nasional",
    curr_national_desc: "Full compliance with Indonesian National Curriculum (Kurikulum Merdeka). Legal diplomas recognized across Indonesia.",
    curr_national_badge1: "NPSN Registered",
    curr_national_badge2: "Ijazah Legal",
    curr_national_features_title: "Program Highlights",
    curr_national_f1: "Certified graduation diploma (Ijazah) recognized nationally",
    curr_national_f2: "Official school registration number (NPSN)",
    curr_national_f3: "Flexible learning schedule adapted to family needs",
    curr_national_f4: "Covers Elementary (SD) through Senior High School (SMA)",
    curr_national_f5: "Access to Indonesian state university entrance exams (SNBP/SNBT)",
    curr_cambridge_title: "Cambridge International",
    curr_cambridge_sub: "IGCSE & A-Level",
    curr_cambridge_desc: "Internationally recognized Cambridge curriculum leading to IGCSE and A-Level certifications directly from Cambridge.",
    curr_cambridge_badge1: "Direct Cambridge",
    curr_cambridge_badge2: "Global Recognition",
    curr_cambridge_features_title: "Program Highlights",
    curr_cambridge_f1: "Cambridge-issued international diploma recognized worldwide",
    curr_cambridge_f2: "IGCSE and A-Level pathways available",
    curr_cambridge_f3: "English-language instruction for global readiness",
    curr_cambridge_f4: "Pathway to top international universities",
    curr_cambridge_f5: "Expert Cambridge-trained instructors",

    // TESTIMONIALS
    testi_title: "What Parents & Students Say",
    testi_desc: "Real stories from families who trust B'Right Education & Training.",
    testi1_text: "My son struggled with math but after just 3 months of tutoring at B'Right, his grades improved dramatically. The teachers are patient and truly caring.",
    testi1_name: "Sarah M.",
    testi1_role: "Parent of Grade 8 Student",
    testi2_text: "The Cambridge homeschooling program is outstanding. My daughter received her international diploma and is now studying at a top university in Australia.",
    testi2_name: "Budi W.",
    testi2_role: "Parent of Cambridge Graduate",
    testi3_text: "Flexible schedule, dedicated teachers, and real results. B'Right gave my child the confidence to excel academically. Highly recommended!",
    testi3_name: "Linda P.",
    testi3_role: "Parent – 2 Children Enrolled",

    // CTA
    cta_title: "Ready to Start Your Journey?",
    cta_desc: "Consult with us for free and find the perfect program for your child. Awesome Be Champion!",
    cta_btn1: "WhatsApp Consultation",
    cta_btn2: "Call Us Now",

    // FOOTER
    footer_desc: "Integrated homeschooling, tutoring, and training center in Jakarta. Empowering learners from preschool to college with certified, flexible education.",
    footer_col2: "Quick Links",
    footer_col3: "Programs",
    footer_col4: "Contact",
    footer_program1: "Homeschooling",
    footer_program2: "Private Tutoring",
    footer_program3: "Online Classes",
    footer_program4: "Training",
    footer_copyright: "© 2025 B'Right Education & Training. All rights reserved.",

    // BEE
    bee_speech: "Consult for Free!",

    // PAGE HEROES
    services_hero_title: "Our Programs & Services",
    services_hero_desc: "Comprehensive education solutions from preschool through college.",
    gallery_hero_title: "Gallery & Testimonials",
    gallery_hero_desc: "Memories, achievements, and stories from our learning community.",
    teachers_hero_title: "Our Dedicated Team",
    teachers_hero_desc: "Passionate, experienced educators committed to your child's success.",
    faq_hero_title: "Frequently Asked Questions",
    faq_hero_desc: "Answers to the most common questions about our programs and services.",
    contact_hero_title: "Get In Touch",
    contact_hero_desc: "We're here to help. Reach out and we'll get back to you shortly.",

    // CONTACT PAGE
    contact_info_title: "Contact Information",
    contact_hours_title: "Operating Hours",
    contact_hours_text: "Mon – Sat: 08:00 – 17:00 WIB\nSunday: By Appointment",
    contact_follow: "Follow Us",
    contact_address_label: "Address",
    contact_address: "Ruko Italian Walk Blok B No 43, Mall of Indonesia, Kelapa Gading, Jakarta 14240",
    contact_map_label: "Find Us on Google Maps",
    contact_phone_label: "WhatsApp / Phone",

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_desc: "Have a question? Find answers below or contact us directly.",
    faq_q1: "What age groups do you accept for homeschooling?",
    faq_a1: "We accept students from Primary School (SD) through Senior High School (SMA). Our homeschooling program covers all grade levels within this range, with personalized curriculum adapted to each student.",
    faq_q2: "What age groups do you accept for tutoring/courses?",
    faq_a2: "Our tutoring program is open to all levels from Preschool (TK) through University/College. We cover all major subjects including Mathematics, Sciences, Languages, and more.",
    faq_q3: "Are the diplomas from your homeschooling program legally recognized?",
    faq_a3: "Yes! Our diplomas are fully legal and certified. We have official NPSN (National School Registration Number) and the required operational permits. Graduates receive the same legal diploma as conventional school students. Cambridge international diplomas are issued directly by Cambridge Assessment International Education.",
    faq_q4: "What curricula do you offer for homeschooling?",
    faq_a4: "We offer two curriculum choices: (1) Indonesian National Curriculum (Kurikulum Merdeka/Nasional) which follows the Ministry of Education standards, and (2) Cambridge International Curriculum (IGCSE/A-Level) which is recognized globally and diplomas are issued directly by Cambridge.",
    faq_q5: "How does the semi-private tutoring system work?",
    faq_a5: "Our semi-private system means small groups of 2-4 students per session, ensuring each child gets personalized attention while also benefiting from peer learning. Sessions are scheduled flexibly to fit your family's routine.",
    faq_q6: "Do you offer online classes?",
    faq_a6: "Yes! We offer fully online classes via video conferencing platforms. Online sessions are interactive, scheduled, and led by the same qualified teachers as our in-person program.",
    faq_q7: "Where are you located?",
    faq_a7: "We are located at Ruko Italian Walk Blok B No 43, Mall of Indonesia, Kelapa Gading, Jakarta 14240. We are easily accessible from North Jakarta and surrounding areas.",
    faq_q8: "How can I register or get more information?",
    faq_a8: "The easiest way is to contact us via WhatsApp at 0818-862-485. You can also visit us in person at our office. Initial consultation is free!",

    // GALLERY PAGE
    gallery_filter_all: "All",
    gallery_filter_activity: "Learning Activities",
    gallery_filter_achievement: "Achievements",
    gallery_filter_event: "Events",

    // TEACHERS PAGE
    teachers_title: "Meet Our Educators",
    teachers_desc: "A team of passionate, qualified teachers with years of experience across all subjects.",
    teachers_join_title: "Join Our Team",
    teachers_join_desc: "Are you a passionate educator? We're always looking for talented teachers to join B'Right Education & Training.",
    teachers_join_btn: "Apply Now via WhatsApp",
  },
  id: {
    // NAV
    nav_home: "Beranda",
    nav_services: "Layanan",
    nav_gallery: "Galeri",
    nav_teachers: "Pengajar",
    nav_faq: "FAQ",
    nav_contact: "Kontak",
    nav_consult: "Konsultasi Gratis",
    lang_toggle_label: "EN",

    // HERO
    hero_tag: "Pusat Pendidikan Terpadu",
    hero_title: "Wujudkan Masa Depan",
    hero_title_gold: "Cerah Anak Anda",
    hero_slogan: '"Kami menyediakan paket lengkap Homeschooling dan Kursus untuk anak-anak tersayang Anda. Awesome Be Champion!"',
    hero_desc: "Lembaga homeschooling, les privat, dan pelatihan terpercaya di Jakarta dengan pengalaman lebih dari 20 tahun. Dari TK hingga kuliah — kami membimbing setiap langkah.",
    hero_btn_primary: "Lihat Program",
    hero_btn_secondary: "WhatsApp Kami",
    hero_stat1_num: "20+",
    hero_stat1_lbl: "Tahun Pengalaman",
    hero_stat2_num: "500+",
    hero_stat2_lbl: "Siswa Lulusan",
    hero_stat3_num: "2",
    hero_stat3_lbl: "Pilihan Kurikulum",

    // STRIP
    strip_text: "TK — SD — SMP — SMA — Kuliah · <strong>Kurikulum Nasional & Cambridge International</strong> · Ijazah Legal dan Tersertifikasi",

    // SECTION LABELS
    label_services: "Layanan Kami",
    label_why: "Mengapa Kami",
    label_curriculum: "Kurikulum Kami",
    label_testimonials: "Testimoni",

    // SERVICES SECTION
    services_title: "Program & Layanan Kami",
    services_desc: "Solusi pendidikan komprehensif yang disesuaikan dengan potensi dan tujuan masa depan anak Anda.",
    svc1_title: "Homeschooling",
    svc1_desc: "Homeschooling fleksibel dengan kurikulum Nasional dan Cambridge International. Ijazah legal dengan nomor NPSN dan izin resmi.",
    svc1_tag: "SD – SMA",
    svc2_title: "Les Privat",
    svc2_desc: "Sistem les semi privat dengan guru berpengalaman di semua mata pelajaran. Perhatian personal untuk hasil belajar maksimal.",
    svc2_tag: "TK – Kuliah",
    svc3_title: "Kelas Online",
    svc3_desc: "Pembelajaran online fleksibel yang sesuai jadwal Anda. Sesi interaktif dengan instruktur berkualitas melalui video conference.",
    svc3_tag: "Semua Level",
    svc4_title: "Program Pelatihan",
    svc4_desc: "Program pelatihan dan pengembangan keterampilan akademis untuk mempersiapkan siswa menghadapi ujian dan tantangan nyata.",
    svc4_tag: "Semua Usia",

    // WHY
    why_title: "Mengapa B'Right Education?",
    why_desc: "Kami menggabungkan pengalaman, kurikulum tersertifikasi, dan perhatian personal untuk memunculkan yang terbaik dari setiap pelajar.",
    why1_title: "Pengalaman 20 Tahun",
    why1_desc: "Dua dekade keunggulan pendidikan yang berdedikasi",
    why2_title: "Ijazah Tersertifikasi",
    why2_desc: "Ijazah legal terdaftar NPSN dan sertifikat Cambridge",
    why3_title: "Kurikulum Ganda",
    why3_desc: "Pilihan kurikulum Nasional dan Cambridge International",
    why4_title: "Pendekatan Personal",
    why4_desc: "Kelas kecil untuk perhatian yang lebih personal",
    badge1_num: "20+",
    badge1_text: "Tahun Pengalaman",
    badge1_sub: "Sejak 2004",
    badge2_num: "2",
    badge2_text: "Pilihan Kurikulum",
    badge2_sub: "Nasional & Cambridge",
    badge3_num: "100%",
    badge3_text: "Legal & Tersertifikasi",
    badge3_sub: "Terdaftar NPSN",
    badge4_num: "A+",
    badge4_text: "Kualitas Pendidikan",
    badge4_sub: "Dipercaya Keluarga",

    // CURRICULUM TABS
    tab_national: "Kurikulum Nasional",
    tab_cambridge: "Cambridge International",
    curr_national_title: "Kurikulum Nasional",
    curr_national_sub: "Kurikulum Merdeka",
    curr_national_desc: "Sepenuhnya sesuai dengan Kurikulum Nasional Indonesia (Kurikulum Merdeka). Ijazah legal yang diakui di seluruh Indonesia.",
    curr_national_badge1: "Terdaftar NPSN",
    curr_national_badge2: "Ijazah Legal",
    curr_national_features_title: "Keunggulan Program",
    curr_national_f1: "Ijazah kelulusan tersertifikasi yang diakui secara nasional",
    curr_national_f2: "Nomor registrasi sekolah resmi (NPSN)",
    curr_national_f3: "Jadwal belajar fleksibel disesuaikan kebutuhan keluarga",
    curr_national_f4: "Mencakup SD hingga SMA",
    curr_national_f5: "Akses ke ujian masuk perguruan tinggi negeri (SNBP/SNBT)",
    curr_cambridge_title: "Cambridge International",
    curr_cambridge_sub: "IGCSE & A-Level",
    curr_cambridge_desc: "Kurikulum Cambridge yang diakui internasional menghasilkan sertifikasi IGCSE dan A-Level langsung dari Cambridge.",
    curr_cambridge_badge1: "Langsung Cambridge",
    curr_cambridge_badge2: "Diakui Global",
    curr_cambridge_features_title: "Keunggulan Program",
    curr_cambridge_f1: "Ijazah internasional dari Cambridge yang diakui di seluruh dunia",
    curr_cambridge_f2: "Jalur IGCSE dan A-Level tersedia",
    curr_cambridge_f3: "Pengajaran berbahasa Inggris untuk kesiapan global",
    curr_cambridge_f4: "Jalur menuju universitas internasional terkemuka",
    curr_cambridge_f5: "Instruktur terlatih Cambridge yang berpengalaman",

    // TESTIMONIALS
    testi_title: "Kata Orang Tua & Siswa",
    testi_desc: "Cerita nyata dari keluarga yang mempercayai B'Right Education & Training.",
    testi1_text: "Anak saya kesulitan matematika, tapi setelah 3 bulan les di B'Right nilainya meningkat drastis. Gurunya sabar dan benar-benar peduli.",
    testi1_name: "Sarah M.",
    testi1_role: "Orang Tua Siswa Kelas 8",
    testi2_text: "Program homeschooling Cambridge sangat luar biasa. Putri saya mendapat ijazah internasional dan kini kuliah di universitas terkemuka di Australia.",
    testi2_name: "Budi W.",
    testi2_role: "Orang Tua Lulusan Cambridge",
    testi3_text: "Jadwal fleksibel, guru berdedikasi, dan hasil nyata. B'Right memberikan kepercayaan diri anak saya untuk unggul secara akademis. Sangat direkomendasikan!",
    testi3_name: "Linda P.",
    testi3_role: "Orang Tua – 2 Anak Terdaftar",

    // CTA
    cta_title: "Siap Memulai Perjalanan Anda?",
    cta_desc: "Konsultasikan dengan kami secara gratis dan temukan program yang tepat untuk anak Anda. Awesome Be Champion!",
    cta_btn1: "Konsultasi via WhatsApp",
    cta_btn2: "Hubungi Kami",

    // FOOTER
    footer_desc: "Pusat homeschooling, les privat, dan pelatihan terpadu di Jakarta. Memberdayakan pelajar dari TK hingga perguruan tinggi dengan pendidikan fleksibel dan tersertifikasi.",
    footer_col2: "Tautan Cepat",
    footer_col3: "Program",
    footer_col4: "Kontak",
    footer_program1: "Homeschooling",
    footer_program2: "Les Privat",
    footer_program3: "Kelas Online",
    footer_program4: "Pelatihan",
    footer_copyright: "© 2025 B'Right Education & Training. Hak cipta dilindungi.",

    // BEE
    bee_speech: "Konsultasi Gratis!",

    // PAGE HEROES
    services_hero_title: "Program & Layanan Kami",
    services_hero_desc: "Solusi pendidikan komprehensif dari TK hingga Perguruan Tinggi.",
    gallery_hero_title: "Galeri & Testimoni",
    gallery_hero_desc: "Kenangan, prestasi, dan cerita dari komunitas belajar kami.",
    teachers_hero_title: "Tim Pengajar Kami",
    teachers_hero_desc: "Pendidik yang bersemangat dan berpengalaman, berkomitmen pada kesuksesan anak Anda.",
    faq_hero_title: "Pertanyaan yang Sering Diajukan",
    faq_hero_desc: "Jawaban atas pertanyaan umum tentang program dan layanan kami.",
    contact_hero_title: "Hubungi Kami",
    contact_hero_desc: "Kami siap membantu. Hubungi kami dan kami akan segera merespons.",

    // CONTACT PAGE
    contact_info_title: "Informasi Kontak",
    contact_hours_title: "Jam Operasional",
    contact_hours_text: "Sen – Sab: 08:00 – 17:00 WIB\nMinggu: Sesuai Perjanjian",
    contact_follow: "Ikuti Kami",
    contact_address_label: "Alamat",
    contact_address: "Ruko Italian Walk Blok B No 43, Mall of Indonesia, Kelapa Gading, Jakarta 14240",
    contact_map_label: "Temukan Kami di Google Maps",
    contact_phone_label: "WhatsApp / Telepon",

    // FAQ
    faq_title: "Pertanyaan yang Sering Diajukan",
    faq_desc: "Punya pertanyaan? Temukan jawabannya di bawah ini atau hubungi kami langsung.",
    faq_q1: "Usia berapa yang diterima untuk program homeschooling?",
    faq_a1: "Kami menerima siswa dari SD hingga SMA. Program homeschooling kami mencakup semua tingkat dalam rentang ini, dengan kurikulum yang dipersonalisasi sesuai setiap siswa.",
    faq_q2: "Usia berapa yang diterima untuk les/kursus?",
    faq_a2: "Program les kami terbuka untuk semua level dari TK hingga Universitas/Perguruan Tinggi. Kami mencakup semua mata pelajaran utama termasuk Matematika, IPA, Bahasa, dan lainnya.",
    faq_q3: "Apakah ijazah dari program homeschooling Anda diakui secara hukum?",
    faq_a3: "Ya! Ijazah kami sepenuhnya legal dan tersertifikasi. Kami memiliki NPSN (Nomor Pokok Sekolah Nasional) resmi dan izin operasional yang diperlukan. Lulusan menerima ijazah yang sama dengan siswa sekolah konvensional. Ijazah internasional Cambridge diterbitkan langsung oleh Cambridge Assessment International Education.",
    faq_q4: "Kurikulum apa yang ditawarkan untuk homeschooling?",
    faq_a4: "Kami menawarkan dua pilihan kurikulum: (1) Kurikulum Nasional Indonesia (Kurikulum Merdeka) yang mengikuti standar Kemendikbud, dan (2) Kurikulum Cambridge International (IGCSE/A-Level) yang diakui global dan ijazahnya diterbitkan langsung oleh Cambridge.",
    faq_q5: "Bagaimana sistem les semi privat bekerja?",
    faq_a5: "Sistem semi privat kami berarti kelompok kecil 2-4 siswa per sesi, memastikan setiap anak mendapat perhatian personal sambil mendapat manfaat dari pembelajaran bersama teman. Sesi dijadwalkan fleksibel sesuai rutinitas keluarga Anda.",
    faq_q6: "Apakah Anda menawarkan kelas online?",
    faq_a6: "Ya! Kami menawarkan kelas online lengkap melalui platform video conference. Sesi online interaktif, terjadwal, dan dipimpin oleh guru berkualitas yang sama dengan program tatap muka kami.",
    faq_q7: "Di mana lokasi Anda?",
    faq_a7: "Kami berlokasi di Ruko Italian Walk Blok B No 43, Mall of Indonesia, Kelapa Gading, Jakarta 14240. Mudah dijangkau dari Jakarta Utara dan sekitarnya.",
    faq_q8: "Bagaimana cara mendaftar atau mendapatkan informasi lebih lanjut?",
    faq_a8: "Cara termudah adalah menghubungi kami via WhatsApp di 0818-862-485. Anda juga bisa mengunjungi kami langsung di kantor kami. Konsultasi awal gratis!",

    // GALLERY PAGE
    gallery_filter_all: "Semua",
    gallery_filter_activity: "Kegiatan Belajar",
    gallery_filter_achievement: "Prestasi",
    gallery_filter_event: "Acara",

    // TEACHERS PAGE
    teachers_title: "Kenali Pengajar Kami",
    teachers_desc: "Tim guru yang bersemangat dan berkualifikasi dengan pengalaman bertahun-tahun di semua mata pelajaran.",
    teachers_join_title: "Bergabung dengan Tim Kami",
    teachers_join_desc: "Apakah Anda pengajar yang bersemangat? Kami selalu mencari guru berbakat untuk bergabung dengan B'Right Education & Training.",
    teachers_join_btn: "Lamar via WhatsApp",
  }
};

let currentLang = localStorage.getItem('bright_lang') || 'id';

function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.hasAttribute('data-t-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  // Update lang toggle button text
  document.querySelectorAll('.lang-toggle-label').forEach(el => {
    el.textContent = t('lang_toggle_label');
  });
  // Update active nav link based on current page
  highlightActiveNav();
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  localStorage.setItem('bright_lang', currentLang);
  applyTranslations();
  // Update flag & label
  document.querySelectorAll('.lang-current-flag').forEach(el => {
    el.textContent = currentLang === 'en' ? '🇬🇧' : '🇮🇩';
  });
}

// ===== Navbar =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
}

function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const allLinks = document.querySelectorAll('.nav-link, .mobile-link');
  allLinks.forEach(link => {
    link.classList.remove('active');
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== FAQ Accordion =====
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        // Open clicked if was closed
        if (!isOpen) item.classList.add('open');
      });
    }
  });
}

// ===== Curriculum Tabs =====
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const tc = document.getElementById(target);
      if (tc) tc.classList.add('active');
    });
  });
}

// ===== Gallery Filter =====
function initGallery() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.gallery-item').forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ===== Hero Particles =====
function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  const colors = ['#C9A030', '#7B3FA0', '#F7E9B8', '#ffffff'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      background:${color};
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== WhatsApp Link =====
const WA_NUMBER = '62818862485';
function waLink(msgKey) {
  const msg = msgKey ? t(msgKey) : 'Halo, saya ingin berkonsultasi mengenai program B\'Right Education & Training.';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function initWALinks() {
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.href = waLink(el.getAttribute('data-wa') || null);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initFAQ();
  initTabs();
  initGallery();
  initParticles();
  initSmoothScroll();
  applyTranslations();
  initWALinks();

  // Flag for current lang
  document.querySelectorAll('.lang-current-flag').forEach(el => {
    el.textContent = currentLang === 'en' ? '🇬🇧' : '🇮🇩';
  });

  // Lang toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });

  // Bee button WA link
  document.querySelectorAll('.bee-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(waLink(), '_blank');
    });
  });
});

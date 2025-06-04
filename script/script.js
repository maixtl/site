// ----------------------------
// EmailJS: Отправка формы партнёра
// ----------------------------
const partnerForm = document.getElementById('partnerForm');
if (partnerForm) {
    partnerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Отключаем стандартное поведение формы

        emailjs.sendForm("service_6jy6e6s", "template_bonogtw", this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Ваше сообщение успешно отправлено!');
                partnerForm.reset();
            }, function (error) {
                console.log('FAILED...', error);
                alert('При отправке произошла ошибка. Попробуйте ещё раз.');
            });
    });
}

// ----------------------------
// Theme Toggle
// ----------------------------
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

// ----------------------------
// Language Switcher
// ----------------------------
const languageOptions = document.querySelectorAll('.language-option');
const currentLanguage = document.querySelector('.current-language span');
const contentWrapper = document.getElementById('content-wrapper');

// Объект переводов (обновленная версия, включает новые ключи для навигации и формы)
const translations = {
    ru: {
        navAbout: "О компании",
        navServices: "Направления",
        navPartners: "Партнеры",
        navPartnerNow: "Станьте нашим партнёром",
        heroTitle: "Связываем фермеров с промышленными предприятиями",
        heroText: "Ferragroexim специализируется на закупке сельскохозяйственной продукции у фермеров и поставке сырья крупным перерабатывающим заводам.",
        ctaButton: "Связаться с нами",
        aboutTitle: "О нашей компании",
        aboutSub: "Надежный партнер в агропромышленном секторе с 2010 года",
        aboutHeading: "Ferragroexim – гарантия эффективного и надежного взаимодействия между покупателем и продавцом",
        aboutText: "Мы берем на себя обязательство по выгодной реализации вашего товара, поиску необходимого продукта по той цене, которая вам нужна. Качественно и индивидуально подходим к каждому клиенту и проекту заказа:",
        feature1: "Мы подготовим весь пакет документов для реализации вашего продукта по всем международным регламентам",
        feature2: "Найдем клиента, нужного именно вам",
        feature3: "Обеспечим надежность сделки: Застрахуем груз, Совершим безопасную оплату, Доставим продукт гарантированно в срок к воротам вашего склада",
        stat1: "Лет опыта",
        stat2: "Постоянных партнеров",
        stat3: "Довольных клиентов",
        servicesTitle: "Основные направления",
        servicesSub: "Специализируемся на закупке и реализации сельхозпродукции",
        service1: "Масло растительное и животное",
        service1Text: "Закупка и реализация различных видов масел для пищевой промышленности.",
        service1Link: "Заказать",
        service2: "Зерновые",
        service2Text: "Пшеница, кукуруза, ячмень, рожь и другие зерновые культуры высшего качества.",
        service2Link: "Заказать",
        service3: "Рыба",
        service3Text: "Свежая и замороженная рыба различных сортов для оптовых поставок.",
        service3Link: "Заказать",
        service4: "Животное мясо",
        service4Text: "Охлажденное и глубокой заморозки: говядина, свинина, птица по стандартам качества.",
        service4Link: "Заказать",
        service5: "Сыпучие продукты",
        service5Text: "Сахар, какао, кофе, чай, мука различных сортов для пищевой промышленности.",
        service5Link: "Заказать",
        service6: "Молоко и молочные продукты",
        service6Text: "Свежее молоко, сыры, йогурты и другие молочные продукты высшего качества.",
        service6Link: "Заказать",
        partnersTitle: "Наши партнеры",
        partnersSub: "Сотрудничаем с ведущими предприятиями агропромышленного комплекса",
        contactTitle: "Станьте нашим партнёром прямо сейчас",
        formName: "Имя",
        formEmail: "Почта",
        formMessage: "Сообщение",
        formButton: "Отправить",
        footerTitle: "Ferragroexim",
        footerText: "Надежный посредник между производителями сельхозпродукции и перерабатывающими предприятиями.",
        footerNav: "Навигация",
        footerContact: "Контакты",
        copyright: "&copy; 2025 Ferragroexim. Все права защищены.",
        nav1: "О компании",
        nav2: "Направления деятельности",
        nav3: "Партнеры",
        nav4: "Станьте нашим партнёром"
    },
    en: {
        navAbout: "About",
        navServices: "Services",
        navPartners: "Partners",
        navPartnerNow: "Become Our Partner",
        heroTitle: "Connecting farmers with industrial enterprises",
        heroText: "Ferragroexim specializes in purchasing agricultural products from farmers and supplying raw materials to large processing plants.",
        ctaButton: "Contact Us",
        aboutTitle: "About Our Company",
        aboutSub: "Reliable partner in the agro-industrial sector since 2010",
        aboutHeading: "Ferragroexim - guarantee of efficient and reliable interaction between buyer and seller",
        aboutText: "We undertake to profitably sell your goods, find the necessary product at the price you need. We approach each client and project order qualitatively and individually:",
        feature1: "We will prepare a complete package of documents for the sale of your product in accordance with all international regulations",
        feature2: "We will find the client you need",
        feature3: "We will ensure the reliability of the transaction: Insure the cargo, Make safe payment, Deliver the product guaranteed on time to the gates of your warehouse",
        stat1: "Years of experience",
        stat2: "Regular partners",
        stat3: "Satisfied customers",
        servicesTitle: "Main Directions",
        servicesSub: "We specialize in the procurement and sale of agricultural products",
        service1: "Vegetable and animal oil",
        service1Text: "Procurement and sale of various types of oils for the food industry.",
        service1Link: "Order",
        service2: "Cereals",
        service2Text: "Wheat, corn, barley, rye and other grains of the highest quality.",
        service2Link: "Order",
        service3: "Fish",
        service3Text: "Fresh and frozen fish of various varieties for wholesale supplies.",
        service3Link: "Order",
        service4: "Animal meat",
        service4Text: "Chilled and deep-frozen: beef, pork, poultry according to quality standards.",
        service4Link: "Order",
        service5: "Bulk products",
        service5Text: "Sugar, cocoa, coffee, tea, flour of various grades for the food industry.",
        service5Link: "Order",
        service6: "Milk and dairy products",
        service6Text: "Fresh milk, cheeses, yogurts and other dairy products of the highest quality.",
        service6Link: "Order",
        partnersTitle: "Our Partners",
        partnersSub: "Cooperating with leading enterprises of the agro-industrial complex",
        contactTitle: "Become Our Partner Now",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        formButton: "Send",
        footerTitle: "Ferragroexim",
        footerText: "Reliable intermediary between agricultural producers and processing enterprises.",
        footerNav: "Navigation",
        footerContact: "Contacts",
        copyright: "&copy; 2025 Ferragroexim. All rights reserved.",
        nav1: "About",
        nav2: "Services",
        nav3: "Partners",
        nav4: "Become Our Partner"
    },
    ro: {
        navAbout: "Despre noi",
        navServices: "Direcții",
        navPartners: "Parteneri",
        navPartnerNow: "Deveniți partenerul nostru",
        heroTitle: "Conectăm fermierii cu întreprinderile industriale",
        heroText: "Ferragroexim se specializează în achiziționarea de produse agricole de la fermieri și furnizarea de materii prime către fabricile mari de prelucrare.",
        ctaButton: "Contactați-ne",
        aboutTitle: "Despre compania noastră",
        aboutSub: "Partener de încredere în sectorul agroindustrial din 2010",
        aboutHeading: "Ferragroexim - garanția unei interacțiuni eficiente și fiabile între cumpărător și vânzător",
        aboutText: "Ne asumăm obligația de a vă vinde mărfurile profitabil, de a găsi produsul necesar la prețul de care aveți nevoie. Abordăm fiecare client și comandă de proiect calitativ și individual:",
        feature1: "Vom pregăti întregul pachet de documente pentru vânzarea produsului dvs. în conformitate cu toate reglementările internaționale",
        feature2: "Vom găsi clientul de care aveți nevoie",
        feature3: "Vom asigura fiabilitatea tranzacției: Vom asigura marfa, Vom efectua plata în condiții de siguranță, Vom livra produsul garantat la timp la poarta depozitului dvs.",
        stat1: "Ani de experiență",
        stat2: "Parteneri permanenți",
        stat3: "Clienți mulțumiți",
        servicesTitle: "Direcții principale",
        servicesSub: "Ne specializăm în achiziționarea și vânzarea produselor agricole",
        service1: "Ulei vegetal și animal",
        service1Text: "Achiziționarea și vânzarea diferitelor tipuri de uleiuri pentru industria alimentară.",
        service1Link: "Comandă",
        service2: "Cereale",
        service2Text: "Grâu, porumb, orz, secară și alte cereale de cea mai bună calitate.",
        service2Link: "Comandă",
        service3: "Pește",
        service3Text: "Pește proaspăt și congelat de diverse soiuri pentru aprovizionare cu ridicata.",
        service3Link: "Comandă",
        service4: "Carne animală",
        service4Text: "Carne de vită, porc, pasăre conform standardelor de calitate.",
        service4Link: "Comandă",
        service5: "Produse vrac",
        service5Text: "Zahăr, cacao, cafea, ceai, făină pentru industria alimentară.",
        service5Link: "Comandă",
        service6: "Lapte și produse lactate",
        service6Text: "Lapte proaspăt, brânzeturi, iaurturi și alte produse lactate de cea mai bună calitate.",
        service6Link: "Comandă",
        partnersTitle: "Partenerii noștri",
        partnersSub: "Colaborăm cu întreprinderile de top ale complexului agroindustrial",
        contactTitle: "Deveniți partenerul nostru acum",
        formName: "Nume",
        formEmail: "Email",
        formMessage: "Mesaj",
        formButton: "Trimite",
        footerTitle: "Ferragroexim",
        footerText: "Intermediar de încredere între producătorii agricoli și întreprinderile de prelucrare.",
        footerNav: "Navigare",
        footerContact: "Contacte",
        copyright: "&copy; 2025 Ferragroexim. Toate drepturile rezervate.",
        nav1: "Despre noi",
        nav2: "Direcții",
        nav3: "Parteneri",
        nav4: "Deveniți partenerul nostru"
    },
    ua: {
        navAbout: "Про компанію",
        navServices: "Напрямки",
        navPartners: "Партнери",
        navPartnerNow: "Станьте нашим партнером",
        heroTitle: "З'єднуємо фермерів з промисловими підприємствами",
        heroText: "Ferragroexim спеціалізується на закупівлі сільськогосподарської продукції у фермерів та постачанні сировини великим переробним заводам.",
        ctaButton: "Зв'язатися з нами",
        aboutTitle: "Про нашу компанію",
        aboutSub: "Надійний партнер в агропромисловому секторі з 2010 року",
        aboutHeading: "Ferragroexim – гарантія ефективної та надійної взаємодії між покупцем і продавцем",
        aboutText: "Беремо на себе зобов'язання щодо вигідної реалізації вашого товару, пошуку необхідного продукту за ціною, яка вам потрібна. Якісно та індивідуально підходимо до кожного клієнта та проекту замовлення:",
        feature1: "Ми підготуємо весь пакет документів для реалізації вашого продукту за усіма міжнародними регламентами",
        feature2: "Знайдемо клієнта, який потрібен саме вам",
        feature3: "Забезпечимо надійність угоди: Застрахуємо вантаж, Здійснимо безпечну оплату, Доставимо продукт гарантовано в строк до воріт вашого складу",
        stat1: "Років досвіду",
        stat2: "Постійних партнерів",
        stat3: "Задоволених клієнтів",
        servicesTitle: "Основні напрямки",
        servicesSub: "Спеціалізуємося на закупівлі та реалізації сільгосппродукції",
        service1: "Рослинна та тваринна олія",
        service1Text: "Закупівля та реалізація різних видів олій для харчової промисловості.",
        service1Link: "Замовити",
        service2: "Зернові",
        service2Text: "Пшениця, кукурудза, ячмінь, жито та інші зернові культури найвищої якості.",
        service2Link: "Замовити",
        service3: "Риба",
        service3Text: "Свіжа та заморожена риба різних сортів для оптових поставок.",
        service3Link: "Замовити",
        service4: "Тваринне м'ясо",
        service4Text: "Охолоджене та глибокого заморожування: яловичина, свинина, птиця за стандартами якості.",
        service4Link: "Замовити",
        service5: "Насипні продукти",
        service5Text: "Цукор, какао, кава, чай, борошно різних сортів для харчової промисловості.",
        service5Link: "Замовити",
        service6: "Молоко та молочні продукти",
        service6Text: "Свіже молоко, сири, йогурти та інші молочні продукти найвищої якості.",
        service6Link: "Замовити",
        partnersTitle: "Наші партнери",
        partnersSub: "Співпрацюємо з провідними підприємствами агропромислового комплексу",
        certificatesTitle: "Сертифікати якості",
        certificatesSub: "Наші документи, що підтверджують якість продукції",
        contactTitle: "Зв'яжіться з нами",
        contactText: "У вас є питання щодо співпраці або ви хочете стати нашим партнером? Ми завжди готові допомогти!",
        address: "Адреса",
        addressText: "вул. Суворова 18, Тирасполь, Молдова, 3300",
        phone: "Телефон",
        email: "Email",
        footerTitle: "Ferragroexim",
        footerText: "Надійний посередник між виробниками сільгосппродукції та переробними підприємствами.",
        footerNav: "Навігація",
        footerContact: "Контакти",
        copyright: "&copy; 2025 Ferragroexim. Усі права захищені.",
        nav1: "Про компанію",
        nav2: "Напрямки",
        nav3: "Партнери",
        nav4: "Станьте нашим партнером"
    },
    de: {
        navAbout: "Über uns",
        navServices: "Leistungen",
        navPartners: "Partner",
        navPartnerNow: "Werden Sie unser Partner",
        heroTitle: "Wir verbinden Landwirte mit Industrieunternehmen",
        heroText: "Ferragroexim ist spezialisiert auf den Einkauf landwirtschaftlicher Produkte von Landwirten und die Lieferung von Rohstoffen an große Verarbeitungsbetriebe.",
        ctaButton: "Kontaktieren Sie uns",
        aboutTitle: "Über unser Unternehmen",
        aboutSub: "Zuverlässiger Partner im Agrarindustriesektor seit 2010",
        aboutHeading: "Ferragroexim - Garant für effiziente und zuverlässige Interaktion zwischen Käufer und Verkäufer",
        aboutText: "Wir verpflichten uns, Ihre Waren gewinnbringend zu verkaufen und das benötigte Produkt zum gewünschten Preis zu finden. Wir gehen qualitativ und individuell auf jeden Kunden und Projektauftrag ein:",
        feature1: "Wir erstellen das komplette Dokumentenpaket für den Verkauf Ihres Produkts gemäß allen internationalen Vorschriften",
        feature2: "Wir finden den Kunden, den Sie benötigen",
        feature3: "Wir gewährleisten die Zuverlässigkeit der Transaktion: Wir versichern die Fracht, Wir tätigen sichere Zahlungen, Wir liefern das Produkt garantiert pünktlich an Ihr Lagertor",
        stat1: "Jahre Erfahrung",
        stat2: "Ständige Partner",
        stat3: "Zufriedene Kunden",
        servicesTitle: "Hauptleistungen",
        servicesSub: "Wir spezialisieren uns auf den Einkauf und Verkauf von Agrarprodukten",
        service1: "Pflanzliche und tierische Öle",
        service1Text: "Einkauf und Verkauf verschiedener Ölsorten für die Lebensmittelindustrie.",
        service1Link: "Bestellen",
        service2: "Getreide",
        service2Text: "Weizen, Mais, Gerste, Roggen und andere Getreidearten höchster Qualität.",
        service2Link: "Bestellen",
        service3: "Fisch",
        service3Text: "Frischer und gefrorener Fisch verschiedener Sorten für Großhandelslieferungen.",
        service3Link: "Bestellen",
        service4: "Tierisches Fleisch",
        service4Text: "Gekühlt und tiefgefroren: Rindfleisch, Schweinefleisch, Geflügel nach Qualitätsstandards.",
        service4Link: "Bestellen",
        service5: "Schüttgüter",
        service5Text: "Zucker, Kakao, Kaffee, Tee, Mehl verschiedener Sorten für die Lebensmittelindustrie.",
        service5Link: "Bestellen",
        service6: "Milch und Milchprodukte",
        service6Text: "Frische Milch, Käse, Joghurt und andere Milchprodukte höchster Qualität.",
        service6Link: "Bestellen",
        partnersTitle: "Unsere Partner",
        partnersSub: "Zusammenarbeit mit führenden Unternehmen des Agrarindustriekomplexes",
        certificatesTitle: "Qualitätszertifikate",
        certificatesSub: "Unsere Dokumente, die die Produktqualität bestätigen",
        contactTitle: "Kontaktieren Sie uns",
        contactText: "Haben Sie Fragen zur Zusammenarbeit oder möchten Sie unser Partner werden? Wir sind immer bereit zu helfen!",
        address: "Adresse",
        addressText: "Suworow-Str. 18, Tiraspol, Moldawien, 3300",
        phone: "Telefon",
        email: "E-Mail",
        footerTitle: "Ferragroexim",
        footerText: "Zuverlässiger Vermittler zwischen landwirtschaftlichen Erzeugern und verarbeitenden Unternehmen.",
        footerNav: "Navigation",
        footerContact: "Kontakte",
        copyright: "&copy; 2025 Ferragroexim. Alle Rechte vorbehalten.",
        nav1: "Über uns",
        nav2: "Leistungen",
        nav3: "Partner",
        nav4: "Werden Sie unser Partner"
    }
};

function applyTranslations(lang) {
    const t = translations[lang] || translations.ru;
    
    // Navigation (новые 4 пункта)
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = t.navAbout;
        navLinks[1].textContent = t.navServices;
        navLinks[2].textContent = t.navPartners;
        navLinks[3].textContent = t.navPartnerNow;
    }
    
    // Hero section
    const heroTitle = document.querySelector('.hero-text h2');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    const heroText = document.querySelector('.hero-text p');
    if (heroText) heroText.textContent = t.heroText;
    const ctaBtn = document.querySelector('.cta-button');
    if (ctaBtn) ctaBtn.textContent = t.ctaButton;
    
    // About section
    const aboutTitle = document.querySelector('#about .section-title h2');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    const aboutSub = document.querySelector('#about .section-title p');
    if (aboutSub) aboutSub.textContent = t.aboutSub;
    const aboutHeading = document.querySelector('.about-text h3');
    if (aboutHeading) aboutHeading.textContent = t.aboutHeading;
    const aboutPara = document.querySelectorAll('.about-text p');
    if (aboutPara.length > 0) aboutPara[0].textContent = t.aboutText;
    
    const features = document.querySelectorAll('.features-list li');
    if (features.length >= 3) {
        features[0].textContent = t.feature1;
        features[1].textContent = t.feature2;
        features[2].innerHTML = t.feature3;
    }
    
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = t.stat1;
        statLabels[1].textContent = t.stat2;
        statLabels[2].textContent = t.stat3;
    }
    
    // Services section
    const servicesTitle = document.querySelector('#services .section-title h2');
    if (servicesTitle) servicesTitle.textContent = t.servicesTitle;
    const servicesSub = document.querySelector('#services .section-title p');
    if (servicesSub) servicesSub.textContent = t.servicesSub;
    
    const services = document.querySelectorAll('.service-content');
    if (services.length >= 6) {
        services[0].querySelector('h3').textContent = t.service1;
        services[0].querySelector('p').textContent = t.service1Text;
        services[0].querySelector('.service-link').innerHTML = t.service1Link + ' <i class="fas fa-arrow-right"></i>';
        
        services[1].querySelector('h3').textContent = t.service2;
        services[1].querySelector('p').textContent = t.service2Text;
        services[1].querySelector('.service-link').innerHTML = t.service2Link + ' <i class="fas fa-arrow-right"></i>';
        
        services[2].querySelector('h3').textContent = t.service3;
        services[2].querySelector('p').textContent = t.service3Text;
        services[2].querySelector('.service-link').innerHTML = t.service3Link + ' <i class="fas fa-arrow-right"></i>';
        
        services[3].querySelector('h3').textContent = t.service4;
        services[3].querySelector('p').textContent = t.service4Text;
        services[3].querySelector('.service-link').innerHTML = t.service4Link + ' <i class="fas fa-arrow-right"></i>';
        
        services[4].querySelector('h3').textContent = t.service5;
        services[4].querySelector('p').textContent = t.service5Text;
        services[4].querySelector('.service-link').innerHTML = t.service5Link + ' <i class="fas fa-arrow-right"></i>';
        
        services[5].querySelector('h3').textContent = t.service6;
        services[5].querySelector('p').textContent = t.service6Text;
        services[5].querySelector('.service-link').innerHTML = t.service6Link + ' <i class="fas fa-arrow-right"></i>';
    }
    
    // Partners section
    const partnersTitle = document.querySelector('#partners .section-title h2');
    if (partnersTitle) partnersTitle.textContent = t.partnersTitle;
    const partnersSub = document.querySelector('#partners .section-title p');
    if (partnersSub) partnersSub.textContent = t.partnersSub;
    
    // Partner (Form) Block
    const partnerBlock = document.querySelector('#contact');
    if (partnerBlock) {
        const partnerHeading = partnerBlock.querySelector('.partner-container h2');
        if (partnerHeading) partnerHeading.textContent = t.contactTitle;
        
        const formLabels = partnerBlock.querySelectorAll('.partner-form label');
        if (formLabels.length >= 3) {
            formLabels[0].textContent = t.formName;
            formLabels[1].textContent = t.formEmail;
            formLabels[2].textContent = t.formMessage;
        }
        const formButton = partnerBlock.querySelector('.partner-form button');
        if (formButton) formButton.textContent = t.formButton;
    }
    
    // Footer
    const footerCols = document.querySelectorAll('.footer-col h3');
    if (footerCols.length >= 3) {
        footerCols[0].textContent = t.footerTitle;
        footerCols[1].textContent = t.footerNav;
        footerCols[2].textContent = t.footerContact;
    }
    const footerPara = document.querySelector('.footer-col p');
    if (footerPara) footerPara.textContent = t.footerText;
    const copyrightEl = document.querySelector('.copyright p');
    if (copyrightEl) copyrightEl.innerHTML = t.copyright;
    
    // Footer navigation links (4 ссылки)
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 4) {
        footerLinks[0].textContent = t.nav1;
        footerLinks[1].textContent = t.nav2;
        footerLinks[2].textContent = t.nav3;
        footerLinks[3].textContent = t.nav4;
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save selected language
    localStorage.setItem('selectedLanguage', lang);
}

// Language switcher handler with smooth animation
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        
        // Hide all checkmarks
        languageOptions.forEach(opt => {
            const icon = opt.querySelector('i');
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0)';
        });
        
        // Show checkmark only for selected language
        const selectedIcon = option.querySelector('i');
        selectedIcon.style.opacity = '1';
        selectedIcon.style.transform = 'scale(1)';
        
        // Update current language display
        currentLanguage.textContent = lang.toUpperCase();
        
        // Apply fade-out animation
        contentWrapper.style.opacity = '0';
        contentWrapper.style.transform = 'translateY(20px)';
        contentWrapper.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            // Apply translations
            applyTranslations(lang);
            
            // Apply fade-in animation
            contentWrapper.style.opacity = '1';
            contentWrapper.style.transform = 'translateY(0)';
        }, 500);
    });
});

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    document.documentElement.lang = savedLang;
    applyTranslations(savedLang);
    languageOptions.forEach(option => {
        const icon = option.querySelector('i');
        const lang = option.getAttribute('data-lang');
        if (lang === savedLang) {
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        } else {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0)';
        }
    });
    currentLanguage.textContent = savedLang.toUpperCase();
});

// ----------------------------
// Mobile Menu Toggle
// ----------------------------
const menuToggle = document.getElementById('menuToggle');
const navLinksElement = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinksElement.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

document.addEventListener('click', (e) => {
    if (!navLinksElement.contains(e.target) && !menuToggle.contains(e.target) && navLinksElement.classList.contains('active')) {
        navLinksElement.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    }
});

// ----------------------------
// Scroll Animations
// ----------------------------
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// ----------------------------
// Scroll to Top Button
// ----------------------------
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ----------------------------
// Smooth Scrolling for Anchor Links
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            if (navLinksElement.classList.contains('active')) {
                navLinksElement.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

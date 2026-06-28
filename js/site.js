// Переключение языка лендинга (RU/EN). Текст в data-i18n, выбор — в localStorage,
// дефолт — по языку браузера. Легальные страницы остаются на русском (юр-документы РФ).
(function () {
    var I18N = {
        ru: {
            _title: "FootballCards — карточный футбольный менеджер",
            hero_title: "Карточный футбольный менеджер",
            hero_lead: "Веди клуб от первого матча до континентальных кубков. Тактика, состав, погода и нервный ручной матч — колода против колоды.",
            cta_download: "⬇ Скачать",
            cta_features: "Что внутри",
            hero_meta: "Windows · Android · бесплатно, паки по желанию",
            feat_title: "Что внутри",
            f1h: "Карьера и турниры",
            f1p: "Полный сезон: чемпионат, кубок страны, континентальные кубки. Веди команду из года в год.",
            f2h: "Матч — это колода",
            f2p: "Ручной матч идёт картами: моменты, тактика «камень-ножницы», влияние силы и погоды.",
            f3h: "Реальные лиги",
            f3p: "Россия, топ-Европа и паки: 12 лиг Европы и Южная Америка — Бразилия, Аргентина, Либертадорес.",
            f4h: "Развитие команды",
            f4p: "Карты опыта, рост силы, трофеи менеджера, таблицы и история сезонов.",
            shots_title: "Скриншоты",
            shot1: "Экран матча",
            shot2: "Главный экран",
            shot3: "Тактика",
            shot4: "Календарь",
            dl_title: "Скачать",
            dl_win_sub: ".exe · 64-bit",
            dl_apk_name: "Android (APK)",
            dl_apk_sub: "прямая установка",
            dl_rustore_sub: "скоро",
            win_note: "<strong>Windows предупредит (SmartScreen):</strong> «Система Windows защитила ваш компьютер» — это нормально для нового приложения без раскрученной репутации. Нажми «Подробнее» → «Выполнить в любом случае».",
            apk_note: "<strong>Как поставить APK:</strong> открой файл на телефоне → если попросит, разреши «установку из неизвестных источников» для браузера/проводника → установить.",
            friends_title: "Друзья",
            friends_intro: "Проекты, которые мы любим и рекомендуем.",
            friends_sofl: "Футбольный онлайн менеджер-симулятор в браузере. Берёшь команду, расставляешь тактику, торгуешь на трансферах, прокачиваешь академию, играешь чемпионат / кубок / еврокубки. Параллельно играют все остальные клубы из всех лиг — мир общий. Игровые дни 3 раза в неделю (пн, ср, пт).",
            friends_cta: "Играть в SOFL ↗",
            support_title: "Поддержать",
            support_intro: "FootballCards делает один человек, и игра остаётся бесплатной. Если она вам нравится — можно поддержать любой суммой. Это ничего не разблокирует, просто помогает делать игру дальше. Спасибо!",
            support_btn: "Поддержать",
            support_bad_amount: "Введите сумму от 50 ₽",
            support_bad_email: "Введите корректный email",
            support_opening: "Открываем страницу оплаты…",
            support_error: "Не удалось создать платёж. Попробуйте позже.",
            foot_friends: "Друзья",
            foot_support: "Поддержать",
            foot_offer: "Оферта",
            foot_privacy: "Конфиденциальность",
            foot_terms: "Соглашение",
            foot_contacts: "Контакты"
        },
        en: {
            _title: "FootballCards — a card-based football manager",
            hero_title: "A card-based football manager",
            hero_lead: "Lead your club from the first match to continental cups. Tactics, squad, weather and a tense hands-on match — deck against deck.",
            cta_download: "⬇ Download",
            cta_features: "What's inside",
            hero_meta: "Windows · Android · free, optional packs",
            feat_title: "What's inside",
            f1h: "Career & tournaments",
            f1p: "A full season: league, domestic cup, continental cups. Take your team season after season.",
            f2h: "The match is a deck",
            f2p: "Manual matches play out in cards: chances, rock-paper-scissors tactics, the impact of strength and weather.",
            f3h: "Real leagues",
            f3p: "Russia, top Europe and packs: 12 European leagues and South America — Brazil, Argentina, Libertadores.",
            f4h: "Team progression",
            f4p: "Experience cards, growing strength, manager trophies, tables and season history.",
            shots_title: "Screenshots",
            shot1: "Match screen",
            shot2: "Dashboard",
            shot3: "Tactics",
            shot4: "Calendar",
            dl_title: "Download",
            dl_win_sub: ".exe · 64-bit",
            dl_apk_name: "Android (APK)",
            dl_apk_sub: "direct install",
            dl_rustore_sub: "soon",
            win_note: "<strong>Windows may warn (SmartScreen):</strong> “Windows protected your PC” is expected for a new app without an established reputation. Click “More info” → “Run anyway”.",
            apk_note: "<strong>Installing the APK:</strong> open the file on your phone → if asked, allow “install from unknown sources” for your browser/file manager → install.",
            friends_title: "Friends",
            friends_intro: "Projects we love and recommend.",
            friends_sofl: "An online football manager simulator in your browser. Take a club, set up tactics, trade on the transfer market, develop your academy and compete in the league, cup and European competitions. Every other club across all leagues plays in parallel — it's one shared world. Match days three times a week (Mon, Wed, Fri).",
            friends_cta: "Play SOFL ↗",
            support_title: "Support",
            support_intro: "FootballCards is made by one person and the game stays free. If you enjoy it, you can chip in any amount. It unlocks nothing — it just helps keep the game going. Thank you!",
            support_btn: "Support",
            support_bad_amount: "Enter an amount from 50 ₽",
            support_bad_email: "Enter a valid email",
            support_opening: "Opening the payment page…",
            support_error: "Couldn't create the payment. Please try again later.",
            foot_friends: "Friends",
            foot_support: "Support",
            foot_offer: "Offer",
            foot_privacy: "Privacy",
            foot_terms: "Terms",
            foot_contacts: "Contacts"
        }
    };

    // Платёжный сервер SOFL (см. EXTERNAL_SHOP_API.md). Донат — productId без проверки
    // прайса и без кода активации; сумму вводит игрок. Сервер должен разрешить CORS с этого домена.
    var SHOP_BASE = "https://app.soflfm.ru";
    var SHOP_KEY = "fcards_shop_11";
    var DONATION_PRODUCT = "support_donation";

    // Манифест релизов на сервере SOFL (CORS открыт). Версия и ссылка на каждый билд —
    // отсюда, чтобы новый релиз обновлялся заливкой файла + version.json, без правки сайта.
    var DOWNLOADS_MANIFEST = "https://app.soflfm.ru/downloads/version.json";

    var cur = "ru";

    function t(key) { return (I18N[cur] && I18N[cur][key]) || (I18N.ru[key] || ""); }

    function apply(lang) {
        if (!I18N[lang]) lang = "ru";
        cur = lang;
        var dict = I18N[lang];
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var v = dict[el.getAttribute("data-i18n")];
            if (v != null) el.innerHTML = v;
        });
        // скриншоты по языку: /img/shotN.{lang}.png
        document.querySelectorAll("[data-img]").forEach(function (img) {
            img.setAttribute("src", "/img/" + img.getAttribute("data-img") + "." + lang + ".png");
        });
        if (dict._title) document.title = dict._title;
        document.querySelectorAll(".lang-switch button").forEach(function (b) {
            b.classList.toggle("active", b.getAttribute("data-lang") === lang);
        });
        try { localStorage.setItem("lang", lang); } catch (e) { }
    }

    function validEmail(e) {
        return !!e && e.indexOf("@") > 0 && e.lastIndexOf(".") > e.indexOf("@");
    }

    function setupDonate() {
        var amountEl = document.getElementById("support-amount");
        var emailEl = document.getElementById("support-email");
        var btn = document.getElementById("support-btn");
        var status = document.getElementById("support-status");
        if (!amountEl || !btn) return;

        function setStatus(key, ok) {
            status.textContent = t(key);
            status.classList.toggle("ok", !!ok);
            status.classList.toggle("err", !ok);
        }

        document.querySelectorAll(".support-presets [data-amount]").forEach(function (p) {
            p.addEventListener("click", function () { amountEl.value = p.getAttribute("data-amount"); });
        });

        btn.addEventListener("click", function () {
            var amount = parseInt(amountEl.value, 10);
            var email = (emailEl.value || "").trim();
            if (!amount || amount < 50) { setStatus("support_bad_amount", false); return; }
            if (!validEmail(email)) { setStatus("support_bad_email", false); return; }

            btn.disabled = true;
            setStatus("support_opening", true);

            fetch(SHOP_BASE + "/shop/create-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json", "X-Shop-Key": SHOP_KEY },
                body: JSON.stringify({
                    productId: DONATION_PRODUCT, email: email, amountRub: amount,
                    returnUrl: window.location.origin + "/#support"
                })
            }).then(function (r) { return r.json(); }).then(function (j) {
                if (j && j.confirmationUrl) { window.location.href = j.confirmationUrl; }
                else { btn.disabled = false; setStatus("support_error", false); }
            }).catch(function () { btn.disabled = false; setStatus("support_error", false); });
        });
    }

    // Карточки «Скачать»: тянем version.json и проставляем ссылку + версию каждой платформе.
    // Сервер недоступен — карточки просто остаются без версии (клик ни на что не ведёт).
    function setupDownloads() {
        var map = [
            { card: "dl-win", ver: "dl-win-ver", key: "windows" },
            { card: "dl-apk", ver: "dl-apk-ver", key: "android" }
        ];
        fetch(DOWNLOADS_MANIFEST, { cache: "no-store" })
            .then(function (r) { return r.json(); })
            .then(function (m) {
                map.forEach(function (it) {
                    var info = m && m[it.key];
                    var card = document.getElementById(it.card);
                    var verEl = document.getElementById(it.ver);
                    if (!card || !info || !info.url) return;
                    card.setAttribute("href", info.url);
                    card.setAttribute("target", "_blank");
                    card.setAttribute("rel", "noopener");
                    if (verEl && info.version) verEl.textContent = "v" + info.version;
                });
            })
            .catch(function () { /* манифест недоступен — оставляем кнопки как есть */ });
    }

    function init() {
        var lang = null;
        try { lang = localStorage.getItem("lang"); } catch (e) { }
        if (!lang) lang = (navigator.language || "").toLowerCase().indexOf("ru") === 0 ? "ru" : "en";
        document.querySelectorAll(".lang-switch button").forEach(function (b) {
            b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
        });
        apply(lang);
        setupDonate();
        setupDownloads();
    }

    if (document.readyState === "loading")
        document.addEventListener("DOMContentLoaded", init);
    else
        init();
})();

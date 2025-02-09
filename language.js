$(document).ready(function() {
    let isEnglish = true;

    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
        isEnglish = storedLanguage === 'en';
    }

    function updateInterface() {
        if (isEnglish) {
            //the title
            $("#home-title").text("THE HUB - Home page");
            $("#AboutUs-title").text("THE HUB - AboutUs");
            $("#Packages-title").text("THE HUB - Packages");
            $("#service-title").text("THE HUB - Service");
            $("#contact-title").text("THE HUB - Contact");
            $("#Commercial-title").text("THE HUB - Commercial");
            $("#Residential-title").text("THE HUB - Residential");
            // the button
            $("#homeButton").text("HOME");
            $("#homeButton1").text("HOME");
            $("#aboutButton").text("ABOUT US");
            $("#aboutButton1").text("ABOUT US");
            $("#servicesButton").text("SERVICES");
            $("#servicesButton1").text("SERVICES");
            $("#PackagesButton").text("Maintenance Packages");
            $("#PackagesButton1").text("Maintenance Packages");
            $("#contactButton").text("CONTACT");
            $("#contactButton1").text("CONTACT");
            $("#profileButton").text("OUR PROFILE");
            $("#profileButton1").text("OUR PROFILE");
            $("#languageButton").text("العربيه");
            // the footer
            $("#welcome").text("Welcome to THE HUB FOR GENERAL MAINTENANCE");
            $("#welcome-text").text("We welcome your feedback and suggestions and look forward to improving the quality of our services with your assistance. We welcome all inquiries and are available to meet your requirements at any time and from any location. You can reach us by phone or email, and we will respond to all inquiries as soon as possible.");
            $("#join-us").text("JOIN US ON SOCIAL MEDIA");
            $("#our-app").text("Our App");
            $(".footer-text").text("Copyright © 2024 THE HUB FOR GENERAL MAINTENANCE. All Rights Reserved");
            // create the package
            $("#Customize").text("Create your Package");
            $("#Custom").text("Customize your own Package");
            $("#Pick_Service_Type").text("Pick Service Type");
            $("#Residential").text("Residential");
            $("#Commercial").text("Commercial");
            // home page
            $("#Packages").text("Maintenance Packages");
            $("#Home_Maintenance_Services").text("General Maintenance service");
            $("#24_7_home_maintenance").text("We want to be the market leader in general maintenance by providing trustworthy, high-quality services, striving to entirely meet the needs of our clients, and employing the most cutting-edge technologies.");
            $("#HowWorks").text("How it Works");
            $("#Works1").text("Choose a date and time that works for you, and tell us what you need.");
            $("#Works2").text("THEHUB will find the perfect in minutes.");
            $("#Works3").text("THEHUB gets the job done while you relax.");
            $("#Works4").text("THEHUB syncs your job status, messages, and receipt all in one place.");
            $("#BOOKING_NOW").text("REQUEST NOW");
            $("#The_app_header").text("Maintenance Made Easy An All-in-One App for Your Needs");
            $("#Our_application").text("Our application represents the optimal solution for facilitating building maintenance in an efficient and innovative manner. The app provides a user-friendly interface that enables users to easily and quickly submit maintenance requests using smartphones or tablets. Users can upload photos of issues and accurately describe them, facilitating the identification of faults and determination of necessary repair actions. Additionally, the app allows administrators to efficiently allocate resources, track work progress, and generate comprehensive reports on maintenance performance. Thanks to our application, users can enhance the efficiency of building management and save time and effort in maintenance operations.");
            $("#we_have").text("WE HAVE....");
            $("#Units_Number").text("Units Number");
            $("#Building_Number").text("Building Number");
            $("#Maintenance_Operations_Number").text("Maintenance Operations Number");
            $("#Our_customers").text("Our Customers");
            // About Us page
            $("#why").text("Why THE HUB General Maintenance?");
            $("#characterized").text("THE HUB is characterized by the innovation of an unprecedented intelligent maintenance system.");
            $("#high-level").text("We provide high-level services.");
            $("#team").text("Our team is knowledgeable, competent, and highly skilled.");
            $("#provide").text("We provide routine and emergency response services.");
            $("#manage-team").text("We manage our team using the latest operational technology.");
            $("#Vision").text("Our Vision");
            $("#Vision-text").text("We want to be the market leader in general maintenance by providing trustworthy, high-quality services, striving to entirely meet the needs of our clients, and employing the most cutting-edge technologies.");
            $("#Mission").text("Our Mission");
            $("#Mission-test").text("Our Company strives to deliver professional general maintenance services with the highest levels of quality, accuracy, flexibility, and speed through the use of THE HUB smart system technologies that set us apart, to ensure the comfort and confidence of clients in various sectors, through the great experience of our teamwork.");
            $("#Values").text("Our Values");
            $("#Values-test").text("Proficiency and professionalism. Keeping up with modern technologies. Transparency and honesty. Commitment to quality, accuracy and time. Achieving complete customer satisfaction. Providing integrated and effective solutions.");
            // Services page
            $("#Services").text("Our Services");
            $("#AC").text("AC SERVICES");
            $("#ELECTRICAL").text("ELECTRICAL");
            $("#PLUMBING").text("PLUMBING");
            $("#BATHROOM").text("BATHROOM");
            $("#CARPENTRY").text("CARPENTRY");
            $("#PAINTING").text("PAINTING");
            $("#TILES").text("TILES");
            $("#CURTAIN").text("CURTAIN");
            $("#MOVERS-HOME").text("MOVERS HOME");
            // contact page
            $("#Contact-Details").text("Contact Details");  
            $("#address").text("Abu Dhabi - First Sultan Bin Zayed Street - Suroor Tower - Floor 12 - office 1203"); 
            $("#time").text("Mon-Sat: 8am - 6pm");
            $("#Comments-contact").text("Comments");     
            $("#First-Name-contact").text("First Name"); 
            $("#Last-Name-contact").text("Last Name"); 
            $("#Email-contact").text("Email"); 
            $("#Number-contact").text("Phone Number");     
            $("#Message-contact").text("Message");
            $("#Submit-contact").text("Submit");
            $("#Send").text("send");
            // package page
            $("#PACKAGES").text("MAINTENANCE PACKAGES");
            $("#free_inspection").text("FREE INSPECTION");
            $("#free_inspection1").text("FREE INSPECTION");
            $("#REGULAR").text("REGULAR");
            $("#PREMIUM").text("PREMIUM");
            $("#ULTIMATE").text("ULTIMATE");
            $("#start_from").text("Starting from");
            $("#start_from1").text("Starting from");
            $("#start_from2").text("Starting from");
            $("#100aed").text("100 AED/month");
            $("#150aed").text("150 AED/month");
            $("#200aed").text("200 AED/month");
            $("#Choose_Package").text("Choose a Package");
            $("#Select_package").text("Select a package");
            
            $("#REGULAR_month").text("REGULAR - 100 AED/month");
            $("#PREMIUM_month").text("PREMIUM - 150 AED/month");
            $("#ULTIMATE_month").text("ULTIMATE - 200 AED/month");
            $("#Number_room").text("Number of Rooms");
            $("#Number_AC").text("Number of ACs");
            $("#pay-button").text("Choose payment method");
            $("#Total_Price").html('Total Price: <span id="total-price">0</span> AED/month');

            $("body").removeClass("arabic");
            $("html").attr("lang", "en");
            $("#languageImage").attr("src", "image/hand phone.png");
            $("#languageImage").attr("alt", "Image description in English");

            $(".hand_phone").css({
                "left": "auto",
                "right": "0px"
            });

            $(".whatsapp-container").css({
                "left": "auto",
                "right": "0px"
            });

            $(".one-third").css({
                "border-left": "8px solid #3c6295",
                "border-right": "none"
            });

            $(".two-thirds").css({
                "border-left": "1px solid #000",
                "border-right": "none"
            });
        } else {
            
            $("#home-title").text("الصفحة الرئيسية");
            $("#AboutUs-title").text("عن الشركة");
            $("#Packages-title").text("باقات الصيانة");
            $("#service-title").text("الخدمات");
            $("#contact-title").text("اتصل بنا");
            $("#Commercial-title").text("تجاري");
            $("#Residential-title").text("سكني");

            $("#homeButton").text("الصفحة الرئيسية");
            $("#homeButton1").text("الصفحة الرئيسية");
            $("#aboutButton").text("عن الشركة");
            $("#aboutButton1").text("عن الشركة");
            $("#servicesButton").text("الخدمات");
            $("#servicesButton1").text("الخدمات");
            $("#PackagesButton").text("باقات الصيانة");
            $("#PackagesButton1").text("باقات الصيانة");
            $("#contactButton").text("اتصل بنا");
            $("#contactButton1").text("اتصل بنا");
            $("#profileButton").text("ملفنا ");
            $("#profileButton1").text("ملفنا ");
            $("#languageButton").text("EN");

            $("#welcome").text("مرحباً بكم في THE HUB FOR GENERAL MAINTENANCE  ");
            $("#welcome-text").text("نرحب بملاحظاتكم واقتراحاتكم ونتطلع إلى تحسين جودة خدماتنا بمساعدتكم. نرحب بجميع الاستفسارات ومستعدون لتلبية متطلباتكم في أي وقت ومن أي مكان. يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني، وسنرد على جميع الاستفسارات في أقرب وقت ممكن.");
            $("#join-us").text("انضم إلينا");
            $("#our-app").text("تطبيقنا");
            $(".footer-text").text("جميع الحقوق محفوظة © 2024 THE HUB FOR GENERAL MAINTENANCE");

            $("#Customize").text("إنشاء الباقة الخاصة بك ");
            $("#Pick_Service_Type").text("اختر نوع الخدمة");
            $("#Residential").text("سكني");
            $("#Commercial").text("تجاري");

            $("#Packages").text("باقات الصيانة");
            $("#Home_Maintenance_Services").text("خدمة الصيانة العامة");
            $("#24_7_home_maintenance").text("نسعى لتحقيق الريادة في مجال الصيانة العامة من خلال توفير خدمات عالية الجودة وموثوقة والعمل على تلبية احتياجات عملائنا بشكل كامل واستخدام أكثر التقنيات تطوراً في أعمالنا.");
            $("#HowWorks").text("كيف يعمل");
            $("#Works1").text("اختر تاريخًا ووقتًا يناسبك، وأخبرنا بما تحتاج إليه.");
            $("#Works2").text("THEHUB ستجد المحترف المثالي في دقائق.");
            $("#Works3").text("THEHUB الخاص بك ينجز العمل بينما تسترخي.");
            $("#Works4").text("يقوم THEHUB بمزامنة حالة عملك ورسائلك وإيصالاتك في مكان واحد.");
            $("#BOOKING_NOW").text("اطلب الآن");
            $("#The_app_header").text("الصيانة أصبحت سهلة. تطبيق شامل لكل احتياجاتك");
            $("#Our_application").text("تطبيقنا يمثل الحل الأمثل لتسهيل صيانة المباني بطريقة فعالة ومبتكرة. يوفر التطبيق واجهة مستخدم سهلة الاستخدام تمكن المستخدمين من تقديم طلبات الصيانة بسهولة وسرعة باستخدام الهواتف الذكية أو الأجهزة اللوحية. يمكن للمستخدمين رفع صور للمشكلات ووصفها بدقة، مما يسهل تحديد الأعطال وتحديد الإجراءات اللازمة للإصلاح. بالإضافة إلى ذلك، يتيح التطبيق للمسؤولين تخصيص الموارد بكفاءة، وتتبع تقدم العمل، وإنشاء تقارير شاملة حول أداء الصيانة. بفضل تطبيقنا، يمكن للمستخدمين تعزيز كفاءة إدارة المباني وتوفير الوقت والجهد في عمليات الصيانة.");
            $("#we_have").text("لدينا...");
            $("#Building_Number").text("عدد الأبراج");
            $("#Units_Number").text("عدد الوحدات السكنية");
            $("#Maintenance_Operations_Number").text("عدد عمليات الصيانة");
            $("#Our_customers").text("عملائنا");

            $("#why").text("لماذا The HUB للصيانة العامة.!");
            $("#characterized").text("تتيمز The HUB بابتكار نظام صيانة ذكي غير مسبوق");
            $("#high-level").text("نوفر خدمات عالية المستوى");
            $("#team").text("فريقنا مؤهل واحترافي وكفاءته عالية");
            $("#provide").text("نوفر خدمات الاستجابة الروتينية والطارئة");
            $("#manage-team").text("ندير فريق عملنا بأحدث تقنيات العمليات التشغيلية");
            $("#Vision").text("رؤيتنا");
            $("#Vision-text").text("نسعى لتحقيق الريادة في مجال الصيانة العامة من خلال توفير خدمات عالية الجودة وموثوقة والعمل على تلبية احتياجات عملائنا بشكل كامل واستخدام أكثر التقنيات تطوراً في أعمالنا.");
            $("#Mission").text("رسالتنـا");
            $("#Mission-test").text("من خلال استخدام تقنيات نظام THE HUB الذكي الذي يميزنا تهدف شركتنا إلى توفير خدمات صيانة عامة احترافية بأعلى مستويات الجودة والدقة والمرونة والسرعة، لضمان راحة وثقة العملاء بمختلف القطاعات، وذلك من خلال الخبرة الكبيرة التي يتميز بها فريق عملنا.");
            $("#Values").text("قـيــمـنـا");
            $("#Values-test").text("الإتقان والإحترافية. مواكبة التقنيات الحديثة. الشفافية والأمانة. الإلتزام بالجودة والدقة والوقت. تحقيق الرضا التام للعملاء. تقديم حلول متكاملة وفعالة.");

            $("#Services").text("خدماتنا");
            $("#AC").text("خدمات التكييف");
            $("#ELECTRICAL").text("خدمات الإصلاحات الكهربائية");
            $("#PLUMBING").text("خدمات السباكة");
            $("#BATHROOM").text("خدمات المطابخ و الحمامات");
            $("#CARPENTRY").text("خدمات النجارة و المفروشات");
            $("#PAINTING").text("خدمات الطلاء و أعمال الجبس");
            $("#TILES").text("أعمال إكساء الأرضيات والجدران");
            $("#CURTAIN").text("خدمات تركيب الستائر");
            $("#MOVERS-HOME").text("خدمات نقل العفش");

            $("#Contact-Details").text("تفاصيل الاتصال");  
            $("#address").text("أبو ظبي - شارع سلطان بن زايد الأول - منطقة المعمورة - برج سرور - طابق12 - مكتب 1203"); 
            $("#time").text("من الأثنين الى السبت: 8 صباحاً - 6 مساءً");
            $("#Comments-contact").text("التعليقات");
            $("#First-Name-contact").text("الأسم الاول"); 
            $("#Last-Name-contact").text("الأسم الاخير"); 
            $("#Email-contact").text("البريد إلكتروني"); 
            $("#Number-contact").text("رقم الهاتف ");     
            $("#Message-contact").text("الرسالة");
            $("#Submit-contact").text("ارسل");

            $("#Custom").text("قم بتخصيص الباقة الخاصة بك");
            $("#first_name").attr("placeholder", "الاسم الأول");
            $("#last_name").attr("placeholder", "الاسم الأخير");
            $("#email").attr("placeholder", "البريد إلكتروني");
            $("#phone").attr("placeholder", "رقم الهاتف");
            $("#Message").attr("placeholder", "الرسالة");
            // Update city options to Arabic
            $("#city option[value='abu_dhabi']").text("أبو ظبي");
            $("#city option[value='ajman']").text("عجمان");
            $("#city option[value='dubai']").text("دبي");
            $("#city option[value='fujairah']").text("الفجيرة");
            $("#city option[value='ras_al_khaimah']").text("رأس الخيمة");
            $("#city option[value='sharjah']").text("الشارقة");
            $("#city option[value='umm_al_quwain']").text("أم القيوين");
            $("#Send").text("ارسل");
            $("#Area").attr("placeholder", "المنطقة");
            
            $("#PACKAGES").text("باقات الصيانة");
            $("#free_inspection").text("الفحص المجانى");
            $("#free_inspection1").text("الفحص المجانى");
            $("#REGULAR").text("النحاسية");
            $("#PREMIUM").text("الفضية");
            $("#ULTIMATE").text("الذهبية");
            $("#start_from").text("يبدا من ");
            $("#start_from1").text("يبدا من ");
            $("#start_from2").text("يبدا من ");
            $("#100aed").text("100 درهم إماراتي/شهر");
            $("#150aed").text("150 درهم إماراتي/شهر");
            $("#200aed").text("200 درهم إماراتي/شهر");
            $("#Helpline").text("خط المساعدة على مدار 24 ساعة طوال أيام الأسبوع طوال العام");
            $("#Emergency").text("اتصالات طارئة غير محدودة لأعطال التكييف والكهرباء والسباكة");
            $("#Regular").text("اتصالات منتظمة غير محدودة لمشاكل التكييف والكهرباء والسباكة");
            $(".read-more-btn").text("عرض التفاصيل");
            $("#Choose_Package").text("اختر الباقة");
            $("#Select_package").text("حدد الباقة");
            $("#REGULAR_month").text("النحاسية - 100 درهم إماراتي/شهر");
            $("#PREMIUM_month").text("الفضية - 150 درهم إماراتي/شهر");
            $("#ULTIMATE_month").text("الذهبية - 200 درهم إماراتي/شهر");
            $("#Number_room").text("عدد الغرف");
            $("#Number_AC").text("عدد مكيفات الهواء");
            $("#pay-button").text("اختر طريقة الدفع");
            $("#Total_Price").html('المجموع الكلي: <span id="total-price">0</span> درهم/شهر');

            $(".contact-form").css({"margin-left": "20px;"})

            $("body").addClass("arabic");
            $("html").attr("lang", "ar");

            $("#languageImage").attr("src", "image/hand phone1.png");
            $("#languageImage").attr("alt", "وصف الصورة بالعربية");

            $(".hand_phone").css({
                "right": "auto",
                "left": "0px"
            });

            $(".whatsapp-container").css({
                "right": "auto",
                "left": "0px"
            });

            $(".one-third").css({
                "border-right": "8px solid #3c6295",
                "border-left": "none"
            });

            $(".two-thirds").css({
                "border-right": "1px solid #000",
                "border-left": "none"
            });
        }
    }

    updateInterface();

    function toggleLanguage() {
        isEnglish = !isEnglish;

        localStorage.setItem('language', isEnglish ? 'en' : 'ar');

        location.reload(true);
        updateInterface();
    }

    $("#languageButton").click(function() {
        toggleLanguage();
    });
});

$(document).ready(function () {
    // إعداد الترجمات
    const translations = {
        helpline: {
            en: "24/7/365 Helpline",
            ar: "الخط الساخن 24/7/365"
        },
        emergency: {
            en: "Unlimited Emergency Callouts For AC, Electrical And Plumbing Failure",
            ar: "عدد غير محدود من الاستدعاءات الطارئة لفشل التكييف والكهرباء والسباكة"
        },
        regular: {
            en: "Unlimited Regular Callouts For AC, Electrical And Plumbing Issues",
            ar: "عدد غير محدود من الاستدعاءات العادية لمشاكل التكييف والكهرباء والسباكة"
        },
        acmaintenance: {
            en: "Planned Preventive Maintenance /Year AC Service And Maintenance",
            ar: "صيانة مخططة وقائية /سنة لخدمة وصيانة التكييف"
        },
        electricalmaintenance: {
            en: "Planned Preventive Maintenance /Year Electrical Service And Maintenance",
            ar: "صيانة مخططة وقائية /سنة لخدمة وصيانة الكهرباء"
        },
        plumbingmaintenance: {
            en: "Planned Preventive Maintenance /Year Plumbing Service And Maintenance",
            ar: "صيانة مخططة وقائية /سنة لخدمة وصيانة السباكة"
        },
        thermographicinspection: {
            en: "Full Thermographic Inspection For All Electrical System, Distribution Boards, And Water Pump",
            ar: "فحص حراري كامل لجميع الأنظمة الكهربائية، لوحات التوزيع، ومضخات المياه"
        },
        drainagemaintenance: {
            en: "Preventive Maintenance For Drainage System And Drainage Cleaning",
            ar: "صيانة وقائية لنظام الصرف وتنظيف الصرف"
        },
        electricalsurvey: {
            en: "Full Electrical Load Survey And Energy Consumption",
            ar: "مسح كامل للأحمال الكهربائية واستهلاك الطاقة"
        },
        emergencyresponse: {
            en: "2 Hours Emergency Response Time",
            ar: "وقت استجابة الطوارئ خلال ساعتين"
        },
        nonemergencyresponse: {
            en: "12 Hours Non-Emergency Response Time",
            ar: "وقت استجابة غير الطوارئ خلال 12 ساعة"
        }
    };

    // تحديد اللغة الافتراضية بناءً على ما هو مخزن في localStorage
    let isEnglish = true;
    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
        isEnglish = storedLanguage === 'en';
    }

    // دالة لتحديث الواجهة
    function updateInterface() {
        const lang = isEnglish ? 'en' : 'ar';
        $(".service-item").each(function () {
            const type = $(this).data("type");
            if (translations[type]) {
                $(this).text(translations[type][lang]);
            }
        });
    }

    // تحديث الواجهة عند تحميل الصفحة
    updateInterface();

    // دالة لتبديل اللغة وتحديث الواجهة
    function toggleLanguage() {
        isEnglish = !isEnglish;
        localStorage.setItem('language', isEnglish ? 'en' : 'ar');
        updateInterface();
    }

    // ربط الزر لتبديل اللغة
    $("#languageButton").click(function () {
        toggleLanguage();
    });
});

$(document).ready(function () {
    // إعداد الترجمات للعناصر المختلفة
    const translations = {
        ac: {
            en: "AC",
            ar: "مكيف"
        },
        electrical: {
            en: "ELECTRICAL",
            ar: "كهرباء"
        },
        plumbing: {
            en: "PLUMBING",
            ar: "سباكة"
        },
        bathroom: {
            en: "BATHROOM",
            ar: "حمام"
        },
        carpentry: {
            en: "CARPENTRY",
            ar: "نجارة"
        },
        painting: {
            en: "PAINTING",
            ar: "دهان"
        },
        tiles: {
            en: "TILES",
            ar: "بلاط"
        },
        curtain: {
            en: "CURTAIN",
            ar: "ستائر"
        },
        movers: {
            en: "MOVERS HOME",
            ar: "نقل الأثاث"
        }
    };

    // تحديد اللغة الافتراضية بناءً على ما هو مخزن في localStorage
    let isEnglish = true;
    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
        isEnglish = storedLanguage === 'en';
    }

    // دالة لتحديث النصوص بناءً على اللغة المختارة
    function updateInterface() {
        const lang = isEnglish ? 'en' : 'ar';
        $(".checkbox-label").each(function () {
            const type = $(this).data("type");
            if (translations[type]) {
                $(this).text(translations[type][lang]);
            }
        });
    }

    // تحديث الواجهة عند تحميل الصفحة
    updateInterface();

    // دالة لتبديل اللغة وحفظها في localStorage
    function toggleLanguage() {
        isEnglish = !isEnglish;
        localStorage.setItem('language', isEnglish ? 'en' : 'ar');
        updateInterface();
    }

    // ربط زر التبديل بالحدث
    $("#languageButton").click(function () {
        toggleLanguage();
    });
});

/**
 * Osama's Portfolio & Interactive CV - JavaScript Engine
 * Features:
 *  - Full Arabic (RTL) / English (LTR) language dictionary & live toggler
 *  - Interactive WhatsApp message generator with pre-filled message builder
 *  - Copy phone number / WhatsApp to clipboard with animated toast notification
 *  - Project category filter system (All, Programming, AI & ML, Networking)
 *  - Executive CV Print / Save as PDF modal launcher
 *  - Scroll-triggered navigation styling & active link spy
 *  - Mobile hamburger menu handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Translation Dictionary (Arabic & English) ---
  const translations = {
    ar: {
      brand_name: 'أسامة<span class="accent-dot">.</span>AI',
      nav_about: 'عني',
      nav_skills: 'المهارات',
      nav_interests: 'الاهتمامات',
      nav_portfolio: 'المشاريع والأكاديميا',
      nav_resume: 'السيرة الذاتية',
      nav_contact: 'تواصل معي',
      nav_whatsapp_btn: 'واتساب',

      hero_status: 'متاح لفرص التدريب والتعاون التقني',
      hero_greeting: 'أهلاً بك، أنا',
      hero_subtitle: 'طالب بكلية <strong>الحاسبات والذكاء الاصطناعي</strong>. أجمع بين شغف بناء خوارزميات <strong>الذكاء الاصطناعي</strong> و <strong>تعلم الآلة</strong> عبر <strong>Python</strong>، وتطوير <strong>تطبيقات الموبايل الحديثة</strong>، مع أساس متين في <strong>C# و C++ وهندسة النظم والشبكات</strong>.',
      
      tag_fci: 'حاسبات وذكاء اصطناعي',
      tag_python: 'Python & AI',
      tag_ai: 'ذكاء اصطناعي & ML',
      tag_mobile: 'تطبيقات الموبايل',
      tag_networks: 'شبكات وسيرفرات',

      hero_btn_whatsapp: 'تواصل واتساب مباشر',
      hero_btn_cv: 'تحميل / طباعة السيرة (CV)',
      hero_btn_contact: 'بيانات التواصل',
      copy_hint: 'نسخ',
      location_val: 'مصر',
      badge_title: 'المستقبل بالذكاء الاصطناعي',

      hl_1_title: 'برمجة ومنطق متين',
      hl_1_desc: 'أساسيات Python و C++ و C# وهياكل البيانات والتفكير البرمجي السليم',
      hl_2_title: 'تعلم الآلة والذكاء الاصطناعي',
      hl_2_desc: 'شغف بتدريب النماذج بـ Python ومعالجة البيانات وبناء حلول ذكية',
      hl_3_title: 'إدارة الشبكات والسيرفرات',
      hl_3_desc: 'فهم معماريات Server Lab وبروتوكولات الشبكات وقواعد البيانات',
      hl_4_title: 'تطبيقات الموبايل القادمة',
      hl_4_desc: 'تركيز على بناء تطبيقات عملية وسلسة لتجربة مستخدم ممتازة',

      about_tag: 'من أنا؟',
      about_title: 'نبذة تعريفية ورؤيتي للمستقبل',
      about_who_am_i: 'رحلتي وطموحي الأكاديمي',
      about_bio_p1: 'أنا <strong>أسامة</strong>، طالب في <strong>كلية الحاسبات والذكاء الاصطناعي</strong>. بدأت مسيرتي بدافع الفضول والشغف لفهم كيف تعمل التكنولوجيا خلف الكواليس وكيف يمكن للأكواد أن تخلق حلولاً ملموسة تُحدث فرقاً حقيقياً في حياة الناس.',
      about_bio_p2: 'حرصت خلال دراستي وتطويري الذاتي على بناء أساس أكاديمي وبرمجي قوي عبر لغات مثل <strong>Python</strong> لمجالات الذكاء الاصطناعي والبيانات، و <strong>C++</strong> لتعلم حل المشكلات وهياكل البيانات، و <strong>C#</strong> لفهم البرمجة كائنية التوجه (OOP)، بالإضافة إلى فهم معمارية الويب بـ <strong>HTML</strong>، والتعامل العملي مع <strong>مختبرات السيرفرات (Server Lab)</strong> وشبكات الحاسب.',
      about_bio_p3: 'هدفي المستمر هو تسخير إمكانيات <strong>تعلم الآلة والذكاء الاصطناعي (Machine Learning & AI)</strong> لدمجها في <strong>تطبيقات الموبايل الذكية</strong> لتقديم حلول مبتكرة، عملية، وسهلة الاستخدام.',
      kp_1: 'عقلية حل المشكلات والتعلم السريع المستمر',
      kp_2: 'الجمع بين الأساسيات النظرية والتطبيق العملي',
      kp_3: 'شغف مواكبة أحدث تقنيات الـ AI والموبايل',

      target_goal_title: 'الهدف المهني',
      target_goal_desc: 'الحصول على فرص تدريبية (Internships) ومشاريع عملية في مجالات الذكاء الاصطناعي، لغة بايثون، وتطوير البرمجيات وتطبيقات الموبايل لبناء خبرة احترافية رائدة.',
      approach_title: 'أسلوب العمل والتطوير',
      approach_desc: 'التركيز على فهم المنطق أولاً، كتابة كود نظيف وقابل للقراءة، والتجربة المعملية المكثفة سواء في شبكات الاتصال أو نماذج البيانات.',
      collab_title: 'الاستعداد للتعاون',
      collab_desc: 'مستعد للعمل ضمن فرق عمل برمجية، المشاركة في الهاكاثونات، والتعاون على بناء حلول تقنية ذات قيمة مضافة.',

      skills_tag: 'ترسانة المهارات',
      skills_title: 'المهارات التقنية والمعرفية',
      skills_subtitle: 'مزيج متوازن بين لغة بايثون والذكاء الاصطناعي، لغات البرمجة والأنظمة، وهندسة الشبكات',
      cat_core_title: 'لغات البرمجة والأساسيات',
      cat_core_sub: 'Core Programming & Logic',
      lvl_solid: 'أساسيات قوية وممارسة',
      lvl_good: 'تطبيق عملي جيد',
      lvl_learning: 'مفاهيم وتطبيق عملي',
      lvl_target: 'المسار الحالي المستهدف',

      note_python: 'تطبيقات الذكاء الاصطناعي، معالجة البيانات، والبرمجة النصية وبناء النماذج.',
      note_csharp: 'أساسيات .NET، البرمجة كائنية التوجه OOP، ومنطق بناء البرمجيات.',
      note_cpp: 'حل المشكلات (Problem Solving)، إدارة الذاكرة، وخوارزميات الحاسب.',
      note_html: 'بناء وهيكلة صفحات ومواقع الإنترنت وتنسيق العناصر المتجاوبة.',

      cat_ai_title: 'الذكاء الاصطناعي وتعلم الآلة',
      cat_ai_sub: 'Machine Learning & Data Intelligence',
      note_ml: 'مفاهيم التعلم الخاضع للإشراف، تدريب النماذج بـ Python، ومعالجة وتنظيف مجموعات البيانات.',
      note_ai: 'طرق البحث الذكي، شجرات القرار، وتصنيف الأنماط في كلية الحاسبات.',
      note_mobile_ai: 'تطبيق نماذج الذكاء الاصطناعي داخل الهواتف الذكية (On-Device ML & APIs).',

      cat_net_title: 'الشبكات ومختبرات السيرفرات',
      cat_net_sub: 'Computer Networks & Server Lab',
      note_net: 'فهم طبقات OSI Model، بروتوكولات TCP/IP، وعنونة الشبكات وتوجيه الحزم.',
      note_srv: 'تجهيز بيئات السيرفرات، الربط مع قواعد البيانات، وإدارة الطلبات والبيانات.',
      note_sys: 'فهم تدفق البيانات بين العميل والخادم وأساسيات الحماية واستقرار النظام.',

      int_tag: 'البوصلة المستقبلية',
      int_title: 'مجالات الاهتمام والشغف الرئيسي',
      int_subtitle: 'المجالات التي أكرس وقتي وجهدي للتعمق والابتكار فيها',
      int_ai_h: 'الذكاء الاصطناعي وتعلم الآلة (AI & ML)',
      int_ai_p: 'الذكاء الاصطناعي هو محرك الثورة التقنية الحالية. شغفي يتمثل في فهم كيفية بناء نماذج ذكية قادرة على التنبؤ، تحليل الأنماط، ومساعدة البشر في اتخاذ قرارات أسرع وأدق. أسعى للتخصص في بناء وتدريب وتطويع خوارزميات الـ AI لخدمة مجالات حيوية.',
      int_ai_b1: 'تطوير نماذج التنبؤ وتصنيف البيانات بـ Python',
      int_ai_b2: 'استكشاف شبكات الأعصاب العميقة والتعلم العميق',
      int_ai_b3: 'ربط نماذج الـ AI بالأنظمة الواقعية لتحقيق أقصى استفادة',

      int_mob_h: 'تطبيقات الموبايل (Mobile App Development)',
      int_mob_p: 'الموبايل هو الأداة الأكثر قرباً للمستخدم في كل لحظة. اهتمامي ينصب على تصميم وبرمجة تطبيقات هواتف ذكية فائقة السلاسة والأناقة، تربط المستخدم بخدمات سحابية ونماذج ذكاء اصطناعي تفاعلية في جيبه أينما كان.',
      int_mob_b1: 'بناء واجهات مستخدم حديثة وتفاعلية وسلسة (Modern UI/UX)',
      int_mob_b2: 'تكامل الـ APIs وقواعد البيانات السحابية مع الهاتف',
      int_mob_b3: 'تطوير تطبيقات مدعومة بقدرات الذكاء الاصطناعي (AI-Powered Apps)',

      int_net_h: 'الأنظمة المتصلة وهندسة الشبكات والسيرفرات',
      int_net_p: 'أي تطبيق موبايل أو نموذج ذكاء اصطناعي يحتاج بنية تحتية سريعة ومحمية لنقل البيانات. اهتمامي بدراسة الشبكات والسيرفرات يضمن أنني أفهم دورة حياة البيانات من السيرفر وحتى شاشة المستخدم بأمان وكفاءة.',
      int_net_b1: 'إدارة بيئات العمل في مختبرات السيرفر (Server Lab Environments)',
      int_net_b2: 'تأمين الاتصال وتحسين زمن الاستجابة (Low Latency)',
      int_net_b3: 'هندسة قواعد البيانات وربطها بالخوادم',

      proj_tag: 'المشاريع والتطبيقات',
      proj_title: 'نماذج من أعمالي ومساري التطبيقي',
      proj_subtitle: 'تطبيقات عملية ومشاريع جامعية ودراسات بنيت عليها مهاراتي التقنية',
      filter_all: 'الكل',
      filter_prog: 'البرمجة (Python / C# / C++)',
      filter_ai: 'الذكاء الاصطناعي & ML',
      filter_net: 'الشبكات والسيرفرات',

      p1_title: 'نموذج التنبؤ وتصنيف البيانات بـ Python (ML Classifier)',
      p1_desc: 'بناء نموذج تعلم آلة باستخدام لغة بايثون لمعالجة وتصنيف البيانات. يتضمن مراحل تنظيف البيانات، هندسة الميزات، وتدريب النموذج لتقييم دقته في التنبؤ.',
      p2_title: 'برنامج إدارة البيانات والحسابات بـ C#',
      p2_desc: 'تطبيق برمجي مبني بلغة C# يطبق مبادئ البرمجة كائنية التوجه (OOP) لإدارة السجلات والبيانات، مع التحقق من صحة المدخلات وتقديم تقارير منظمة.',
      p3_title: 'خوارزميات حل المشكلات وهياكل البيانات بـ C++',
      p3_desc: 'مجموعة من البرامج والحلول المنطقية المكتوبة بلغة C++ عالية الكفاءة لتطبيق خوارزميات البحث والترتيب (Sorting & Searching) وهياكل البيانات الأساسية.',
      p4_title: 'محاكاة شبكة متكاملة وإعداد السيرفرات',
      p4_desc: 'تصميم وإعداد هيكل شبكة حاسوبية تربط أجهزة وسيرفرات متعددة، تكوين عناوين IP وتجربة مسار الحزم ومراقبة تبادل البيانات داخل معمل السيرفرات (Server Lab).',
      p5_title: 'موقع السيرة الذاتية التفاعلي المتقدم (هذا الموقع)',
      p5_desc: 'منصة ويب احترافية ثنائية اللغة متجاوبة 100% مبنية بالـ HTML و CSS الحديث والـ JavaScript، تدعم الطباعة المباشرة للـ CV والتواصل الفوري عبر الواتساب.',
      p6_title: 'تطبيق موبايل مدعوم بنموذج الذكاء الاصطناعي (قيد التطوير)',
      p6_desc: 'مشروع طموح يهدف لدمج نموذج بايثون والتعلم الآلي مباشرة في واجهة تطبيق موبايل لتمكين المستخدمين من إدخال البيانات وتلقي التنبؤات والتحليلات الفورية.',
      p_status_tested: 'نموذج دراسي وتطبيقي',
      p_status_done: 'مكتمل ومطبق',
      p_status_live: 'الموقع الحالي التفاعلي',
      p_status_progress: 'مسار التطوير المستمر',

      resume_tag: 'السيرة الذاتية الرسمية',
      resume_title: 'السيرة الذاتية والمؤهلات الأكاديمية',
      btn_print_cv: 'طباعة / حفظ PDF',
      res_role: 'طالب كلية الحاسبات والذكاء الاصطناعي | مهتم بالـ AI والموبايل',
      res_country: 'مصر',
      res_edu_title: 'التعليم الأكاديمي',
      res_uni_title: 'كلية الحاسبات والذكاء الاصطناعي',
      res_uni_period: 'مرحلة البكالوريوس (طالب حالي)',
      res_uni_desc: 'دراسة متخصصة تشمل: الذكاء الاصطناعي، تعلم الآلة، هياكل البيانات، لغات البرمجة (Python و C++ و C#)، شبكات الحاسوب، وإدارة مختبرات السيرفر وقواعد البيانات.',
      res_skills_summary_title: 'الملخص التقني والممارسات',
      res_grp1: 'لغات البرمجة:',
      res_grp2: 'الذكاء الاصطناعي وتعلم الآلة:',
      res_grp3: 'الشبكات وأنظمة السيرفر:',
      res_grp4: 'مجال التركيز الحالي:',
      res_soft_title: 'المهارات الشخصية',
      soft_1: 'سرعة التعلم والاطلاع الذاتي',
      soft_2: 'التفكير التحليلي وحل المشكلات',
      soft_3: 'العمل الجماعي وروح المبادرة',
      soft_4: 'الشغف بالابتكار التقني',
      soft_5: 'الالتزام ودقة التنفيذ',
      res_langs_title: 'اللغات',
      lang_ar: 'العربية:',
      lang_native: 'اللغة الأم',
      lang_en: 'الإنجليزية:',
      lang_en_level: 'جيد جداً (لغة المصادر التقنية)',
      res_contact_title: 'طرق التواصل السريعة',
      res_contact_tip: 'متاح للرد الفوري على رسائل الواتساب والمكالمات لأي فرصة تدريبية أو مشروع واعد.',

      contact_tag: 'ابدأ الحديث',
      contact_title: 'تواصل معي مباشرة',
      contact_subtitle: 'هل لديك فرصة تدريب، مشروع واعد، أو ترغب في استفسار تقني؟ يسعدني التواصل الفوري معك',
      cm_wa_label: 'الواتساب المباشر (الأسرع للرد)',
      cm_open_chat: 'محادثة',
      cm_phone_label: 'الاتصال الهاتفي',
      cm_copy: 'نسخ',
      cm_edu_label: 'الكلية والجامعة',
      cm_edu_val: 'كلية الحاسبات والذكاء الاصطناعي - مصر',
      avail_title: 'حالة التوفر',
      avail_desc: 'جاهز للتدريب الصيفي، فرص العمل المبتدئة (Junior / Intern)، والتعاون في مشاريع الذكاء الاصطناعي وتطبيقات الموبايل.',

      wa_form_title: 'إرسال رسالة سريعة عبر الواتساب',
      wa_form_sub: 'اختر طبيعة التواصل واكتب رسالتك وستفتح لك محادثة الواتساب جاهزة بضغطة زر',
      form_name_label: 'اسمك أو اسم شركتك:',
      form_reason_label: 'الغرض من التواصل:',
      opt_job: 'فرصة تدريب / عمل (Internship / Job)',
      opt_project: 'مشروع عمل حر أو فكرة تطبيق (Project Collaboration)',
      opt_inquiry: 'استفسار أو تعارف مهني (Networking / Inquiry)',
      form_msg_label: 'الرسالة:',
      form_send_btn: 'إرسال الرسالة إلى أسامة عبر واتساب',

      footer_bio: 'طالب حاسبات وذكاء اصطناعي | شغف بالتطوير وصناعة الحلول الذكية',
      f_home: 'الرئيسية',
      f_about: 'نبذة عني',
      f_skills: 'المهارات',
      f_cv: 'السيرة الذاتية',
      f_contact: 'تواصل',
      footer_copy: 'أسامة - جميع الحقوق محفوظة',
      wa_tooltip: 'تحدث مع أسامة فوراً'
    },
    en: {
      brand_name: 'Osama<span class="accent-dot">.</span>AI',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_interests: 'Interests',
      nav_portfolio: 'Portfolio & Academics',
      nav_resume: 'Resume',
      nav_contact: 'Contact',
      nav_whatsapp_btn: 'WhatsApp',

      hero_status: 'Available for Internships & Opportunities',
      hero_greeting: 'Hello, I am',
      hero_subtitle: 'Computer Science & <strong>Artificial Intelligence</strong> student. Combining a passion for <strong>AI & Machine Learning</strong> via <strong>Python</strong>, modern <strong>Mobile App Development</strong>, with solid foundations in <strong>C#, C++, Networking, and Server Systems</strong>.',
      
      tag_fci: 'Computers & AI Student',
      tag_python: 'Python & AI',
      tag_ai: 'AI & Machine Learning',
      tag_mobile: 'Mobile Apps',
      tag_networks: 'Networks & Servers',

      hero_btn_whatsapp: 'Direct WhatsApp Chat',
      hero_btn_cv: 'Download / Print CV',
      hero_btn_contact: 'Contact Details',
      copy_hint: 'Copy',
      location_val: 'Egypt',
      badge_title: 'Empowering Future with AI',

      hl_1_title: 'Strong Core Programming',
      hl_1_desc: 'Solid fundamentals in Python, C++, C#, Data Structures, and problem-solving',
      hl_2_title: 'Machine Learning & AI',
      hl_2_desc: 'Passion for data preprocessing, training ML models, and intelligent systems',
      hl_3_title: 'Networks & Server Lab',
      hl_3_desc: 'Understanding network architectures, TCP/IP, databases, and server environments',
      hl_4_title: 'Modern Mobile Development',
      hl_4_desc: 'Focused on creating seamless, intuitive, and high-performance mobile experiences',

      about_tag: 'About Me',
      about_title: 'Profile & Future Vision',
      about_who_am_i: 'My Journey & Academic Ambitions',
      about_bio_p1: 'I am <strong>Osama</strong>, a student at the <strong>Faculty of Computers & Artificial Intelligence</strong>. My journey started with genuine curiosity to uncover how computing powers our world and how clean code solves meaningful real-world challenges.',
      about_bio_p2: 'Throughout my academic journey and self-directed learning, I built a robust engineering foundation using <strong>Python</strong> for AI and data science, <strong>C++</strong> for algorithmic problem-solving and data structures, and <strong>C#</strong> for Object-Oriented Programming (OOP), alongside web markup with <strong>HTML</strong> and hands-on experience in <strong>Server Lab</strong> environments and computer networks.',
      about_bio_p3: 'My ongoing mission is to bridge the power of <strong>Machine Learning & Artificial Intelligence</strong> with <strong>Next-Gen Mobile Applications</strong>, delivering intuitive, impactful tools into users’ hands.',
      kp_1: 'Problem-solving mindset & fast self-learning agility',
      kp_2: 'Balancing solid theoretical foundations with hands-on labs',
      kp_3: 'Relentless drive to master cutting-edge AI and mobile stacks',

      target_goal_title: 'Career Objective',
      target_goal_desc: 'Securing rigorous internship opportunities and practical projects in Artificial Intelligence, Python development, and Mobile Applications to grow into an impactful software engineer.',
      approach_title: 'Engineering Approach',
      approach_desc: 'Focusing on logic and algorithmic efficiency first, writing clean and maintainable code, and verifying through rigorous hands-on testing.',
      collab_title: 'Ready for Collaboration',
      collab_desc: 'Eager to contribute in collaborative teams, hackathons, and innovative ventures delivering high-impact technological solutions.',

      skills_tag: 'Skill Arsenal',
      skills_title: 'Technical & Academic Competencies',
      skills_subtitle: 'A balanced blend of Python & AI, core systems programming, and network infrastructure',
      cat_core_title: 'Core Programming & Logic',
      cat_core_sub: 'Languages & Software Foundations',
      lvl_solid: 'Solid Foundations & Practice',
      lvl_good: 'Good Practical Experience',
      lvl_learning: 'Concepts & Applied Practice',
      lvl_target: 'Active Learning Roadmap',

      note_python: 'AI applications, data preprocessing, model development, and scripting.',
      note_csharp: '.NET foundations, Object-Oriented Programming (OOP), and software logic.',
      note_cpp: 'Algorithmic problem-solving, memory efficiency, and core data structures.',
      note_html: 'Semantic web structure, page layout, and responsive UI fundamentals.',

      cat_ai_title: 'AI & Machine Learning',
      cat_ai_sub: 'Data Intelligence & Algorithms',
      note_ml: 'Supervised learning concepts, data cleaning, and model evaluation with Python.',
      note_ai: 'Search algorithms, decision heuristics, and pattern classification.',
      note_mobile_ai: 'Deploying intelligence onto smartphones (On-Device ML & cloud APIs).',

      cat_net_title: 'Networks & Server Infrastructure',
      cat_net_sub: 'Computer Networks & Server Lab',
      note_net: 'OSI layers, TCP/IP protocols, IP addressing, and packet routing essentials.',
      note_srv: 'Server lab configuration, relational databases, and request handling.',
      note_sys: 'Client-server communications, security basics, and system reliability.',

      int_tag: 'Future Horizon',
      int_title: 'Core Passions & Focus Areas',
      int_subtitle: 'The technological domains where I channel my dedicated focus and energy',
      int_ai_h: 'Artificial Intelligence & Machine Learning',
      int_ai_p: 'AI is redefining every industry. My deep focus is understanding how predictive models learn from complex data to empower faster and smarter human decisions. I am committed to engineering and deploying scalable AI solutions.',
      int_ai_b1: 'Developing predictive and classification models in Python',
      int_ai_b2: 'Exploring Deep Learning and Neural Network architectures',
      int_ai_b3: 'Integrating AI models into practical real-world workflows',

      int_mob_h: 'Mobile Application Engineering',
      int_mob_p: 'Mobile phones are the closest interface between technology and human life. My aim is to engineer smooth, beautifully animated, and responsive mobile apps that bring cloud services and smart AI capabilities into everyday pockets.',
      int_mob_b1: 'Building clean, modern, and engaging mobile interfaces (UI/UX)',
      int_mob_b2: 'Seamless API integration and cloud database synchronization',
      int_mob_b3: 'Engineering AI-empowered mobile applications',

      int_net_h: 'Connected Systems & Server Architecture',
      int_net_p: 'Every smart mobile app and AI model relies on dependable, low-latency, and secure data infrastructure. Understanding computer networking and server labs ensures reliable end-to-end communication from the cloud to the device.',
      int_net_b1: 'Managing hands-on server environments (Server Lab)',
      int_net_b2: 'Optimizing transmission speed and connection security',
      int_net_b3: 'Database architecture and server-side coordination',

      proj_tag: 'Showcase',
      proj_title: 'Academic & Practical Projects',
      proj_subtitle: 'Hands-on projects and lab experiments that solidified my technical skills',
      filter_all: 'All',
      filter_prog: 'Programming (Python / C# / C++)',
      filter_ai: 'AI & Machine Learning',
      filter_net: 'Networks & Servers',

      p1_title: 'Python Machine Learning Classifier',
      p1_desc: 'Developed a machine learning workflow using Python to preprocess data, perform feature engineering, and train a classification model to evaluate predictive accuracy.',
      p2_title: 'C# Data & Records Management System',
      p2_desc: 'Object-Oriented application built in C# to manage records, validate inputs, enforce data encapsulation, and generate formatted summaries.',
      p3_title: 'C++ Algorithmic Problem Solving & Data Structures',
      p3_desc: 'A collection of high-performance C++ programs implementing search, sort, and essential data structure manipulations with algorithmic efficiency.',
      p4_title: 'Integrated Network Topology & Server Lab Setup',
      p4_desc: 'Configured a multi-host network simulation in the Server Lab, establishing IP routing, tracking packet flows, and analyzing protocol behavior.',
      p5_title: 'Advanced Interactive Portfolio Website (This Site)',
      p5_desc: 'Responsive, bilingual personal portfolio crafted with HTML5, vanilla CSS3, and modern JavaScript, featuring instant WhatsApp communication and printable CV.',
      p6_title: 'AI-Empowered Mobile Prototype (In Development)',
      p6_desc: 'An ambitious project connecting trained machine learning models to a mobile user interface for instant predictions and user analytics.',
      p_status_tested: 'Academic & Applied Lab',
      p_status_done: 'Completed & Verified',
      p_status_live: 'Live Interactive Portfolio',
      p_status_progress: 'Active Development Path',

      resume_tag: 'Official Resume',
      resume_title: 'Curriculum Vitae & Qualifications',
      btn_print_cv: 'Print / Export PDF',
      res_role: 'Computer Science & AI Student | Focused on AI & Mobile Development',
      res_country: 'Egypt',
      res_edu_title: 'Academic Education',
      res_uni_title: 'Faculty of Computers & Artificial Intelligence',
      res_uni_period: "Bachelor's Degree Program (Current Student)",
      res_uni_desc: 'Specialized coursework covering: Artificial Intelligence, Machine Learning, Data Structures, Programming Languages (Python, C++, C#), Computer Networks, and Server Lab Database Management.',
      res_skills_summary_title: 'Technical Summary & Capabilities',
      res_grp1: 'Programming Languages:',
      res_grp2: 'AI & Machine Learning:',
      res_grp3: 'Networking & Systems:',
      res_grp4: 'Target Focus:',
      res_soft_title: 'Interpersonal & Soft Skills',
      soft_1: 'Agile self-learning and rapid adaptation',
      soft_2: 'Analytical mindset & problem solving',
      soft_3: 'Team collaboration and initiative',
      soft_4: 'Passion for technological innovation',
      soft_5: 'Reliability and attention to detail',
      res_langs_title: 'Languages',
      lang_ar: 'Arabic:',
      lang_native: 'Native Language',
      lang_en: 'English:',
      lang_en_level: 'Very Good (Technical Fluency)',
      res_contact_title: 'Fast Contact Channels',
      res_contact_tip: 'Readily available for interviews, summer internships, and impactful project inquiries via WhatsApp and direct call.',

      contact_tag: 'Get In Touch',
      contact_title: 'Direct Communication Hub',
      contact_subtitle: 'Have an internship opportunity, freelance project, or technical question? I welcome your connection.',
      cm_wa_label: 'Direct WhatsApp (Fastest Response)',
      cm_open_chat: 'Chat',
      cm_phone_label: 'Direct Phone Call',
      cm_copy: 'Copy',
      cm_edu_label: 'Faculty & University',
      cm_edu_val: 'Faculty of Computers & Artificial Intelligence - Egypt',
      avail_title: 'Current Availability',
      avail_desc: 'Open for summer internships, junior positions, and collaborative AI and mobile application development projects.',

      wa_form_title: 'Quick WhatsApp Message Dispatcher',
      wa_form_sub: 'Choose your purpose, write your note, and launch an instant WhatsApp chat with one click',
      form_name_label: 'Your Name or Organization:',
      form_reason_label: 'Purpose of Contact:',
      opt_job: 'Internship / Job Opportunity',
      opt_project: 'Project Collaboration / App Idea',
      opt_inquiry: 'Professional Networking / Inquiry',
      form_msg_label: 'Message:',
      form_send_btn: 'Send Message to Osama via WhatsApp',

      footer_bio: 'Computer Science & AI Student | Driven by engineering smarter software',
      f_home: 'Home',
      f_about: 'About',
      f_skills: 'Skills',
      f_cv: 'Resume',
      f_contact: 'Contact',
      footer_copy: 'Osama - All rights reserved',
      wa_tooltip: 'Chat with Osama directly'
    }
  };

  // Current Language State
  let currentLang = 'ar';

  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function updateLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;

    if (lang === 'en') {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      langLabel.textContent = 'العربية';
      document.title = 'Osama | Computer Science & AI Student - Portfolio & CV';
    } else {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
      langLabel.textContent = 'English';
      document.title = 'أسامة | طالب حاسبات وذكاء اصطناعي - بورتفوليو وسيرة ذاتية';
    }

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update form placeholders
    const senderName = document.getElementById('senderName');
    const senderMessage = document.getElementById('senderMessage');
    if (senderName && senderMessage) {
      if (lang === 'en') {
        senderName.placeholder = 'e.g. Eng. Ahmed / Tech Corp...';
        senderMessage.placeholder = "Hello Osama, I'd like to talk about...";
      } else {
        senderName.placeholder = 'مثال: م. أحمد / شركة ...';
        senderMessage.placeholder = 'مرحباً أسامة، نود التحدث معك بخصوص...';
      }
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const targetLang = currentLang === 'ar' ? 'en' : 'ar';
      updateLanguage(targetLang);
    });
  }

  // --- Toast Notification Helper ---
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);

    toastMsg.textContent = message;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- Copy Phone Number Helper ---
  function setupCopyButton(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.addEventListener('click', () => {
      const phoneNumber = '01145619853';
      navigator.clipboard.writeText(phoneNumber).then(() => {
        const msg = currentLang === 'en' 
          ? 'Phone & WhatsApp number copied: 01145619853' 
          : 'تم نسخ رقم الهاتف والواتساب بنجاح: 01145619853';
        showToast(msg);
      }).catch(() => {
        showToast('01145619853');
      });
    });
  }

  setupCopyButton('copyPhoneBtn');
  setupCopyButton('copyPhoneBtn2');

  // --- Print CV / Resume to PDF ---
  function triggerPrintCv() {
    window.print();
  }

  const printBtn1 = document.getElementById('printCvBtn');
  const printBtn2 = document.getElementById('printCvBtn2');

  if (printBtn1) printBtn1.addEventListener('click', triggerPrintCv);
  if (printBtn2) printBtn2.addEventListener('click', triggerPrintCv);

  // --- WhatsApp Custom Message Dispatcher ---
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('senderName');
      const reasonSelect = document.getElementById('contactReason');
      const messageText = document.getElementById('senderMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const reason = reasonSelect ? reasonSelect.value : '';
      const message = messageText ? messageText.value.trim() : '';

      let composedText = '';

      if (currentLang === 'en') {
        composedText = `Hello Osama!\n`;
        if (name) composedText += `I am: ${name}\n`;
        if (reason) composedText += `Contact Purpose: ${reason}\n`;
        if (message) composedText += `Message: ${message}\n`;
        composedText += `(Sent via your personal portfolio)`;
      } else {
        composedText = `مرحباً أسامة!\n`;
        if (name) composedText += `الاسم/الجهة: ${name}\n`;
        if (reason) composedText += `الغرض من التواصل: ${reason}\n`;
        if (message) composedText += `الرسالة: ${message}\n`;
        composedText += `(مرسلة من موقعك الشخصي)`;
      }

      const encoded = encodeURIComponent(composedText);
      const url = `https://wa.me/201145619853?text=${encoded}`;
      window.open(url, '_blank');
    });
  }

  // --- Projects Showcase Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Navbar Scroll Styling & Scrollspy ---
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // --- Mobile Hamburger Menu Handler ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    // Close on click link
    navLinksContainer.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // --- Current Year in Footer ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data - simplified for demo, in production would use proper i18n
const translations: Record<string, Record<string, string>> = {
  en: {
    'learn.btn': 'Learn more about us',
    'company.name': 'Hertz Dynamics',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.enquiry': 'Enquiry',
    'nav.language': 'Language',
    'hero.title': 'Revolutionizing the Future with Drone Technology',
    'hero.subtitle': 'Advanced aerial solutions for modern industries',
    'hero.cta': 'Explore Products',
    'products.title': 'Our Products',
    'products.subtitle': 'Cutting-edge drone technology for every application',
    'about.title': 'About Hertz Dynamics',
    // 'about.description': 'Leading innovation in drone technology since our founding. We specialize in creating advanced aerial solutions that transform industries and enhance human capabilities.',
    'about.description': 'Hertz Dynamics is committed to manufacture and supply motors, transformers, test & measuring equipment/instruments, drones with its essentials & allied accessories which include control platform, batteries, encoders, cables, insulators, support structures and satellite communication services. We are passionate about providing the high-quality products since our incorporation in 2025 with headquarters in Warangal, India.We focus on producing top-quality machineries and equipment that meet the industry standards and offer extended durability, reliability with affordable cost. We take pride in ourselves on supplying high-precision electrical, electronic, telecommunication components, and surveying strictly adhering to ISO 9001 standards. Our products are widely used in industrial machinery, electric vehicles, agriculture, household appliances, toys, aeronautical, nautical and electronic equipment.',
    'about.meet': 'Meet Our Founders',
    'about.belowmeet': 'The visionary leaders behind Hertz Dynamics\' innovative drone technology',
    'founder.info': 'The primary goal of Hertz Dynamics is to develop cutting-edge drone technology in aeronautical and nautical surveillance using satellite communications. Its allied interests are aligned towards agricultural surveying, supplying the electromechanical needs to household, industrial machinery and its ancillary services.We are committed to quality craftsmanship, and it is reflected through our industry-wide recognitions, patented technologies, advanced business model, global alliances and customer testimonials. We are extremely proud of our successful project implementations across different industries and digital technologies that has helped us deliver quality digital products at pace and on-demand',
    'director.info': 'At Hertz Dynamics, we have established a philosophy of collaborating with our customers and partners in their quest for creating a competitive edge. We have a collaborative and transformative approach for establishing a successful partnership with our clients. Our commitment to quality, passion for technology and ensuring that our clients success is our success has helped us establish long-term relationships with our stakeholders.We thank your interest in Hertz Dynamics and look forward to work with you in future to build products and craft your sustainable journey.',
    'founder.name': "Dr. Srinivasan Pradabane",
    'director.name': "Dr. Sakunthala Srinivasan",
    'foun': 'Founder',
    'direct': 'Director',
    'memb': 'Web Team',
    'mission': 'To democratize aerial\'Webnology and empower industries with innovative drone solutions that enhance human capabilities and create new possibilities',
    'vision': 'To be the global leader in autonomous aerial systems, driving innovation that transforms how the world works, explores, and connects.',
    'values': 'Innovation, reliability, and safety guide everything we do. We believe in creating\'Webnology that serves humanity and protects our planet.',
    'ourmission': 'Our Mission',
    'ourvision': 'Our Vision',
    'ourvalues': 'Our Values',

    'member1.name': "Lav Tripathi",
    'member1.info': "Btech final year NIT Warangal",
    'member2.name': "Rishabh Raturi",
    'member2.info': "Btech second year NIT Warangal",
    'member3.name': "Arnav Jain",
    'member3.info': "Btech second year NIT Warangal",

    'enquiry.title': 'Get in Touch',
    'enquiry.subtitle': 'Ready to discuss your drone technology needs?',
    'enquiry.touch': 'Get in Touch',
    'enquiry.belowtouch': 'Ready to revolutionize your operations with cutting-edge drone technology? Our team of experts is here to help you find the perfect solution for your needs.',
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.requirements': 'Requirements',
    'form.submit': 'Send Enquiry',
    'footer.address': 'Hertz Dynamics Headquarters',
    'footer.contact': 'Contact Information'
  },
  hi: {
    'learn.btn': 'हमारे बारे में अधिक जानें',
    'company.name': 'हर्ट्ज़ डायनामिक्स',
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.about': 'हमारे बारे में',
    'nav.enquiry': 'पूछताछ',
    'nav.language': 'भाषा',
    'hero.title': 'ड्रोन तकनीक के साथ भविष्य में क्रांति',
    'hero.subtitle': 'आधुनिक उद्योगों के लिए उन्नत हवाई समाधान',
    'hero.cta': 'उत्पाद देखें',
    'products.title': 'हमारे उत्पाद',
    'products.subtitle': 'हर अनुप्रयोग के लिए अत्याधुनिक ड्रोन तकनीक',
    'about.title': 'हर्ट्ज़ डायनामिक्स के बारे में',
    // 'about.description': 'हमारी स्थापना के बाद से ड्रोन तकनीक में नवाचार का नेतृत्व करना। हम उन्नत हवाई समाधान बनाने में विशेषज्ञता रखते हैं जो उद्योगों को बदलते हैं और मानवीय क्षमताओं को बढ़ाते हैं।',
    'about.description': 'हर्ट्ज़ डायनेमिक्स मोटर, ट्रांसफार्मर, परीक्षण एवं मापन उपकरण/यंत्र, ड्रोन और उसके आवश्यक एवं संबद्ध सहायक उपकरण, जिनमें नियंत्रण प्लेटफ़ॉर्म, बैटरी, एनकोडर, केबल, इंसुलेटर, सहायक संरचनाएँ और उपग्रह संचार सेवाएँ शामिल हैं, के निर्माण और आपूर्ति के लिए प्रतिबद्ध है। 2025 में वारंगल, भारत में मुख्यालय के साथ अपनी स्थापना के बाद से, हम उच्च-गुणवत्ता वाले उत्पाद प्रदान करने के लिए तत्पर हैं। हम उच्च-गुणवत्ता वाली मशीनरी और उपकरण बनाने पर ध्यान केंद्रित करते हैं जो उद्योग मानकों को पूरा करते हैं और किफायती लागत पर विस्तारित स्थायित्व और विश्वसनीयता प्रदान करते हैं। हमें ISO 9001 मानकों का कड़ाई से पालन करते हुए उच्च-परिशुद्धता वाले विद्युत, इलेक्ट्रॉनिक, दूरसंचार घटकों और सर्वेक्षण की आपूर्ति करने पर गर्व है। हमारे उत्पादों का व्यापक रूप से औद्योगिक मशीनरी, इलेक्ट्रिक वाहन, कृषि, घरेलू उपकरण, खिलौने, वैमानिकी, समुद्री और इलेक्ट्रॉनिक उपकरणों में उपयोग किया जाता है।',
    'about.meet': 'हमारे संस्थापक से मिलें',
    'about.belowmeet': 'हर्ट्ज़ डायनेमिक्स की नवीनतम ड्रोन तकनीक के पीछे दूरदर्शी नेता।',
    'founder.info': 'हर्ट्ज़ डायनेमिक्स का मुख्य लक्ष्य सैटेलाइट संचार का उपयोग करके विमानन और नौवहन निगरानी में अत्याधुनिक ड्रोन तकनीक का विकास करना है। इसके सहयोगी हित कृषि सर्वेक्षण, घरेलू, औद्योगिक मशीनरी और उसकी सहायक सेवाओं के लिए विद्युत-यांत्रिक आवश्यकताओं की आपूर्ति की ओर उन्मुख हैं।हम गुणवत्ता पूर्ण शिल्पकला के लिए प्रतिबद्ध हैं, और यह हमारी उद्योग-व्यापी मान्यताओं, पेटेंटेड तकनीकों, उन्नत व्यवसाय मॉडल, वैश्विक साझेदारियों और ग्राहक प्रशंसापत्रों में परिलक्षित होता है।हम विभिन्न उद्योगों और डिजिटल प्रौद्योगिकियों में अपनी सफल परियोजना कार्यान्वयन पर बेहद गर्व करते हैं, जिसने हमें तेज़ी से और मांग के अनुसार गुणवत्तापूर्ण डिजिटल उत्पाद प्रदान करने में सक्षम बनाया है।',
    'director.info': 'हर्ट्ज़ डायनेमिक्स में, हमने अपने ग्राहकों और भागीदारों के साथ प्रतिस्पर्धात्मक बढ़त बनाने की उनकी खोज में सहयोग करने का एक दर्शन स्थापित किया है। हम अपने ग्राहकों के साथ एक सहयोगात्मक और परिवर्तनकारी दृष्टिकोण अपनाते हैं ताकि एक सफल साझेदारी स्थापित हो सके।गुणवत्ता के प्रति हमारी प्रतिबद्धता, प्रौद्योगिकी के प्रति हमारा जुनून और यह विश्वास कि हमारे ग्राहकों की सफलता ही हमारी सफलता है, ने हमें अपने हितधारकों के साथ दीर्घकालिक संबंध स्थापित करने में सक्षम बनाया है।हम आपके हर्ट्ज़ डायनेमिक्स में रुचि के लिए आभारी हैं और भविष्य में आपके साथ मिलकर उत्पाद बनाने और आपके सतत् विकास की यात्रा को आगे बढ़ाने की आशा करते हैं।',

    'foun': "संस्थापक",
    'direct': "निदेशक",
    'memb': "वेब टीम",
    'ourmission': "हमारा मिशन",
    'ourvision': "हमारा दृष्टिकोण",
    'ourvalues': "हमारे मूल्य",


    'member1.name': "लव त्रिपाठी",
    'member1.info': "बीटेक अंतिम वर्ष, एनआईटी वारंगल",
    'member2.name': "ऋषभ रतुरी",
    'member2.info': "बीटेक द्वितीय वर्ष, एनआईटी वारंगल",
    'member3.name': "अर्णव जैन",
    'member3.info': "बीटेक द्वितीय वर्ष, एनआईटी वारंगल",
    'mission': "हवाई तकनीक को सभी के लिए सुलभ बनाना और उद्योगों को नवीन ड्रोन समाधानों से सशक्त करना जो मानव क्षमताओं को बढ़ाते हैं और नई संभावनाएँ पैदा करते हैं।",
    'vision': "स्वायत्त हवाई प्रणालियों में वैश्विक नेता बनना, ऐसे नवाचार को आगे बढ़ाना जो दुनिया के काम करने, खोजने और जुड़ने के तरीके को बदल दे।",
    'values': "नवाचार, विश्वसनीयता और सुरक्षा हमारे हर काम का मार्गदर्शन करते हैं। हम ऐसी तकनीक बनाने में विश्वास करते हैं जो मानवता की सेवा करे और हमारे ग्रह की रक्षा करे।",


    'founder.name': "डॉ. श्रीनिवासन प्रदाबाने",
    'director.name': "डॉ. शकुंतला श्रीनिवासन",
    'enquiry.title': 'संपर्क करें',
    'enquiry.subtitle': 'अपनी ड्रोन तकनीक आवश्यकताओं पर चर्चा करने के लिए तैयार हैं?',
    'enquiry.touch': "संपर्क करें",
    'enquiry.belowtouch': "क्या आप अत्याधुनिक ड्रोन तकनीक के साथ अपने संचालन में क्रांति लाने के लिए तैयार हैं? हमारी विशेषज्ञों की टीम आपकी ज़रूरतों के लिए सही समाधान खोजने में मदद करने के लिए यहाँ है।",

    'form.name': 'पूरा नाम',
    'form.email': 'ईमेल पता',
    'form.phone': 'फोन नंबर',
    'form.requirements': 'आवश्यकताएं',
    'form.submit': 'पूछताछ भेजें',
    'footer.address': 'हर्ट्ज़ डायनामिक्स मुख्यालय',
    'footer.contact': 'संपर्क जानकारी'
  },
  te: {
    'learn.btn': 'మా గురించి మరింత తెలుసుకోండి',
    'company.name': 'హెర్ట్జ్ డైనమిక్స్ ప్రధాన ',
    'nav.home': 'హోమ్',
    'nav.products': 'ఉత్పత్తులు',
    'nav.about': 'మా గురించి',
    'nav.enquiry': 'విచారణ',
    'nav.language': 'భాష',
    'hero.title': 'డ్రోన్ టెక్నాలజీతో భవిష్యత్తును విప్లవాత్మకంగా మార్చడం',
    'hero.subtitle': 'ఆధునిక పరిశ్రమలకు అధునాతన వైమానిక పరిష్కారాలు',
    'hero.cta': 'ఉత్పత్తులను అన్వేషించండి',
    'products.title': 'మా ఉత్పత్తులు',
    'products.subtitle': 'ప్రతి అప్లికేషన్ కోసం అధునాతన డ్రోన్ టెక్నాలజీ',
    'about.title': 'హెర్ట్జ్ డైనమిక్స్ గురించి',
    // 'about.description': 'మా స్థాపన నుండి డ్రోన్ టెక్నాలజీలో ఇనోవేషన్‌కు నాయకత్వం వహిస్తున్నాము. మేము పరిశ్రమలను మార్చే మరియు మానవ సామర్థ్యాలను పెంచే అధునాతన వైమానిక పరిష్కారాలను సృష్టించడంలో నిపుణులం.',
    'about.description': 'హెర్ట్జ్ డైనమిక్స్ మోటార్లు, ట్రాన్స్‌ఫార్మర్లు, టెస్ట్ & కొలిచే పరికరాలు/సాధనాలు, డ్రోన్‌లను దాని అవసరమైన వస్తువులు & నియంత్రణ ప్లాట్‌ఫారమ్, బ్యాటరీలు, ఎన్‌కోడర్లు, కేబుల్స్, ఇన్సులేటర్లు, సపోర్ట్ స్ట్రక్చర్‌లు మరియు ఉపగ్రహ కమ్యూనికేషన్ సేవలతో సహా అనుబంధ ఉపకరణాలతో తయారు చేసి సరఫరా చేయడానికి కట్టుబడి ఉంది. 2025లో భారతదేశంలోని వరంగల్‌లో మా ప్రధాన కార్యాలయం స్థాపించబడినప్పటి నుండి మేము అధిక-నాణ్యత ఉత్పత్తులను అందించడం పట్ల మక్కువ కలిగి ఉన్నాము. పరిశ్రమ ప్రమాణాలకు అనుగుణంగా ఉండే మరియు సరసమైన ధరతో విస్తరించిన మన్నిక, విశ్వసనీయతను అందించే అత్యున్నత-నాణ్యత యంత్రాలు మరియు పరికరాలను ఉత్పత్తి చేయడంపై మేము దృష్టి పెడుతున్నాము. అధిక-ఖచ్చితమైన విద్యుత్, ఎలక్ట్రానిక్, టెలికమ్యూనికేషన్ భాగాలను సరఫరా చేయడం మరియు ISO 9001 ప్రమాణాలకు కట్టుబడి సర్వే చేయడంలో మేము గర్విస్తున్నాము. మా ఉత్పత్తులు పారిశ్రామిక యంత్రాలు, ఎలక్ట్రిక్ వాహనాలు, వ్యవసాయం, గృహోపకరణాలు, బొమ్మలు, ఏరోనాటికల్, నాటికల్ మరియు ఎలక్ట్రానిక్ పరికరాలలో విస్తృతంగా ఉపయోగించబడుతున్నాయి',
    'about.meet': 'మా వ్యవస్థాపకులను కలుసుకోండి',
    'about.belowmeet': 'హెర్ట్జ్ డైనమిక్స్ యొక్క ఆవిష్కరణాత్మక డ్రోన్ సాంకేతికత వెనుక ఉన్న దూరదృష్టి కలిగిన నాయకులు',
    'founder.info': 'హెర్ట్జ్ డైనమిక్స్ యొక్క ప్రాథమిక లక్ష్యం ఉపగ్రహ కమ్యూనికేషన్లను ఉపయోగించి విమాన మరియు నౌకాయాన పర్యవేక్షణలో అత్యాధునిక డ్రోన్ సాంకేతికతను అభివృద్ధి చేయడం. దాని అనుబంధ ఆసక్తులు వ్యవసాయ సర్వేయింగ్, అలాగే గృహ, పారిశ్రామిక యంత్రాలు మరియు అనుబంధ సేవల కోసం ఎలక్ట్రోమెకానికల్ అవసరాల సరఫరాపై కేంద్రీకృతమై ఉన్నాయి.మేము నాణ్యమైన శిల్పకళకు కట్టుబడి ఉన్నాము, ఇది మా పరిశ్రమవ్యాప్తంగా గుర్తింపులు, పేటెంట్ సాంకేతికతలు, ఆధునిక వ్యాపార నమూనా, గ్లోబల్ భాగస్వామ్యాలు మరియు వినియోగదారు ప్రశంసలు ద్వారా ప్రతిబింబించబడుతుంది.వివిధ పరిశ్రమలు మరియు డిజిటల్ టెక్నాలజీలలో మా విజయవంతమైన ప్రాజెక్ట్ అమలుపై మేము గర్విస్తున్నాము, ఇవి మాకు వేగంగా మరియు అవసరానికి అనుగుణంగా నాణ్యమైన డిజిటల్ ఉత్పత్తులు అందించడానికి సహాయపడ్డాయి.',
    'director.info': 'హెర్ట్జ్ డైనమిక్స్‌లో, మా వినియోగదారులు మరియు భాగస్వాములు పోటీదారులపై ఆధిక్యం సాధించే వారి ప్రయాణంలో మేము సహకరించే తత్వాన్ని స్థాపించాము. మా కస్టమర్‌లతో విజయవంతమైన భాగస్వామ్యాన్ని ఏర్పరచడానికి మాకు ఒక సహకార మరియు మార్పు తేచే విధానం ఉంది.నాణ్యత పట్ల మా కట్టుబాటు, సాంకేతికత పట్ల మా ఆసక్తి మరియు మా కస్టమర్‌ల విజయమే మా విజయం అనే నమ్మకం మాకు మా వాటాదారులతో దీర్ఘకాల సంబంధాలను ఏర్పరచడానికి సహాయపడింది.హెర్ట్జ్ డైనమిక్స్ పట్ల మీ ఆసక్తికి ధన్యవాదాలు. భవిష్యత్తులో మీతో కలిసి ఉత్పత్తులను అభివృద్ధి చేయడానికి మరియు మీ సుస్థిరమైన ప్రయాణాన్ని నిర్మించడానికి ఎదురుచూస్తున్నాము.',
    'member1.name': "లవ్ త్రిపాఠి",
    'member1.info': "బి.టెక్ చివరి సంవత్సరం, ఎన్ఐటి వరంగల్",
    'member2.name': "ఋషభ్ రతూరి",
    'member2.info': "బి.టెక్ రెండవ సంవత్సరం, ఎన్ఐటి వరంగల్",
    'member3.name': "అర్నవ్ జైన్",
    'member3.info': "బి.టెక్ రెండవ సంవత్సరం, ఎన్ఐటి వరంగల్",
    'ourmission': "మా లక్ష్యం",
    'ourvision': "మా దృష్టి",
    'ourvalues': "మా విలువలు",

    'foun': "స్థాపకుడు",
    'direct': "డైరెక్టర్",
    'memb': "వెబ్ బృందం",
    'mission': "ఆకాశ సాంకేతికతను ప్రజలందరికీ అందుబాటులోకి తేవడం మరియు మానవ సామర్థ్యాలను పెంచే, కొత్త అవకాశాలను సృష్టించే వినూత్న డ్రోన్ పరిష్కారాలతో పరిశ్రమలను శక్తివంతం చేయడం.",
    'vision': "స్వయంచాలక వైమానిక వ్యవస్థలలో ప్రపంచ నాయకుడిగా మారడం, ప్రపంచం ఎలా పనిచేస్తుందో, అన్వేషిస్తుందో మరియు కలుస్తుందో మార్చే ఆవిష్కరణను నడిపించడం.",
    'values': "ఆవిష్కరణ, విశ్వసనీయత మరియు భద్రత మా ప్రతి పనిని మార్గనిర్దేశం చేస్తాయి. మేము మానవాళికి సేవ చేసే మరియు మా గ్రహాన్ని రక్షించే సాంకేతికతను సృష్టించడంలో నమ్మకం కలిగి ఉన్నాము.",




    'founder.name': "డా. శ్రీనివాసన్ ప్రభదానే",
    'director.name': "డా. శకుంతల శ్రీనివాసన్",
    'enquiry.title': 'సంప్రదించండి',
    'enquiry.subtitle': 'మీ డ్రోన్ టెక్నాలజీ అవసరాల గురించి చర్చించడానికి సిద్ధంగా ఉన్నారా?',
    'enquiry.touch': "సంప్రదించండి",
    'enquiry.belowtouch': "అత్యాధునిక డ్రోన్ సాంకేతికతతో మీ కార్యకలాపాలలో విప్లవం సృష్టించడానికి సిద్ధంగా ఉన్నారా? మీ అవసరాలకు సరైన పరిష్కారాన్ని కనుగొనడానికి మా నిపుణుల బృందం మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది.",

    'form.name': 'పూర్తి పేరు',
    'form.email': 'ఇమెయిల్ చిరునామా',
    'form.phone': 'ఫోన్ నంబర్',
    'form.requirements': 'అవసరాలు',
    'form.submit': 'విచారణ పంపండి',
    'footer.address': 'హెర్ట్జ్ డైనమిక్స్ ప్రధాన కార్యాలయం',
    'footer.contact': 'సంప్రదింపు సమాచారం'
  },
  ta: {
    'learn.btn': 'எங்களைப் பற்றி மேலும் அறிக',
    'company.name': 'ஹெர்ட்ஸ் டைனமிக்ஸ் ',
    'nav.home': 'வீடு',
    'nav.products': 'தயாரிப்புகள்',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.enquiry': 'விசாரணை',
    'nav.language': 'மொழி',
    'hero.title': 'ட்ரோன் தொழில்நுட்பத்துடன் எதிர்காலத்தை புரட்சிகரமாக மாற்றுதல்',
    'hero.subtitle': 'நவீன தொழில்களுக்கான மேம்பட்ட வான்வழி தீர்வுகள்',
    'hero.cta': 'தயாரிப்புகளை ஆராயுங்கள்',
    'products.title': 'எங்கள் தயாரிப்புகள்',
    'products.subtitle': 'ஒவ்வொரு பயன்பாட்டிற்கும் அதிநவீன ட்ரோன் தொழில்நுட்பம்',
    'about.title': 'ஹெர்ட்ஸ் டைனமிக்ஸ் பற்றி',
    // 'about.description': 'எங்கள் நிறுவனம் தொடங்கியதிலிருந்து ட்ரோன் தொழில்நுட்பத்தில் புதுமைக்கு முன்னணியில் உள்ளோம். தொழில்களை மாற்றும் மற்றும் மனித திறன்களை மேம்படுத்தும் மேம்பட்ட வான்வழி தீர்வுகளை உருவாக்குவதில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.',
    'about.description': 'ஹெர்ட்ஸ் டைனமிக்ஸ், மோட்டார்கள், மின்மாற்றிகள், சோதனை மற்றும் அளவிடும் உபகரணங்கள்/கருவிகள், ட்ரோன்கள் மற்றும் அதன் அத்தியாவசியப் பொருட்கள் மற்றும் கட்டுப்பாட்டு தளம், பேட்டரிகள், குறியாக்கிகள், கேபிள்கள், மின்கடத்திகள், ஆதரவு கட்டமைப்புகள் மற்றும் செயற்கைக்கோள் தொடர்பு சேவைகள் உள்ளிட்ட துணைப் பொருட்களை தயாரித்து வழங்க உறுதிபூண்டுள்ளது. 2025 ஆம் ஆண்டு இந்தியாவின் வாரங்கலில் தலைமையகத்துடன் இணைக்கப்பட்டதிலிருந்து உயர்தர தயாரிப்புகளை வழங்குவதில் நாங்கள் ஆர்வமாக உள்ளோம். தொழில்துறை தரநிலைகளை பூர்த்தி செய்யும் உயர்தர இயந்திரங்கள் மற்றும் உபகரணங்களை தயாரிப்பதில் நாங்கள் கவனம் செலுத்துகிறோம் மற்றும் மலிவு விலையில் நீட்டிக்கப்பட்ட ஆயுள், நம்பகத்தன்மையை வழங்குகிறோம். உயர் துல்லியமான மின்சாரம், மின்னணு, தொலைத்தொடர்பு கூறுகளை வழங்குவதில் நாங்கள் பெருமை கொள்கிறோம், மேலும் ISO 9001 தரநிலைகளை கண்டிப்பாக கடைபிடிக்கும் கணக்கெடுப்புகளை மேற்கொள்கிறோம். எங்கள் தயாரிப்புகள் தொழில்துறை இயந்திரங்கள், மின்சார வாகனங்கள், விவசாயம், வீட்டு உபயோகப் பொருட்கள், பொம்மைகள், விமானம், கடல் மற்றும் மின்னணு உபகரணங்களில் பரவலாகப் பயன்படுத்தப்படுகின்றன.',
    'about.meet': 'எங்கள் நிறுவுநர்களை சந்திக்கவும்',
    'about.belowmeet': 'ஹெர்ட்ஸ் டைனமிக்ஸ் நிறுவனத்தின் புதுமையான ட்ரோன் தொழில்நுட்பத்தின் பின்னால் உள்ள தொலைநோக்குள்ள தலைவர்கள்.',
    'founder.info': 'ஹெர்ட்ஸ் டைனமிக்ஸின் முதன்மை இலக்கு செயற்கைக்கோள் தொடர்புகளை பயன்படுத்தி விமான மற்றும் கடல் கண்காணிப்பு துறைகளில் நவீன ட்ரோன் தொழில்நுட்பத்தை உருவாக்குவதாகும். அதன் துணை விருப்பங்கள் விவசாய ஆய்வு, வீட்டு, தொழில்துறை இயந்திரங்கள் மற்றும் அதனுடன் தொடர்புடைய சேவைகளுக்கான மின்சார-இயந்திர தேவைகளை வழங்குதல் என்பவற்றை உள்ளடக்கியவையாகும்.நாங்கள் தரமான கைவினைப் பணிக்காக உறுதியாக உள்ளோம், இது எங்கள் தொழில் துறையின் அங்கீகாரங்கள், காப்புரிமை பெற்ற தொழில்நுட்பங்கள், மேம்பட்ட வணிக மாதிரி, உலகளாவிய கூட்டாண்மைகள் மற்றும் வாடிக்கையாளர் பாராட்டுகள் மூலம் பிரதிபலிக்கிறது.பல்வேறு துறைகள் மற்றும் டிஜிட்டல் தொழில்நுட்பங்களில் எங்களின் வெற்றிகரமான திட்ட செயல்பாடுகள் மீது நாங்கள் பெருமைப்படுகிறோம், இது எங்களை வேகமாகவும் தேவைக்கேற்றவாறு உயர்தர டிஜிட்டல் தயாரிப்புகளை வழங்க உதவியுள்ளது.',
    'director.info': 'ஹெர்ட்ஸ் டைனமிக்ஸில், எங்கள் வாடிக்கையாளர்கள் மற்றும் கூட்டாளர்கள் போட்டி முன்னிலை உருவாக்கும் முயற்சியில் அவர்களுடன் இணைந்து செயல்படும் தத்துவத்தை நாங்கள் நிறுவியுள்ளோம். எங்கள் வாடிக்கையாளர்களுடன் வெற்றிகரமான கூட்டாண்மையை உருவாக்க நாங்கள் ஒரு கூட்டு மற்றும் மாற்றமளிக்கும் அணுகுமுறையை பின்பற்றுகிறோம்.தரத்திற்கு எங்கள் பற்றுதல், தொழில்நுட்பத்திற்கான எங்கள் ஆர்வம் மற்றும் எங்கள் வாடிக்கையாளர்களின் வெற்றியே எங்கள் வெற்றி என்ற நம்பிக்கை எங்களுக்கு எங்கள் பங்குதாரர்களுடன் நீண்டகால உறவுகளை உருவாக்க உதவியுள்ளது.ஹெர்ட்ஸ் டைனமிக்ஸில் நீங்கள் காட்டிய ஆர்வத்திற்கு நன்றி. எதிர்காலத்தில் உங்களுடன் சேர்ந்து தயாரிப்புகளை உருவாக்கவும், உங்கள் நிலையான பயணத்தை வடிவமைக்கவும் ஆவலுடன் உள்ளோம்.',
    'foun': "நிறுவனர்",
    'direct': "இயக்குனர்",
    'memb': "வலை குழு",


    'member1.name': "லவ் திரிபாதி",
    'member1.info': "பி.டெக் இறுதி ஆண்டு, என்.ஐ.டி வாரங்கல்",
    'member2.name': "ரிஷப் ரதூரி",
    'member2.info': "பி.டெக் இரண்டாம் ஆண்டு, என்.ஐ.டி வாரங்கல்",
    'member3.name': "அர்னவ் ஜெயின்",
    'member3.info': "பி.டெக் இரண்டாம் ஆண்டு, என்.ஐ.டி வாரங்கல்",
    'mission': "வான்வழி தொழில்நுட்பத்தை அனைவருக்கும் எளிதாக்கி, மனித திறன்களை மேம்படுத்தும் மற்றும் புதிய வாய்ப்புகளை உருவாக்கும் புதுமையான ட்ரோன் தீர்வுகளால் தொழில்களை வலுப்படுத்துதல்.",
    'vision': "தானியங்கி வான்வழி அமைப்புகளில் உலகத் தலைவராக இருந்து, உலகம் எவ்வாறு செயல்படுகிறது, ஆராய்கிறது மற்றும் இணைகிறது என்பதை மாற்றும் புதுமைகளை முன்னெடுத்து செல்லுதல்.",
    'values': "புதுமை, நம்பகத்தன்மை மற்றும் பாதுகாப்பு எங்கள் செயல்பாடுகளின் அடித்தளம். மனித குலத்திற்கு சேவை செய்யும் மற்றும் எங்கள் கோளத்தை பாதுகாக்கும் தொழில்நுட்பத்தை உருவாக்குவதை நாங்கள் நம்புகிறோம்.",


    'founder.name': "டா. ஸ்ரீனிவாசன் பிரதபானே",
    'director.name': "டா. சகுந்தலா ஸ்ரீனிவாசன்",
    'enquiry.title': 'தொடர்பு கொள்ளுங்கள்',
    'enquiry.subtitle': 'உங்கள் ட்ரோன் தொழில்நுட்ப தேவைகளைப் பற்றி விவாதிக்க தயாரா?',
    'enquiry.touch': "தொடர்பு கொள்ளவும்",
    'enquiry.belowtouch': "அதிநவீன ட்ரோன் தொழில்நுட்பத்துடன் உங்கள் செயல்பாடுகளில் புரட்சியை ஏற்படுத்த தயாரா? உங்கள் தேவைகளுக்கு சரியான தீர்வை கண்டுபிடிக்க எங்கள் நிபுணர் குழு உங்களுக்கு உதவ தயாராக உள்ளது.",
    'ourmission': "எங்கள் பணி",
    'ourvision': "எங்கள் பார்வை",
    'ourvalues': "எங்கள் மதிப்புகள்",


    'form.name': 'முழு பெயர்',
    'form.email': 'மின்னஞ்சல் முகவரி',
    'form.phone': 'தொலைபேசி எண்',
    'form.requirements': 'தேவைகள்',
    'form.submit': 'விசாரணை அனுப்பு',
    'footer.address': 'ஹெர்ட்ஸ் டைனமிக்ஸ் தலைமையகம்',
    'footer.contact': 'தொடர்பு தகவல்'
  },
  fr: {
    'learn.btn': 'en savoir plus sur nous',
    'company.name': 'Hertz Dynamics',
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À propos',
    'nav.enquiry': 'Demande',
    'nav.language': 'Langue',
    'hero.title': 'Révolutionner l\'avenir avec la technologie des drones',
    'hero.subtitle': 'Solutions aériennes avancées pour les industries modernes',
    'hero.cta': 'Explorez les produits',
    'products.title': 'Nos produits',
    'products.subtitle': 'Technologie de drone de pointe pour chaque application',
    'about.title': 'À propos de Hertz Dynamics',
    'about.description': 'Hertz Dynamics fabrique et fournit des moteurs, des transformateurs, des équipements et instruments de test et de mesure, ainsi que des drones et leurs accessoires essentiels, notamment des plateformes de contrôle, des batteries, des codeurs, des câbles, des isolateurs, des structures de support et des services de communication par satellite. Depuis notre création en 2025, et notre siège social à Warangal, en Inde, nous sommes passionnés par la fourniture de produits de haute qualité. Nous nous concentrons sur la production de machines et d\'équipements de haute qualité, conformes aux normes de l\'industrie, offrant durabilité et fiabilité à un prix abordable. Nous sommes fiers de fournir des composants électriques, électroniques et de télécommunication de haute précision, ainsi que des équipements topographiques, conformément à la norme ISO 9001. Nos produits sont largement utilisés dans les machines industrielles, les véhicules électriques, l\'agriculture, l\'électroménager, les jouets, l\'aéronautique, le nautisme et l\'électronique.',
    // 'about.description': 'Leader de l\'innovation en technologie de drones depuis notre fondation. Nous nous spécialisons dans la création de solutions aériennes avancées qui transforment les industries et améliorent les capacités humaines.',
    'about.meet': 'Rencontrez nos fondateurs',
    'about.belowmeet': 'Les leaders visionnaires derrière la technologie innovante des drones de Hertz Dynamics.',
    'founder.info': 'L\'objectif principal de Hertz Dynamics est de développer une technologie de drones de pointe pour la surveillance aéronautique et nautique grâce aux communications par satellite. Ses intérêts associés s\'orientent vers l\'exploration agricole, ainsi que vers la fourniture de solutions électromécaniques pour les foyers, les machines industrielles et leurs services annexes.Nous sommes engagés envers un savoir-faire de qualité, ce qui se reflète dans nos reconnaissances industrielles, technologies brevetées, modèles commerciaux avancés, alliances mondiales et témoignages clients.Nous sommes extrêmement fiers de nos réalisations réussies de projets dans divers secteurs et technologies numériques, qui nous ont permis de fournir des produits numériques de qualité, rapidement et à la demande.',
    'director.info': 'Chez Hertz Dynamics, nous avons établi une philosophie consistant à collaborer avec nos clients et partenaires dans leur quête d\'avantage concurrentiel. Nous adoptons une approche collaborative et transformatrice pour bâtir un partenariat réussi avec nos clients.Notre engagement envers la qualité, notre passion pour la technologie et notre conviction que le succès de nos clients est aussi notre succès nous ont permis de construire des relations durables avec nos parties prenantes.Nous vous remercions de l\'intérêt que vous portez à Hertz Dynamics et nous nous réjouissons de collaborer avec vous à l\'avenir pour concevoir des produits et accompagner votre parcours durable.',
    'ourmission': "Notre mission",
    'ourvision': "Notre vision",
    'ourvalues': "Nos valeurs",

    'foun': "fondateur",
    'direct': "directeur",
    'memb': "équipe web",


    'member1.name': "Lav Tripathi",
    'member1.info': "B.Tech dernière année, NIT Warangal",
    'member2.name': "Rishabh Raturi",
    'member2.info': "B.Tech deuxième année, NIT Warangal",
    'member3.name': "Arnav Jain",
    'member3.info': "B.Tech deuxième année, NIT Warangal",
    'mission': "Démocratiser la technologie aérienne et autonomiser les industries grâce à des solutions de drones innovantes qui améliorent les capacités humaines et créent de nouvelles possibilités.",
    'vision': "Être le leader mondial des systèmes aériens autonomes, en stimulant'innovation qui transforme la façon dont le monde travaille, explore et se connecte.",
    'values': "innovation, la fiabilité et la sécurité guident toutes nos actions. Nous croyons en la création de technologies qui serventhumanité et protègent notre planète.",


    'founder.name': "Dr. Srinivasan Pradabane",
    'director.name': "Dr. Sakunthala Srinivasan",
    'enquiry.title': 'Contactez-nous',
    'enquiry.subtitle': 'Prêt à discuter de vos besoins en technologie de drones?',
    'enquiry.touch': "Contactez-nous",
    'enquiry.belowtouch': "Prêt à révolutionner vos opérations avec une technologie de drones de pointe ? Notre équipe'experts est là pour vous aider à trouver la solution idéale à vos besoins.",

    'form.name': 'Nom complet',
    'form.email': 'Adresse e-mail',
    'form.phone': 'Numéro de téléphone',
    'form.requirements': 'Exigences',
    'form.submit': 'Envoyer la demande',
    'footer.address': 'Siège social de Hertz Dynamics',
    'footer.contact': 'Informations de contact'
  },
  no: {
    'learn.btn': 'lære mer om oss',
    'company.name': 'Hertz Dynamics',
    'nav.home': 'Hjem',
    'nav.products': 'Produkter',
    'nav.about': 'Om oss',
    'nav.enquiry': 'Forespørsel',
    'nav.language': 'Språk',
    'hero.title': 'Revolusjonere fremtiden med droneteknologi',
    'hero.subtitle': 'Avanserte luftløsninger for moderne industrier',
    'hero.cta': 'Utforsk produkter',
    'products.title': 'Våre produkter',
    'products.subtitle': 'Banebrytende droneteknologi for alle applikasjoner',
    'about.title': 'Om Hertz Dynamics',
    // 'about.description': 'Ledende innovasjon innen droneteknologi siden vår grunnleggelse. Vi spesialiserer oss på å skape avanserte luftløsninger som transformerer industrier og forbedrer menneskelige evner.',
    'about.description': 'Hertz Dynamics er forpliktet til å produsere og levere motorer, transformatorer, test- og måleutstyr/-instrumenter, droner med nødvendig utstyr og tilhørende tilbehør som inkluderer kontrollplattform, batterier, kodere, kabler, isolatorer, støttestrukturer og satellittkommunikasjonstjenester. Vi har vært lidenskapelig opptatt av å tilby produkter av høy kvalitet siden etableringen i 2025, med hovedkontor i Warangal, India. Vi fokuserer på å produsere maskiner og utstyr av topp kvalitet som oppfyller bransjestandarder og tilbyr utvidet holdbarhet, pålitelighet til en overkommelig pris. Vi er stolte av å levere høypresisjons elektriske, elektroniske og telekommunikasjonskomponenter og landmåling i streng overensstemmelse med ISO 9001-standardene. Produktene våre er mye brukt i industrimaskiner, elektriske kjøretøy, landbruk, husholdningsapparater, leker, luftfarts-, nautisk og elektronisk utstyr.',
    'about.meet': 'Møt våre grunnleggere',
    'about.belowmeet': 'De visjonære lederne bak Hertz Dynamics\' innovative droneteknologi.',
    'founder.info': 'Hovedmålet til Hertz Dynamics er å utvikle banebrytende drone-teknologi for aeronautisk og nautisk overvåking ved hjelp av satellittkommunikasjon. Våre tilknyttede interesser er rettet mot landbrukskartlegging, samt levering av elektromekaniske løsninger til husholdninger, industrimaskiner og tilhørende tjenester.Vi er forpliktet til kvalitetshåndverk, noe som gjenspeiles gjennom våre bransjeomfattende anerkjennelser, patenterte teknologier, avanserte forretningsmodeller, globale allianser og kundereferanser.Vi er svært stolte av våre vellykkede prosjektimplementeringer på tvers av ulike bransjer og digitale teknologier, som har hjulpet oss å levere digitale kvalitetsprodukter raskt og på forespørsel.',
    'director.info': 'Hos Hertz Dynamics har vi etablert en filosofi om å samarbeide med våre kunder og partnere i deres søken etter å skape et konkurransefortrinn. Vi har en samarbeidsorientert og transformativ tilnærming for å etablere vellykkede partnerskap med våre kunder.Vårt engasjement for kvalitet, lidenskap for teknologi og overbevisningen om at våre kunders suksess er vår suksess har hjulpet oss med å bygge langsiktige relasjoner med våre interessenter.Vi takker for din interesse i Hertz Dynamics og ser frem til å samarbeide med deg i fremtiden for å utvikle produkter og forme din bærekraftige reise.',
    'member1.name': "Lav Tripathi",
    'member1.info': "B.Tech siste år, NIT Warangal",
    'member2.name': "Rishabh Raturi",
    'member2.info': "B.Tech andre år, NIT Warangal",
    'member3.name': "Arnav Jain",
    'member3.info': "B.Tech andre år, NIT Warangal",
    'mission': "Å demokratisere luftteknologi og styrke industrien med innovative droneløsninger som forbedrer menneskelige evner og skaper nye muligheter.",
    'vision': "Å være den globale lederen innen autonome luftsystemer, og drive innovasjon som forandrer hvordan verden arbeider, utforsker og kobler seg sammen.",
    'values': "Innovasjon, pålitelighet og sikkerhet styrer alt vi gjør. Vi tror på å skape teknologi som tjener menneskeheten og beskytter planeten vår.",
    'ourmission': "Vårt oppdrag",
    'ourvision': "Vår visjon",
    'ourvalues': "Våre verdier",


    'foun': "grunnlegger",
    'direct': "direktør",
    'memb': "nettlag",
    'founder.name': "Dr. Srinivasan Pradabane",
    'director.name': "Dr. Sakunthala Srinivasan",
    'enquiry.title': 'Ta kontakt',
    'enquiry.subtitle': 'Klar til å diskutere dine droneteknologi behov?',
    'enquiry.touch': "Ta kontakt",
    'enquiry.belowtouch': "Klar til å revolusjonere driften din med banebrytende droneteknologi? Vårt team av eksperter er her for å hjelpe deg med å finne den perfekte løsningen for dine behov.",

    'form.name': 'Fullt navn',
    'form.email': 'E-postadresse',
    'form.phone': 'Telefonnummer',
    'form.requirements': 'Krav',
    'form.submit': 'Send forespørsel',
    'footer.address': 'Hertz Dynamics hovedkontor',
    'footer.contact': 'Kontaktinformasjon'
  }
  // Add more translations as needed
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
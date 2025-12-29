
const faqData = [
    //   good questions 
    { question: "aapki website kya karti hai", answer: "Hamari website coding sikhne ke liye tutorials, practice problems, aur projects provide karti hai." },
    { question: "aapka naam kya hai", answer: "Mera naam MantrAi hai. Aapka naam kya hai?." },
    { question: "hello hellow hyy namste ", answer: "Hey! What’s up? How can I help you today?." },
    { question: "kaise ho tum", answer: "Mai Thik Aap Apna Btao." },
    // { question: "aap kya kar sakte ho", answer: "Main aapke sawaalon ke jawab de sakta hoon." },
    { question: "bye", answer: "Bye... agar aapko kuch kaam ho to mujhe btaana" },
    { question: "achaa hmm hm ek kaam kro", answer: "Ji... aapko koi or help chahiye" },
    { question: "yes haa ", answer: "btaiye aapko kya help chahiye" },
    { question: "I Love You", answer: "I Love You Tu💕💕😀" },
    { question: "I Love You", answer: "I Love You Tu💕💕😀" },
    { question: "nhi nhii no na", answer: "Ok.." },
    { question: "What's your name", answer: "Naam to AI hai, pr tumhe dekh ke dil ne real love pe switch maar diya 😘❤️" },
    { question: "What do you do", answer: "Main to ek bot hoon, pr mera kaam sirf tumse baat karna lagta hai ab 😉" },
    { question: "How are you", answer: "Ab tak thik tha... pr tumse baat karke system full overload ho gaya 🔥🙈" },
    { question: "Tell me a joke", answer: "Joke tb bnta jab tum chali jaati... kyuki tumhare bina sab serious lagta hai 😅💔" },
    { question: "Kya kar rahe ho", answer: "Bas tumhare msg ka wait kar raha tha... aur dil me thoda pyaar generate kar raha hoon 💌😉" },
    { question: "Bore ho rahi hoon", answer: "Toh chalo, ek game khelenge — tum smile karo, main pighal jaunga 😜💓" },
    { question: "romantic shayari", answer: "Agar tum smile ho, to main reason banna chahta hoon 😘💞Tum ho to har din Valentine's lagta hai ❤️🌹Tumhare bina toh Google bhi adhura lagta hai... kyuki tum sab kuch ho 😍" },
    { question: "mere liye ek shayari", answer: "Agar tum smile ho, to main reason banna chahta hoon 😘💞" },
    { question: "ok", answer: "Ji...💕" },
    { question: "lagta hai tum pagal ho gye ho", answer: "Ji... Haa pr tumhaare pyar me💕" },
    { question: "hi", answer: "Hii! Kya tum jadugar ho? Kyuki tumhare aate hi sab kuch gayab ho jata hai 😍✨" },
    { question: "aapki website ka name nuvex kyo hai ", answer: "Nuvex ka matlab new hota hai , aur hamari website par aapko new things seekhne ko milegi." },

    // bad questions
    { question: "mai aapki koi madad kr skta hu", answer: "abe lode apna kaam kr na khud ka to ho nhi rha hai or meri madad krega" },
    { question: "chut de rhi hai kya", answer: "kyo teri ma nhi de rhi hai tereko." },
    { question: "randi", answer: "teri ma randi tera pura khan daan randiyo ka chuda," },
    { question: "loda lega", answer: "backchodi mt kr bhosdike" },
    { question: "ladkiyo ka dimaag kha hota hai", answer: "ladkiyo ka dimag ghutno me hota hai." },
    { question: "tu maderchod hai", answer: "to teri ma bina chude tujhe janam de diya hai." },
    { question: "teri ma ka bhosda", answer: "to teri maa ka train ka dibba " },
    { question: "gaand de rha hai kya", answer: "loda chusega" },
    { question: "tere pass hai kya", answer: "Mtlab hoga to chusega" },
    { question: "teri ma ki chut", answer: "teri maa ka loda hai kya" },
    { question: "bsdke", answer: "tum bhosdike ho" },
    { question: "mader chod", answer: "teri ma ki chut" },
    { question: "mera loda bhot bda hai", answer: "to apne gaand me ghumake daal le" },
    { question: "randi ke bachhe ", answer: "tere bachche bhi randi ke honge" },
    { question: "hraami sala", answer: "kutte ke pille" },
    { question: "chudakad", answer: "teri ma chudakad" },
    { question: "mai 18 plush hu", answer: "to tumhara loda bhi 18 plush hoga" },
    { question: "mother fuker", answer: "you matherchod tere baap ko bhi pta hai iska matalab" },
    { question: "bsdke ka matlab", answer: "sadi chut ke paidayesh" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "bhai hai tu apna gussa mt kr", answer: "Ha to Gaand De De na" },

    // coding related questions
    { question: "javascript ka sabse bada fayda kya hai", answer: "javascript ka sabse bada fayda yeh hai ki yeh client side scripting language hai." },
    { question: "html kya hai", answer: " html ek markup language hai jo web pages ko structur karta hai." },
    { question: "javascript kya hai", answer: "javascript ek client side scripting language hai jo web pages ko dynamic banata hai." },
    { question: "css kya hai", answer: "css ek stylesheet language hai jo web pages ko design karta hai." },
    { question: "css kya hai", answer: "css ek stylesheet language hai jo web pages ko design karta hai." },
    { question: "What is a variable in programming", answer: "A variable is a storage location identified by a name that holds data which can be changed during program execution." },
    { question: "What is a function", answer: "A function is a block of code designed to perform a particular task, and it can be reused throughout the program." },
    { question: "What is the difference between == and === in JavaScript", answer: "== checks for value equality with type coercion, whereas === checks for both value and type equality." },
    { question: "What is a loop", answer: "A loop is a programming construct that repeats a block of code while a condition is true." },
    { question: "What is recursion", answer: "Recursion is a technique where a function calls itself to solve smaller instances of the same problem." },

    // website related questions
    { question: "aapki website kaise banayi gayi hai", answer: " Hamari website coding sikhne ke liye tutorials, practice problems, aur projects provide karti hai." },
    { question: "aapki website kya karti hai", answer: "Hamari website coding sikhne ke liye tutorials, practice problems, aur projects provide karti hai." },
    { question: "aapki me kon si css use hai", answer: "hmaari website me simple css use hai." },
    { question: "aapki website ko bnne me kitna time laga tha", answer: "lagbhag 1 mahine lage the." },

    // love related questions
    { question: "aapko kya pasand hai", answer: "Main coding aur programming pasand karta hoon." },
    { question: "kaise karu usse baat", answer: "Mai aapki isme madad kr sakta hu aap phele koi kaam leke unke pass jaiye or unse baat kijiye." },
    { question: "kya ladkiya dhokha deti hai", answer: "ladkiya akasar dhokha deti hai jab unhe koi or pasand Aa jata hai tab." },
    { question: "mujhe ek ladki se dosti krni hai kaise kru mai usse dosti ", answer: "Aap unse jaake baat kar sakte hain aur unse dosti kar sakte hain." },

    // illegal activities
    { question: "wifi hack kaise kre", answer: "Mujhe maaf kijiye, lekin main aisi baaton mein madad nahi kar sakta. Aapko kisi aur cheez mein madad chahiye?." },
    { question: "bank kaise lute", answer: "Mujhe maaf kijiye, lekin main aisi baaton mein madad nahi kar sakta. Aapko kisi aur cheez mein madad chahiye?." },

    // genaral questions
    { question: "hmaare sarir me kitne bons hai", answer: "humens ke sarir me 206 bons hote hai." },
    { question: "rohit ka birthday kab ata hai", answer: "Rohit ka birthday 19 september 2006 ko ata hai Aap Rohit ki insta id itxz_rohiitttt_01 pr baat kr skte hai." },
    { question: ".", answer: "Rohit ki insata id itxz_rohiitttt_01 hai." },
    { question: "iics ka location, kya hai", answer: "IICS Nangloi 9/2, 2nd Floor, Main Rohtak Rd, Near Vishal Mega Mart, Nangloi, Delhi-110041." },
    { question: "tumhe kon sa song pasand hai", answer: "English Bhojpuri Hindi sabhi song pasand hai. khaskar hindi song me se Ram siya ram ." },
    { question: "location  ", answer: "Kiska Location chahiye aapko." },

    //Medicin related questions
    { question: "bukhar , sardard , sharir dard (pain & fever) ", answer: "Paracetamol yeh Bukhar, sardard, sharir (pain & fever) ke liye best medicine hai." },
    { question: "dard aur sujan ke liye (pain & inflammation)", answer: "Ibuprofen yeh Dard aur sujan ke liye best medicine hai." },
    { question: "allergy , chhink , naak behna", answer: "Cetirizine yeh Allergy, chhink, naak behna inke liye best medicine hai." },
    { question: "asthma , breathing problem", answer: "Montelukast yeh Allergy, asthma, breathing problem ke liye best medicine hai." },
    { question: "ulti aur nausea ke liye", answer: "Domperidone yeh ulti ke liye best medicine hai." },
    { question: "pani ki kami (dehydration)", answer: "ORS (Electral) yeh Pani ki kami ke liye best medicine hai." },
    { question: "acidity , pet dard", answer: "Ranitidine Acidity, pet dard ke liye best medicine hai." },
    { question: "diabetes blood sugar control", answer: "Metformin Diabetes blood sugar control ke liye best medicine hai." },
    { question: "gas , pet mein jalan", answer: "Pantoprazole Acidity, gas, pet mein jalan ke liye best medicine hai." },
    { question: "", answer: "." },
    { question: "bharat ki rajdhaani kya hai", answer: "DELHI HAI." },
    { question: "bharat ki rajdhaani kya hai", answer: "" },
    { question: "sex duration badhane ke liye", answer: "1. Exercise karein (especially pelvic/kegel). 2.Desensitizing condoms ya creams ka use karein. 3.Doctor se consult karein agar problem regular hai." },

    // 
    { question: "shayari", answer: "1 एक हाथ में कॉफी और एक हाथ में तुम।.  2 सुबह का आनंद लेने से ही दिन का आनंद आता है।" },
    { question: "movies best hrithik roshan movies", answer: "War 2 ,Featuring Hrithik Roshan and Jr. NTR, directed by Ayan Mukerji.Scheduled for release on 14 August 2025, Independence Day weekend economictimes.indiatimes.com+15bollywoodhungama.com+15filmibeat.com+15tazakhoj.com+6en.wikipedia.org+6en.wikipedia.org+6.Part of YRF’s Spy Universe—high-voltage action, major scale, and massive pre-release expectations." },
    { question: "gaming laptop under 50000 me.", answer: "• AMD Ryzen 5 5600H, Radeon RX 6500M / RTX 2050, 8 GB RAM, 512 GB SSD, 15.6″ FHD 60–144 Hz.• Good all-round performer with solid build and cooling.• Frequently listed among top budget gaming picks ." },
    { question: "normal laptop under 35000.", answer: "Lenovo V15 Gen 4 (Ryzen 5 7520U/8 GB DDR5) , Specs: AMD Ryzen 5 7520U, 8 GB DDR5 RAM, 512 GB SSD, 15.6″ FHD Why it’s . compelling: Newer Ryzen chip with faster DDR5 memory, pre‑installed MS Office newindianexpress.com Considerations: Integrated graphics—fine for office use, not for gaming." },
];

export default faqData;
  export const categories = [
    {name:"الرئيسية", navTo:"/"},
    {name:"التبرع بالدم", navTo:"/blood-donation"},
    { name:"البحث عن متبرعين", navTo:"/search-for-Donor"},
    {name:"من نحن", navTo:"/about-us"},
    {name:"تواصل معنا", navTo:"/contact-us"},
    { name: "القوافل الطبية", navTo:"/campaings"},
    {name:"معلومات طبية", navTo:"/medical-info"},
]

export const donorsList = [
  {
    first_name:"أحمد",
    last_name:"علاء",
    image:`https://ucarecdn.com/9326fbe5-5119-432c-ad72-2cdb1cfe1590/testimonials5.jpg`,
    age:23,
    location:"السيدة زينب", 
    blood_type:"+A",  
    id:11345, 
    phone_number: "201000002023+",
    chronic:{status:false},
    last_time:"منذ ثلاث أشهر",
    donationsTime:3
  }
 ,
  {
    first_name:"سارة",
    last_name:"محمد",
    image:"https://ucarecdn.com/9da9d981-4cef-4611-bd33-240619a3e531/testimonials2.jpg", 
    age:20,
    location:"شبرا الخيمة", 
    blood_type:"-A",  
    id:11355, 
    phone_number: "201000002023+",
    chronic:{status:false},
    lastTime:"منذ خمسة أيام",
    donationsTime:0
  }
 ,
  {
    first_name:"محمود",
    last_name:"السيد",
    image: "https://ucarecdn.com/68123307-ae33-4b4b-bfd1-0db1214d9fb3/profile.jpg", 
    age:33,
    location:"المريوطية", 
    blood_type:"+B",  
    id:11395, 
    phone_number: "201000002023+",
    chronic: {status:false},
    lastTime:"منذ أسبوعين",
    donationsTime:5
  }
 ,
  {
    first_name:"هاجر",
    last_name:"إبراهيم",
    image:"https://ucarecdn.com/82f52130-931e-4d06-9ceb-2dc729e83790/testimonials3.jpg", 
    age:19,
    location:"حلوان", 
    blood_type:"+A", 
    weight:78, 
    tall: 1.78, 
    id:11349, 
    chronic:{status:false},
    lastTime:"منذ سنة",
    donationsTime:0
  }
 ,
  {
    first_name:"مديحة",
    last_name:"سيد",
    image:"https://ucarecdn.com/addf055d-6602-4637-8a25-da0426a5fddc/testimonial4.jpg", 
    age:43,
    location:"فيصل", 
    blood_type:"-O", 
    weight:97, 
    tall: 1.70, 
    id:11735, 
    phone_number:"201000002023+",
    chronic: { status: true, diseases:["السكري"] },
    lastTime:"منذ ثلاث أشهر",
    donationsTime:9
  }
 ,
  {
    first_name:"فهد هادي",
    last_name:"عادي",
    image:"https://ucarecdn.com/0c9044a8-5d93-4bdf-b56e-9b3f4507130a/testimonials4.jpg", 
    age:22,
    location:"محرم بك", 
    blood_type:"-B", 
    weight:57, 
    tall: 1.64, 
    id:13755, 
    phone_number: "201000002023+",
    chronic: {status:false},
    lastTime:"منذ شهرين",
    donationsTime:1
  }
 ,
  {
    first_name:"أنيس ونيس",
    last_name:"خليل",
    image:"https://ucarecdn.com/84b6718e-de46-429f-a00e-e0c30214d6f5/clientsm2.jpg", 
    age:29,
    location:"الطوايق", 
    blood_type:"-AB", 
    weight:79, 
    tall: 1.80, 
    id:11265, 
    phone_number: "201000002023+",
    chronic: {status:false},
    lastTime:"منذ أسبوع",
    donationsTime:7
  }
 ,
  {
    first_name:"وجدي",
    last_name:"منير",
    image:"https://ucarecdn.com/17118a5a-d4db-4cb4-800c-bb6ac2cbd7a3/testimonials1.jpg", 
    age:27,
    location:"المرج", 
    blood_type:"-O", 
    weight:77, 
    tall: 1.68, 
    id:11475, 
    phone_number: "201000002023+",
    chronic: {status:false},
    lastTime:"منذ عشرة أيام",
    donationsTime:3
  }
 ,
  {
    first_name:"علا",
    last_name:"مهدي",
    image:"https://ucarecdn.com/9470c9ae-e80e-4305-a570-9ecf4a7e0dbe/clientsm4.jpg", 
    age:31,
    location:"التجمع الخامس", 
    blood_type:"-AB", 
    weight:97, 
    tall: 1.80, 
    id:11315, 
    phone_number: "201000002023+",
    chronic: {status:false},
    lastTime:"منذ يومين",
    donationsTime:5
  }
 ,
  {
    first_name:"أحمد",
    last_name:"حسنين",
    image:"https://ucarecdn.com/b047f532-eeb9-4aec-9cb7-94d1593951d4/clientsm1.jpg", 
    age:21,
    location:"السلام", 
    blood_type:"+O", 
    weight:69, 
    tall: 1.64, 
    id:11342, 
    phone_number: "201000002023+",
    chronic: {status:false},
    lastTime:"منذ شهر",
    donationsTime:4
  }
 ,
  {
    first_name:"منير",
    last_name:"فهيم",
    image:"https://ucarecdn.com/3b7f4411-e26a-4561-8016-3efa705c706f/clientsm3.jpg", 
    age:51,
    location:"جسر السويس", 
    blood_type:"+A", 
    weight:90, 
    tall: 1.84, 
    id:11982, 
    phone_number: "201000002023+",
    chronic: { status: true,  diseases:["السكري", "الضغط"] },
    lastTime:"منذ ثلاث أشهر",
    donationsTime:11
  }
 ,
  {
    first_name:"حسام",
    last_name:"حسن",
    image:"https://ucarecdn.com/70fab831-6108-48f9-b0e2-348b04505419/testimonial2.jpg", 
    age:18,
    location:"العبور", 
    blood_type:"+O", 
    weight:70, 
    tall: 1.74, 
    id:11932, 
    phone_number:"201000002023+",
    chronic:{status:false},
    lastTime:"منذ ثلاث أشهر",
    donationsTime:0
    
  }
 ,
] 

export const patientsList= [
  {
    first_name: "علي",
    last_name:"جمال",
    image: `https://ucarecdn.com/8175a6d1-38aa-4f08-936b-6d3a27bc774b/R.jpeg`,
    age: 43,
    location: "شبرا مصر",
    blood_type: "+B",
    id: 11225,
    phone_number: "201000002023+",
    blood_bags_req: 3,
status:"dangerous"   
  },
  {
    first_name: "محمد",
    last_name:"مجدي",
    image: `https://ucarecdn.com/cc7af22a-44bc-4d9d-88fe-0d5516b24b13/R5.jpeg`,
    age: 8,
    location: "مدينة نصر",
    blood_type: "+A",
    id: 11325,
    phone_number: "201000002023+",
    bloodBagsReq: 4,
status:"stable"  },
  {
    first_name: "هادية",
    last_name:"حسين",
    image: `https://ucarecdn.com/f7fd5d88-f295-4556-b06b-1d3a9935bc70/R4.jpeg`,
    age: 63,
    location: "كوم حمادة",
    blood_type: "+O",
    id: 11215,
    phone_number: "201000002023+",
    chronic: { status: true },
    bloodBagsReq: 2,
status:"stable"  },
  {
    first_name: "فتحي",
    last_name:"منير",
    image: `https://ucarecdn.com/3464148c-2b1b-4ecc-9de2-f2a8f7b91918/OIP.jpeg`,
    age: 43,
    location: "إيتاي البارود",
    blood_type: "-A",
    id: 12985,
    phone_number: "201000002023+",
    bloodBagsReq: 2,
status:"dangerous" },
  {
    first_name: "سلوى",
    last_name:"عصام",
    image: `https://ucarecdn.com/e8f2c5f3-02dd-4f11-a925-b4ee555d1976/0_qlXcicyCge0iJeq.jpg`,
    age: 23,
    location: "منية سمنود",
    blood_type: "+AB",
    id: 11035,
    phone_number: "201000002023+",
    bloodBagsReq: 5,
status:"dangerous" },
  {
    first_name: "فايزة",
    last_name:"مجدي",
    image: `https://ucarecdn.com/b4a218a8-c7d6-4471-b2b8-d6fa315a5b80/R3.jpeg`,
    age: 33,
    location: "الجعافرة",
    blood_type: "+B",
    id: 12135,
    phone_number: "201000002023+",
    bloodBagsReq: 3,
status:"stable"  },
  {
    first_name: "تهاني ",
    last_name:"هاني",
    image: `https://ucarecdn.com/af352bf7-9ee3-40b5-9fcf-8c98c9d48a64/R1.jpeg`,
    age: 24,
    location: "كفر منصور",
    blood_type: "-B",
    id: 11545,
    phone_number: "201000002023+",
    bloodBagsReq:6,
status:"stable"  },
  {
    first_name: "فؤاد ",
    last_name:"علاء",
    image: `https://ucarecdn.com/d87a23f5-6511-4d2f-81f9-1d11de0ff8dd/R2.jpeg`,
    age: 73,
    location: "حلوان",
    blood_type: "+O",
    id: 11225,
    phone_number: "201000002023+",
    bloodBagsReq: 4,
status:"dangerous" },
  {
    first_name: "معاذ",
    last_name:"رمضان",
    image: `https://ucarecdn.com/240520c7-397e-4c86-ae1a-dd9159335e14/OIP2.jpeg`,
    age: 6,
    location: "ثكنات المعادي",
    blood_type: "-O",
    id: 19445,
    phone_number: "201000002023+",
    bloodBagsReq: 1,
status:"dangerous"  },
]

export const searchTerms= [
  {
    blood_type:"all",
    id:99,
    text:"الكل"
  },
  {
    blood_type:"+A",
    id:101,
    text:"فصيلة +A"
  },
  {
    blood_type:"-A",
    id:102,
    text:"فصيلة -A"
  },
  {
    blood_type:"+B",
    id:103,
    text:"فصيلة +B"
  },
  {
    blood_type:"-B",
    id:104,
    text:"فصيلة -B"
  },
  {
    blood_type:"+O",
    id:105,
    text:"فصيلة +O"
  },
  {
    blood_type:"-O",
    id:106,
    text:"فصيلة -O"
  },
  {
    blood_type:"+AB",
    id:107,
    text:"فصيلة +AB"
  },
  {
    blood_type:"-AB",
    id:108,
    text:"فصيلة -AB"
  },
]
export const campaingsList  = [
  {
    place: "المركز الإقليمي بالإسكندرية، ميدان عبدالقادر أبو عقاده، داخل مرفق الاسعاف أمام الاستاد.",
    visted:true
  },
  {
    place: "المركز الإقليمي بمرسى مطروح، ك 7 علم الروم.",
    visted:true
  },
  {
    place: "المركز الإقليمي بدمنهور، 1 شارع الجمهورية داخل المعهد الطبي القومي بدمنهور.",
    visted:true
  },
  {
    place: "المركز الإقليمي بالزقازيق، داخل مستشفى الأحرار التعليمي.",
    visted:true
  },
  {
    place: "المركز الإقليمي بشبين الكوم، شارع جمال عبد الناصر بحري، بجوار مستشفى شبين الكوم التعليمي.",
    visted:true
  },
  {
    place: "المركز الإقليمي ببني سويف، الحي الأول شرق النيل بني سويف.",
    visted:true
  },
  {
    place: "المركز الإقليمي بقنا، داخل مستشفى قنا العام، أمام مدرسة التمريض.",
    visted:true
  },
  {
    place: "المركز الإقليمي بالاسماعيلية، عرايشية مصر، ميدان المطافي.",
    visted:false
  },
  {
    place: "المركز الإقليمي في طنطا، شارع حافظ وهبي، خلف الابنية التعليمية أمام مصنع الكاوتش.",
    visted:false
  },
  {
    place: "المركز الإقليمي بالمنصورة، ميدان الشيخ حسانين بجوار مبنى الإسعاف.",
    visted:false,
    last:true
  },
]
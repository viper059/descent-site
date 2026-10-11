/* แก้เนื้อหาเว็บทั้งหมดที่ไฟล์นี้ไฟล์เดียว
   - works.img      : ที่อยู่รูป ถ้าว่างจะแสดงกรอบ "รอรูปผลงาน"
   - videos         : ใส่ลิงก์ YouTube หรือ Facebook ในช่อง url แล้วจะแสดงการ์ดวิดีโอ
   - address/mapUrl : ใส่ที่อยู่ร้านและลิงก์ Google Maps ของร้าน (ถ้าว่างปุ่มแผนที่จะค้นหาจากชื่อร้าน)
   - followers      : ตัวเลขผู้ติดตาม ต้องแก้เองเป็นระยะ เว็บนี้ดึงตัวเลขสดจาก Facebook ไม่ได้
   - embedVideos    : true = เล่นวิดีโอในหน้าเว็บ (ใช้ได้เมื่อนำไฟล์ไปโฮสต์เอง) / false = กดเปิดบน YouTube หรือ Facebook */
window.SHOP = {
  nameTh: "ช่างหนุ่มอยุธยา",
  nameFull: "ช่างหนุ่มอยุธยา สำนักแต่งรถตู้ Descent",
  brand: "DESCENT",
  province: "พระนครศรีอยุธยา",
  phone: "081-491-8632",
  phoneTel: "081-491-8632",
  hours: "08:00 – 18:00 น.",
  hoursNote: "ทุกวัน ไม่เว้นวันหยุด",
  address: "",
  coordsText: "พิกัด 14°21'45.34\"N 100°33'56.67\"E",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=14.362594,100.565742",
  facebook: "https://www.facebook.com/descentayutthaya",
  fbHandle: "@descentayutthaya",
  youtube: "https://www.youtube.com/@autobigcar5728",
  followers: "100K+",
  years: "10+",
  cars: "1K+",
  poster: "img/photo1.jpg",
  embedVideos: true,
  ticker: ["ช่างหนุ่มอยุธยา", "แต่งรถตู้ VIP", "DESCENT CUSTOM", "เบาะมิกกี้เมาส์", "คอนโซลพรีเมียม", "Hiace 200/300", "Club Van", "ติดต่อสอบถามฟรี"],
  tabsServices: [["all", "ทั้งหมด"], ["interior", "ตกแต่งภายใน"], ["exterior", "ตกแต่งภายนอก"], ["audio", "เครื่องเสียง"], ["forsale", "รถตู้มือสอง"]],
  services: [
    { cat: "interior", label: "SEAT", tag: "POPULAR", hot: true, group: "ภายใน", name: "เบาะมิกกี้เมาส์ VIP", desc: "เบาะหรูสุดพรีเมียม ดีไซน์เป็นเอกลักษณ์ รองรับ 8–10 ที่นั่ง", cta: "ดูผลงานเบาะ", href: "gallery.html#seat" },
    { cat: "interior", label: "CONSOLE", tag: "CUSTOM", group: "ภายใน", name: "คอนโซลกลาง", desc: "คอนโซลพรีเมียม ออกแบบได้ตามต้องการ วัสดุคุณภาพสูง", cta: "ดูผลงานคอนโซล", href: "gallery.html#console" },
    { cat: "interior", label: "FLOOR", group: "ภายใน", name: "ปูพื้นไม้และยาง", desc: "พื้นไม้จริงและยางคุณภาพ สวยงาม ทนทาน ดูแลรักษาง่าย", cta: "สอบถามราคา", href: "contact.html" },
    { cat: "interior", label: "TRIM", group: "ภายใน", name: "หุ้มเบาะและห้องโดยสาร", desc: "หุ้มหนังพรีเมียมทุกจุด เลือกสี เลือกลายได้ตามใจ", cta: "สอบถามราคา", href: "contact.html" },
    { cat: "exterior", label: "ROOF", tag: "PREMIUM", group: "ภายนอก", name: "หุ้มหนังหลังคา", desc: "หุ้มหนังหลังคาภายนอก กันร้อน สวยงาม อายุการใช้งานยาวนาน", cta: "สอบถามราคา", href: "contact.html" },
    { cat: "exterior", label: "RENEW", group: "ภายนอก", name: "รีโนเวทหลังคาใหม่", desc: "เปลี่ยนหลังคาใหม่ทั้งชุด แก้ปัญหาหลังคาเก่าเสื่อมสภาพ", cta: "สอบถามราคา", href: "contact.html" },
    { cat: "audio", label: "AUDIO", tag: "AUDIO", group: "เครื่องเสียง", name: "ออดิโอ้ซาวด์ & แอร์ไมโครบัส", desc: "ระบบเสียงคุณภาพสูง + แอร์ไมโครบัส สำหรับรถตู้ VIP โดยเฉพาะ", cta: "สอบถามราคา", href: "contact.html" },
    { cat: "forsale", label: "SALE", tag: "FOR SALE", hot: true, group: "ขายรถ", name: "รถตู้ VIP พร้อมใช้", desc: "รถตู้ VIP ป้ายแดงและมือสอง สภาพดี แต่งครบ พร้อมใช้งาน", cta: "สอบถามรถ", href: "contact.html" }
  ],
  tabsWorks: ["ทั้งหมด", "Hiace 300", "Hiace 200", "Club Van", "เบาะ VIP", "คอนโซล"],
  hashTabs: { seat: "เบาะ VIP", console: "คอนโซล" },
  works: [
    { title: "แต่งภายใน Hiace 300 เต็มคัน", cat: "Hiace 300 · เบาะ VIP", tags: ["Hiace 300", "เบาะ VIP"], img: "img/photo2.jpg", alt: "แต่งภายใน Hiace 300 เบาะ VIP หนังครีม พื้นไม้" },
    { title: "Club Van เบาะ 8 VIP", cat: "Club Van · เบาะมิกกี้เมาส์", tags: ["Club Van", "เบาะ VIP"], img: "img/photo1.jpg", alt: "แต่งรถตู้ VIP เบาะหนังส้ม มิกกี้เมาส์ ไฟเพดาน" },
    { title: "คอนโซลพรีเมียม Hiace 200", cat: "Hiace 200 · คอนโซล", tags: ["Hiace 200", "คอนโซล"], img: "", alt: "" },
    { title: "Full Custom VIP Package", cat: "Hiace 300 · Full Custom", tags: ["Hiace 300"], img: "", alt: "" }
  ],
  /* ตัวอย่าง: { title: "ชื่อคลิป", platform: "youtube", url: "https://www.youtube.com/watch?v=xxxxxxxxxxx", cat: "เบาะ VIP" }
     platform เป็น "youtube" หรือ "facebook" */
  videos: [
    { title: "ยกระดับความหรู! แปลงโฉม Commuter เป็น Alphard เคลื่อนที่ เบาะปรับไฟฟ้า พร้อมพื้นลายไม้สุดพรีเมียม", platform: "youtube", url: "https://youtu.be/oWN8SoBy_m8", cat: "ช่อง Autobigcar" },
    { title: "ความจริงที่คนมีรถตู้ครอบครัวไม่ค่อยรู้ ทำไมการเดินทางที่ควรจะมีความสุข ถึงจบลงด้วยคำว่า \"ปวดหลัง\"", platform: "youtube", url: "https://youtu.be/qsVsGBP7no8", cat: "ช่อง Autobigcar" },
    { title: "ทำไม \"รถตู้หน้ายาว\" ถึงไม่ใช่แค่เทรนด์... แต่มันคือลมหายใจของผู้ประกอบการ Toyota commuter all new", platform: "youtube", url: "https://youtu.be/39nSAVz7WpY", cat: "ช่อง Autobigcar" }
  ]
};

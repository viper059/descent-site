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
  phoneTel: "0814918632",
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
  tabsServices: [["all", "ทั้งหมด"], ["interior", "ตกแต่งภายใน"], ["exterior", "ตกแต่งภายนอก"], ["audio", "เครื่องเสียง & แอร์"], ["accessory", "ของแต่ง"], ["forsale", "รถตู้มือสอง"]],
  /* การ์ดบริการ: มี children = กดแล้วแสดงการ์ดย่อยข้างใน / มี href = กดแล้วไปดูผลงาน */
  services: [
    { cat: "interior", label: "WALL", group: "ภายใน", name: "ผนัง", desc: "หุ้มแผงประตูรีดลาย ใส่คิ้ว ตกแต่งผนังห้องโดยสารให้เรียบหรู", cta: "ดูผลงานผนัง", href: "gallery.html#wall" },
    { cat: "interior", label: "FLOOR", group: "ภายใน", name: "พื้น", desc: "ปูพื้นไม้อัด พร้อมกระเบื้องยาง สวยงาม ทนทาน ดูแลรักษาง่าย", cta: "ดูผลงานพื้น", href: "gallery.html#floor" },
    { cat: "interior", label: "CONSOLE", tag: "CUSTOM", group: "ภายใน", name: "คอนโซล", desc: "คอนโซลพรีเมียม ออกแบบได้ตามต้องการ วัสดุคุณภาพสูง", cta: "ดูผลงานคอนโซล", href: "gallery.html#console" },
    { cat: "interior", label: "SEAT", tag: "POPULAR", hot: true, group: "ภายใน", name: "เบาะ", desc: "เบาะ VIP 9 และ 8 ที่นั่ง เบาะคู่ไฟฟ้า และทำเบาะเดิมใหม่", cta: "เลือกดูประเภทเบาะ", children: [
      { cat: "interior", label: "SEAT 9", group: "เบาะ", name: "เบาะ 9 ที่นั่ง", desc: "เบาะ VIP 3 แถว 9 ที่นั่ง ทำใหม่ทั้งชุด", cta: "ดูผลงาน", href: "gallery.html#seat9" },
      { cat: "interior", label: "SEAT 8", group: "เบาะ", name: "เบาะ 8 ที่นั่ง", desc: "เบาะ VIP 8 ที่นั่ง เบาะมิกกี้เมาส์ หนังพรีเมียม", cta: "ดูผลงาน", href: "gallery.html#seat8" },
      { cat: "interior", label: "POWER", group: "เบาะ", name: "เบาะคู่ไฟฟ้า", desc: "เบาะคู่หน้าปรับไฟฟ้า นั่งสบาย ตัดแต่งใหม่", cta: "ดูผลงาน", href: "gallery.html#seatpair" },
      { cat: "interior", label: "RENEW", group: "เบาะ", name: "ทำเบาะเดิม", desc: "ตัดแต่งฟองน้ำใหม่ หุ้มหนังใหม่ เย็บย่น ใช้โครงเบาะเดิม", cta: "ดูผลงาน", href: "gallery.html#seatold" }
    ] },
    { cat: "interior", label: "CURTAIN", group: "ภายใน", name: "ผ้าม่าน", desc: "ผ้าม่านรางคู่ ผ้ายืดและผ้ายูวี 2 ชั้น เลือกลายได้", cta: "ดูผลงานผ้าม่าน", href: "gallery.html#curtain" },
    { cat: "exterior", label: "ROOF", tag: "PREMIUM", group: "ภายนอก", name: "หุ้มหนังหลังคา", desc: "หุ้มหนังหลังคาภายนอก กันร้อน สวยงาม อายุการใช้งานยาวนาน", cta: "สอบถาม", href: "contact.html" },
    { cat: "exterior", label: "RENEW", group: "ภายนอก", name: "รีโนเวทหลังคาใหม่", desc: "เปลี่ยนหลังคาใหม่ทั้งชุด แก้ปัญหาหลังคาเก่าเสื่อมสภาพ", cta: "สอบถาม", href: "contact.html" },
    { cat: "audio", label: "AUDIO", tag: "AUDIO", group: "เครื่องเสียง", name: "เครื่องเสียงและจอภาพ", desc: "ซาวด์ฝาท้าย จอ LED เครื่องเล่น DVD ระบบเสียงคุณภาพสูง", cta: "ดูผลงาน", href: "gallery.html#audio" },
    { cat: "audio", label: "AIR", group: "แอร์", name: "แอร์ไมโครบัส", desc: "เปลี่ยนระบบแอร์ไมโครบัส เย็นทั่วคัน สำหรับรถตู้ VIP โดยเฉพาะ", cta: "ดูผลงาน", href: "gallery.html#air" },
    { cat: "accessory", label: "ACCESSORY", group: "ของแต่ง", name: "ของแต่ง", desc: "ฟิล์มกรองแสง กันชน สเกิร์ต มือจับ คิ้วฝาท้าย และครอบต่างๆ", cta: "ดูผลงาน", href: "gallery.html#accessory" },
    { cat: "forsale", label: "SALE", tag: "FOR SALE", hot: true, group: "ขายรถ", name: "รถตู้ VIP พร้อมใช้", desc: "รถตู้ VIP ป้ายแดงและมือสอง สภาพดี แต่งครบ พร้อมใช้งาน", cta: "สอบถามรถ", href: "contact.html" }
  ],
  tabsWorks: ["ทั้งหมด", "Hiace 300", "Hiace 200", "Club Van", "เบาะ VIP", "คอนโซล", "ผนัง", "พื้น", "เบาะ 9 ที่นั่ง", "เบาะ 8 ที่นั่ง", "เบาะคู่ไฟฟ้า", "ทำเบาะเดิม", "ผ้าม่าน", "เครื่องเสียงและจอภาพ", "แอร์ไมโครบัส", "ของแต่ง"],
  hashTabs: { seat: "เบาะ VIP", console: "คอนโซล", wall: "ผนัง", floor: "พื้น", seat9: "เบาะ 9 ที่นั่ง", seat8: "เบาะ 8 ที่นั่ง", seatpair: "เบาะคู่ไฟฟ้า", seatold: "ทำเบาะเดิม", curtain: "ผ้าม่าน", audio: "เครื่องเสียงและจอภาพ", air: "แอร์ไมโครบัส", accessory: "ของแต่ง" },
  works: [
    { title: "แต่งภายใน Hiace 300 เต็มคัน", cat: "Hiace 300 · เบาะ VIP", tags: ["Hiace 300", "เบาะ VIP", "พื้น"], img: "img/photo2.jpg", alt: "แต่งภายใน Hiace 300 เบาะ VIP หนังครีม พื้นไม้" },
    { title: "Club Van เบาะ 8 VIP", cat: "Club Van · เบาะมิกกี้เมาส์", tags: ["Club Van", "เบาะ VIP", "เบาะ 8 ที่นั่ง"], img: "img/photo1.jpg", alt: "แต่งรถตู้ VIP เบาะหนังส้ม มิกกี้เมาส์ ไฟเพดาน" },
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

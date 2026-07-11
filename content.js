// ================================================================
// RENAISSANCE PHUKET — SITE CONTENT FILE
// ================================================================
// HOW TO EDIT:
//   1. Open this file in any text editor (TextEdit, Notepad, etc.)
//   2. Change the text between the quote marks " "
//   3. Do NOT change the key names on the LEFT side of the colon
//   4. Save this file
//   5. Re-upload the whole folder to Netlify Drop to publish
//
// BILINGUAL: Every section has _en (English) and _th (Thai) fields
// ================================================================

const CONTENT = {

  // ── OUTLETS (Restaurants & Bars) ────────────────────────────
  // To change order, move the whole { } block up or down

  outlets: [
    {
      id: "yunami",
      image: "images/yn_hero.jpg",
      image_alt: "Yunami",
      tag_en: "Japanese Coastal Izakaya",
      tag_th: "ร้านอาหารญี่ปุ่นสไตล์อิซากายะ",
      name: "Yunami",
      body_en: "Yunami Restaurant is a coastal izakaya hangout spot that creates day-to-night moments through the harmony of fresh ingredients, craftsmanship, and cozy vibes.",
      body_th: "ร้านอาหารญี่ปุ่นสไตล์อิซากายะสุดชิลล์ ที่รังสรรค์ช่วงเวลาดีๆ ตั้งแต่กลางวันจนถึงค่ำคืน ผ่านความกลมกล่อมของวัตถุดิบสดใหม่ ฝีมือการปรุงอันประณีต และบรรยากาศอบอุ่นเป็นกันเอง",
      sig_en: "Signature menu: Kagoshima A5 Wagyu Striploin",
      sig_th: "เมนูแนะนำ: เนื้อสันนอกวากิว A5 จากคาโกชิมะ",
      hours_en: "Open for lunch & dinner",
      hours_th: "เปิดบริการมื้อกลางวันและมื้อค่ำ",
      menu_url: "https://marrstar.box.com/s/zi6fpyakdbvwkkggz73eqxzn8o27p3yj",
      book_url: "https://www.sevenrooms.com/explore/yunamihktbr/reservations/create/search?tracking=renphuket-guidebook",
    },
    {
      id: "takieng",
      image: "images/p08_013.jpg",
      image_alt: "Takieng",
      tag_en: "Signature Thai Cuisine",
      tag_th: "ร้านอาหารไทย",
      name: "Takieng",
      body_en: "Southern Thai restaurant inspired by fishermen's lanterns, featuring rare local ingredients from Mai Khao.",
      body_th: "ร้านอาหารไทยภาคใต้ระดับรางวัล แรงบันดาลใจจากตะเกียงชาวประมง ใช้วัตถุดิบหายากจากไม้ขาว",
      sig_en: "Signature: Fried Tom Yum Mole Crab",
      sig_th: "เมนูแนะนำ: จั๊กจั่นทะเลทอดรสต้มยำ",
      hours_en: "Everyday · 12:00 PM – 11:00 PM",
      hours_th: "ทุกวัน · 12:00 – 23:00",
      menu_url: "https://www.takiengphuket.com/our-menus",
      book_url: "https://www.sevenrooms.com/explore/takiengphukethktbr/reservations/create/search?tracking=renphuket-guidebook",
    },
    {
      id: "sandbox",
      image: "images/p08_014.jpg",
      image_alt: "Sand Box",
      tag_en: "International Cuisine",
      tag_th: "ร้านอาหารนานาชาติ",
      name: "Sand Box Beachfront Bar &amp; Eatery",
      body_en: "Relaxed beachfront dining with international favorites. Casual by day, BBQ vibes by night.",
      body_th: "ร้านอาหารริมชายหาด บรรยากาศสบาย เสิร์ฟอาหารนานาชาติ กลางวันชิล กลางคืนบาร์บีคิว",
      sig_en: "Signature: Import Wagyu Beef Burger",
      sig_th: "เมนูแนะนำ: เบอร์เกอร์เนื้อวากิวนำเข้า",
      hours_en: "Everyday · 11:00 AM – 11:00 PM",
      hours_th: "ทุกวัน · 11:00 – 23:00",
      menu_url: "https://marrstar.box.com/s/vki7qbtsklhu92usuykkegqzxpr2gjws",
      book_url: "https://www.sevenrooms.com/explore/sandboxbeachfrontbareateryhktbr/reservations/create/search?tracking=renphuket-guidebook",
    },
    {
      id: "locavore",
      image: "images/p08_015.jpg",
      image_alt: "Loca Vore",
      tag_en: "Buffet Breakfast",
      tag_th: "เสิร์ฟอาหารเช้าสไตล์บุฟเฟ่ต์",
      name: "Loca Vore",
      body_en: "Start your day with a full breakfast menu including international comfort foods, Thai classics and global favorites.",
      body_th: "เริ่มต้นวันใหม่ด้วยเมนูอาหารเช้าแบบเต็มอิ่ม ทั้งอาหารนานาชาติแสนอร่อย เมนูไทยต้นตำรับ และเมนูยอดนิยมจากทั่วโลก",
      sig_en: "Signature: Bigomoi Pancake",
      sig_th: "เมนูแนะนำ: แพนเค้กบิโกมอย",
      hours_en: "Everyday · 7:00 AM – 11:00 AM",
      hours_th: "ทุกวัน · 07:00 – 11:00",
    },
    {
      id: "lounge",
      image: "images/p08_016.jpg",
      image_alt: "The Lounge",
      tag_en: "Bar",
      tag_th: "บาร์",
      name: "The Lounge",
      body_en: "Laid-back cocktail bar with globally inspired drinks, reimagined for Phuket.",
      body_th: "บาร์ค็อกเทลบรรยากาศสบาย นำสูตรเครื่องดื่มจาก Renaissance ทั่วโลกมาปรับให้เข้ากับภูเก็ต",
      sig_en: "Home of the Punch Bowl Ritual",
      sig_th: "ที่ตั้งของ Punch Bowl Ritual",
      hours_en: "Everyday · 12:00 PM – 11:00 PM",
      hours_th: "ทุกวัน · 12:00 – 23:00",
    },
    {
      id: "doppio",
      image: "images/p08_017.jpg",
      image_alt: "Doppio",
      tag_en: "Café",
      tag_th: "คาเฟ่",
      name: "Doppio",
      body_en: "Cozy café for coffee, light bites, and smoothies. Proudly serving Starbucks.",
      body_th: "คาเฟ่บรรยากาศอบอุ่น สำหรับกาแฟ ของว่าง และสมูทตี้ พร้อมเสิร์ฟกาแฟ Starbucks",
      sig_en: "Coffee all day, everyday",
      sig_th: "กาแฟตลอดวัน ทุกวัน",
      hours_en: "Everyday · 8:00 AM – 6:00 PM",
      hours_th: "ทุกวัน · 08:00 – 18:00",
    },
  ],

  // ── FACILITIES ───────────────────────────────────────────────

  facilities: [
    {
      id: "kids-world",
      image: "images/p09_018.jpg",
      image_alt: "Kids World",
      tag_en: "Family",
      tag_th: "ครอบครัว",
      name: "Kids' World",
      body_en: "A fun and safe space for kids with creative activities, games, and hands-on experiences. Next to Dino Pool with slides and splash zones.",
      body_th: "พื้นที่สำหรับเด็ก มีกิจกรรมสร้างสรรค์ เกม และการเรียนรู้แบบลงมือทำ ตั้งอยู่ใกล้ Dino Pool ที่มีสไลเดอร์และโซนเล่นน้ำ",
      hours_en: "Everyday · 9:00 AM – 6:00 PM",
      hours_th: "ทุกวัน · 09:00 – 18:00",
      menu_url: "https://marrstar.box.com/s/yzfzflrnml8mu9vc4tt9e1le5xp91zu0",
      menu_label: "View Activities →",
      acts: [
        "Northern Thai umbrella painting · วาดภาพร่มไทยภาคเหนือ",
        "Dino & unicorn pool inflatables · ของเล่นลอยน้ำไดโนเสาร์และยูนิคอร์น",
        "Jungle trail exploration behind the pool · สำรวจเส้นทางป่าหลังสระน้ำ",
        "Non-alcoholic Punch Bowl Ritual every Monday · 16:30 · Punch Bowl ไม่มีแอลกอฮอล์ทุกวันจันทร์ 16:30",
      ],
    },
    {
      id: "fitness",
      image: "images/p09_019.jpg",
      image_alt: "Fitness Center",
      tag_en: "Wellness",
      tag_th: "สุขภาพ",
      name: "Fitness Center",
      body_en: "Fully equipped with cardio machines, free weights, and fitness classes. Open 24 hours — team on standby 8 AM to 6 PM.",
      body_th: "ฟิตเนสครบครัน ทั้งเครื่องคาร์ดิโอ เวทเทรนนิ่ง และคลาสออกกำลังกาย เปิด 24 ชม. ทีมงานพร้อมให้บริการ 08:00–18:00",
      hours_en: "Open 24 hours · Staff 8:00 AM – 6:00 PM",
      hours_th: "เปิด 24 ชั่วโมง · เจ้าหน้าที่ 08:00 – 18:00",
      menu_url: "https://marrstar.box.com/s/ndeh94072boucgivz7zjm1g64z8r5hzk",
      menu_label: "View Activities →",
      acts: [
        "Muay Thai introductory class · คลาสมวยไทยเบื้องต้น",
        "Beach & pool yoga sessions · โยคะริมหาดและสระน้ำ",
        "Circuit training & Peg Board challenge · เซอร์กิตเทรนนิ่งและกระดานหมุด",
        "Open 24 hours daily · เปิดบริการตลอด 24 ชั่วโมง",
      ],
    },
    {
      id: "quan-spa",
      image: "images/p09_020.jpg",
      image_alt: "Quan Spa",
      tag_en: "Wellness",
      tag_th: "สุขภาพ",
      name: "Quan Spa",
      body_en: "A tranquil spa blending traditional techniques with modern wellness — massages, facials, and sound healing with Spa Manager Khun Miki.",
      body_th: "สปาบรรยากาศผ่อนคลาย ผสานศาสตร์ดั้งเดิมกับเวลเนสสมัยใหม่ Sound Healing โดยผู้จัดการสปา คุณมิกิ",
      hours_en: "Everyday · 10:00 AM – 8:00 PM",
      hours_th: "ทุกวัน · 10:00 – 20:00",
      menu_url: "https://marrstar.ent.box.com/s/uime33r9n6704e8hi2sd8ceyn1zbobll",
      acts: [
        "Sound healing with Khun Miki · Sound Healing โดยคุณมิกิ",
        "Traditional Thai massage & aromatherapy · นวดแผนไทยและอโรมาเธอราพี",
        "Herbal compress therapy · นวดลูกประคบสมุนไพร",
        "Facial & body treatment menu · เมนูทรีทเมนต์ผิวหน้าและร่างกาย",
      ],
    },
  ],

  // ── DID YOU KNOW CARDS ───────────────────────────────────────
  // 8 cards — change text or image filename as needed

  dyk: [
    {
      num: "01",
      image: "images/p10_023.jpg",
      image_alt: "Aerial view of turtle shell roofs",
      en: "Villa, lobby, and The Lounge roofs are inspired by turtle shells — a tribute to Mai Khao Beach where sea turtles lay eggs from January to March.",
      th: "หลังคาวิลล่า ล็อบบี้ และ The Lounge ได้แรงบันดาลใจจากกระดองเต่า สื่อถึงหาดไม้ขาวซึ่งเป็นแหล่งวางไข่ของเต่าทะเล",
    },
    {
      num: "02",
      image: "images/p10_024.jpg",
      image_alt: "Pool white stones",
      en: "The round white stones at the main pool symbolize turtle eggs.",
      th: "หินสีขาวทรงกลมบริเวณสระว่ายน้ำหลัก เป็นสัญลักษณ์ของไข่เต่า",
    },
    {
      num: "03",
      image: "images/p10_025.jpg",
      image_alt: "Wave headboard",
      en: "The Deluxe room headboard is inspired by ocean waves, with gradient tones reflecting wet-to-dry sand.",
      th: "หัวเตียงในห้อง Deluxe ได้แรงบันดาลใจจากคลื่นทะเล ไล่เฉดสีเหมือนทรายที่เปียกและแห้ง",
    },
    {
      num: "04",
      image: "images/p10_026.jpg",
      image_alt: "I-Tim Kati Tong Muan",
      // TIP: You can use <strong>word</strong> to bold a word
      en: "Guests are welcomed with <strong>I-Tim Kati</strong> — Coconut Milk Ice Cream — served alongside <strong>Tong Muan</strong>. A small taste of our local neighborhood, setting the tone for discovery from the very first moment.",
      th: "แขกของเราจะได้รับการต้อนรับด้วยไอติมกะทิสดเสิร์ฟคู่กับทองม้วน สัมผัสรสชาติเล็กๆ จากชุมชนท้องถิ่น ที่จะปูทางสู่การค้นพบใหม่ ตั้งแต่วินาทีแรกที่มาเยือน",
    },
    {
      num: "05",
      image: "images/p10_027.jpg",
      image_alt: "Yoga on the beach",
      en: "Our Recreation team is certified to lead activities such as fitness training, yoga, and Muay Thai.",
      th: "ทีม Recreation มีใบรับรองในการสอนกิจกรรม เช่น ฟิตเนส โยคะ และมวยไทย",
    },
    {
      num: "06",
      image: "images/p10_028.jpg",
      image_alt: "Sound healing session",
      en: "Our Spa Manager, Khun Miki, specializes in sound healing.",
      th: "ผู้จัดการสปา คุณมิกิ มีความเชี่ยวชาญด้าน Sound Healing",
    },
    {
      num: "07",
      image: "images/yn_sushi.jpg",
      image_alt: "Yunami signature dish",
      en: "Yunami, our new Japanese coastal izakaya, highlights fresh seafood, premium Japanese A5 Wagyu, and seasonal produce at the heart of its menu.",
      th: "ห้องอาหารญี่ปุ่นสไตล์อิซากายะ มีความโดดเด่นเน้นชูรสชาติอาหารทะเลสด เนื้อวากิวญี่ปุ่นเกรดเอ 5 ระดับพรีเมียม และผลผลิตตามฤดูกาล ซึ่งเป็นหัวใจหลักของเมนู",
    },
    {
      num: "08",
      image: "images/p10_030.jpg",
      image_alt: "Hydra Collection lobby chairs",
      en: "The lobby's Hydra Collection chairs, by artist EggWong, echo the harmony of man and woman — organic shapes of coral and cuttlebone.",
      th: "เก้าอี้ Hydra Collection ที่ล็อบบี้ ออกแบบโดยศิลปิน EggWong ได้แรงบันดาลใจจากความสมดุลของชายและหญิง รูปทรงสะท้อนปะการังและกระดองปลาหมึก",
    },
  ],

  // ── FOR MORE INFORMATION BUTTON ──────────────────────────────

  fmi_url:    "https://taptastego.com/hktbr",
  fmi_btn_en: "Discover More Promotions →",
  fmi_btn_th: "เลือกดูโปรโมชั่นทั้งหมด",
  fmi_sub_en: "Explore our activities, promotions, and resort details.",
  fmi_sub_th: "ค้นพบกิจกรรม โปรโมชั่น และข้อมูลเกี่ยวกับรีสอร์ทของเรา",

};

// ================================================================
// ⚠️  DO NOT EDIT BELOW THIS LINE
// ================================================================

function buildOutletCard(o) {
  const acts = o.acts && o.acts.length
    ? `<div class="outlet-acts">${o.acts.map(a => `<div class="outlet-act">${a}</div>`).join('')}</div>`
    : '';
  return `<div class="outlet reveal">
    <div class="ph"><img src="${o.image}" alt="${o.image_alt}"></div>
    <div class="body">
      <div class="tag">${o.tag_en} · <span style="font-family:'Sukhumvit Set','Leelawadee UI',Tahoma,serif">${o.tag_th}</span></div>
      <h3 class="display">${o.name}</h3>
      <p>${o.body_en}<span class="th">${o.body_th}</span></p>
      ${o.sig_en ? `<div class="sig">${o.sig_en}<span class="th">${o.sig_th}</span></div>` : ''}
      ${acts}
      ${o.hours_en ? `<div class="hours"><span>${o.hours_en}<span class="th">${o.hours_th}</span></span></div>` : ''}
      ${(o.menu_url || o.book_url) ? `<div class="outlet-btn-row">
        ${o.menu_url ? `<a class="outlet-menu-btn" href="${o.menu_url}" target="_blank" rel="noopener">Menu →</a>` : ''}
        ${o.book_url ? `<a class="outlet-menu-btn" href="${o.book_url}" target="_blank" rel="noopener">Book Table →</a>` : ''}
      </div>` : ''}
    </div>
  </div>`;
}

function buildFacCard(o) {
  const acts = o.acts && o.acts.length
    ? `<div class="acts">${o.acts.map(a => `<div class="act-item">${a}</div>`).join('')}</div>`
    : '';
  return `<div class="fac-card reveal">
    <div class="ph"><img src="${o.image}" alt="${o.image_alt}" loading="lazy"></div>
    <div class="body">
      <div class="tag">${o.tag_en} · <span style="font-family:'Sukhumvit Set','Leelawadee UI',Tahoma,serif">${o.tag_th}</span></div>
      <div class="name">${o.name}</div>
      <p>${o.body_en}<span class="th">${o.body_th}</span></p>
      ${o.hours_en ? `<div class="hours">⏱ ${o.hours_en}<span class="th"> · ${o.hours_th}</span></div>` : ''}
      ${acts}
      ${o.menu_url ? `<a class="outlet-menu-btn" href="${o.menu_url}" target="_blank" rel="noopener">${o.menu_label || 'View Menu →'}</a>` : ''}
    </div>
  </div>`;
}

function buildDykCard(d) {
  return `<div class="dyk-card reveal">
    <div class="ph"><img src="${d.image}" alt="${d.image_alt}"></div>
    <div class="body"><span class="n">${d.num}</span><p>${d.en}<span class="th">${d.th}</span></p></div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', function () {
  // Render outlets
  const outletGrid = document.getElementById('outlet-grid');
  if (outletGrid) outletGrid.innerHTML = CONTENT.outlets.map(o => buildOutletCard(o)).join('');

  // Render facilities
  const facGrid = document.getElementById('facility-grid');
  if (facGrid) facGrid.innerHTML = CONTENT.facilities.map(o => buildFacCard(o)).join('');

  // Render DYK cards
  const dykGrid = document.getElementById('dyk-grid');
  if (dykGrid) dykGrid.innerHTML = CONTENT.dyk.map(d => buildDykCard(d)).join('');

  // FMI section
  const fmiBtn = document.getElementById('fmi-btn');
  if (fmiBtn) {
    fmiBtn.href = CONTENT.fmi_url;
    fmiBtn.innerHTML = `${CONTENT.fmi_btn_en}<span class="th">${CONTENT.fmi_btn_th}</span>`;
  }
  const fmiSub = document.getElementById('fmi-sub');
  if (fmiSub) fmiSub.innerHTML = `${CONTENT.fmi_sub_en}<span class="th">${CONTENT.fmi_sub_th}</span>`;

  // Re-run IntersectionObserver for dynamically added .reveal elements
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});

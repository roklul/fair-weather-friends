// 零酒精調飲 (Mocktail / Zero-Proof / Spirit-Free) 現代風味工程與代表性配方資料庫

export const ZERO_PROOF_TERMINOLOGY = [
  {
    name: 'Mocktail',
    zhName: '無酒精調酒 / 仿雞尾酒',
    meaning: '由「Mock (模仿)」與「Cocktail」組合，強調雞尾酒風格的無酒精版本。',
    context: '大眾市場、居家派對、日常佐餐食譜'
  },
  {
    name: 'Virgin Cocktail',
    zhName: '維珍調酒 / 零酒精經典版',
    meaning: '通常指將經典雞尾酒中移除基酒，以果汁、糖漿、茶或氣泡水重構。',
    context: 'Virgin Mary、Virgin Mojito、Virgin Colada 等經典延伸'
  },
  {
    name: 'Non-Alcoholic',
    zhName: '無酒精雞尾酒 (≤0.5% ABV)',
    meaning: '強調飲品本身不含或僅含低於 0.5% 微量酒精，符合國際食品法規。',
    context: '正規餐廳、酒吧酒單、商務清醒佐餐'
  },
  {
    name: 'Zero-Proof',
    zhName: '零酒精特調 (0.0% ABV)',
    meaning: '強調酒精含量完全為零，且具備如精品烈酒般的獨立風味創作價值。',
    context: '專業酒吧、健康養生、清醒社交 (Sober Curious)'
  },
  {
    name: 'Spirit-Free',
    zhName: '無基酒純萃調飲',
    meaning: '強調不依賴傳統烈酒，以冷萃茶、發酵液與植物蒸餾液獨立調製的高端飲品。',
    context: '米其林星級餐搭 (Pairing Menu)、頂級創意調飲'
  }
];

export const ZERO_PROOF_PILLARS = [
  {
    id: 'juice',
    icon: '🍊',
    title: '果汁與新鮮水果 (Fruits & Juices)',
    role: '酸甜基礎與天然色澤',
    desc: '柳橙、檸檬、萊姆、葡萄柚、鳳梨、莓果與百香果。搭配酸液或氣泡水，避免單一死甜。'
  },
  {
    id: 'tea',
    icon: '🍵',
    title: '茶飲與冷萃茶 (Tea Tannins)',
    role: '單寧澀感與酒體骨架',
    desc: '阿薩姆、紅玉、金萱、烏龍與焙茶，提供如紅白酒般的單寧回甘、木質複雜度與中後段尾韻。'
  },
  {
    id: 'bubbles',
    icon: '🫧',
    title: '氣泡水與碳酸氣泡 (Effervescence)',
    role: '切油爽口與香氣揮發',
    desc: '蘇打水與氣泡茶放大果酸明亮感，降低糖漿厚重滯膩，賦予如同香檳般的入口刺激。'
  },
  {
    id: 'botanicals',
    icon: '🌿',
    title: '草本植物與辛香料 (Botanicals & Spices)',
    role: '植物性骨架與成熟香氣',
    desc: '薄荷、羅勒、迷迭香、生薑、肉桂、丁香與墨西哥辣椒，提供喉頭微溫熱與多層次香氣。'
  },
  {
    id: 'distillates',
    icon: '💧',
    title: '無酒精蒸餾液 (Zero-Proof Distillates)',
    role: '重現烈酒香氣層次',
    desc: '杜松子、柑橘皮、橡木與煙燻植物低溫蒸餾，不含酒精依然具備如琴酒、威士忌的芳香輪廓。'
  },
  {
    id: 'fermentation',
    icon: '🧪',
    title: '發酵液、康普茶與 Shrub (Fermentation)',
    role: '天然活酸與悠長尾韻',
    desc: '水果果醋、醋飲糖漿 (Shrub) 與發酵茶，帶來酒精飲品特有的成熟深度與酸度延展。'
  }
];

export const SIGNATURE_MOCKTAILS = [
  {
    id: 'virgin-berry-spritz',
    name: '零酒精莓果氣泡飲',
    enName: 'Virgin Berry Spritz',
    category: '果香氣泡型 (Fruity & Effervescent)',
    flavorTags: ['新鮮綜合莓果', '薄荷冷涼', '百花蜂蜜', '明亮檸檬酸'],
    glassware: '葡萄酒大肚杯 (Wine Glass / Highball)',
    difficulty: 1,
    tagline: '莓果酸甜交織薄荷清香，如微風般輕盈洗滌味蕾的極致開胃氣泡調飲',
    ingredients: [
      { name: '新鮮綜合莓果 (草莓/藍莓/黑莓)', amount: 40, unit: 'g' },
      { name: '新鮮現榨檸檬汁', amount: 15, unit: 'mL' },
      { name: '純天然百花蜂蜜', amount: 15, unit: 'mL' },
      { name: '新鮮薄荷葉', amount: 6, unit: '片' },
      { name: '高端蘇打水 (Soda Water)', amount: 120, unit: 'mL 補滿' },
      { name: '純淨方冰塊', amount: 1, unit: '滿杯' }
    ],
    ratioText: '莓果汁蜜 : 檸檬汁 : 蘇打水 = 2 : 1 : 8',
    steps: [
      '在雪克杯或調酒杯底放入綜合莓果、薄荷葉、檸檬汁與蜂蜜。',
      '使用搗棒「輕柔搗壓 3-5 次」，充分釋放莓果汁液與薄荷精油（切勿搗成碎泥以保清澈）。',
      '加入適量冰塊，輕快搖盪 8 秒使蜂蜜與酸液完全乳化融合。',
      '過濾倒入裝有滿冰的大肚杯中，最後優雅注滿冰鎮蘇打水。',
      '以新鮮薄荷頂端嫩葉與整顆草莓輕巧裝飾於杯口即可享用。'
    ],
    tastingNotes: {
      initial: '雙唇碰觸細緻氣泡，明亮奔放的黑莓與草莓天然果香撲鼻。',
      mid: '檸檬的高酸度與蜂蜜的溫潤圓融完美交融，薄荷帶來如晨露般的冷涼感。',
      finish: '餘韻清爽乾淨，莓果天然果皮單寧在舌根留下微微甘甜回甘。'
    },
    pairingFood: [
      { dish: '義式香草烤雞胸 / 爐烤鮮蔬沙拉', reason: '果酸與氣泡切開雞肉油脂，薄荷冷香與迷迭香等草本天然呼應。' },
      { dish: '乾煎北海道生食干貝 / 蒜香烤蝦', reason: '檸檬果酸如天然滴管提鮮海鮮甘甜，完全不遮蓋干貝的細緻旨味。' },
      { dish: '白身魚生魚片 / 輕漬海鮮冷盤', reason: '純淨酸甜氣泡重置味蕾，營造無負擔的優雅開胃體驗。' }
    ],
    avoidFood: ['紅酒慢燉厚牛小排', '老火麻辣牛雜鍋', '重度黑巧克力熔岩'],
    flavorScience: '花青素與檸檬酸形成高明度酸香，蜂蜜果糖增加液體質地，細緻二氧化碳氣泡迅速洗滌舌面油脂分子。'
  },
  {
    id: 'zero-proof-espresso-martini',
    name: '無酒精冷萃濃縮馬丁尼',
    enName: 'Zero-Proof Espresso Martini',
    category: '甜苦濃郁型 (Rich & Roasted)',
    flavorTags: ['現萃熱濃縮', '低溫冷萃濃縮', '香草純蔗糖', '絲絨咖啡Crema'],
    glassware: '冰鎮馬丁尼杯 (Martini / Coupe)',
    difficulty: 2,
    tagline: '現萃濃縮熱搖產生絲絨 Crema 泡沫，烘焙堅果與黑巧可可交織的成熟句點',
    ingredients: [
      { name: '新鮮現萃熱 Espresso 義式濃縮', amount: 35, unit: 'mL' },
      { name: '低溫冷萃咖啡濃縮液 (Cold Brew)', amount: 30, unit: 'mL' },
      { name: '香草純蔗糖漿 (Vanilla Syrup)', amount: 15, unit: 'mL' },
      { name: '純濃鮮奶油 (或燕麥奶泡沫)', amount: 10, unit: 'mL' },
      { name: '天然肉桂粉 (Cinnamon)', amount: 1, unit: '少許' },
      { name: '精選烘焙咖啡豆', amount: 3, unit: '顆裝飾' }
    ],
    ratioText: '熱濃縮 : 冷萃液 : 香草糖漿 = 2 : 2 : 1',
    steps: [
      '預先將馬丁尼杯置於冷凍庫冰鎮。現萃一份油脂豐富的新鮮熱 Espresso。',
      '在雪克杯中迅速加入熱濃縮、冷萃咖啡液、香草糖漿與微量鮮奶油。',
      '裝入大量堅硬大冰塊，以最快速度「強力劇烈搖盪 (Hard Shake) 15 秒」，打出極致濃密的金黃 Crema 咖啡油脂奶泡。',
      '透過雙重濾網 (Fine Strainer) 迅速倒入冰鎮馬丁尼杯，表面將立即浮現厚達 5mm 的絲絨咖啡奶泡。',
      '在泡沫中央輕輕灑上肉桂微粉，並擺上 3 顆咖啡豆即刻上桌。'
    ],
    tastingNotes: {
      initial: '雙唇先碰觸到綿密微溫的冰涼咖啡奶泡，濃郁可可烘焙香氣撲鼻。',
      mid: '深焙咖啡的醇厚苦韻與香草糖漿的柔甜交融，冷萃液帶來深邃黑巧克力厚度。',
      finish: '肉桂微辛與咖啡單寧在口中悠長迴盪，如品嚐高級黑巧克力般成熟回味。'
    },
    pairingFood: [
      { dish: '義式正統提拉米蘇 (Tiramisu)', reason: '咖啡烘焙苦韻、香草與馬斯卡彭起司達到 100% 同頻共振，天作之合！' },
      { dish: '70% 濃郁熔岩黑巧克力蛋糕 / 布朗尼', reason: '咖啡的苦甜層次包裹可可脂，甜度平衡防止巧克力使味蕾疲勞。' },
      { dish: '法式焦糖烤布蕾 / 香草冰淇淋', reason: '如同阿法奇朵 (Affogato) 甜苦對比，切開布蕾濃郁蛋奶乳脂。' }
    ],
    avoidFood: ['清蒸鮮魚', '生蠔生魚片', '酸辣泰式涼拌', '蒜香熱炒'],
    flavorScience: '咖啡豆高溫萃取的類黑精 (Melanoidin) 與油脂乳化，重現烈酒陳釀於橡木桶的木質香與厚實酒體，不含酒精依然醇厚。'
  },
  {
    id: 'spicy-watermelon-fizz',
    name: '零酒精西瓜辛香氣泡飲',
    enName: 'Spicy Watermelon Fizz',
    category: '辛香消暑型 (Spicy & Refreshing)',
    flavorTags: ['現榨紅西瓜汁', '新鮮生薑辛香', '墨西哥辣椒鹽', '龍舌蘭糖漿'],
    glassware: '高球杯 (Highball Glass)',
    difficulty: 2,
    tagline: '西瓜清甜被生薑與墨西哥辣椒鹽束緊，舌尖微溫熱與冰爽氣泡的絕妙對比',
    ingredients: [
      { name: '新鮮現榨西瓜原汁', amount: 60, unit: 'mL' },
      { name: '新鮮現榨萊姆汁', amount: 20, unit: 'mL' },
      { name: '天然有機龍舌蘭蜜 (Agave)', amount: 15, unit: 'mL' },
      { name: '新鮮冷壓生薑汁', amount: 5, unit: 'mL' },
      { name: '新鮮薄荷葉', amount: 4, unit: '片' },
      { name: '冰鎮強氣泡蘇打水', amount: 80, unit: 'mL 補滿' },
      { name: '墨西哥辣椒海鹽 (Tajín 鹽邊)', amount: 1, unit: '杯口抹半圈' }
    ],
    ratioText: '西瓜汁 : 萊姆汁 : 龍舌蘭糖漿 : 生薑汁 = 12 : 4 : 3 : 1',
    steps: [
      '用萊姆角沾濕高球杯半邊杯口，均勻沾裹上一層薄薄的墨西哥辣椒海鹽 (Tajín)。',
      '在調酒壺中加入西瓜原汁、萊姆汁、龍舌蘭蜜與現壓生薑汁，輕壓薄荷葉。',
      '加入冰塊輕快攪拌或短搖 6 秒，讓果汁與薑香充分融合。',
      '連同冰塊倒入裹鹽的高球杯中，最後輕緩注滿強氣泡蘇打水。',
      '插上一片迷你西瓜角與新鮮薄荷嫩芽裝飾。'
    ],
    tastingNotes: {
      initial: '入口先接觸到杯口辣椒海鹽的微鹹微辣，瞬間激發唾液分泌。',
      mid: '西瓜的多汁清甜與萊姆酸度湧出，生薑在喉嚨底部帶來如烈酒般的溫潤微辛。',
      finish: '氣泡在舌面跳躍，留下西瓜清香與生薑溫熱，清涼無比又富含層次。'
    },
    pairingFood: [
      { dish: '美式炭烤厚切肋眼牛排 / 煙燻牛胸肉', reason: '生薑微辛與氣泡切開豐腴牛油，西瓜清甜與炭烤焦香形成對比美學。' },
      { dish: '墨西哥手作牛肉 Taco / 辣肉醬玉米片', reason: '龍舌蘭蜜、萊姆與辣椒海鹽與墨西哥香料完全同源，解辣又提味。' },
      { dish: '台式鹽酥雞 / 炭烤串燒', reason: '生薑與氣泡化身天然解膩劑，瞬間重置炸物麵衣的油滯感。' }
    ],
    avoidFood: ['細緻清蒸石斑魚', '法式清燉蔬菜清湯', '白松露燉飯'],
    flavorScience: '西瓜水分極高、質地輕，生薑中的薑辣素 (Gingerol) 與微量辣椒素提供類似酒精的溫熱刺激與喉頭感，防止無酒精飲品過於稀薄。'
  },
  {
    id: 'cucumber-tom-collins',
    name: '小黃瓜清香可林斯',
    enName: 'Cucumber Zero Collins',
    category: '草本清新型 (Herbal & Crisp)',
    flavorTags: ['8小時冷浸黃瓜水', '純淨檸檬原汁', '長條黃瓜薄片', '純淨氣泡感'],
    glassware: '可林杯 (Collins Glass)',
    difficulty: 1,
    tagline: '低溫冷浸小黃瓜水搭配明亮檸檬酸，如清晨雨後漫步般的純淨醒腦體驗',
    ingredients: [
      { name: '低溫冷浸小黃瓜水 (8小時萃取)', amount: 60, unit: 'mL' },
      { name: '新鮮現榨黃檸檬汁', amount: 25, unit: 'mL' },
      { name: '手工純蔗糖水 (1:1 比例)', amount: 20, unit: 'mL' },
      { name: '無酒精杜松子蒸餾萃取液 (選配)', amount: 15, unit: 'mL' },
      { name: '冰鎮強氣泡水 (Sparkling Water)', amount: 90, unit: 'mL 補滿' },
      { name: '小黃瓜刨長薄片', amount: 2, unit: '條貼杯裝飾' }
    ],
    ratioText: '黃瓜水 : 檸檬汁 : 糖水 = 3 : 1.2 : 1',
    steps: [
      '事前準備：將新鮮小黃瓜切厚片浸泡於純淨氣泡水中冷藏 8 小時，萃取清香小黃瓜水。',
      '將可林長杯內壁貼入 1-2 條小黃瓜長薄片，填滿透明長條冰塊。',
      '在攪拌杯中注入黃瓜萃取水、新鮮檸檬汁與純蔗糖水，加冰長匙攪拌 (Stir) 15 秒至杯身起霧。',
      '透過濾冰器將澄清液體注入可林杯中。',
      '補入冰鎮強氣泡水，用吧叉匙由底向上輕輕提拉一次即可優雅上桌。'
    ],
    tastingNotes: {
      initial: '撲鼻而來的是極致純淨的青翠瓜果香與薄薄露水氣息。',
      mid: '黃檸檬的高明度酸感與糖水柔順甜味平衡，黃瓜帶來天然植物水分清甜。',
      finish: '氣泡持續上升釋放香氣，喉頭一片冰爽純淨，回甘生津。'
    },
    pairingFood: [
      { dish: '古法清蒸龍虎斑 / 樹子蒸午仔魚', reason: '小黃瓜的綠色香氣與清蒸魚肉鮮甜高度共鳴，檸檬酸如天然醬汁提鮮。' },
      { dish: '法式生蠔冷盤 / 酸辣鮮蝦 Ceviche', reason: '純淨清爽的瓜果酸度代替傳統白酒，完全不掩蓋生蠔的海洋礦物感。' },
      { dish: '香煎脆皮雞腿排 / 白斬雞', reason: '高酸氣泡快速切斷雞皮油脂，保留肉汁鮮美。' }
    ],
    avoidFood: ['紅酒燉牛膝', '慢火東坡肉', '重乳酪蛋糕'],
    flavorScience: '小黃瓜中的 2,6-壬二烯醛 (Nonadienal) 與清蒸白身魚的鮮味分子天然協同，澄清過濾技術賦予飲品乾淨俐落的骨架。'
  },
  {
    id: 'virgin-pineapple-mojito',
    name: '無酒精黃金鳳梨莫希托',
    enName: 'Virgin Pineapple Mojito',
    category: '熱帶酸甜型 (Tropical & Citrus)',
    flavorTags: ['台灣金鑽鳳梨', '新鮮薄荷葉', '新鮮萊姆角', '滿杯碎冰清爽'],
    glassware: '高球杯 / 復古杯 (Highball / Collins)',
    difficulty: 1,
    tagline: '熱帶熟成金鑽鳳梨與薄荷的冰爽爆發，滿杯碎冰與酵素切脂的熱炒解膩神飲',
    ingredients: [
      { name: '新鮮金鑽鳳梨塊 (去芯)', amount: 40, unit: 'g' },
      { name: '新鮮薄荷嫩葉', amount: 10, unit: '片' },
      { name: '新鮮萊姆角 (Lime Wedge)', amount: 2, unit: '瓣' },
      { name: '新鮮鳳梨原汁', amount: 30, unit: 'mL' },
      { name: '純蔗糖糖水', amount: 15, unit: 'mL' },
      { name: '大量碎冰 (Crushed Ice)', amount: 1, unit: '滿杯' },
      { name: '冰鎮強氣泡蘇打水', amount: 90, unit: 'mL 補滿' }
    ],
    ratioText: '鳳梨汁 : 萊姆角 : 糖水 = 2 : 2 : 1',
    steps: [
      '在厚底高球杯底放入金鑽鳳梨塊、萊姆角與薄荷葉。',
      '用搗棒「輕柔按壓搗汁 4-6 次」，釋放鳳梨果汁、萊姆酸汁與薄荷葉表皮精油。',
      '注入新鮮鳳梨汁與糖水，填入大量碎冰至八分滿。',
      '用吧匙快速上下攪拌，使底部的果肉糖蜜與碎冰均勻冷卻降溫。',
      '補滿剩餘碎冰，注滿冰鎮蘇打水，插入一支薄荷嫩枝與風乾鳳梨片裝飾。'
    ],
    tastingNotes: {
      initial: '熱帶鳳梨奔放成熟的果香交織薄荷葉的冷涼，香氣撲鼻。',
      mid: '鳳梨的天然甜酸與萊姆的青澀果酸完美交融，碎冰帶來極致冰涼咀嚼感。',
      finish: '氣泡帶走甜膩感，口中殘留清甜薄荷香與鳳梨回甘，解渴無比。'
    },
    pairingFood: [
      { dish: '台式三層焢肉飯 / 滷肉飯', reason: '鳳梨天然酵素與高酸氣泡瞬間瓦解五花肉濃郁油脂，清爽無比。' },
      { dish: '廣式脆皮燒肉 / 蜜汁叉燒', reason: '熱帶果酸與焦香甜脆豬皮形成酸甜互補，薄荷消除油耗味。' },
      { dish: '韓式辣烤五花肉 / 泰式打拋豬', reason: '清涼薄荷醇與氣泡能迅速安撫辣椒素灼熱，比水更能解辣。' }
    ],
    avoidFood: ['清燉牛肉湯', '極度清淡的白灼海鮮'],
    flavorScience: '鳳梨蛋白酶 (Bromelain) 與薄荷醇 (Menthol) 形成雙重切油網絡，天然果酸與碎冰將口腔溫度快速降低，重置味覺。'
  }
];

export const ZERO_PROOF_SAFETY_GUIDE = {
  title: '無酒精調飲的衛生、安全與 0.5% ABV 標示法則',
  rules: [
    {
      title: '0.5% ABV 法律界線與 0.0% 區分',
      desc: '多數國家將酒精含量 <0.5% 歸類為「無酒精/非酒精飲料」。但對孕婦、酒精嚴重過敏者、戒酒者、宗教禁酒者與駕駛人，仍應特別確認是否標示為「0.0% 絕對無酒精」。'
    },
    {
      title: '無酒精缺少酒精抑菌，保存更需嚴謹',
      desc: '1:1 水糖比例糖漿密封冷藏可保存約 30 天；新鮮果汁、果泥、濃奶油與草本浸泡水（如小黃瓜水）建議於 24-48 小時內冷藏使用完畢，避免微生物滋生。'
    },
    {
      title: '發酵康普茶與 Shrub 自製風險控管',
      desc: '自製發酵液涉及菌種、酸度與溫度控制。若發酵液出現異常霉斑、腐敗異味或非預期氣體膨脹，應立即報廢，建議優先採用合規商業發酵液。'
    }
  ]
};

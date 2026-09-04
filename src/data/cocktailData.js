// 10 款經典與現代經典調酒完整規格資料庫
export const COCKTAILS_DATA = [
  {
    id: 'margarita',
    name: '瑪格麗特',
    enName: 'Margarita',
    baseSpirit: 'Tequila (龍舌蘭)',
    flavorTags: ['高酸爽口', '微鹹海鹽', '柑橘果香', '植物草本'],
    bodyLevel: 3, // 1: 輕盈, 5: 厚重
    alcoholLevel: '中等 (約 20-25% ABV)',
    difficulty: 2, // 1-5
    glassware: 'Coupe / Margarita 鹽口杯 (或 Rocks 加冰杯)',
    method: 'Shake (搖盪法) · 雙重過濾',
    iceType: '搖盪用冰塊 / Rocks 加冰',
    tagline: '塔可、炸物與酸辣海鮮的萬用解膩霸主',
    ingredients: [
      { name: 'Blanco Tequila (白龍舌蘭)', amount: 45, unit: 'mL' },
      { name: 'Cointreau / Triple Sec (君度橙酒)', amount: 15, unit: 'mL' },
      { name: '新鮮萊姆汁 (Lime Juice)', amount: 22.5, unit: 'mL' },
      { name: '龍舌蘭糖漿 (Agave Syrup, 可選)', amount: 5, unit: 'mL' },
      { name: '細海鹽 (抹杯口半圈)', amount: 1, unit: '份' }
    ],
    ratioText: '龍舌蘭 : 橙酒 : 萊姆汁 = 3 : 1 : 1.5',
    steps: [
      '取 Coupe 杯以新鮮萊姆片沾濕半圈杯緣，輕壓沾附細海鹽。',
      '將白龍舌蘭、橙酒、新鮮萊姆汁與糖漿倒入雪克杯。',
      '加入大量冰塊，劇烈搖盪 12–15 秒至雪克杯外壁結霜。',
      '雙重過濾倒入冰鎮鹽口杯中，杯緣飾以新鮮萊姆角。'
    ],
    tastingNotes: {
      initial: '清冽銳利的萊姆酸度先聲奪人，伴隨鹽口提亮味蕾。',
      mid: '龍舌蘭的青草、白胡椒與熟成柑橘橙皮甜香漸次展開。',
      finish: '微鹹礦物感與乾淨俐落的植物甘甜收尾，口腔清爽不油膩。'
    },
    pairingFood: [
      { dish: '墨西哥牛肉 Taco / 牧人豬肉 Taco', reason: '龍舌蘭草本香接住炭烤肉香，高酸度切開油脂，鹽口放大辣椒、洋蔥與香菜鮮味。' },
      { dish: '金黃炸蝦 / 鹽酥雞拼盤', reason: '萊姆酸與細鹽邊直接扮演檸檬椒鹽角色，瞬間消除炸皮油耗感。' },
      { dish: '炭烤牛小排 / 烤五花肉', reason: '橙皮與龍舌蘭香氣承接炭火焦香，酸度化解濃郁牛脂。' },
      { dish: '酪梨醬玉米片 (Guacamole)', reason: '柑橘明亮酸度降低酪梨高脂肪的厚重感。' }
    ],
    avoidFood: ['重奶油海鮮濃湯', '極甜巧克力甜點', '清淡水煮白肉魚'],
    mocktailVersion: {
      name: '無酒精青檸瑪格麗特 (Virgin Margarita)',
      recipe: '新鮮萊姆汁 30mL + 龍舌蘭糖漿 15mL + 柳橙汁 20mL + 氣泡水 60mL + 半圈鹽口',
      rationale: '保留萊姆高酸與龍舌蘭糖漿的獨特草本蜜香，氣泡感同樣能切除炸物油脂。'
    }
  },
  {
    id: 'daiquiri',
    name: '黛綺莉',
    enName: 'Daiquiri',
    baseSpirit: 'White Rum (白蘭姆酒)',
    flavorTags: ['明亮果酸', '甘蔗清甜', '純淨俐落', '低負擔'],
    bodyLevel: 2,
    alcoholLevel: '中等 (約 18-22% ABV)',
    difficulty: 2,
    glassware: '冰鎮 Coupe 碟型香檳杯',
    method: 'Shake (搖盪法) · 雙重過濾',
    iceType: '搖盪用冰塊 (無杯內冰)',
    tagline: '生食海鮮與清爽白肉的酸度天花板',
    ingredients: [
      { name: '白蘭姆酒 (White Rum)', amount: 60, unit: 'mL' },
      { name: '新鮮萊姆汁 (Lime Juice)', amount: 22.5, unit: 'mL' },
      { name: '1:1 純蔗糖糖漿 (Simple Syrup)', amount: 15, unit: 'mL' }
    ],
    ratioText: '白蘭姆 : 萊姆汁 : 糖漿 = 4 : 1.5 : 1',
    steps: [
      '預先將 Coupe 杯放入冰箱充分冰鎮。',
      '在雪克杯中加入白蘭姆酒、新鮮現榨萊姆汁與糖漿。',
      '加入飽滿冰塊，全力快速搖盪 10–12 秒達到極致冰鎮與乳化。',
      '使用濾網雙重過濾去除碎冰渣，倒入冰鎮 Coupe 杯中。'
    ],
    tastingNotes: {
      initial: '純淨純粹的萊姆酸香直擊舌尖，乾淨不拖泥帶水。',
      mid: '白蘭姆酒的天然甘蔗甜香、熱帶發酵果香與香蕉微甜浮現。',
      finish: '酸甜平衡極佳，收口乾爽脆冽，完美喚醒口腔唾液。'
    },
    pairingFood: [
      { dish: '生蠔冷盤 / 鮮蒸蛤蜊', reason: '純淨萊姆酸完美取代鮮檸檬汁，白蘭姆的甘蔗甜感引爆貝類鮮甜旨味。' },
      { dish: '古法樹子清蒸石斑 / 午仔魚', reason: '酒體輕盈無雜味，完全不干擾細緻魚肉肌理與蔥薑清香。' },
      { dish: '檸汁醃生海鮮 (Ceviche) / 烤透抽', reason: '酸度同頻共振，白蘭姆柔化醋酸與檸檬的銳利刺激。' },
      { dish: '蒜香奶油煎大蝦', reason: '俐落酸度切開奶油油脂，烘托蝦肉彈牙鮮脆。' }
    ],
    avoidFood: ['紅燒牛腩煲', '重乳酪火鍋', '重辣麻辣火鍋'],
    mocktailVersion: {
      name: '無酒精蔗香青檸 (Virgin Daiquiri)',
      recipe: '新鮮萊姆汁 30mL + 頂級甘蔗糖漿 15mL + 冷萃白毫烏龍茶 30mL + 搖盪冰鎮',
      rationale: '利用白毫烏龍茶提供似白蘭姆的發酵茶體，萊姆與甘蔗糖帶出極致鮮爽。'
    }
  },
  {
    id: 'mojito',
    name: '莫希托',
    enName: 'Mojito',
    baseSpirit: 'White Rum (白蘭姆酒)',
    flavorTags: ['新鮮薄荷', '氣泡清爽', '低酒精感', '青檸消暑'],
    bodyLevel: 1,
    alcoholLevel: '輕盈 (約 10-14% ABV)',
    difficulty: 2,
    glassware: 'Highball 高球杯 / 柯林杯',
    method: 'Muddle & Build (輕壓香氣·直調法)',
    iceType: '裝滿碎冰 (Crushed Ice)',
    tagline: '夏日炸物、海鮮與熱帶烤肉的高相容安全牌',
    ingredients: [
      { name: '白蘭姆酒 (White Rum)', amount: 45, unit: 'mL' },
      { name: '新鮮萊姆汁 (Lime Juice)', amount: 20, unit: 'mL' },
      { name: '細砂糖或糖漿', amount: 15, unit: 'mL' },
      { name: '新鮮薄荷葉 (Mint Leaves)', amount: 10, unit: '片' },
      { name: '無糖蘇打水 (Soda Water)', amount: 80, unit: 'mL' },
      { name: '碎冰', amount: 1, unit: '滿杯' }
    ],
    ratioText: '蘭姆 : 萊姆 : 糖漿 : 蘇打水 = 3 : 1.3 : 1 : 5',
    steps: [
      '在杯底放入新鮮薄荷葉與糖漿，用搗棒「輕壓 3-5 下」釋放香氣，切勿搗爛出苦澀草汁。',
      '加入新鮮萊姆汁與白蘭姆酒。',
      '杯中填入大量碎冰至八分滿，以吧叉匙由下而上輕輕提拉攪拌均勻。',
      '補滿無糖蘇打水與碎冰，頂部拍打一朵薄荷葉釋放精油並插上裝飾。'
    ],
    tastingNotes: {
      initial: '撲鼻而來的冰涼薄荷草本香與綿密微氣泡，瞬間消暑。',
      mid: '萊姆果酸與甘蔗微甜交融，酒精感柔和好入口。',
      finish: '薄荷清涼感持久停留於喉頭，連續大口飲用毫無負擔。'
    },
    pairingFood: [
      { dish: '台式鹽酥雞 / 炸物拼盤', reason: '碎冰、氣泡與薄荷冷香如天然滅火器，反覆洗淨口腔油炸膩感。' },
      { dish: '香茅烤雞腿 / 檸檬香草烤雞', reason: '薄荷與萊姆天然呼應南洋香茅、九層塔與炭烤焦香。' },
      { dish: '泰式金錢蝦餅 / 酸辣海鮮沙拉', reason: '微甜氣泡與清涼薄荷能溫柔撫平辣椒刺激，提升海鮮甘甜。' }
    ],
    avoidFood: ['厚切黑胡椒牛排', '紅酒慢燉牛腩', '重度藍紋起司'],
    mocktailVersion: {
      name: '經典無酒精莫希托 (Virgin Mojito)',
      recipe: '新鮮薄荷葉 10 片 + 萊姆汁 25mL + 糖漿 15mL + 滿杯碎冰 + 蘇打水補滿',
      rationale: '完全不減損薄荷香氣與氣泡洗油威力，任何聚餐族群皆能開懷暢飲。'
    }
  },
  {
    id: 'bloody-mary',
    name: '血腥瑪麗',
    enName: 'Bloody Mary',
    baseSpirit: 'Vodka (伏特加)',
    flavorTags: ['鹹鮮鮮味 (Umami)', '番茄酸甜', '辛香胡椒', '辛辣開胃'],
    bodyLevel: 4,
    alcoholLevel: '中等 (約 12-16% ABV)',
    difficulty: 3,
    glassware: 'Highball 高球杯 / 啤酒馬克杯',
    method: 'Roll (滾動法) 或輕攪 · 避免劇烈搖盪',
    iceType: '大方冰 (避免稀釋過快)',
    tagline: '早午餐、多汁漢堡與煙燻鹹肉的液態調味天花板',
    ingredients: [
      { name: '伏特加 (Vodka)', amount: 45, unit: 'mL' },
      { name: '優質無鹽番茄汁 (Tomato Juice)', amount: 100, unit: 'mL' },
      { name: '新鮮檸檬汁 (Lemon Juice)', amount: 15, unit: 'mL' },
      { name: '伍斯特醬 (Worcestershire Sauce)', amount: 3, unit: 'dash (滴)' },
      { name: 'Tabasco 辣醬', amount: 3, unit: 'dash (滴)' },
      { name: '芹菜鹽 (Celery Salt) 與黑胡椒粒', amount: 1, unit: '小撮' },
      { name: '新鮮西芹梗、檸檬角', amount: 1, unit: '根裝飾' }
    ],
    ratioText: '伏特加 : 番茄汁 : 檸檬汁 = 3 : 6.5 : 1 (+ 辛香調味料)',
    steps: [
      '在量杯或雪克杯中放入伏特加、番茄汁、檸檬汁、伍斯特醬、辣醬、芹菜鹽與現磨黑胡椒。',
      '加入冰塊，在兩杯之間來回傾倒 4-5 次「滾動混和 (Roll)」，避免劇烈搖盪打出粗糙泡沫。',
      '濾入裝滿冰塊的高球杯中。',
      '插上一根新鮮脆綠西芹梗，杯緣夾檸檬角裝飾即可上桌。'
    ],
    tastingNotes: {
      initial: '濃郁天然番茄鮮甜與檸檬酸香包裹舌面，彷彿冰鎮番茄冷湯。',
      mid: '黑胡椒、伍斯特醬的鯷魚旨味與 Tabasco 辛辣感在舌根發熱。',
      finish: '芹菜香氣與伏特加的乾淨骨架帶出極為豐富的鹹鮮鹹甜層次。'
    },
    pairingFood: [
      { dish: '培根起司牛肉漢堡 / 薯條', reason: '酒體如同液態番茄醬與黑胡椒汁，番茄酸與辛香料完美切入厚重牛脂。' },
      { dish: '美式早午餐 (班尼迪克蛋 / 德式香腸)', reason: '鹹鮮酸辣能化解荷蘭醬與蛋黃的濃稠感，重啟胃口。' },
      { dish: '冷燻鮭魚切片 / 煙燻培根', reason: '番茄酸與辣根風味能洗去煙燻肉脂的厚重，強化煙燻層次。' }
    ],
    avoidFood: ['法式提拉米蘇', '精緻清蒸白鯧', '水果雪酪'],
    mocktailVersion: {
      name: '聖母瑪麗 (Virgin Mary)',
      recipe: '番茄汁 120mL + 檸檬汁 20mL + 伍斯特醬 3滴 + Tabasco 3滴 + 芹菜鹽 + 碎黑胡椒 + 冰塊',
      rationale: '去除酒精後仍保留完整酸辣鹹鮮骨架，是世界最著名的經典佐餐無酒精調飲。'
    }
  },
  {
    id: 'negroni',
    name: '內格羅尼',
    enName: 'Negroni',
    baseSpirit: 'Gin (琴酒)',
    flavorTags: ['草本苦甜', '甜美紅苦艾', '義大利金巴利', '香濃橙皮'],
    bodyLevel: 5,
    alcoholLevel: '高結構 (約 24-28% ABV)',
    difficulty: 1,
    glassware: 'Old Fashioned 古典威士忌短杯',
    method: 'Stir (冰鎮攪拌法)',
    iceType: '單顆老冰塊 (Large Clear Ice Sphere/Block)',
    tagline: '義式冷肉、起司盤、炭烤香腸與燉肉的苦甜之王',
    ingredients: [
      { name: '倫敦乾琴酒 (London Dry Gin)', amount: 30, unit: 'mL' },
      { name: 'Campari (金巴利苦酒)', amount: 30, unit: 'mL' },
      { name: 'Sweet Vermouth (甜苦艾酒)', amount: 30, unit: 'mL' },
      { name: '新鮮新鮮柳橙皮 (Orange Peel)', amount: 1, unit: '片' }
    ],
    ratioText: '琴酒 : Campari : 甜苦艾酒 = 1 : 1 : 1 (經典黃金等比)',
    steps: [
      '在攪拌杯中依序加入琴酒、Campari 與甜苦艾酒。',
      '填入大冰塊，以吧叉匙順時針快速攪拌 30–40 秒至極致冰鎮與適度融水。',
      '將酒液濾入放有大老冰塊的古典短杯中。',
      '取一片新鮮柳橙皮於杯口上方擠壓噴灑皮油精油，輕擦杯緣後投入杯中。'
    ],
    tastingNotes: {
      initial: '金巴利標誌性的柑橘草本苦味與橙皮精油香氣撲鼻而來。',
      mid: '甜苦艾酒的葡萄果香、香草與焦糖甜感中和苦味，琴酒杜松子骨架清晰。',
      finish: '苦甜在舌尖交織出極長且深邃的草本回甘，生津止渴、食慾大開。'
    },
    pairingFood: [
      { dish: '義式風乾火腿 (Prosciutto) / 薩拉米肉盤', reason: '金巴利與草本苦甜能俐落切除熟成肉脂，橙皮香引出火腿肉香。' },
      { dish: '帕瑪森起司 / 熟成高達起司盤', reason: '強大酒體完美支撐高乳脂與鹹香結晶，苦甜與起司堅果香相得益彰。' },
      { dish: '炭烤義式香腸 / 烤豬五花 / 炭烤牛排', reason: '草本苦味與焦香外殼產生梅納反應共鳴，平衡油脂。' },
      { dish: '松露薯條 / 奶油烤菇', reason: '苦艾酒的泥土草本調性與菌菇松露香氣融為一體。' }
    ],
    avoidFood: ['清蒸鱸魚', '生蠔生食', '麻辣火鍋 (苦辣衝突)', '超甜鮮奶油蛋糕'],
    mocktailVersion: {
      name: '無酒精苦甜內格羅尼 (No-Groni)',
      recipe: '無酒精琴酒 30mL + 義大利紅苦酒風味糖漿 30mL + 無酒精紅苦艾酒 30mL + 大橙皮',
      rationale: '利用柑橘皮油、龍膽草本萃取液還原經典 1:1:1 苦甜平衡與開胃功能。'
    }
  },
  {
    id: 'old-fashioned',
    name: '古典雞尾酒',
    enName: 'Old Fashioned',
    baseSpirit: 'Bourbon / Rye Whiskey (波本/裸麥威士忌)',
    flavorTags: ['木質橡木桶', '香草焦糖', '安格仕苦精', '柑橘橙香'],
    bodyLevel: 5,
    alcoholLevel: '重酒體 (約 30-35% ABV)',
    difficulty: 2,
    glassware: 'Heavy Base Rocks 威士忌厚底杯',
    method: 'Build & Stir (杯內直調慢攪)',
    iceType: '單顆手工透明大老冰塊',
    tagline: '厚切肋眼、牛小排、煙燻肉排與黑巧克力的紳士搭配',
    ingredients: [
      { name: '波本或裸麥威士忌 (Bourbon/Rye)', amount: 60, unit: 'mL' },
      { name: '2:1 濃純糖漿 (或方糖 1 顆)', amount: 7.5, unit: 'mL' },
      { name: 'Angostura 芳香苦精 (Bitters)', amount: 2, unit: 'dash (滴)' },
      { name: '新鮮大橙皮 (Orange Twist)', amount: 1, unit: '片' }
    ],
    ratioText: '威士忌 60mL : 糖漿 7.5mL : 苦精 2 滴',
    steps: [
      '在古典杯底滴入 2 滴苦精與糖漿（若用方糖則滴在方糖上壓碎融化）。',
      '放入單顆大冰塊，倒入 30mL 威士忌慢攪 20 秒。',
      '再倒入剩餘 30mL 威士忌，持續攪拌至理想稀釋度與滑順口感。',
      '擠壓大橙皮精油於酒液表面，將橙皮微扭放入杯中增香。'
    ],
    tastingNotes: {
      initial: '高雅橙皮精油香氣引領，波本威士忌溫暖的香草與烤橡木桶氣息充盈。',
      mid: '微甜糖蜜包裹住酒精辛辣，苦精的肉桂、豆蔻等深色香料層次浮現。',
      finish: '悠長的焦糖、太妃糖與木質烘烤尾韻，口感厚實沉穩圓潤。'
    },
    pairingFood: [
      { dish: '厚切炭烤肋眼 / 紐約客牛排', reason: '牛排豐沛大理石肉脂能迅速柔化高酒精度，橡木焦糖香與美拉德焦香外殼共振。' },
      { dish: '低溫煙燻牛胸肉 (Brisket) / 烤豬肋排', reason: '苦精香料與波本焦糖深度承接美式 BBQ 煙燻木香與甜辣醬汁。' },
      { dish: '70% 以上黑巧克力 / 焦糖烤布蕾', reason: '威士忌香草木質調性延長可可苦甜尾韻，甜而不膩。' }
    ],
    avoidFood: ['酸辣海鮮湯', '生魚片冷盤', '輕甜水果沙拉'],
    mocktailVersion: {
      name: '無酒精橡木煙燻古典 (Virgin Old Fashioned)',
      recipe: '無酒精威士忌 60mL + 楓糖漿 7.5mL + 芳香無酒精苦精 2滴 + 大橙皮',
      rationale: '楓糖蜜香結合無酒精木質基底，呈現深邃焦糖與橙香交織的沉穩佐餐體驗。'
    }
  },
  {
    id: 'paper-plane',
    name: '紙飛機',
    enName: 'Paper Plane',
    baseSpirit: 'Bourbon Whiskey (波本威士忌)',
    flavorTags: ['檸檬明亮酸', '苦橙利口酒', '草本堅果', '波本香草'],
    bodyLevel: 3,
    alcoholLevel: '中等偏高 (約 20-24% ABV)',
    difficulty: 2,
    glassware: '冰鎮 Coupe 碟型杯',
    method: 'Shake (搖盪法) · 雙重過濾',
    iceType: '搖盪用冰塊',
    tagline: '香料烤雞、烤豬肉、番茄燉肉與烤菇的現代經典解方',
    ingredients: [
      { name: '波本威士忌 (Bourbon Whiskey)', amount: 22.5, unit: 'mL' },
      { name: 'Aperol (阿佩羅苦橙酒)', amount: 22.5, unit: 'mL' },
      { name: 'Amaro Nonino (諾尼諾草本阿瑪羅)', amount: 22.5, unit: 'mL' },
      { name: '新鮮檸檬汁 (Lemon Juice)', amount: 22.5, unit: 'mL' }
    ],
    ratioText: '波本 : Aperol : Amaro Nonino : 檸檬汁 = 1 : 1 : 1 : 1 (四位一體等比)',
    steps: [
      '將波本威士忌、Aperol、Amaro Nonino 與現榨檸檬汁等比例注入雪克杯。',
      '加入飽滿冰塊，劇烈搖盪 12 秒使酒液極致冰鎮與交融。',
      '雙重過濾倒入冰鎮 Coupe 杯中，無須添加浮冰。',
      '可於杯緣夾一片精巧微型紙飛機或擠檸檬皮油裝飾。'
    ],
    tastingNotes: {
      initial: '檸檬新鮮果酸與 Aperol 的甜美苦橙第一時間引爆活力。',
      mid: '波本威士忌的穀物香草甜感承接，帶來溫暖圓潤的中段支撐。',
      finish: 'Nonino 的高雅阿爾卑斯草本、高山香料與橙皮苦甜收尾，極度耐喝。'
    },
    pairingFood: [
      { dish: '義式香料烤半雞 / 脆皮烤雞腿', reason: '明亮檸檬酸切開雞皮油脂，波本與 Amaro 草本香料承接炭烤焦香。' },
      { dish: '香煎豬梅花肉排 / 烤德式香腸', reason: '苦橙與草本果香完美平衡豬肉甜脂，層次極其立體。' },
      { dish: '番茄肉丸義大利麵 / 披薩', reason: 'Aperol 與檸檬酸與番茄果酸同頻呼應，波本提供醬汁厚度。' },
      { dish: '松露奶油烤菇拼盤', reason: 'Amaro 的泥土草本調性放大野生蕈菇與松露的野性香氣。' }
    ],
    avoidFood: ['鮮奶油水果蛋糕', '極辣四川麻辣鍋', '水煮白蝦'],
    mocktailVersion: {
      name: '無酒精紙飛機 (Virgin Paper Plane)',
      recipe: '無酒精波本 25mL + 苦橙氣泡飲 25mL + 伯爵茶濃縮液 25mL + 新鮮檸檬汁 25mL',
      rationale: '利用柑橘氣泡與濃縮伯爵茶的佛手柑單寧還原 1:1:1:1 的苦甜酸平衡。'
    }
  },
  {
    id: 'penicillin',
    name: '盤尼西林',
    enName: 'Penicillin',
    baseSpirit: 'Blended Scotch & Islay Peated (蘇格蘭調和與泥煤威士忌)',
    flavorTags: ['泥煤煙燻', '辛香薑汁', '濃純蜂蜜', '新鮮檸檬酸'],
    bodyLevel: 4,
    alcoholLevel: '中高酒體 (約 22-26% ABV)',
    difficulty: 3,
    glassware: 'Rocks 古典岩石短杯',
    method: 'Shake (搖盪) + Float (表面漂浮泥煤威士忌)',
    iceType: '單顆大老冰塊',
    tagline: '煙燻牛胸、羊排、薑母鴨、胡椒鴨與炭火燒烤的神級良藥',
    ingredients: [
      { name: '蘇格蘭調和威士忌 (Blended Scotch)', amount: 60, unit: 'mL' },
      { name: '新鮮檸檬汁 (Lemon Juice)', amount: 22.5, unit: 'mL' },
      { name: '自製蜂蜜薑汁糖漿 (Honey-Ginger Syrup)', amount: 22.5, unit: 'mL' },
      { name: '艾雷島重泥煤威士忌 (Islay Peated Scotch)', amount: 7.5, unit: 'mL (漂浮)' },
      { name: '糖漬薑片或新鮮薑片', amount: 1, unit: '片裝飾' }
    ],
    ratioText: '調和威士忌 60mL : 檸檬 22.5mL : 薑蜜 22.5mL (+ 泥煤 7.5mL 漂浮)',
    steps: [
      '雪克杯中加入調和威士忌、新鮮檸檬汁與蜂蜜薑汁糖漿。',
      '加入冰塊全力搖盪 12–15 秒至徹底冰鎮。',
      '過濾倒入裝有單顆大冰塊的 Rocks 杯中。',
      '使用吧叉匙背面，輕輕將 7.5mL 艾雷島泥煤威士忌「漂浮 (Float)」於酒液頂層。',
      '杯口插上糖漬薑片裝飾即可享用。'
    ],
    tastingNotes: {
      initial: '湊近酒杯瞬間，艾雷島泥煤的消毒水、營火煙燻與海風鹹味撲鼻。',
      mid: '入口卻是檸檬酸與濃郁蜂蜜的溫潤酸甜，緊接著新鮮老薑的辛香熱辣爆發。',
      finish: '煙燻木質、麥芽甜感與薑辣在喉頭持久溫熱，層次極具衝擊力。'
    },
    pairingFood: [
      { dish: '低溫煙燻牛胸肉 (Brisket) / 炭火烤羊排', reason: '頂層泥煤煙燻與炭烤香無縫接軌，蜂蜜薑汁軟化羊肉野性與牛筋膜。' },
      { dish: '台式胡椒鴨 / 薑母鴨 / 燒酒雞', reason: '生薑、胡椒與蜂蜜的天然香料網絡與台式禽肉薑香形成連續共鳴。' },
      { dish: '炭火鹽燒黑豬肋排', reason: '焦脆豬脂被煙燻泥煤包裹，薑辣刺激唾液加速解膩。' }
    ],
    avoidFood: ['清蒸白肉魚', '細緻生蠔生食', '水果優格沙拉'],
    mocktailVersion: {
      name: '無酒精泥煤薑蜜飲 (Smoked Ginger Cure)',
      recipe: '現榨薑汁蜂蜜糖漿 30mL + 檸檬汁 25mL + 正山小種煙燻紅茶 60mL + 搖盪冰鎮',
      rationale: '正山小種松針煙燻茶完美替代泥煤威士忌，薑汁與蜂蜜提供溫暖禦寒的辛香骨架。'
    }
  },
  {
    id: 'gin-gin-mule',
    name: '琴騾子',
    enName: 'Gin Gin Mule',
    baseSpirit: 'Gin (琴酒)',
    flavorTags: ['辛辣薑汁氣泡', '新鮮薄荷', '杜松子草本', '青檸酸爽'],
    bodyLevel: 2,
    alcoholLevel: '輕盈 (約 12-15% ABV)',
    difficulty: 2,
    glassware: 'Highball 高球杯 / 銅製馬克杯 (Copper Mug)',
    method: 'Muddle, Shake & Top with Ginger Beer',
    iceType: '大量冰塊 / 碎冰',
    tagline: '炸物海鮮、唐揚雞、泰式椒麻雞與草本辛香料理的氣泡解方',
    ingredients: [
      { name: '倫敦乾琴酒 (London Dry Gin)', amount: 50, unit: 'mL' },
      { name: '新鮮萊姆汁 (Lime Juice)', amount: 20, unit: 'mL' },
      { name: '純蔗糖糖漿 (Simple Syrup)', amount: 15, unit: 'mL' },
      { name: '新鮮薄荷葉 (Mint Leaves)', amount: 8, unit: '片' },
      { name: '優質薑汁啤酒/汽水 (Ginger Beer)', amount: 90, unit: 'mL (補滿)' }
    ],
    ratioText: '琴酒 50mL : 萊姆 20mL : 糖漿 15mL (+ 薑汁啤酒 90mL)',
    steps: [
      '在雪克杯底放入薄荷葉與糖漿輕壓出香氣。',
      '加入琴酒、萊姆汁與冰塊，搖盪 10 秒。',
      '雙重過濾倒入裝滿冰塊的高球杯或莫斯科騾子銅杯中。',
      '頂部緩緩補滿辛辣薑汁啤酒，輕提吧叉匙混合，飾以新鮮薄荷枝與萊姆片。'
    ],
    tastingNotes: {
      initial: '薑汁啤酒辛辣氣泡與薄荷清涼感第一時間刺激味蕾。',
      mid: '琴酒的杜松子木質草本香與萊姆酸度交織，結構比 Mojito 更立體緊實。',
      finish: '喉頭留下微微生薑溫熱與氣泡清爽，瞬間重置味覺。'
    },
    pairingFood: [
      { dish: '日式唐揚炸雞 / 炸蝦蟹天婦羅', reason: '生薑辛辣與強勁氣泡瞬間消解麵衣油脂，薄荷拉升肉質香氣。' },
      { dish: '泰式椒麻雞 / 檸檬魚 / 香茅海鮮', reason: '琴酒草本與泰國檸檬葉、香茅風味天然同源，微甜薑辣撫平辣感。' },
      { dish: '日式炭火鹽烤雞肉串 (Yakitori)', reason: '替代傳統檸檬角與清酒，提供更具氣泡感的清口享受。' }
    ],
    avoidFood: ['紅酒燉牛腩', '重度黑巧克力', '帕瑪森起司盤'],
    mocktailVersion: {
      name: '無酒精草本薑汁騾子 (Virgin Gin Mule)',
      recipe: '薄荷葉 8片 + 萊姆汁 20mL + 杜松子風味草本水 40mL + 滿冰 + 薑汁啤酒補滿',
      rationale: '無酒精杜松水保留經典琴酒香氣，結合生薑氣泡帶來頂級炸物解膩體驗。'
    }
  },
  {
    id: 'espresso-martini',
    name: '艾斯普雷索馬丁尼',
    enName: 'Espresso Martini',
    baseSpirit: 'Vodka (伏特加)',
    flavorTags: ['現萃義式濃縮', '烘焙可可香', '綿密咖啡泡沫', '甜苦醇厚'],
    bodyLevel: 4,
    alcoholLevel: '中高酒體 (約 20-25% ABV)',
    difficulty: 2,
    glassware: '冰鎮 Martini / Coupe 馬丁尼杯',
    method: 'Hard Shake (強力搖盪產生 Crema 泡沫)',
    iceType: '大量冰塊 (雙重過濾無杯內冰)',
    tagline: '提拉米蘇、巧克力甜點與重口味餐後收束的極致句點',
    ingredients: [
      { name: '伏特加 (Vodka)', amount: 45, unit: 'mL' },
      { name: 'Kahlúa 咖啡利口酒 (Coffee Liqueur)', amount: 20, unit: 'mL' },
      { name: '新鮮現萃熱 Espresso 義式濃縮咖啡', amount: 30, unit: 'mL' },
      { name: '純蔗糖糖漿 (視咖啡酸苦度)', amount: 5, unit: 'mL' },
      { name: '烘焙咖啡豆 (Coffee Beans)', amount: 3, unit: '顆裝飾' }
    ],
    ratioText: '伏特加 : 咖啡利口酒 : 義式濃縮 = 2 : 1 : 1.5',
    steps: [
      '預先冰鎮馬丁尼杯。現萃一份新鮮油脂豐富的 Espresso 濃縮咖啡。',
      '在雪克杯中迅速加入伏特加、咖啡利口酒、現萃濃縮咖啡與糖漿。',
      '填滿大冰塊，以最快速度「強力劇烈搖盪 15 秒」，打出極致綿密厚實的咖啡油脂奶泡 (Crema)。',
      '迅速雙重過濾倒入馬丁尼杯中，頂部表面將浮現一層絲絨泡沫。',
      '在奶泡中央輕輕放上 3 顆咖啡豆（象徵健康、財富與幸福）即可優雅上桌。'
    ],
    tastingNotes: {
      initial: '雙唇觸碰如絲絨般綿密細緻的咖啡泡沫，烘焙堅果香撲鼻。',
      mid: '濃烈現萃咖啡苦香與伏特加乾淨酒精感交融，咖啡利口酒給予柔滑甜感。',
      finish: '深色黑巧克力、烤杏仁與焦糖苦甜在口中悠長迴盪，提神且優雅。'
    },
    pairingFood: [
      { dish: '義式正統提拉米蘇 (Tiramisu)', reason: '咖啡、酒香、可可粉與馬斯卡彭乳酪完美同頻重疊，經典世界級神仙搭配！' },
      { dish: '70% 濃郁熔岩黑巧克力蛋糕 / 布朗尼', reason: '咖啡烘烤苦韻與可可相容，利口酒甜度防止黑巧克力讓酒顯苦。' },
      { dish: '法式焦糖烤布蕾 / 香草冰淇淋', reason: '咖啡苦甜完美切開濃郁香草蛋黃乳脂，如同阿法奇朵 (Affogato) 的成人升級版。' }
    ],
    avoidFood: ['清蒸海鮮', '生魚片生蠔', '酸辣麻辣鍋物', '蒜香熱炒'],
    mocktailVersion: {
      name: '無酒精冷萃濃縮馬丁尼 (Virgin Espresso Martini)',
      recipe: '現萃 Espresso 35mL + 冷萃濃縮咖啡 30mL + 香草糖漿 15mL + 強力搖盪出 Crema',
      rationale: '利用熱濃縮與冰塊劇烈搖盪打出綿密 Crema 奶泡，不含酒精依然醇厚香濃。'
    }
  }
];

// 調酒與料理風味搭配四大判斷模型
export const COCKTAIL_PAIRING_PRINCIPLES = [
  {
    title: '原則一：重量對重量 (Weight to Weight)',
    desc: '清淡料理（生食、清蒸、沙拉）配輕盈高酸調酒（Daiquiri、Mojito）；濃郁高脂、炭烤或紅燒肉品則需結構厚實、苦甜或木質煙燻調酒（Old Fashioned、Negroni、Penicillin）才能抗衡。'
  },
  {
    title: '原則二：酸度是解膩與提鮮的利刃 (Acidity Cuts Fat)',
    desc: '檸檬、萊姆、葡萄柚與碳酸氣泡能迅速切開肉類牛脂與炸物油膩感，同時放大海鮮天然鮮甜。吃油花豐富的牛小排或炸蝦時，高酸與氣泡是最佳解方。'
  },
  {
    title: '原則三：辣味與高酒精相斥，需微甜與氣泡安撫 (Spicy vs Sweet/Bubbles)',
    desc: '高酒精與強苦味調酒會成倍放大辣椒素灼熱感；麻辣鍋、泰式或韓式辛香料理，務必搭配微甜、高酸或帶氣泡的低酒感調酒（Margarita、Mojito、Gin Gin Mule）舒緩舌尖。'
  },
  {
    title: '原則四：甜點搭酒，酒的甜度必須高於或同等於甜點 (Dessert Pairing)',
    desc: '若調酒甜度低於甜點，甜點會瞬間壓低酒液果香，只留下尖銳的苦澀與酒精灼熱感。濃郁可可與提拉米蘇最適合咖啡甜苦烘烤的 Espresso Martini。'
  }
];

// 料理情境快速找調酒矩陣 (Dishes -> Cocktails)
export const DISH_TO_COCKTAIL_MATRIX = [
  {
    category: '炭烤牛排 / 煙燻肉品',
    dishes: '厚切肋眼、牛小排、煙燻牛胸 (Brisket)、烤豬肋排',
    primaryCocktailId: 'old-fashioned',
    secondaryCocktailId: 'penicillin',
    rationale: '肉脂柔化波本酒精感，橡木桶、香草與焦糖香氣與炭烤梅納反應完美共鳴。'
  },
  {
    category: '酥脆炸物 / 鹽酥料理',
    dishes: '日式唐揚雞、台式鹽酥雞、炸蝦天婦羅、炸魚薯條',
    primaryCocktailId: 'gin-gin-mule',
    secondaryCocktailId: 'mojito',
    rationale: '生薑辛辣、薄荷冷香與密集氣泡如天然滅火器，極速消除炸皮油耗感。'
  },
  {
    category: '生食海鮮 / 清蒸鮮魚',
    dishes: '生蠔冷盤、清蒸龍虎斑、午仔魚、酸辣生蝦 (Ceviche)',
    primaryCocktailId: 'daiquiri',
    secondaryCocktailId: 'margarita',
    rationale: '極致純淨的萊姆果酸代替檸檬提鮮，完全不干擾細緻白肉魚的天然旨味。'
  },
  {
    category: '墨西哥塔可 / 辛香燒烤',
    dishes: '牛肉 Taco、牧人豬肉 Taco、香料烤雞腿、起司玉米片',
    primaryCocktailId: 'margarita',
    secondaryCocktailId: 'paper-plane',
    rationale: '龍舌蘭草本與青檸海鹽與洋蔥、香菜、辣椒形成天然產地風味連結。'
  },
  {
    category: '義式冷肉 / 熟成起司盤',
    dishes: '帕瑪火腿、薩拉米、帕瑪森起司、煙燻乳酪、堅果橄欖',
    primaryCocktailId: 'negroni',
    secondaryCocktailId: 'old-fashioned',
    rationale: '金巴利與甜苦艾酒的草本苦甜俐落切開肉脂，烘托起司的堅果氧化風味。'
  },
  {
    category: '多汁漢堡 / 美式早午餐',
    dishes: '培根起司雙層漢堡、班尼迪克蛋、煙燻鮭魚盤',
    primaryCocktailId: 'bloody-mary',
    secondaryCocktailId: 'old-fashioned',
    rationale: '番茄鮮味、黑胡椒、伍斯特醬與檸檬酸化身液態調味醬，完美承接肉汁。'
  },
  {
    category: '麻辣火鍋 / 韓式烤五花',
    dishes: '麻辣鍋涮牛五花、韓式辣醬五花肉、泰式椒麻雞',
    primaryCocktailId: 'mojito',
    secondaryCocktailId: 'margarita',
    rationale: '低酒精、清涼薄荷、青檸酸度與微甜氣泡迅速安撫辣椒素的灼熱感。'
  },
  {
    category: '精緻甜點 / 巧克力與可可',
    dishes: '正統提拉米蘇、熔岩黑巧克力蛋糕、焦糖烤布蕾',
    primaryCocktailId: 'espresso-martini',
    secondaryCocktailId: 'old-fashioned',
    rationale: '現萃義式濃縮與咖啡利口酒的甜苦烘烤調性，為甜點劃下最優雅的句點。'
  }
];

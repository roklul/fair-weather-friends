// 豬肉 8 大分切區域資料（台灣常用分切體系）
export const PORK_PRIMAL_AREAS = [
  {
    id: 'pork-shoulder',
    name: '肩胛部 (梅花·胛心)',
    enName: 'Pork Shoulder / Boston Butt',
    color: '#B84A39', // 陶土磚紅
    textColor: 'text-white',
    extendedCuts: ['梅花肉 (Boston Butt)', '胛心肉 (Blade Shoulder)', '夾心絞肉'],
    positioning: '油花均勻、煎烤燉煮全能',
    description: '豬隻前肩胛上方與背側相連處，筋膜細緻、油花分布如梅花般均勻，肉香濃郁且久煮不乾柴。',
    recommendedCooking: ['火鍋涮片', '日式叉燒', '韓式燒肉', '紅燒慢燉'],
    idealWine: ['Pinot Noir (黑皮諾)', 'Grenache (格納希)', '乾型 Rosé (粉紅酒)']
  },
  {
    id: 'pork-loin',
    name: '背脊部 (大里肌)',
    enName: 'Pork Loin',
    color: '#D8963E', // 暖芥末赭黃
    textColor: 'text-charcoal',
    extendedCuts: ['大里肌肉排', '帶骨豬排 (Pork Chop)', '里肌火鍋薄片'],
    positioning: '肌理緊實、經典炸豬排首選',
    description: '豬背脊中央兩側長條肌肉，運動量適中，脂肪含量低但肉質結實有彈性，適合短時間高溫快煮。',
    recommendedCooking: ['日式日式炸豬排 (Tonkatsu)', '厚切香煎豬排', '蔥爆肉絲', '醃烤肉排'],
    idealWine: ['未過桶 Chardonnay', 'Pinot Noir (黑皮諾)', 'Pinot Gris (灰皮諾)']
  },
  {
    id: 'pork-tenderloin',
    name: '腰脊部 (小里肌·腰內)',
    enName: 'Pork Tenderloin',
    color: '#5B705B', // 鼠尾草灰綠
    textColor: 'text-white',
    extendedCuts: ['腰內肉 (Tenderloin)', '小里肌菲力', '清炒肉柳'],
    positioning: '全豬最嫩、低脂無筋極致',
    description: '位於豬背脊下方內側，是活動量最低的腰內肉，組織極為細嫩純淨、幾無脂肪與筋膜。',
    recommendedCooking: ['腰內炸豬排', '低溫舒肥香煎', '佐水果醬炙烤', '滑蛋肉柳'],
    idealWine: ['Pinot Noir (黑皮諾)', 'Gamay (加美 / 薄酒萊)', 'Riesling (麗絲玲)']
  },
  {
    id: 'pork-belly',
    name: '腹脅部 (五花·三層肉)',
    enName: 'Pork Belly',
    color: '#D26C42', // 珊瑚橘
    textColor: 'text-white',
    extendedCuts: ['五花肉 (Pork Belly)', '三層肉塊', '培根條', '五花火鍋片'],
    positioning: '肥瘦黃金比例、控肉東坡肉靈魂',
    description: '豬腹部肋骨下緣，皮、油、肉層層相間，油脂豐潤且膠質豐富，久燉慢熬後入口即化。',
    recommendedCooking: ['台式焢肉 / 滷肉飯', '杭州東坡肉', '廣式脆皮燒肉', '韓式烤厚五花'],
    idealWine: ['微甜 Off-dry Riesling', 'Chenin Blanc (白詩南)', 'Brut Champagne (乾型香檳)']
  },
  {
    id: 'pork-ribs',
    name: '肋排部 (腩排·肋小排)',
    enName: 'Pork Ribs / Spare Ribs',
    color: '#7C2333', // 深勃根地酒紅
    textColor: 'text-white',
    extendedCuts: ['豬肋排 (Spare Ribs)', '聖路易切排 (St. Louis Cut)', '京都排骨', '排骨湯塊'],
    positioning: '骨香肉美、美式煙燻與燉湯霸主',
    description: '豬胸腹兩側肋骨部位，連骨帶肉且交織著豐美油脂與筋膜，骨邊肉香氣特別濃烈。',
    recommendedCooking: ['美式低溫柴燒 BBQ 肋排', '無錫醬排骨', '糖醋排骨', '藥膳排骨湯'],
    idealWine: ['Zinfandel (金芬黛)', 'Shiraz (希哈)', 'Tempranillo (田帕尼優)']
  },
  {
    id: 'pork-neck',
    name: '頸頰部 (松阪·嘴邊肉)',
    enName: 'Pork Neck & Jowl',
    color: '#C58C36', // 琥珀金棕
    textColor: 'text-white',
    extendedCuts: ['松阪豬 (雪花肉 / Jowl)', '豬頰肉 (嘴邊肉)', '下顎肉'],
    positioning: '脆彈極品、全豬稀有黃金肉',
    description: '豬頸部兩側與下顎交界，油花細密如霜降，一隻豬僅約五、六百克，口感爽脆彈牙、鮮甜多汁。',
    recommendedCooking: ['鹽烤松阪豬', '麻油松阪炒川七', '蒜泥白切嘴邊肉', '炙燒薄切'],
    idealWine: ['乾型 Rosé (粉紅酒)', 'Pinot Gris (灰皮諾)', '輕盈 Gamay']
  },
  {
    id: 'pork-front-leg',
    name: '前腿與蹄膀 (前腿·腿庫)',
    enName: 'Picnic Shoulder & Pork Hock',
    color: '#A89279', // 暖燕麥褐
    textColor: 'text-white',
    extendedCuts: ['蹄膀 (腿庫 / Pork Hock)', '前腿肉 (Picnic Shoulder)', '萬巒豬腳'],
    positioning: '皮 Q 肉厚、年菜辦桌與滷燉首選',
    description: '豬前肢上側至膝關節，皮厚筋多且富含豐富膠原蛋白，長時間燉煮後外皮滑 Q、內部肉質軟爛。',
    recommendedCooking: ['筍乾封肉腿庫', '紅燒蹄膀', '德國酥炸脆皮豬腳', '冰糖醬滷'],
    idealWine: ['Riesling (麗絲玲)', 'Chenin Blanc (白詩南)', '柔和 Grenache']
  },
  {
    id: 'pork-ham-trotter',
    name: '後腿與蹄部 (後腿·豬蹄)',
    enName: 'Ham & Trotters',
    color: '#6B4C38', // 雕刻深褐
    textColor: 'text-white',
    extendedCuts: ['後腿肉 (Ham Leg)', '和尚頭', '豬蹄 (Trotters)', '火腿加工肉'],
    positioning: '高瘦肉比、加工香腸與極致膠質湯',
    description: '豬後臀與後腿肌肉，運動量大、肉質極瘦且結實，是貢丸、肉鬆與香腸主力；腳蹄則滿滿明膠。',
    recommendedCooking: ['自製香腸肉餡', '金華火腿', '花生燉豬蹄濃湯', '京醬肉絲'],
    idealWine: ['Sparkling Wine (氣泡酒)', 'Gamay (加美)', 'Pinot Noir (黑皮諾)']
  }
];

// 12 款精選豬肉部位規格資料庫
export const PORK_CUTS_DATA = [
  {
    id: 'pork-butt',
    name: '梅花肉',
    enName: 'Pork Collar / Boston Butt',
    aliases: '梅花肉排、上肩胛肉、叉燒肉',
    primalId: 'pork-shoulder',
    primalName: '肩胛部 (Shoulder)',
    tagBadge: '油花均勻 · 軟嫩多汁',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    scores: {
      tenderness: 5,
      fat: 4,
      flavor: 5
    },
    locationDesc: '位於豬隻前肩胛上半部，靠近背脊前端，肌肉間夾雜豐富白色大理石紋油脂。',
    keywords: ['油花如梅花', '煎烤不柴', '火鍋熱門', '叉燒首選', '全能肉品'],
    cookingMethods: [
      { name: '火鍋涮片', desc: '切成 0.2 公分薄片，滾水輕涮 10 秒，滑嫩鮮甜。' },
      { name: '蜜汁叉燒', desc: '以叉燒醬、麥芽糖醃漬後高溫烘烤，焦香多汁。' },
      { name: '韓式燒肉', desc: '厚切原塊直火炭烤，逼出油香裹生菜與辣醬。' },
      { name: '日式生薑燒', desc: '薄切肉片大火快炒生薑醬油洋蔥，下飯絕配。' }
    ],
    donenessTip: '厚切香煎或燒烤建議全熟或中心達 71°C。油脂均勻，全熟依然保有豐富肉汁不乾柴。',
    winePairing: {
      wines: ['Pinot Noir (黑皮諾)', 'Grenache (格納希)', '乾型 Rosé (粉紅酒)'],
      rationale: '梅花肉油脂適中且肉味醇厚，搭配單寧柔滑、帶新鮮紅色莓果酸香的黑皮諾，能化解油感並提振甜度。',
      styleSummary: '低中單寧 · 活潑紅櫻桃果酸 · 清新柔美'
    }
  },
  {
    id: 'pork-belly-cut',
    name: '五花肉 / 三層肉',
    enName: 'Pork Belly',
    aliases: '三層肉、腩肉、花肉、培根條',
    primalId: 'pork-belly',
    primalName: '腹脅部 (Belly)',
    tagBadge: '肥瘦相間 · 軟爛化口',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 5
    },
    locationDesc: '位於豬腹脅部，肋骨下方的腹部肉，皮、油脂與瘦肉層層相間，油香最為濃郁。',
    keywords: ['三層層次', '東坡肉靈魂', '肥而不膩', '久燉成膠', '脆皮燒肉'],
    cookingMethods: [
      { name: '古早味焢肉', desc: '醬油、米酒、冰糖與紅蔥頭文火慢燉 1.5 小時，晶瑩軟爛。' },
      { name: '杭州東坡肉', desc: '黃酒紹興冰糖封鍋慢燜，皮 Q 肉化、入口香濃。' },
      { name: '港式脆皮燒肉', desc: '扎孔風乾後高溫烤出金黃爆裂脆皮與多汁肉層。' },
      { name: '蒜泥白肉', desc: '原塊帶皮水煮熟透切薄片，佐蒜蓉醬油膏。' }
    ],
    donenessTip: '必須完全燉透至筋皮膠化 (Well-Done Stewed)，讓油脂充分融化成膠質，避免生硬油膩。',
    winePairing: {
      wines: ['Off-dry Riesling (微甜麗絲玲)', 'Chenin Blanc (白詩南)', 'Brut Champagne (香檳)'],
      rationale: '五花肉油脂極高且常帶鹹甜醬汁。高酸度且帶微甜果香的 Riesling 能完美切割油脂，氣泡酒的氣泡則能洗刷味蕾。',
      styleSummary: '高酸度清口感 · 微甜呼應醬香 · 細緻氣泡'
    }
  },
  {
    id: 'matsusaka-pork',
    name: '松阪豬 / 豬頸肉',
    enName: 'Pork Jowl / Pork Neck',
    aliases: '雪花肉、黃金六兩肉、霜降豬肉',
    primalId: 'pork-neck',
    primalName: '頸頰部 (Neck & Jowl)',
    tagBadge: '霜降油花 · 爽脆彈牙',
    tagColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    scores: {
      tenderness: 5,
      fat: 4,
      flavor: 4
    },
    locationDesc: '取自豬隻下顎與頸部交界處，油花細密交錯，每頭豬僅能取下兩小塊（約 500-600 克）。',
    keywords: ['黃金六兩', '脆彈口感', '霜降油紋', '鹽烤絕品', '逆紋切薄片'],
    cookingMethods: [
      { name: '原味鹽烤', desc: '表面抹薄鹽與胡椒，高溫烤至雙面金黃微焦，逆紋斜切。' },
      { name: '麻油松阪炒川七', desc: '黑麻油煸薑片，大火快炒松阪豬片，脆爽清甜。' },
      { name: '泰式炙燒涼拌', desc: '炙烤後薄切，拌入檸檬汁、魚露與辣椒香菜。' }
    ],
    donenessTip: '煎烤至表面金黃焦香熟透即可。「務必逆著紋理斜切薄片」，能獲得無可取代的脆爽彈性。',
    winePairing: {
      wines: ['乾型 Rosé (粉紅酒)', 'Pinot Gris (灰皮諾)', '輕盈 Gamay (加美)'],
      rationale: '松阪豬特有的脆彈質地與清甜牛油感，最適合果香清朗、酸度生津的普羅旺斯粉紅酒或阿爾薩斯灰皮諾。',
      styleSummary: '清爽高酸 · 紅莓果香 · 輕盈不搶味'
    }
  },
  {
    id: 'pork-tenderloin-cut',
    name: '小里肌 / 腰內肉',
    enName: 'Pork Tenderloin / Filet',
    aliases: '腰內肉、豬菲力、小里肌肉柳',
    primalId: 'pork-tenderloin',
    primalName: '腰脊部 (Tenderloin)',
    tagBadge: '全豬最嫩 · 極低脂肪',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    scores: {
      tenderness: 5,
      fat: 1,
      flavor: 3
    },
    locationDesc: '位於豬背脊骨下方內側，運動量近乎於零，肌理極其細嫩，無筋膜無油花。',
    keywords: ['腰內炸豬排', '全豬最嫩', '低卡高蛋白', '無筋好消化', '短時間烹調'],
    cookingMethods: [
      { name: '日式腰內炸豬排', desc: '裹麵粉、蛋液與生麵包粉，165°C 中溫油炸至金黃酥脆。' },
      { name: '厚切香煎佐蘋果醬', desc: '高溫快速封煎表面，佐焦糖蘋果奶油醬汁。' },
      { name: '舒肥低溫烹調', desc: '58°C 恆溫水浴 1 小時後秒煎表面，極度軟嫩多汁。' }
    ],
    donenessTip: '切忌過度加熱！中心溫度達到 63°C~68°C 即可出鍋靜置，過熟水分流失會顯乾柴。',
    winePairing: {
      wines: ['Pinot Noir (黑皮諾)', 'Gamay (加美 / 薄酒萊村莊級)', '未過桶 Chardonnay'],
      rationale: '細緻清瘦的腰內肉經不起重單寧摧殘。搭配酸度優雅、單寧極柔的黑皮諾或薄酒萊，能襯托肉質的清甜。',
      styleSummary: '極柔單寧 · 紅櫻桃與蔓越莓 · 純淨細緻'
    }
  },
  {
    id: 'pork-loin-chop',
    name: '大里肌 / 豬排',
    enName: 'Pork Loin / Pork Chop',
    aliases: '里肌肉排、帶骨里肌、肉絲',
    primalId: 'pork-loin',
    primalName: '背脊部 (Loin)',
    tagBadge: '肉感緊實 · 炸排經典',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 3,
      fat: 2,
      flavor: 4
    },
    locationDesc: '位於豬背脊中央，是面積最大的一條瘦肉肌群，外側通常包覆一層薄白油脂。',
    keywords: ['便當排骨', '日式炸豬排', '肉絲快炒', '嚼勁紮實', '經典常備'],
    cookingMethods: [
      { name: '台式古早味炸排骨', desc: '拍鬆後以五香粉、醬油、大蒜醃漬，裹地瓜粉酥炸。' },
      { name: '厚切戰斧豬排', desc: '帶骨厚切，鑄鐵鍋香煎後烤箱慢熟，肉汁豐沛。' },
      { name: '青椒炒肉絲', desc: '逆紋切絲快速抓醃過油，大火快炒清脆入味。' }
    ],
    donenessTip: '烹調前建議以肉槌拍斷結締組織，香煎熟度控制在剛剛好全熟（68°C-71°C）保持多汁。',
    winePairing: {
      wines: ['未過桶 Chardonnay (夏多內)', 'Pinot Noir (黑皮諾)', 'Pinot Gris (灰皮諾)'],
      rationale: '大里肌油脂偏低但肉感明確，若為炸豬排或奶油香煎，帶有烤青蘋果與適度酸度的白酒能極佳解膩。',
      styleSummary: '清爽果酸 · 柑橘與白桃 · 圓潤優雅'
    }
  },
  {
    id: 'pork-spare-ribs',
    name: '肋排 / 腩排',
    enName: 'Pork Spare Ribs',
    aliases: '豬肋排、小排骨、無錫排骨、肋排骨',
    primalId: 'pork-ribs',
    primalName: '肋排部 (Ribs)',
    tagBadge: '骨香肉濃 · 燒烤慢燉',
    tagColor: 'bg-red-100 text-red-900 border-red-300',
    scores: {
      tenderness: 4,
      fat: 4,
      flavor: 5
    },
    locationDesc: '位於豬腹部肋骨處，連帶肋骨與周圍豐厚五花筋肉，油脂與結締組織含量豐富。',
    keywords: ['美式BBQ', '骨香肉甜', '醬燒濃郁', '耐烤耐燉', '吮指回味'],
    cookingMethods: [
      { name: '美式煙燻 BBQ 肋排', desc: '乾抹香料低溫慢燻 4-6 小時，刷醬炙烤至骨肉微離。' },
      { name: '無錫醬排骨', desc: '紹興、冰糖與八角濃汁慢收，紅亮濃郁、骨酥肉爛。' },
      { name: '苦瓜排骨湯', desc: '排骨汆燙後與苦瓜、小魚乾文火清燉，甘甜清熱。' }
    ],
    donenessTip: '慢烤或燉煮需使內部膠原水解，達到骨頭可輕易旋轉抽出的軟爛程度最為美味。',
    winePairing: {
      wines: ['Zinfandel (金芬黛)', 'Shiraz (希哈)', 'Tempranillo (田帕尼優)'],
      rationale: '烤肋排的焦糖化 BBQ 醬與煙燻焦香，需要果香極度成熟奔放、帶黑胡椒與香草橡木桶風味的 Zinfandel。',
      styleSummary: '飽滿黑李漿果 · 煙燻辛香 · 圓潤厚實'
    }
  },
  {
    id: 'pork-hock-cut',
    name: '蹄膀 / 腿庫',
    enName: 'Pork Hock / Pork Knuckle',
    aliases: '腿庫肉、封肉、豬肘、萬巒蹄膀',
    primalId: 'pork-front-leg',
    primalName: '前腿與蹄膀 (Front Leg & Hock)',
    tagBadge: '皮Q脂香 · 膠質爆棚',
    tagColor: 'bg-orange-100 text-orange-900 border-orange-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 5
    },
    locationDesc: '位於豬前腿或後腿膝關節附近，外包厚實豬皮與肥美脂肪，內裏為結實腿肉。',
    keywords: ['年菜大菜', '滿滿膠原蛋白', '皮Q肉嫩', '筍乾封肉', '萬巒風味'],
    cookingMethods: [
      { name: '筍乾大封肉', desc: '整顆炸過定型後與酸甜筍乾、冰糖醬油慢滷 2.5 小時。' },
      { name: '德國酥炸脆皮豬腳', desc: '香料慢煮透徹後入高溫油炸，外皮卡滋酥脆、肉質多汁。' },
      { name: '萬巒蒜味冷蹄膀', desc: '中藥滷透放涼切薄片，佐特調蒜蓉醬油膏。' }
    ],
    donenessTip: '必須完全久燉至筷子能輕易穿透皮肉。長時間加熱使皮下脂肪融出，轉化為稠密明膠。',
    winePairing: {
      wines: ['Riesling (麗絲玲)', 'Chenin Blanc (白詩南)', 'Dry Lambrusco (微氣泡紅酒)'],
      rationale: '蹄膀的濃稠膠質與醬油甜香，需要高酸度白酒來「解膩開胃」；義大利 Lambrusco 的氣泡更能爽口洗刷味覺。',
      styleSummary: '高酸果香切油 · 明快生津 · 微氣泡洗刷感'
    }
  },
  {
    id: 'pork-jowl-cheek',
    name: '豬頰肉 / 嘴邊肉',
    enName: 'Pork Jowl / Cheek',
    aliases: '嘴邊肉、菊花肉、豬臉頰',
    primalId: 'pork-neck',
    primalName: '頸頰部 (Neck & Jowl)',
    tagBadge: '軟筋交錯 · 鮮嫩多汁',
    tagColor: 'bg-amber-200 text-amber-950 border-amber-400',
    scores: {
      tenderness: 4,
      fat: 2,
      flavor: 5
    },
    locationDesc: '位於豬臉頰咀嚼肌部位，運動頻繁，肉質紋理細緻且密布透明軟筋與膠質。',
    keywords: ['黑白切人氣王', '軟筋膠質', '汆燙清甜', '無油膩感', '小吃店靈魂'],
    cookingMethods: [
      { name: '小吃店白切嘴邊肉', desc: '高湯文火慢煮 40 分鐘，切薄片佐薑絲與醬油膏。' },
      { name: '紅燒滷嘴邊肉', desc: '豆瓣八角慢滷，軟筋晶瑩剔透、入口彈牙。' },
      { name: '炙烤椒鹽臉頰', desc: '抹椒鹽高溫直火烤至焦香，切片下酒。' }
    ],
    donenessTip: '汆燙燉煮約 40-50 分鐘至軟筋熟透即可，避免煮過頭失去獨有的軟彈膠質感。',
    winePairing: {
      wines: ['Gamay (加美 / 薄酒萊)', 'Barbera (巴貝拉)', 'Pinot Noir (黑皮諾)'],
      rationale: '嘴邊肉清甜無多餘油耗味，帶有軟筋嚼感，搭配義大利高酸度的 Barbera 或清爽加美，口感清新和諧。',
      styleSummary: '明亮櫻桃酸 · 輕盈單寧 · 宜人草本'
    }
  },
  {
    id: 'pork-blade-shoulder',
    name: '胛心肉 / 下肩胛',
    enName: 'Pork Blade Shoulder',
    aliases: '夾心肉、下肩胛肉、肉燥絞肉',
    primalId: 'pork-shoulder',
    primalName: '肩胛部 (Shoulder)',
    tagBadge: '肥瘦適中 · 絞肉餡料首選',
    tagColor: 'bg-stone-100 text-stone-900 border-stone-300',
    scores: {
      tenderness: 3,
      fat: 3,
      flavor: 4
    },
    locationDesc: '位於豬前腿上方、梅花肉下側的肩胛下半部，肉質偏瘦但帶有些許結締組織與筋膜。',
    keywords: ['肉燥水餃餡', '肉絲熱炒', '經濟實惠', '高性價比', '多用途常備'],
    cookingMethods: [
      { name: '手工水餃肉餡', desc: '七分瘦三分肥絞肉，拌入高湯蔥薑水，餡嫩多汁。' },
      { name: '台式古早肉燥', desc: '手工切丁炒香紅蔥頭與五香醬油，拌麵淋飯必備。' },
      { name: '家常肉絲燉豆腐', desc: '切條滑油後與嫩豆腐、香菇同燉，鮮美溫潤。' }
    ],
    donenessTip: '絞肉料理需完全熟化；切絲熱炒建議先打水抓醃太白粉以鎖住水分。',
    winePairing: {
      wines: ['Gamay (加美)', 'Sangiovese (桑嬌維塞)', 'Pinot Noir (黑皮諾)'],
      rationale: '調味靈活多變的胛心肉料理，適合單寧溫和、果酸適中的輕中度紅酒，襯托肉香而不搶戲。',
      styleSummary: '柔順果味 · 輕巧酒體 · 萬用百搭'
    }
  },
  {
    id: 'pork-front-picnic',
    name: '前腿肉',
    enName: 'Picnic Shoulder / Front Leg',
    aliases: '前腿夾心、前蹄肉、前腿肉塊',
    primalId: 'pork-front-leg',
    primalName: '前腿與蹄膀 (Front Leg & Hock)',
    tagBadge: '筋膜豐富 · 燉煮紅燒',
    tagColor: 'bg-orange-100 text-orange-900 border-orange-300',
    scores: {
      tenderness: 3,
      fat: 3,
      flavor: 4
    },
    locationDesc: '豬隻前腿部肌肉，活動量多於後腿，筋膜交織且肉質較為滑嫩耐煮。',
    keywords: ['耐燉耐煮', '筋膜膠質', '家常紅燒', '高性價比', '肉湯鮮甜'],
    cookingMethods: [
      { name: '栗子紅燒前腿肉', desc: '與甘甜栗子、香菇同燉，肉塊吸滿濃郁醬汁。' },
      { name: '酸菜白肉鍋底肉', desc: '切厚片長時間熬煮，膠質釋入酸香高湯。' }
    ],
    donenessTip: '建議以慢火燉煮 1 小時以上，使內部結締組織充分軟化。',
    winePairing: {
      wines: ['Côtes du Rhône (隆河丘)', 'Merlot (梅洛)', 'Pinot Noir (黑皮諾)'],
      rationale: '前腿肉紅燒燉煮後醬香濃厚，法國隆河丘的香料氣息能增添整道菜的層次深度。',
      styleSummary: '辛香黑果 · 圓潤單寧 · 溫暖厚實'
    }
  },
  {
    id: 'pork-ham-leg',
    name: '後腿肉 / 臀肉',
    enName: 'Ham / Pork Leg',
    aliases: '後腿瘦肉、和尚頭、肉鬆肉',
    primalId: 'pork-ham-trotter',
    primalName: '後腿與蹄部 (Ham & Trotters)',
    tagBadge: '高蛋白極瘦 · 熟食加工首選',
    tagColor: 'bg-red-200 text-red-950 border-red-400',
    scores: {
      tenderness: 2,
      fat: 1,
      flavor: 4
    },
    locationDesc: '位於豬後臀與大腿部，肉量極為豐厚，脂肪含量極低，肌肉纖維較粗壯結實。',
    keywords: ['純瘦肉', '火腿原料', '肉鬆貢丸', '低脂健康', '切絲快炒'],
    cookingMethods: [
      { name: '蜜汁萬巒金華火腿', desc: '長時間鹽醃風乾熟成，肉香濃縮結晶。' },
      { name: '傳統自製手工肉鬆', desc: '順紋煮熟拉絲，低溫炒焙至金黃蓬鬆酥香。' },
      { name: '木耳肉絲快炒', desc: '逆紋切細絲抓水過油，大火快炒維持嫩度。' }
    ],
    donenessTip: '因脂肪極低，直接煎烤極易發柴；切絲熱炒務必逆紋切並充分抓醃，或用於低溫加工。',
    winePairing: {
      wines: ['Sparkling Wine (氣泡酒 / Cava)', 'Gamay (薄酒萊)', 'Riesling (麗絲玲)'],
      rationale: '後腿肉若製成火腿或醃肉，鹽分較高，搭配高酸度清脆氣泡酒能洗刷鹹度並引出甘甜。',
      styleSummary: '活潑氣泡 · 明亮酸爽 · 乾淨清口'
    }
  },
  {
    id: 'pork-trotters-cut',
    name: '豬腳 / 豬蹄',
    enName: 'Pork Trotters / Feet',
    aliases: '豬手、豬腳尖、花生豬腳',
    primalId: 'pork-ham-trotter',
    primalName: '後腿與蹄部 (Ham & Trotters)',
    tagBadge: '極致膠原 · 湯濃黏唇',
    tagColor: 'bg-amber-200 text-amber-950 border-amber-400',
    scores: {
      tenderness: 4,
      fat: 4,
      flavor: 5
    },
    locationDesc: '豬隻腳掌與蹄部，幾乎無瘦肉，全由厚皮、軟骨、筋腱與大量膠原蛋白構成。',
    keywords: ['養顏膠原', '湯頭濃白', '黏嘴膠質', '花生豬腳', '可樂豬腳'],
    cookingMethods: [
      { name: '古早味花生燉豬腳湯', desc: '白水細火慢熬 2.5 小時，熬出乳白色黏唇濃郁膠質湯底。' },
      { name: '可樂醬香冰糖燒豬腳', desc: '可樂碳酸與焦糖嫩化豬皮，紅亮油潤、Q 彈爽口。' }
    ],
    donenessTip: '必須慢火燉煮 2 小時以上，直到膠原蛋白徹底水解融化成膠稠明膠。',
    winePairing: {
      wines: ['Riesling (麗絲玲)', 'Chenin Blanc (白詩南)', 'Brut Rosé (粉紅氣泡酒)'],
      rationale: '豬蹄湯汁極為濃稠黏唇，高酸度的白葡萄酒或氣泡酒能帶來清爽口腔的平衡感。',
      styleSummary: '高酸果香 · 生津洗刷 · 活潑清透'
    }
  }
];

// 豬肉餐酒搭配科學原則
export const PORK_WINE_PRINCIPLES = [
  {
    title: '原則一：高油脂與醬香需要「高酸度」或「微甜感」解脂',
    subtitle: 'Acidity & Residual Sugar Cut Through Fat & Rich Sauce',
    desc: '豬五花、蹄膀與烤肋排富含豐潤脂肪與膠質，若搭配年輕高單寧紅酒容易產生苦澀金屬感；相反地，高酸度的 Riesling 或氣泡酒能俐落化解油膩，微甜感更可呼應台式冰糖紅燒醬汁。',
    items: [
      { meatType: '高油脂／久燉部位 (五花肉、蹄膀、豬腳)', wineStyle: '高酸度、細緻氣泡或帶微甜感', examples: 'Off-dry Riesling、Chenin Blanc、Brut Champagne' },
      { meatType: '煙燻／BBQ 焦香部位 (烤肋排、蜜汁叉燒)', wineStyle: '果味成熟奔放、中高酒體與黑胡椒香', examples: 'Zinfandel、Shiraz、Tempranillo' },
      { meatType: '脆彈細緻部位 (松阪豬、嘴邊肉)', wineStyle: '清爽高酸、果香清麗、單寧極柔', examples: '乾型 Rosé、Pinot Gris、輕盈 Gamay' }
    ]
  },
  {
    title: '原則二：清瘦嫩肉切忌厚重重單寧紅酒',
    subtitle: 'Lean Cuts Require Low Tannin & Crisp Fruitiness',
    desc: '大里肌、小里肌（腰內）等部位脂肪極少，肉質純淨纖細，若遇上高單寧赤霞珠會壓過肉香且凸顯乾澀，應選擇優雅黑皮諾或未過桶白酒。',
    items: [
      { method: '日式炸豬排 / 厚切香煎', wineFocus: '圓潤果酸、微帶柑橘白桃', picks: '未過桶 Chardonnay、Pinot Noir' },
      { method: '原味鹽烤 / 蒜泥白切', wineFocus: '草本花香、生津酸度', picks: '普羅旺斯 Rosé、Pinot Gris' },
      { method: '台式紅燒 / 醬滷肉燥', wineFocus: '活潑果酸、柔和單寧', picks: 'Gamay (薄酒萊)、Sangiovese' },
      { method: '火腿 / 鹹香醃肉冷盤', wineFocus: '高酸氣泡、果香生津', picks: 'Champagne、Cava、Prosecco' }
    ]
  }
];

// 豬肉選肉助手問答資料
export const PORK_WIZARD_DATA = {
  textures: [
    { id: 'tender', label: '極致軟嫩、低脂無筋', icon: 'Sparkles', desc: '追求最柔嫩細緻的口感，適合老人小孩', recommendedIds: ['pork-tenderloin-cut', 'pork-butt', 'pork-jowl-cheek'] },
    { id: 'fatty', label: '肥瘦相間、入口即化', icon: 'Droplets', desc: '熱愛三層油脂與滑潤膠質', recommendedIds: ['pork-belly-cut', 'pork-butt', 'pork-hock-cut'] },
    { id: 'crispy', label: '爽脆彈牙、獨特嚼感', icon: 'Flame', desc: '喜歡霜降油花與脆口彈性', recommendedIds: ['matsusaka-pork', 'pork-jowl-cheek'] },
    { id: 'gelatinous', label: '皮Q黏唇、滿滿膠原', icon: 'Clock', desc: '熱愛長時間慢燉、濃稠膠質', recommendedIds: ['pork-hock-cut', 'pork-trotters-cut', 'pork-belly-cut'] },
    { id: 'lean', label: '結實瘦肉、高蛋白質', icon: 'HeartPulse', desc: '健身、控脂、肉絲快炒或自製肉餡', recommendedIds: ['pork-loin-chop', 'pork-ham-leg', 'pork-blade-shoulder'] }
  ],
  cookingMethods: [
    { id: 'stew-braise', label: '台式焢肉 / 東坡肉 / 滷肉', icon: 'Soup', desc: '冰糖紅燒、慢火慢燉入味', recommendedIds: ['pork-belly-cut', 'pork-butt', 'pork-hock-cut'] },
    { id: 'bbq-grill', label: '韓日燒肉 / 鹽烤 / 煙燻 BBQ', icon: 'Flame', desc: '直火逼出油香、焦香脆邊', recommendedIds: ['matsusaka-pork', 'pork-spare-ribs', 'pork-belly-cut', 'pork-butt'] },
    { id: 'fry-cutlet', label: '日式炸豬排 / 香煎豬排', icon: 'UtensilsCrossed', desc: '金黃酥脆外皮、多汁厚切', recommendedIds: ['pork-tenderloin-cut', 'pork-loin-chop'] },
    { id: 'hotpot', label: '火鍋涮片 / 汆燙白切', icon: 'Soup', desc: '薄切快速涮煮、原汁原味', recommendedIds: ['pork-butt', 'matsusaka-pork', 'pork-jowl-cheek', 'pork-belly-cut'] },
    { id: 'stir-fry', label: '蔥爆快炒 / 青椒肉絲', icon: 'Zap', desc: '逆紋切絲切片、大火快炒', recommendedIds: ['pork-loin-chop', 'matsusaka-pork', 'pork-blade-shoulder', 'pork-ham-leg'] },
    { id: 'soup-collagen', label: '花生豬腳湯 / 排骨濃湯', icon: 'Clock', desc: '濃白高湯、膠原蛋白精華', recommendedIds: ['pork-trotters-cut', 'pork-spare-ribs', 'pork-hock-cut'] },
    { id: 'dumpling-mince', label: '水餃肉餡 / 香腸肉燥', icon: 'Layers', desc: '黃金肥瘦比加工餡料', recommendedIds: ['pork-blade-shoulder', 'pork-ham-leg', 'pork-butt'] }
  ]
};

// 豬肉常見問答 FAQ
export const PORK_FAQS_DATA = [
  {
    q: '「松阪豬」到底取自豬隻的哪一個部位？為什麼叫松阪？',
    a: '「松阪豬」並非產自日本松阪的豬品種，而是指豬隻下顎至頸部兩側的「頸頰肉（Jowl / Neck）」。因為其油花分布細密均勻如日本頂級松阪牛的霜降紋理，且口感爽脆多汁，一頭豬僅能取出約 500-600 克（俗稱黃金六兩肉），因此台灣市場冠上「松阪豬」之美名。'
  },
  {
    q: '煮焢肉、肉燥或水餃，梅花肉與胛心肉該怎麼挑？',
    a: '梅花肉位於肩胛上半部，油脂如雪花般均勻散佈於肌肉纖維間，口感極為軟嫩多汁，最適合做成叉燒、火鍋片與燒肉；胛心肉位於肩胛下半部，肉質偏瘦、纖維略粗但帶有適度筋度，極為適合絞碎作為水餃肉餡、肉燥或香腸，經濟實惠且肉香濃郁。'
  },
  {
    q: '如何挑選一塊完美的「五花三層肉」？',
    a: '高品質的五花肉應具備「五層分明」的黃金層次：最上層為富含膠質的豬皮，其下為一層乳白結實的油脂，接著是鮮紅精肉、夾層油花，底層再有一層瘦肉。挑選時以油脂潔白無黃斑、精肉色澤鮮紅不暗沉、觸摸緊實富彈性者為佳。'
  },
  {
    q: '豬肉料理只能搭配白葡萄酒嗎？',
    a: '這是常見的迷思！豬肉搭酒的黃金法則在於「料理風味與油脂厚度」，而非紅白酒二分法。例如：油脂豐富的東坡肉適合高酸微甜的 Riesling 白酒；煙燻 BBQ 烤肋排則需要果味濃厚的 Zinfandel 紅酒；細緻的炸腰內豬排搭配優雅的黑皮諾紅酒相得益彰。關鍵在於避免高單寧且粗澀的年輕紅酒即可。'
  }
];

// 受控展示資料邊界保護：全面標記 isDemo 與 isPurchasable
PORK_CUTS_DATA.forEach(cut => {
  cut.isDemo = true;
  cut.isPurchasable = false;
});

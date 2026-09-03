// 8 大美式大分切區域資料
export const PRIMAL_AREAS = [
  {
    id: 'chuck',
    name: '肩胛部',
    enName: 'Chuck',
    color: '#B84A39', // 陶土磚紅
    textColor: 'text-white',
    bgClass: 'bg-[#B84A39]',
    borderClass: 'border-[#B84A39]',
    extendedCuts: ['板腱 (Top Blade)', '翼板 (Flat Iron)', '肩胛里肌 (Chuck Tender)', '黃瓜條 (Chuck Rib)'],
    positioning: '高 CP 值、煎烤與燉煮皆宜',
    description: '牛隻前肩與頸部下方，運動量大、肌肉結實，富含結締組織，但特定細分切（如翼板、板腱）兼具極佳油花與軟嫩度。',
    recommendedCooking: ['厚切香煎', '炭火燒烤', '舒肥低溫烹調', '家常紅燒燉煮'],
    idealWine: ['Merlot', 'Malbec', 'Syrah']
  },
  {
    id: 'rib',
    name: '肋脊部',
    enName: 'Rib',
    color: '#D8963E', // 暖芥末赭黃
    textColor: 'text-charcoal',
    bgClass: 'bg-[#D8963E]',
    borderClass: 'border-[#D8963E]',
    extendedCuts: ['肋眼 (Ribeye)', '老饕牛排 (Ribeye Cap)', '帶骨牛小排 (Short Rib)', '牛肋條 (Rib Finger)', '戰斧牛排 (Tomahawk)'],
    positioning: '油花豐富、牛排與頂級燒烤主力',
    description: '背部中央前段肋骨區域，運動量極少，大理石花紋油脂分布極為均勻細緻，香氣濃厚、肉汁豐沛。',
    recommendedCooking: ['厚切鑄鐵鍋香煎', '直火炭烤', '戰斧聚餐料理', '頂級火鍋薄片'],
    idealWine: ['Cabernet Sauvignon', 'Zinfandel', 'Syrah']
  },
  {
    id: 'loin',
    name: '腰脊部',
    enName: 'Loin',
    color: '#5B705B', // 鼠尾草灰綠
    textColor: 'text-white',
    bgClass: 'bg-[#5B705B]',
    borderClass: 'border-[#5B705B]',
    extendedCuts: ['菲力 (Tenderloin)', '紐約客 (New York Strip)', '丁骨牛排 (T-Bone)', '紅屋牛排 (Porterhouse)', '沙朗 (Sirloin)'],
    positioning: '頂級經典牛排區、軟嫩之王',
    description: '牛隻後背脊骨兩側及腰椎內側，包含全牛最柔嫩的菲力與肉感濃郁的紐約客，是牛排館菜單的靈魂核心。',
    recommendedCooking: ['厚切低熟度香煎', '羅西尼牛排', '炭火炙燒', '先煎後烤'],
    idealWine: ['Pinot Noir', 'Merlot', 'Sangiovese', 'Cabernet Sauvignon']
  },
  {
    id: 'brisket',
    name: '前胸部',
    enName: 'Brisket',
    color: '#A89279', // 暖燕麥褐
    textColor: 'text-white',
    bgClass: 'bg-[#A89279]',
    borderClass: 'border-[#A89279]',
    extendedCuts: ['前胸肉 (Flat/Point Cut)', '前胸牛腩', '煙燻胸肉 (Pastrami)'],
    positioning: '美式煙燻、慢燉與紅燒首選',
    description: '牛隻兩前肢之間與前胸下側，支撐牛身重量，纖維粗壯且筋膜膠質豐富，須經長時間低溫慢煮轉化。',
    recommendedCooking: ['美式低溫柴燒煙燻 BBQ', '港式柱侯牛腩', '清燉牛肉湯', '紅燒牛肉麵'],
    idealWine: ['Shiraz', 'Petite Sirah', 'Sagrantino']
  },
  {
    id: 'plate',
    name: '胸腹部',
    enName: 'Short Plate',
    color: '#D26C42', // 珊瑚橘
    textColor: 'text-white',
    bgClass: 'bg-[#D26C42]',
    borderClass: 'border-[#D26C42]',
    extendedCuts: ['牛五花 (Short Plate)', '胸腹肉片', '裙肉 (Skirt Steak)', '牛丼薄肉片'],
    positioning: '火鍋、燒肉、壽喜燒薄切熱門',
    description: '前胸後方、肋骨下緣的腹部前段，肥瘦相間層次極為分明，油脂熔點低，炙烤或快速涮煮香氣逼人。',
    recommendedCooking: ['日式壽喜燒', '韓式烤五花', '麻辣火鍋薄片', '牛丼快炒'],
    idealWine: ['Grenache', 'Zinfandel', '乾型氣泡酒 / 粉紅香檳']
  },
  {
    id: 'flank',
    name: '腹脇部',
    enName: 'Flank',
    color: '#333A42', // 炭墨黑
    textColor: 'text-white',
    bgClass: 'bg-[#333A42]',
    borderClass: 'border-[#333A42]',
    extendedCuts: ['腹脇牛排 (Flank Steak)', '法蘭克牛排 (Bavette)', '扇面牛腩'],
    positioning: '快炒、醃烤、墨西哥法士達經典',
    description: '牛後腹靠近後腿下側，肌肉長纖維明顯、脂肪含量偏低，但牛肉香氣強烈，適合醃漬後高溫快煎並逆紋薄切。',
    recommendedCooking: ['醃漬高溫炭烤', '墨西哥 Fajitas 法士達', '蔥爆牛肉快炒', '沙拉冷肉'],
    idealWine: ['Sangiovese', 'Cabernet Franc', 'Garnacha']
  },
  {
    id: 'round',
    name: '後腿部',
    enName: 'Round',
    color: '#7C2333', // 深勃根地酒紅
    textColor: 'text-white',
    bgClass: 'bg-[#7C2333]',
    borderClass: 'border-[#7C2333]',
    extendedCuts: ['臀肉 (Rump / Top Round)', '和尚頭 (Knuckle)', '頭刀 (Inside Round)', '鯉魚管 (Eye of Round)'],
    positioning: '高蛋白低脂、快炒與英式烤牛肉',
    description: '牛隻後臀與後腿上方肌肉群，運動頻繁，肉質極瘦且緊實，適合低溫慢烤成英式冷牛肉或逆紋快炒。',
    recommendedCooking: ['英式低溫烤牛肉 (Roast Beef)', '家常逆紋快炒', '風乾牛肉乾 (Jerky)', '薄切韃靼牛肉'],
    idealWine: ['Pinot Noir', 'Carménère', 'Mourvèdre']
  },
  {
    id: 'shank',
    name: '腱子部',
    enName: 'Shank',
    color: '#6B4C38', // 雕刻深褐
    textColor: 'text-white',
    bgClass: 'bg-[#6B4C38]',
    borderClass: 'border-[#6B4C38]',
    extendedCuts: ['前腱 (Fore Shank)', '後腱 (Hind Shank)', '腱子心 (Golden Shank)', '花腱 (Shin)'],
    positioning: '台式滷味、牛肉麵與慢燉紅酒肉',
    description: '牛隻四肢小腿部位，長期承重行走，交織著大量強韌筋膜與膠原蛋白，經過長時間滷燉後膠質融化、Q彈無比。',
    recommendedCooking: ['台式滷牛腱切盤', '川味紅燒牛肉麵', '法式紅酒燉牛肉', '義式燉牛膝 (Osso Buco)'],
    idealWine: ['Sangiovese', 'Barbera', 'Côtes du Rhône (隆河丘)']
  }
];

// 12 款精選細切肉品資料庫
export const BEEF_CUTS_DATA = [
  {
    id: 'ribeye',
    name: '肋眼',
    enName: 'Ribeye Steak',
    aliases: '肉眼、沙朗 (台灣俗稱)',
    primalId: 'rib',
    primalName: '肋脊部 (Rib)',
    tagBadge: '油花豐富 · 軟嫩多汁',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 5,
      fat: 5,
      flavor: 5
    },
    locationDesc: '位於牛隻背部前段的肋脊區，沿著脊骨兩側延伸，是牛隻運動量較少的部位。',
    keywords: ['油花豐富', '肉汁飽滿', '口感軟嫩', '牛肉風味濃', '經典牛排主力'],
    cookingMethods: [
      { name: '厚切香煎', desc: '熱鍋下油，大火封住肉汁，利用融化牛脂浸潤肉體，香氣四溢。' },
      { name: '炭火燒烤', desc: '炭香與焦化外殼能放大肋眼的濃郁奶油風味。' },
      { name: '帶骨戰斧', desc: '適合宴客聚會與儀式感烘烤。' },
      { name: '火鍋壽喜燒', desc: '薄切後能迅速在湯底中釋放豐美油香。' }
    ],
    donenessTip: '建議 5 分熟 (Medium)。油脂豐厚，五分熟能讓中心油脂完全融化散發奶香，過熟則易流失水分。',
    winePairing: {
      wines: ['Cabernet Sauvignon (卡本內蘇維濃)', 'Zinfandel (金芬黛)', 'Syrah / Shiraz (希哈)'],
      rationale: '油脂極高的肋眼需要結構強勁、單寧高且帶深色莓果風味的紅酒。單寧與牛排油脂交互作用，能化解油膩並使每一口肉質更加甘甜清爽。',
      styleSummary: '高單寧 · 濃郁酒體 · 黑色水果與辛香調'
    }
  },
  {
    id: 'tenderloin',
    name: '菲力',
    enName: 'Tenderloin / Filet Mignon',
    aliases: '腰內肉、里肌肉、牛柳',
    primalId: 'loin',
    primalName: '腰脊部 (Loin)',
    tagBadge: '極致軟嫩 · 低脂細緻',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    scores: {
      tenderness: 5,
      fat: 1,
      flavor: 3
    },
    locationDesc: '位於牛隻脊椎下方、腰脊內側，是全牛運動量最低的腰內肉，肉質純淨無筋膜。',
    keywords: ['極致軟嫩', '低脂無筋', '細緻清爽', '無油膩負擔', '全牛最嫩'],
    cookingMethods: [
      { name: '厚切香煎', desc: '簡單海鹽、黑胡椒與奶油百里香淋醬，最能彰顯細緻肉質。' },
      { name: '先煎後烤', desc: '適合 3–5 公分厚切菲力，鎖住水分均勻熟化。' },
      { name: '舒肥炙燒', desc: '54°C 恆溫水浴後高溫秒炙表面，熟度精準均勻。' },
      { name: '羅西尼牛排', desc: '搭鵝肝、黑松露與紅酒波特醬汁，疊加極致層次。' }
    ],
    donenessTip: '強烈建議 3 至 5 分熟 (Medium-Rare)。因油脂少，過熟會使肌肉纖維水分流失而顯乾澀。',
    winePairing: {
      wines: ['Pinot Noir (黑皮諾)', 'Merlot (梅洛)', 'Cabernet Franc (卡本內弗朗)'],
      rationale: '瘦而細緻的菲力經不起重單寧酒款壓迫。應選擇單寧柔順、酸度明亮、帶紅色櫻桃與蕈菇香氣的黑皮諾或柔滑梅洛。',
      styleSummary: '低中單寧 · 優雅酸度 · 紅色果實與大地草本'
    }
  },
  {
    id: 'new-york-strip',
    name: '紐約客',
    enName: 'New York Strip',
    aliases: '前腰脊肉、Strip Loin、紐約克',
    primalId: 'loin',
    primalName: '腰脊部 (Loin)',
    tagBadge: '肉香濃郁 · 帶勁紮實',
    tagColor: 'bg-red-100 text-red-900 border-red-300',
    scores: {
      tenderness: 4,
      fat: 3,
      flavor: 5
    },
    locationDesc: '取自前腰脊部，與菲力同屬腰脊區，但外側有明顯運動肌肉纖維與一條標誌性白色油脂筋邊。',
    keywords: ['肉味濃郁', '油脂適中', '嚼勁爽快', '經典美式', '焦香油脂邊'],
    cookingMethods: [
      { name: '鑄鐵鍋香煎', desc: '先立起側煎脂肪邊逼出天然牛油，再煎雙面至金黃焦脆。' },
      { name: '炭火直烤', desc: '大火炭烤能將油脂邊緣烤得酥脆香濃。' },
      { name: '迷迭香蒜奶油', desc: '起鍋前加入大蒜與香草奶油淋浸，風味濃郁。' }
    ],
    donenessTip: '建議 5 分熟 (Medium)。保留微脆筋膜口感與內部多汁紅潤肉質。',
    winePairing: {
      wines: ['Cabernet Sauvignon (卡本內蘇維濃)', 'Sangiovese (桑嬌維塞)', 'Merlot (梅洛)'],
      rationale: '紐約客牛肉風味極其集中，側邊油香濃郁，搭配具備良好骨架與酸度平衡的紅酒能提升肉質的甘美。',
      styleSummary: '中高單寧 · 濃郁酒體 · 兼具果酸與結構'
    }
  },
  {
    id: 'sirloin',
    name: '沙朗 (美式後腰脊)',
    enName: 'Sirloin Steak',
    aliases: '西冷、後腰脊肉、沙朗牛排',
    primalId: 'loin',
    primalName: '腰脊部 (Loin)',
    tagBadge: '肉感紮實 · 性價比高',
    tagColor: 'bg-stone-100 text-stone-900 border-stone-300',
    scores: {
      tenderness: 3,
      fat: 2,
      flavor: 4
    },
    locationDesc: '位於牛後腰脊部（靠近後腿上方），肌肉活動量略多於前腰脊，脂肪較少、組織緊實。',
    keywords: ['肉感紮實', '低脂健康', '牛肉原香', '日常牛排', '高CP值'],
    cookingMethods: [
      { name: '高溫快煎', desc: '大火快煎鎖住肉汁，避免烹調過久導致組織變硬。' },
      { name: '烤箱炙烤', desc: '先煎後低溫悶烤，確保中心均勻受熱。' },
      { name: '醃漬炭烤', desc: '以橄欖油香草預先醃漬，軟化纖維並增添風味。' }
    ],
    donenessTip: '建議 3 至 5 分熟。避免超過 7 分熟，以保持最佳咀嚼肉感與肉汁。',
    winePairing: {
      wines: ['Tempranillo (田帕尼優)', 'Syrah (希哈)', 'Sangiovese (桑嬌維塞)'],
      rationale: '油脂適中、肉感強烈，搭配西班牙 Tempranillo 或義大利 Sangiovese 等果味充沛且酸度宜人的紅酒最為契合。',
      styleSummary: '中等酒體 · 酸度生津 · 辛香料與成熟漿果'
    }
  },
  {
    id: 'short-rib',
    name: '牛小排',
    enName: 'Short Rib',
    aliases: '帶骨牛小排、無骨牛小排',
    primalId: 'rib',
    primalName: '肋脊部 (Rib)',
    tagBadge: '大理石油花 · 焦香帶筋',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 5
    },
    locationDesc: '位於牛隻第 6 至第 8 根肋骨下側，含有均勻豐富的大理石油花與緊實筋膜。',
    keywords: ['油花濃郁', '全熟也嫩', '筋膜焦香', '燒烤霸主', '耐煎耐燉'],
    cookingMethods: [
      { name: '韓式 / 日式燒烤', desc: '直火高溫逼出大量油香，筋膜烤至焦香酥脆。' },
      { name: '厚切香煎', desc: '即便煎至 7 分甚至全熟，內部依然軟嫩多汁。' },
      { name: '紅酒慢燉', desc: '法式經典長時間慢火燉煮，骨肉分離、膠質化入濃醬。' }
    ],
    donenessTip: '牛排香煎建議 7 分熟至全熟 (Medium-Well to Well-Done)。高溫能讓豐富油花與筋膜完全焦化產生脆香。',
    winePairing: {
      wines: ['Malbec (馬爾貝克)', 'Cabernet Sauvignon (卡本內蘇維濃)', 'Syrah (希哈)'],
      rationale: '牛小排油脂極為濃烈且有焦烤筋膜，阿根廷 Malbec 的成熟深色李子果味與飽滿單寧是完美解膩良方。',
      styleSummary: '高單寧 · 濃烈果味 · 烘烤橡木與可可香'
    }
  },
  {
    id: 'top-blade',
    name: '板腱',
    enName: 'Top Blade / Oyster Blade',
    aliases: '嫩肩里肌、嫩肩牛排、牡蠣肉',
    primalId: 'chuck',
    primalName: '肩胛部 (Chuck)',
    tagBadge: '中心嫩筋 · 瘦中帶嫩',
    tagColor: 'bg-orange-100 text-orange-900 border-orange-300',
    scores: {
      tenderness: 4,
      fat: 2,
      flavor: 4
    },
    locationDesc: '位於牛肩胛骨上方的肌肉，肉質緊實結實，最顯著特徵是肉片中心貫穿一條透明嫩筋。',
    keywords: ['中心透明筋', '肉質結實', '低脂高蛋白', '高CP值牛排', '舒肥神物'],
    cookingMethods: [
      { name: '舒肥香煎', desc: '55°C 舒肥 2 小時後大火快煎，中心透明筋轉為 Q 彈滑嫩。' },
      { name: '薄切燒烤', desc: '切除或劃開中心筋膜後薄切炭烤，口感脆嫩。' },
      { name: '家常快炒', desc: '逆紋切條快速大火爆炒，肉香濃郁不柴。' }
    ],
    donenessTip: '建議 5 分熟 (Medium) 或搭配舒肥烹調。若未經舒肥，避免過熟導致中心筋膜緊縮硬化。',
    winePairing: {
      wines: ['Merlot (梅洛)', 'Malbec (馬爾貝克)', 'Rioja (里奧哈紅酒)'],
      rationale: '板腱肉質偏瘦但肉味鮮明，適合果香圓潤、單寧不過份苦澀的梅洛，平衡筋膜的彈牙嚼感。',
      styleSummary: '中度單寧 · 柔順圓潤 · 李子與黑櫻桃香'
    }
  },
  {
    id: 'flat-iron',
    name: '翼板',
    enName: 'Flat Iron Steak',
    aliases: '羽下肉、翼板牛排、肩胛無骨',
    primalId: 'chuck',
    primalName: '肩胛部 (Chuck)',
    tagBadge: '肩胛最嫩 · 油花細緻',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    scores: {
      tenderness: 4,
      fat: 4,
      flavor: 4
    },
    locationDesc: '去除板腱中心粗筋後的精修細切部位，是肩胛部中最為軟嫩、油花分布最勻稱的一塊肉。',
    keywords: ['油花細膩', '肉嫩汁多', '燒肉名品', '羽下油花', '無粗筋負擔'],
    cookingMethods: [
      { name: '香煎牛排', desc: '厚切 2-3 公分，雙面大火煎出焦香褐色脆殼。' },
      { name: '日式薄切燒肉', desc: '切成 0.4 公分燒烤片，高溫烤至雙面冒油泡。' },
      { name: '壽喜燒薄切', desc: '入口滑順，充分吸附甜鹹醬汁。' }
    ],
    donenessTip: '建議 5 分熟 (Medium)。油花細膩且無多餘硬筋，五分熟最能體會柔嫩與多汁感。',
    winePairing: {
      wines: ['Syrah (希哈)', 'Malbec (馬爾貝克)', 'GSM 混釀紅酒'],
      rationale: '油花與肉味皆屬中上水準，帶有黑胡椒與深色漿果風味的希哈能將翼板的炭焦肉香烘托得淋漓盡致。',
      styleSummary: '中高單寧 · 辛香黑胡椒 · 飽滿黑色漿果'
    }
  },
  {
    id: 'brisket-cut',
    name: '牛腩 / 前胸',
    enName: 'Beef Brisket',
    aliases: '牛胸肉、前胸肉、紅燒牛腩',
    primalId: 'brisket',
    primalName: '前胸部 (Brisket)',
    tagBadge: '膠質濃郁 · 久燉軟爛',
    tagColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    scores: {
      tenderness: 2,
      fat: 4,
      flavor: 5
    },
    locationDesc: '牛隻胸前兩前腿之間，由高運動量肌肉與厚實結締組織構成，生肉質地強韌。',
    keywords: ['肌肉纖維粗', '膠質豐富', '久煮香濃', '美式煙燻', '台式紅燒'],
    cookingMethods: [
      { name: '美式低溫煙燻', desc: '110°C 櫻桃木低溫慢燻 12-16 小時，油脂融化成入口即化軟爛。' },
      { name: '紅燒牛腩煲', desc: '炒香豆瓣醬、蔥薑蒜與八角，慢燉 2 小時至軟爛入味。' },
      { name: '清燉牛肉湯', desc: '文火慢燉萃取純淨牛脂與甘甜肉湯。' }
    ],
    donenessTip: '必須全熟慢燉或低溫長烤 (Slow & Low)。核心溫度需達到 93°C~96°C 讓膠原蛋白徹底水解。',
    winePairing: {
      wines: ['Shiraz (希哈 / 澳洲雪哈)', 'Petite Sirah (小希哈)', 'Sagrantino (薩格蘭蒂諾)'],
      rationale: '經長時間燉煮或煙燻的牛腩肉味極為濃厚且帶辛香醬汁，需搭配辛香料味重、煙燻感濃郁的大酒。',
      styleSummary: '重酒體 · 煙燻皮革香 · 辛香胡椒與黑櫻桃'
    }
  },
  {
    id: 'short-plate-cut',
    name: '牛五花',
    enName: 'Short Plate',
    aliases: '胸腹肉、肥牛片、雪花培根牛',
    primalId: 'plate',
    primalName: '胸腹部 (Short Plate)',
    tagBadge: '肥瘦相間 · 火鍋燒肉必點',
    tagColor: 'bg-orange-100 text-orange-900 border-orange-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 4
    },
    locationDesc: '位於牛胸腹部前段，肋骨下方的腹肉，脂肪與精肉層層相間，油脂比例高。',
    keywords: ['油脂層次分明', '薄切首選', '火鍋熱門', '燒肉多汁', '牛丼靈魂'],
    cookingMethods: [
      { name: '日式壽喜燒 / 牛丼', desc: '搭配洋蔥與味醂高湯薄煮，牛脂融入醬汁。' },
      { name: '麻辣火鍋涮片', desc: '滾湯中涮燙 5-8 秒即可起鍋，油脂軟嫩滑口。' },
      { name: '炙燒燒肉', desc: '大火將兩面牛脂逼出焦脆邊緣，裹蔥鹽食用。' }
    ],
    donenessTip: '薄切涮煮建議 7-8 分熟或全熟；過生則油脂無法充分化開，口感易感油膩。',
    winePairing: {
      wines: ['Grenache / Garnacha (格那希)', 'Zinfandel (金芬黛)', 'Brut Rosé (粉紅氣泡酒)'],
      rationale: '牛五花常佐以甜鹹燒肉醬或火鍋沾醬。果香甜美的 Grenache 能接住醬香；清爽高酸的乾型氣泡酒則能瞬間洗刷舌尖油脂。',
      styleSummary: '果香甜美 · 單寧柔和 或 高酸氣泡洗刷感'
    }
  },
  {
    id: 'flank-cut',
    name: '腹脇肉',
    enName: 'Flank Steak',
    aliases: '法蘭克牛排、牛側腹、扇面肉',
    primalId: 'flank',
    primalName: '腹脇部 (Flank)',
    tagBadge: '長纖維 · 快炒與醃烤名物',
    tagColor: 'bg-zinc-200 text-zinc-900 border-zinc-400',
    scores: {
      tenderness: 3,
      fat: 2,
      flavor: 5
    },
    locationDesc: '牛後腹近後腿處，肌肉長纖維極為清晰明顯，脂肪低但牛肉天然鮮味極度濃郁。',
    keywords: ['長紋理纖維', '牛肉風味濃厚', '逆紋斜切', '墨西哥烤肉', '快炒極品'],
    cookingMethods: [
      { name: '醃漬炭烤 (Fajitas)', desc: '檸檬汁、大蒜與香料醃漬後高溫炙烤，逆紋薄切捲餅。' },
      { name: '中式蔥爆快炒', desc: '逆紋切片抓醃過油，大火快炒保持軟嫩。' },
      { name: '香草青醬牛排', desc: '搭配阿根廷青醬 (Chimichurri) 提鮮去膩。' }
    ],
    donenessTip: '建議 3 至 5 分熟 (Medium-Rare)，且「務必逆著紋理（Against the Grain）斜切薄片」食用。',
    winePairing: {
      wines: ['Sangiovese (桑嬌維塞)', 'Cabernet Franc (卡本內弗朗)', 'Garnacha (格納希)'],
      rationale: '腹脇肉風味濃郁常搭配酸香香草青醬或香料快炒，Sangiovese 與 Cabernet Franc 的草本酸爽調性能完美襯托肉味。',
      styleSummary: '明亮酸度 · 草本辛香 · 活潑紅色漿果'
    }
  },
  {
    id: 'beef-shank',
    name: '牛腱',
    enName: 'Beef Shank',
    aliases: '牛腱心、金錢腱、花腱、牛小腿',
    primalId: 'shank',
    primalName: '腱子部 (Shank)',
    tagBadge: '半筋半肉 · Q彈膠質之冠',
    tagColor: 'bg-amber-200 text-amber-950 border-amber-400',
    scores: {
      tenderness: 2,
      fat: 1,
      flavor: 5
    },
    locationDesc: '牛隻四肢小腿部位，長期運動支撐全身，筋膜交錯密布，富含最高濃度的膠原蛋白。',
    keywords: ['半筋半肉', 'Q彈膠質', '久煮不爛', '牛肉麵霸主', '滷味必備'],
    cookingMethods: [
      { name: '台式醬香滷牛腱', desc: '老滷汁醬油、八角與冰糖慢燉 2 小時，浸泡一夜後冷盤切薄片。' },
      { name: '川味紅燒牛肉麵', desc: '腱子心切厚塊，豆瓣紅油慢燉至筋透肉軟。' },
      { name: '義式燉牛膝 (Osso Buco)', desc: '帶骨切厚塊，搭配白酒蔬菜濃汁慢燉。' }
    ],
    donenessTip: '必須完全慢火燉煮透徹 (Well-Done Stewed)。低火慢燉 1.5~2.5 小時使膠原蛋白完全轉化為軟 Q 明膠。',
    winePairing: {
      wines: ['Sangiovese (Chianti 奇揚地)', 'Barbera (巴貝拉)', 'Côtes du Rhône (法國隆河丘)'],
      rationale: '台式滷汁或牛肉麵的醬油、八角與中藥香氣，與法國隆河丘或義大利 Sangiovese 的香料感、明亮果酸形成絕妙共鳴。',
      styleSummary: '香料與草本 · 明快果酸 · 均衡單寧'
    }
  },
  {
    id: 'round-rump',
    name: '臀肉 / 後腿肉',
    enName: 'Rump / Top Round',
    aliases: '牛臀肉、和尚頭、頭刀、烤牛肉',
    primalId: 'round',
    primalName: '後腿部 (Round)',
    tagBadge: '高蛋白低脂 · 健人與烤牛肉首選',
    tagColor: 'bg-red-200 text-red-950 border-red-400',
    scores: {
      tenderness: 3,
      fat: 1,
      flavor: 4
    },
    locationDesc: '位於牛隻後腿與臀部上側，運動量大，脂肪含量極低，肌肉組織緊密紮實。',
    keywords: ['極低脂肪', '高蛋白質', '緊實肉感', '英式烤牛肉', '低卡健身'],
    cookingMethods: [
      { name: '英式低溫烤牛肉', desc: '整塊調味後低溫慢烤至 54°C，冷卻後極薄切片夾三明治。' },
      { name: '家常快炒肉絲', desc: '逆紋切絲快速抓水醃漬，大火快炒青椒或洋蔥。' },
      { name: '低溫自製牛肉乾', desc: '無油脂干擾，最適合風乾烘烤成香濃肉乾。' }
    ],
    donenessTip: '薄切牛排或烤牛肉建議 3 至 5 分熟 (Medium-Rare)。因幾無油脂，熟度過高會迅速變硬。',
    winePairing: {
      wines: ['Pinot Noir (黑皮諾)', 'Carménère (佳美娜)', 'Mourvèdre (慕維得爾)'],
      rationale: '低脂且肉感純粹，適合單寧中低、果香純淨的黑皮諾，或帶有些許青椒辛香草本的智利 Carménère。',
      styleSummary: '輕柔單寧 · 活潑酸度 · 優雅紅色水果'
    }
  }
];

// 餐酒搭配矩陣邏輯資料
export const WINE_PAIRING_PRINCIPLES = [
  {
    title: '原則一：油脂多寡決定單寧強度',
    subtitle: 'Fat Content Governs Tannin Structure',
    desc: '紅酒中的單寧能與肉類蛋白質與脂肪結合，軟化酒體澀感；同時單寧能洗刷舌面油脂，讓每一口牛肉都保持多汁鮮美。',
    items: [
      { meatType: '高油花肉品 (肋眼、牛小排、牛五花)', wineStyle: '高單寧、重酒體、濃郁黑色水果', examples: 'Cabernet Sauvignon、Syrah、Malbec' },
      { meatType: '中等油脂 (紐約客、沙朗、翼板)', wineStyle: '中至中高酒體、酸度與果味均衡', examples: 'Merlot、Tempranillo、Sangiovese' },
      { meatType: '低脂清瘦 (菲力、牛臀肉、板腱)', wineStyle: '單寧柔順、酸度清新、香氣細緻', examples: 'Pinot Noir、Merlot、Cabernet Franc' }
    ]
  },
  {
    title: '原則二：烹調火候與醬汁比部位更關鍵',
    subtitle: 'Cooking Method & Sauce Define Flavor Pairing',
    desc: '炭烤產生的焦香物質需要香料煙燻感的酒款；番茄紅酒燉煮需要高果酸；甜鹹醬汁則需果香甜美或氣泡解膩。',
    items: [
      { method: '原味香煎 / 奶油淋煎', wineFocus: '圓潤果香、中高結構', picks: 'Merlot、Cabernet Sauvignon' },
      { method: '炭火燒烤 / 柴燒煙燻', wineFocus: '黑胡椒、煙燻木桶香', picks: 'Syrah / Shiraz、Zinfandel、Malbec' },
      { method: '火鍋 / 壽喜燒 / 甜鹹醬', wineFocus: '果香奔放、柔順單寧或氣泡酒', picks: 'Grenache、乾型氣泡酒 (Brut Rosé)' },
      { method: '台式紅燒 / 滷汁牛肉麵', wineFocus: '辛香草本、明亮酸度', picks: 'Côtes du Rhône (隆河丘)、Sangiovese' },
      { method: '法式紅酒燉牛肉', wineFocus: '櫻桃果酸、中高酒體', picks: 'Sangiovese (Chianti)、Barbera' }
    ]
  }
];

// 選肉小工具問題資料
export const WIZARD_DATA = {
  textures: [
    { id: 'tender', label: '軟嫩無筋、入口即化', icon: 'Sparkles', desc: '追求最柔嫩細緻的口感', recommendedIds: ['tenderloin', 'ribeye', 'flat-iron'] },
    { id: 'flavorful', label: '肉香濃郁、帶嚼勁', icon: 'Flame', desc: '喜歡大口咀嚼、牛味十足', recommendedIds: ['new-york-strip', 'sirloin', 'flank-cut', 'top-blade'] },
    { id: 'fatty', label: '油花滿溢、肉汁豐沛', icon: 'Droplets', desc: '熱愛大理石油花與牛脂香氣', recommendedIds: ['ribeye', 'short-rib', 'short-plate-cut'] },
    { id: 'gelatinous', label: '半筋半肉、Q彈膠質', icon: 'Clock', desc: '熱愛耐燉煮、滿滿膠原蛋白', recommendedIds: ['beef-shank', 'brisket-cut', 'short-rib'] },
    { id: 'lean', label: '低脂高蛋白、健康清爽', icon: 'HeartPulse', desc: '健身、控卡、純淨肉質', recommendedIds: ['tenderloin', 'round-rump', 'flank-cut'] }
  ],
  cookingMethods: [
    { id: 'steak', label: '家庭牛排香煎', icon: 'UtensilsCrossed', desc: '厚切香煎、鑄鐵鍋、烤箱', recommendedIds: ['ribeye', 'tenderloin', 'new-york-strip', 'sirloin', 'flat-iron'] },
    { id: 'hotpot', label: '火鍋 / 壽喜燒', icon: 'Soup', desc: '薄切快速涮燙、鮮嫩入味', recommendedIds: ['short-plate-cut', 'ribeye', 'top-blade', 'flat-iron'] },
    { id: 'bbq', label: '日韓燒烤 / 炭烤', icon: 'Flame', desc: '直火逼出油香、焦香脆邊', recommendedIds: ['short-rib', 'short-plate-cut', 'flat-iron', 'flank-cut'] },
    { id: 'beef-noodle', label: '牛肉麵 / 滷味切盤', icon: 'Bowl', desc: '紅燒、清燉、慢滷入味', recommendedIds: ['beef-shank', 'brisket-cut', 'short-rib'] },
    { id: 'stew', label: '紅酒燉牛肉 / 慢燉煲', icon: 'CookingPot', desc: '法式紅酒燉煮、濃稠醬汁', recommendedIds: ['beef-shank', 'brisket-cut', 'short-rib', 'top-blade'] },
    { id: 'stir-fry', label: '蔥爆快炒 / 鐵板', icon: 'Zap', desc: '逆紋切條、大火快炒', recommendedIds: ['flank-cut', 'round-rump', 'top-blade'] },
    { id: 'smoked-bbq', label: '低溫煙燻 BBQ', icon: 'Wind', desc: '美式柴燒慢烤 12 小時', recommendedIds: ['brisket-cut', 'short-rib', 'flank-cut'] }
  ]
};

// 常見問答 FAQ 資料
export const FAQS_DATA = [
  {
    q: '牛腩到底是牛隻的哪一個部位？',
    a: '「牛腩」是華人飲食文化中的通俗總稱，而非美式分切體系中的單一部位。在市場上，前胸肉 (Brisket)、胸腹肉 (Plate)、腹脇肉 (Flank)，甚至去除骨頭的牛小排邊肉，都可能因位於腹部周圍或富含筋膜油脂而被泛稱為牛腩。建議在選購時確認包裝標示的標準英文部位名（如 Brisket 或 Plate），才能精準掌握肉質特性。'
  },
  {
    q: 'Brisket（前胸）和 Plate（胸腹）是一樣的嗎？',
    a: '完全不一樣！Brisket 是牛隻前肢之間的正胸前肌肉，纖維極粗、結締組織極為發達，最適合長時間慢火低溫煙燻或燉湯；Plate 則是位於前胸後方、肋骨下緣的胸腹部（牛五花產地），油脂層次分明且熔點低，最適合切成薄片用於火鍋、日式牛丼或燒烤。'
  },
  {
    q: '台灣市場常說的「沙朗」，為什麼有時候吃起來像肋眼？',
    a: '這是跨語系與早期引進造成的命名混淆。在台灣傳統餐飲習慣中，「沙朗」常被用來代指帶有豐富油花與中心油脂塊的「肋眼 (Ribeye)」；但在美式標準分切中，Sirloin（沙朗/後腰脊）位於後腰部，肉質偏瘦結實，油花遠少於肋脊部的 Ribeye。選購時認明英文名 Ribeye（油花豐富）或 Sirloin（肉感結實）最不易出錯。'
  },
  {
    q: '吃牛排是不是一定要搭配紅葡萄酒？',
    a: '不一定！紅酒的單寧與深色水果香氣確實是紅肉油脂的經典解法，但並非唯一解答。例如：帶有奶油烤桶香氣與高酸度的桶陳 Chardonnay（白酒），非常適合搭配油花豐厚的厚切肋眼；清爽酸香的香檳或乾型氣泡酒（Brut Champagne），能極佳地洗刷牛五花或燒烤牛小排的油膩感；而青草香氣鮮明的白蘇維濃 (Sauvignon Blanc) 則與搭配阿根廷青醬 (Chimichurri) 的腹脇牛排相得益彰。'
  }
];

// 9 類通用魚體解剖與食用部位分類資料
export const FISH_PRIMAL_AREAS = [
  {
    id: 'fish-head',
    name: '魚頭部',
    enName: 'Fish Head',
    color: '#D8963E', // 暖芥末赭黃
    textColor: 'text-charcoal',
    extendedCuts: ['虱目魚頭', '石斑魚頭塊', '鮭魚頭', '鰱魚大頭'],
    positioning: '臉頰膠質、骨邊鮮肉與砂鍋精華',
    description: '包含魚鰓蓋肉、臉頰肉、眼窩膠質與頭骨軟骨，富含極高膠原蛋白與天然鮮味肌苷酸，慢熬後湯頭乳白醇厚。',
    recommendedCooking: ['台式砂鍋魚頭煲', '日式味噌豆腐魚頭湯', '蔥薑紅燒魚頭', '鹽烤魚頭'],
    idealWine: ['Junmai Sake (純米清酒)', 'Unoaked Chardonnay (未過桶夏多內)', '高酸乾型白酒']
  },
  {
    id: 'fish-collar',
    name: '魚下巴 (琵琶骨)',
    enName: 'Fish Collar / Kama',
    color: '#B84A39', // 陶土磚紅
    textColor: 'text-white',
    extendedCuts: ['青魽/鰤魚下巴', '鮭魚下巴', '台灣鯛下巴', '海鱺下巴'],
    positioning: '肉厚油潤、居酒屋鹽烤必點',
    description: '位於鰓蓋後方與胸鰭根部交界處的三角形肉塊，活動量大且油脂儲量豐富，肉質極為滑嫩有彈性、外皮焦脆多汁。',
    recommendedCooking: ['居酒屋椒鹽炭烤', '氣炸香酥魚下巴', '西京漬白味噌烤', '照燒香煎'],
    idealWine: ['Brut 氣泡酒 (Champagne / Cava)', 'Sauvignon Blanc (白蘇維濃)', '辛口本釀造清酒']
  },
  {
    id: 'fish-dorsal',
    name: '背肉 / 背脊肉',
    enName: 'Dorsal / Back Meat',
    color: '#5B705B', // 鼠尾草灰綠
    textColor: 'text-white',
    extendedCuts: ['午仔魚背肉', '金目鱸背肉排', '白鯧背肉', '土魠魚排'],
    positioning: '肌理精實、肉味純淨厚實',
    description: '位於魚體側線上方、背部脊骨兩側，運動量充沛，肉質緊實成片狀、幾無暗刺，適合清蒸、香煎與切片煮湯。',
    recommendedCooking: ['古法樹子清蒸', '香煎椒鹽魚排', '薑絲鮮魚清湯', '義式香草紙包烤'],
    idealWine: ['Pinot Grigio (灰皮諾)', 'Albariño (阿爾巴利諾)', 'Chablis (夏布利白酒)', '甲州白酒 (Koshu)']
  },
  {
    id: 'fish-belly',
    name: '腹肉 / 魚肚 (Toro)',
    enName: 'Fish Belly / Toro',
    color: '#D26C42', // 珊瑚橘
    textColor: 'text-white',
    extendedCuts: ['黑鮪魚大腹/中腹', '無刺虱目魚肚', '鮭魚腹肉刺身', '青魽魚肚'],
    positioning: '油脂之冠、生食刺身與香煎魚肚靈魂',
    description: '側線下方至腹腔周圍，富含大量天然 Omega-3 不飽和脂肪酸，油脂熔點低，炙烤或生食入口即化、脂香濃郁。',
    recommendedCooking: ['頂級生魚片刺身', '無油乾煎虱目魚肚', '炙燒握壽司', '味噌香煎'],
    idealWine: ['桶陳 Chardonnay', 'Brut Rosé 香檳 (粉紅氣泡酒)', '純米大吟釀', '微甜 Riesling']
  },
  {
    id: 'fish-loin',
    name: '魚柳 / 菲力',
    enName: 'Fish Loin / Tenderloin Fillet',
    color: '#333A42', // 炭墨黑
    textColor: 'text-white',
    extendedCuts: ['虱目魚柳 (魚菲力)', '鮭魚菲力排', '台灣鯛清肉片', '鱸魚菲力'],
    positioning: '無刺極嫩、家庭與西餐萬用魚排',
    description: '去骨去刺後取出的整條主肌肉，質地最為細嫩無負擔，適合老人小孩與健身族群快炒、香煎或酥炸。',
    recommendedCooking: ['奶油香煎魚柳', '日式酥炸魚柳條', '蔥爆魚柳快炒', '低溫舒肥魚排'],
    idealWine: ['Sauvignon Blanc', 'Pinot Noir (黑皮諾)', '未過桶白酒']
  },
  {
    id: 'fish-tail',
    name: '尾段 / 尾肉',
    enName: 'Fish Tail',
    color: '#7C2333', // 深勃根地酒紅
    textColor: 'text-white',
    extendedCuts: ['白帶魚尾段', '土魠魚尾', '紅燒魚尾塊'],
    positioning: '肉質緊實彈牙、家常紅燒首選',
    description: '魚隻推進游動的主力部位，脂肪含量較低但肌肉纖維極為緊實耐煮，適合以濃厚醬汁紅燒或裹粉乾煎。',
    recommendedCooking: ['家常豆瓣紅燒魚尾', '香煎椒鹽白帶魚段', '切塊燉湯'],
    idealWine: ['輕盈 Pinot Noir', 'Vinho Verde (綠酒)', 'Dry Rosé (粉紅酒)']
  },
  {
    id: 'fish-skin',
    name: '魚皮 / 皮油',
    enName: 'Fish Skin',
    color: '#A89279', // 暖燕麥褐
    textColor: 'text-white',
    extendedCuts: ['無刺虱目魚皮', '涼拌石斑魚皮', '脆炸鮭魚皮'],
    positioning: '膠質Q彈、汆燙涼拌與酥炸極品',
    description: '表皮與緊連的皮下脂肪層，富含膠原蛋白與天然明膠，汆燙滑溜 Q 彈、高溫酥炸則如薯片般酥脆。',
    recommendedCooking: ['汆燙佐芥末醬油膏', '薑絲魚皮湯', '泰式涼拌魚皮', '酥炸鹹蛋黃魚皮'],
    idealWine: ['Brut 氣泡酒', '乾型白酒 (Dry Riesling)', '冰鎮吟釀清酒']
  },
  {
    id: 'fish-bone',
    name: '魚骨 / 魚嶺',
    enName: 'Fish Bone / Ridge',
    color: '#6B4C38', // 雕刻深褐
    textColor: 'text-white',
    extendedCuts: ['香煎虱目魚嶺', '海鮮魚骨高湯包', '酥炸魚骨酥'],
    positioning: '骨邊焦香與天然海味高湯精華',
    description: '包含魚脊椎骨、背鰭骨肉（魚嶺）與骨髓，煎炸後骨酥肉香下酒一絕；熬湯則能釋放極致天然海鮮甜味。',
    recommendedCooking: ['乾煎椒鹽虱目魚嶺', '法式海鮮魚高湯 (Fumet)', '酥炸魚骨酥'],
    idealWine: ['清爽白酒 (Muscadet)', '拉格啤酒 (Lager)', '辛口清酒']
  },
  {
    id: 'fish-offal',
    name: '內臟 / 魚卵 / 白子',
    enName: 'Offal, Roe & Milt',
    color: '#C58C36', // 琥珀金棕
    textColor: 'text-white',
    extendedCuts: ['野生烏魚子', '煎虱目魚腸', '烏魚膘 (白子)', '香煎魚卵'],
    positioning: '老饕珍味、濃郁鹹鮮下酒霸主',
    description: '包含魚卵巢（烏魚子）、魚腸、魚膘與魚肝，風味濃烈、鮮味極度濃縮，是台菜與居酒屋的老饕級食材。',
    recommendedCooking: ['高粱酒炙燒烏魚子', '九層塔薑絲快炒魚腸', '麻油紅燒烏魚膘', '乾煎魚卵佐美乃滋'],
    idealWine: ['Champagne (香檳)', 'Fino Sherry (雪莉酒)', '純米清酒 (Junmai Sake)']
  }
];

// 台灣常見 12 款精選魚種與部位規格資料庫
export const FISH_CUTS_DATA = [
  {
    id: 'milkfish-belly-cut',
    name: '無刺虱目魚肚',
    enName: 'Milkfish Belly',
    aliases: '牛奶魚肚、麻豆虱目魚肚、台南特產魚肚',
    primalId: 'fish-belly',
    primalName: '腹肉 / 魚肚 (Belly)',
    tagBadge: '黑色甘醇魚油 · 全魚利用典範',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 5
    },
    locationDesc: '取自虱目魚腹腔兩側，中央包覆一塊豐厚甘甜的深色不飽和脂肪層，無細刺且香氣濃郁。',
    keywords: ['台南名產', '無刺處理', '黑色魚油精華', '無油乾煎', '薑絲魚肚湯'],
    cookingMethods: [
      { name: '乾煎香脆魚肚', desc: '不放油冷鍋下鍋，逼出天然魚油煎至雙面焦黃酥脆，撒椒鹽白胡椒。' },
      { name: '台南薑絲魚肚湯', desc: '魚肚與老薑絲、米酒大火煮滾 3 分鐘，湯頭鮮甜回甘。' },
      { name: '古早味鳳梨豆醬煨煮', desc: '蔭鳳梨豆醬文火燜煮入味，鹹甘開胃。' }
    ],
    donenessTip: '乾煎時皮面先下，大火逼出魚油至微焦脆；煮湯則滾水快燙避免魚油融散。',
    winePairing: {
      wines: ['Dry Riesling (乾型麗絲玲)', 'Albariño (阿爾巴利諾)', 'Chardonnay (夏多內)'],
      rationale: '虱目魚肚天然油脂極為豐沛，西班牙 Albariño 或乾型 Riesling 的高酸度與鹹鮮礦物感能俐落切除油膩感。',
      styleSummary: '明亮核果酸度 · 鹹鮮礦物感 · 生津洗油'
    }
  },
  {
    id: 'threadfin-steak',
    name: '午仔魚 (一夜干 / 鮮切排)',
    enName: 'Fourfinger Threadfin',
    aliases: '午仔、竹午、台灣第一鮮',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: '少刺多脂 · 台灣全能冠軍魚',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    scores: {
      tenderness: 5,
      fat: 4,
      flavor: 5
    },
    locationDesc: '民間俗語「一午、二紅衫、三鯧、四馬加」，午仔魚肉質極致細嫩、油脂均勻且幾無暗刺，是台灣家庭全能魚代表。',
    keywords: ['一午二鯧', '少刺好入口', '一夜干名品', '清蒸乾煎皆宜', '全家最愛'],
    cookingMethods: [
      { name: '居酒屋午仔魚一夜干', desc: '鹽水浸漬風乾後直火烤至表皮焦脆冒油泡，擠檸檬汁。' },
      { name: '破布子甘樹子清蒸', desc: '大火快蒸 6 分鐘，肉質細嫩如豆腐、甘甜回味。' },
      { name: '乾煎椒鹽香酥魚排', desc: '雙面煎至金黃，鎖住飽滿細緻魚脂。' }
    ],
    donenessTip: '肉質極嫩且含水量高，清蒸時間不宜超過 6-8 分鐘；煎烤時中火慢煎避免翻碎。',
    winePairing: {
      wines: ['Albariño (阿爾巴利諾)', '未過桶 Chardonnay', '純米吟釀清酒'],
      rationale: '午仔魚兼具細緻肉質與滑順脂香，搭配帶有白桃香氣與明亮酸度的 Albariño 或冷藏純米吟釀，相得益彰。',
      styleSummary: '柑橘白桃果香 · 清新酸度 · 圓潤優雅'
    }
  },
  {
    id: 'milkfish-loin-cut',
    name: '虱目魚柳 (魚菲力)',
    enName: 'Milkfish Tenderloin Fillet',
    aliases: '魚里肌、無刺魚柳條、虱目魚菲力',
    primalId: 'fish-loin',
    primalName: '魚柳 / 菲力 (Loin Fillet)',
    tagBadge: '少刺極嫩 · 高蛋白家常首選',
    tagColor: 'bg-stone-100 text-stone-900 border-stone-300',
    scores: {
      tenderness: 5,
      fat: 2,
      flavor: 4
    },
    locationDesc: '取自虱目魚脊椎兩側的兩條精華清肉（一尾魚僅有兩條），完全無刺、肉質軟嫩多汁。',
    keywords: ['無刺魚柳', '高蛋白健身', '老人小孩最愛', '快炒炸魚柳', '全魚利用'],
    cookingMethods: [
      { name: '酥炸椒鹽魚柳條', desc: '抓醃米酒白胡椒，裹地瓜粉炸至金黃酥脆，撒九層塔。' },
      { name: '蔥爆黑胡椒魚柳', desc: '大火熱油快速爆炒洋蔥、蔥段與黑胡椒醬，鮮嫩下飯。' }
    ],
    donenessTip: '肉質極嫩，快炒或酥炸時間約 2-3 分鐘即可，避免過度加熱導致水分流失。',
    winePairing: {
      wines: ['Sauvignon Blanc (白蘇維濃)', 'Pinot Grigio (灰皮諾)', '拉格啤酒'],
      rationale: '炸魚柳或快炒調味靈活，紐西蘭 Sauvignon Blanc 的青檸酸香與百香果風味能完美解膩提鮮。',
      styleSummary: '青檸酸爽 · 熱帶果香 · 俐落明快'
    }
  },
  {
    id: 'barramundi-fillet',
    name: '金目鱸 / 七星鱸魚排',
    enName: 'Barramundi / Sea Bass Fillet',
    aliases: '鱸魚菲力、金目鱸排、養生鱸魚',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: '肉質潔白細緻 · 滋補養生首選',
    tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
    scores: {
      tenderness: 4,
      fat: 2,
      flavor: 3
    },
    locationDesc: '鱸魚背脊厚實清肉，肉質純白細嫩呈瓣狀，無暗刺且脂肪適中，是術後調養與日常滋補的國民好魚。',
    keywords: ['養生鱸魚湯', '白肉魚經典', '無腥味好吸收', '義式香草紙包', '萬用魚排'],
    cookingMethods: [
      { name: '薑絲清燉鱸魚湯', desc: '鱸魚片與老薑絲、米酒、蛤蜊文火燉煮，湯頭鮮甘滋補。' },
      { name: '義式紙包海鮮烤', desc: '搭配小番茄、黑橄欖、白酒與九層塔紙包烘烤，原汁全保留。' }
    ],
    donenessTip: '肉質纖細，香煎或清蒸時間需精準掌控，魚肉由半透明轉為純白即可起鍋。',
    winePairing: {
      wines: ['Pinot Grigio (灰皮諾)', 'Sauvignon Blanc', 'Muscadet (慕斯卡得)'],
      rationale: '清爽細緻的鱸魚最適合酒體輕盈、酸度清新明亮的義大利灰皮諾或法國羅亞爾河白酒。',
      styleSummary: '青蘋果與檸檬 · 輕盈純淨 · 爽口優雅'
    }
  },
  {
    id: 'tuna-otoro-cut',
    name: '黑鮪魚大腹 / 赤身',
    enName: 'Bluefin Tuna Otoro & Akami',
    aliases: '東港黑鮪、Toro、刺身極品、黑金',
    primalId: 'fish-belly',
    primalName: '腹肉 / 魚肚 (Belly)',
    tagBadge: '入口即化 · 刺身殿堂級',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    scores: {
      tenderness: 5,
      fat: 5,
      flavor: 5
    },
    locationDesc: '取自屏東東港野生黑鮪魚前腹部，油脂高達 35%~40%，雪花油紋細密，入口如冰淇淋般瞬間融化。',
    keywords: ['東港黑鮪季', '入口即化', '雪花油紋', '極致鮮甜', '炙燒握壽司'],
    cookingMethods: [
      { name: '頂級刺身厚切', desc: '冰鎮後厚切，佐現磨山葵與薄鹽生抽，油脂在舌尖瞬間融化。' },
      { name: '炙燒握壽司', desc: '噴槍高溫秒炙表面逼出焦香魚脂，佐特製醬油。' }
    ],
    donenessTip: '極度推薦生食或微炙表面。高溫全熟會破壞其如冰淇淋般的細膩油花質地。',
    winePairing: {
      wines: ['純米大吟釀 (Junmai Daiginjo)', 'Vintage Champagne (年份香檳)', 'Pinot Noir (黑皮諾)'],
      rationale: '高油脂的黑鮪魚大腹與年份香檳的高酸氣泡是絕配；搭配精米步合高的純米大吟釀更能帶出極致清甜旨味。',
      styleSummary: '純淨旨味 · 精緻果香 · 細膩氣泡'
    }
  },
  {
    id: 'amberjack-collar',
    name: '青魽 / 海鱺魚下巴',
    enName: 'Amberjack / Cobia Collar (Kama)',
    aliases: '鰤魚下巴、青甘下巴、海鱺下巴',
    primalId: 'fish-collar',
    primalName: '魚下巴 (Collar / Kama)',
    tagBadge: '皮焦肉嫩 · 居酒屋炭烤霸主',
    tagColor: 'bg-red-100 text-red-900 border-red-300',
    scores: {
      tenderness: 5,
      fat: 5,
      flavor: 5
    },
    locationDesc: '位於鰓蓋下方連接胸鰭的運動肌塊，外有厚實魚鱗皮，內有最飽滿滑嫩的運動油脂肉。',
    keywords: ['居酒屋必點', '外酥內嫩多汁', '椒鹽香烤', '下酒神物', '油脂大爆發'],
    cookingMethods: [
      { name: '日式炭火椒鹽烤', desc: '均勻抹鹽擦乾，烤箱 180°C 烤 20 分鐘後翻面 200°C 烤至表皮焦脆冒泡。' },
      { name: '西京漬白味噌烤', desc: '以白味噌、味醂清酒醃漬兩天後慢火烘烤，甜鹹香濃。' }
    ],
    donenessTip: '務必烤至外皮酥脆焦香，高溫能逼出多餘油脂，使內部肉質多汁而不膩口。',
    winePairing: {
      wines: ['辛口本釀造清酒 (Dry Sake)', 'Sauvignon Blanc', 'Brut Cava 氣泡酒'],
      rationale: '焦香爆汁的魚下巴，需要高酸度果香或辛口俐落的日本清酒，瞬間洗刷油脂並重啟味蕾。',
      styleSummary: '辛口俐落 · 芭樂百香果酸香 · 乾爽氣泡'
    }
  },
  {
    id: 'grouper-fillet',
    name: '龍虎斑清肉排',
    enName: 'Dragon Tiger Grouper Fillet',
    aliases: '珍珠石斑排、龍膽石斑清肉、帶皮斑魚排',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: '皮Q肉細 · 頂級宴客海味',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    scores: {
      tenderness: 4,
      fat: 2,
      flavor: 5
    },
    locationDesc: '結合龍膽石斑膠質厚皮與老虎斑細緻肉質的台灣優質養殖石斑，魚皮膠質厚彈、肉質純淨無腥味。',
    keywords: ['膠質厚皮', '清蒸首選', '肉質Q彈', '無暗刺', '國宴大菜'],
    cookingMethods: [
      { name: '古法樹子清蒸', desc: '搭配破布子、蔥絲、薑絲與純釀醬油大火快蒸 7 分鐘，淋上滾熱香油。' },
      { name: '香煎脆皮魚排', desc: '擦乾水分大火煎至魚皮金黃酥脆如餅乾，肉質依然飽滿水嫩。' }
    ],
    donenessTip: '大火蒸至魚眼凸出、筷子能輕鬆插透背肉最厚處即可出鍋，避免過蒸導致肉質收縮。',
    winePairing: {
      wines: ['Chablis (夏布利白酒)', 'Sauvignon Blanc (白蘇維濃)', '純米吟釀'],
      rationale: '石斑魚肉質清甜且皮 Q，法國夏布利的礦物感與清新柑橘果酸，能將魚肉的鮮甜昇華至最高境界。',
      styleSummary: '純淨礦石感 · 鮮爽檸檬酸度 · 優雅俐落'
    }
  },
  {
    id: 'pomfret-steak',
    name: '白鯧魚 (全魚 / 鮮切排)',
    enName: 'Silver Pomfret',
    aliases: '正白鯧、鯧魚、年節大菜',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: '肉質極細 · 年節團圓清蒸首選',
    tagColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    scores: {
      tenderness: 5,
      fat: 3,
      flavor: 4
    },
    locationDesc: '野生捕撈之頂級海魚，體型側扁，肉質極度細緻如絲、鮮甜無小刺，是年節團圓的代表海味。',
    keywords: ['三鯧美名', '年菜主角', '刺少肉細', '清蒸乾煎米粉湯', '高貴鮮美'],
    cookingMethods: [
      { name: '清蒸蔥油白鯧', desc: '兩面劃刀，鋪薑絲大火蒸 7 分鐘，撒大量蔥絲淋滾油醬汁。' },
      { name: '鯧魚芋頭米粉湯', desc: '鯧魚煎香後與炸芋頭、蛋酥、紅蔥頭同熬米粉高湯，鮮美濃郁。' }
    ],
    donenessTip: '肉質極為嬌嫩，清蒸時間切忌過長，魚肉由透明變白即可出鍋。',
    winePairing: {
      wines: ['Grüner Veltliner (綠維特利納)', 'Chablis (夏布利)', '吟釀清酒'],
      rationale: '白鯧細緻甘甜的肉質經不起厚重酒體壓迫，奧地利 Grüner Veltliner 的白胡椒與青蘋果香氣最為和諧。',
      styleSummary: '白胡椒辛香 · 脆爽酸度 · 細緻礦物感'
    }
  },
  {
    id: 'spanish-mackerel',
    name: '澎湖野生土魠魚排',
    enName: 'Spanish Mackerel Steak',
    aliases: '土魠魚、馬加魚、土魠魚排、土魠魚羹',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: '肉質紮實 · 冬令油脂香濃',
    tagColor: 'bg-amber-200 text-amber-950 border-amber-400',
    scores: {
      tenderness: 3,
      fat: 3,
      flavor: 5
    },
    locationDesc: '澎湖冬季當令迴游魚類，肉質緊實彈牙、無小暗刺，油脂香氣濃烈，是台式經典魚羹與乾煎主力。',
    keywords: ['土魠魚羹', '澎湖野生海味', '冬令油美', '香煎焦香', '肉感十足'],
    cookingMethods: [
      { name: '古早味乾煎土魠魚排', desc: '厚切輪切片抹薄鹽，大火煎至雙面焦香酥黃，擠檸檬椒鹽。' },
      { name: '台式酥炸土魠魚羹塊', desc: '醃漬地瓜粉酥炸，泡入扁魚大白菜羹湯中。' }
    ],
    donenessTip: '土魠魚肉質結實，厚切香煎時中小火慢煎熟透，外皮酥脆內部肉香集中。',
    winePairing: {
      wines: ['Sauvignon Blanc', 'Dry Riesling', '冰鎮純米酒'],
      rationale: '土魠魚風味濃郁且具深海油脂感，紐西蘭 Sauvignon Blanc 的草本與百香果酸香能完美襯托魚香。',
      styleSummary: '草本百香果 · 高酸洗油 · 明快清爽'
    }
  },
  {
    id: 'salmon-fillet-cut',
    name: '挪威鮭魚菲力排',
    enName: 'Atlantic Salmon Fillet',
    aliases: '三文魚柳、厚切鮭魚菲力、鮭魚排',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: 'Omega-3 豐富 · 香煎外酥內嫩',
    tagColor: 'bg-orange-100 text-orange-900 border-orange-300',
    scores: {
      tenderness: 5,
      fat: 4,
      flavor: 5
    },
    locationDesc: '取自大西洋鮭魚背脊厚實中段，色澤橙紅鮮亮，油脂細密均勻分佈於肌理間。',
    keywords: ['Omega-3', '奶油香煎', '刺少肉厚', '生熟皆宜', '餐桌常勝軍'],
    cookingMethods: [
      { name: '脆皮奶油香煎', desc: '魚皮朝下大火煎至酥脆，淋入大蒜檸檬百里香奶油，內裡保持粉嫩。' },
      { name: '日式照燒', desc: '醬油味醂清酒黃金比例，慢火收汁至魚肉裹上一層晶亮甘甜。' }
    ],
    donenessTip: '建議中心保持 50°C~52°C（約 7-8 分熟），肉質最為細嫩多汁，過熟容易滲出白色蛋白質變乾。',
    winePairing: {
      wines: ['桶陳 Chardonnay (夏多內)', 'Pinot Noir (黑皮諾)', 'Brut Rosé Champagne'],
      rationale: '鮭魚豐富的天然魚油與濃郁風味，能完美承接帶有香草橡木桶奶油香的 Chardonnay；或搭配輕盈細緻的紅酒黑皮諾。',
      styleSummary: '烤橡木奶油香 · 圓潤酒體 · 活潑果酸'
    }
  },
  {
    id: 'mackerel-fillet',
    name: '鯖魚 / 竹筴魚 (一夜干 / 切片)',
    enName: 'Mackerel / Horse Mackerel Fillet',
    aliases: '挪威鯖魚、花飛、日式鹽烤鯖魚',
    primalId: 'fish-dorsal',
    primalName: '背肉 / 背脊肉 (Dorsal)',
    tagBadge: '深海濃郁魚油 · 鹽烤下飯神器',
    tagColor: 'bg-zinc-200 text-zinc-900 border-zinc-400',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 5
    },
    locationDesc: '冷水深海青皮魚類，魚油含量極高且肉味強烈濃郁，富含 DHA 與 EPA，鹽烤與醋漬極佳。',
    keywords: ['鹽烤鯖魚', '深海魚油', '強風味魚種', '便當人氣王', '醋漬鯖魚'],
    cookingMethods: [
      { name: '日式鹽烤鯖魚一夜干', desc: '烤箱 200°C 烤 12-15 分鐘至魚皮滋滋爆油焦脆，淋檸檬汁。' },
      { name: '日式醋漬鯖魚 (Shimesaba)', desc: '鹽醃脫水後以米醋醃漬，切薄片佐山葵。' }
    ],
    donenessTip: '鹽烤時皮朝上，以高溫快速烤出脆皮並逼出多餘油脂。',
    winePairing: {
      wines: ['Vinho Verde (綠酒)', 'Txakoli (查科麗白酒)', '辛口本釀造清酒'],
      rationale: '鯖魚魚油濃郁且帶強烈魚味，西班牙 Txakoli 或葡萄牙綠酒的超高酸度與微氣泡能徹底清潔口腔。',
      styleSummary: '超高酸度微氣泡 · 柑橘青檸 · 強效去油'
    }
  },
  {
    id: 'mullet-bottarga',
    name: '野生烏魚子',
    enName: 'Taiwan Bottarga / Mullet Roe',
    aliases: '烏金、台灣烏魚子、炙燒烏魚子',
    primalId: 'fish-offal',
    primalName: '內臟 / 魚卵 (Offal & Roe)',
    tagBadge: '台灣烏金 · 濃縮極致鮮鹹醇香',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 5
    },
    locationDesc: '冬至前後捕撈之母烏魚卵巢，經鹽漬、壓制與九降風日光曝曬而成，色澤澄黃剔透，油脂香氣濃縮。',
    keywords: ['年節頂級伴手禮', '炙燒高粱酒香', '濃稠黏牙', '佐蒜苗水梨', '烏金美譽'],
    cookingMethods: [
      { name: '高粱酒炙燒切片', desc: '淋 58 度高粱酒點火炙烤至表面微起細泡，切厚片夾蒜苗與水梨片。' },
      { name: '烏魚子海鮮炒飯', desc: '切碎粒大火快炒蛋炒飯，粒粒金黃噴香。' }
    ],
    donenessTip: '切忌烤過熟變乾硬！炙烤至表面微焦、中心依然保持溏心黏牙口感為最高境界。',
    winePairing: {
      wines: ['Champagne / Cava (氣泡酒)', 'Fino Sherry (雪莉酒)', '台灣高粱酒 / 純米酒'],
      rationale: '烏魚子鹹鮮濃醇且黏牙，香檳的細緻氣泡能迅速解膩；西班牙 Fino 雪莉酒的堅果鹽感更是世界級餐酒共鳴。',
      styleSummary: '堅果酵母香 · 細緻高酸氣泡 · 完美鹹甜共振'
    }
  }
];

// 魚類海鮮餐酒搭配科學原則（5 大風味課題與 4 大魚肉質地分類）
export const FISH_WINE_PRINCIPLES = [
  {
    title: '原則一：魚油多寡與鮮味強度決定酸度與酒體',
    subtitle: 'Fat Content & Umami Strength Dictate Wine Acidity & Body',
    desc: '海鮮搭酒最忌諱高單寧厚重紅酒（單寧與鐵離子會催化魚油氧化產生金屬鐵鏽魚腥味）。細緻白肉魚配冷冽高酸白酒（Chablis / Pinot Grigio）；高油脂魚類（鮭魚、鮪魚大腹、鯖魚）則需桶陳 Chardonnay、粉紅香檳或純米大吟釀切除油膩。',
    items: [
      { meatType: '細緻白肉型 (午仔魚、鱸魚、白鯧、石斑)', wineStyle: '純淨礦石感、明亮柑橘果酸、吟釀清酒', examples: 'Chablis (夏布利)、Sauvignon Blanc、Albariño、純米吟釀' },
      { meatType: '油脂豐富型 (鮭魚、黑鮪大腹、青魽下巴、虱目魚肚)', wineStyle: '桶陳圓潤、高酸年份香檳、辛口清酒', examples: 'Oaked Chardonnay、Brut Rosé Champagne、純米大吟釀' },
      { meatType: '風味鮮明型 (鯖魚、土魠魚、竹筴魚)', wineStyle: '超高酸度、微氣泡或冷藏輕紅酒', examples: 'Vinho Verde (綠酒)、Txakoli、輕盈 Pinot Noir' },
      { meatType: '濃縮海味珍味 (野生烏魚子、魚頭砂鍋)', wineStyle: '氣泡洗刷感、雪莉酒堅果香或純米酒旨味', examples: 'Champagne、Fino Sherry、純米清酒 (Junmai Sake)' }
    ]
  },
  {
    title: '原則二：清蒸檸檬佐高酸白酒，醬燒照燒佐輕紅酒或清酒',
    subtitle: 'Cooking Method & Sauce Dictate Flavor Pairing',
    desc: '烹調技法與醬汁大幅改變搭酒方向。清蒸以破布子蔥薑提鮮，需搭配礦物感白酒；日式照燒、蒲燒或紅燒帶甜鹹醬香，需以微甜 Riesling、清酒或低單寧黑皮諾相呼應。',
    items: [
      { method: '原味清蒸 / 樹子蔥油', wineFocus: '冷冽礦石感、生津檸檬酸度', picks: 'Chablis、Albariño、甲州白酒 (Koshu)' },
      { method: '脆皮奶油香煎 / 西式紙包烤', wineFocus: '烤青蘋果、適度乳酸圓潤感', picks: '未過桶 Chardonnay、Pinot Grigio' },
      { method: '日式居酒屋鹽烤 / 氣炸魚下巴', wineFocus: '辛口俐落、芭樂熱帶果酸、氣泡去油', picks: '辛口本釀造清酒、Sauvignon Blanc、Brut Cava' },
      { method: '日式照燒 / 蒲燒 / 紅燒醬汁', wineFocus: '微甜果香、柔和單寧或米香旨味', picks: 'Off-dry Riesling、Pinot Noir (黑皮諾)、純米清酒' },
      { method: '生食刺身 / 炙燒握壽司', wineFocus: '細膩微氣泡、極致純淨純米旨味', picks: 'Blanc de Blancs 香檳、純米大吟釀' }
    ]
  }
];

// 魚類選魚助手問答資料（涵蓋刺量、魚肉質地、料理方式與搭酒）
export const FISH_WIZARD_DATA = {
  textures: [
    { id: 'boneless-tender', label: '少刺好入口、全家安心吃', icon: 'Sparkles', desc: '幾無暗刺、肉質軟嫩，老人小孩最愛', recommendedIds: ['threadfin-steak', 'milkfish-loin-cut', 'barramundi-fillet', 'salmon-fillet-cut'] },
    { id: 'tender-steam', label: '細嫩清爽、想清蒸煮湯', icon: 'Soup', desc: '追求純淨清甜、如豆腐般細嫩瓣狀肉質', recommendedIds: ['pomfret-steak', 'grouper-fillet', 'barramundi-fillet', 'threadfin-steak'] },
    { id: 'fatty-sear', label: '油脂豐富、想香煎或炭烤', icon: 'Droplets', desc: '熱愛豐富 Omega-3 魚油與金黃焦脆外皮', recommendedIds: ['milkfish-belly-cut', 'amberjack-collar', 'salmon-fillet-cut', 'mackerel-fillet'] },
    { id: 'firm-meaty', label: '肉質結實、想吃魚排或紅燒', icon: 'HeartPulse', desc: '肉感厚實、大口咀嚼無暗刺負擔', recommendedIds: ['spanish-mackerel', 'grouper-fillet', 'salmon-fillet-cut'] },
    { id: 'sashimi-raw', label: '生生魚片刺身 / 炙燒握壽司', icon: 'Sparkles', desc: '極致鮮甜、冰鎮厚切入口即化', recommendedIds: ['tuna-otoro-cut', 'salmon-fillet-cut'] },
    { id: 'offal-collagen', label: '老饕挑戰：下巴、魚皮、烏魚子', icon: 'Flame', desc: '追求極致膠質、濃郁鹹鮮與老饕珍味', recommendedIds: ['mullet-bottarga', 'amberjack-collar', 'milkfish-belly-cut'] }
  ],
  cookingMethods: [
    { id: 'steam-fresh', label: '蔥薑樹子清蒸', icon: 'Soup', desc: '大火快蒸 6-8 分鐘、鮮甜嫩滑', recommendedIds: ['threadfin-steak', 'pomfret-steak', 'grouper-fillet', 'barramundi-fillet'] },
    { id: 'pan-sear', label: '脆皮香煎 / 奶油煎魚排', icon: 'UtensilsCrossed', desc: '魚皮金黃酥脆、鎖住肉汁', recommendedIds: ['milkfish-belly-cut', 'salmon-fillet-cut', 'spanish-mackerel', 'threadfin-steak'] },
    { id: 'grill-bbq', label: '居酒屋鹽烤 / 氣炸一夜干', icon: 'Flame', desc: '直火炭烤逼出魚油焦香', recommendedIds: ['amberjack-collar', 'threadfin-steak', 'mackerel-fillet', 'mullet-bottarga'] },
    { id: 'soup-pot', label: '薑絲魚湯 / 砂鍋魚頭煲', icon: 'Clock', desc: '濃醇膠質高湯、暖胃甘甜', recommendedIds: ['barramundi-fillet', 'milkfish-belly-cut', 'grouper-fillet'] },
    { id: 'braise-sauce', label: '台式紅燒 / 醬油樹子燜煮', icon: 'Soup', desc: '鹹香入味、醬香下飯', recommendedIds: ['spanish-mackerel', 'threadfin-steak', 'pomfret-steak'] },
    { id: 'fry-fillet', label: '酥炸椒鹽魚柳 / 魚羹', icon: 'UtensilsCrossed', desc: '外酥內嫩、下酒良伴', recommendedIds: ['milkfish-loin-cut', 'spanish-mackerel'] },
    { id: 'sashimi-plate', label: '頂級刺身 / 炙燒生食', icon: 'Sparkles', desc: '冰鎮厚切、品嚐原味油香', recommendedIds: ['tuna-otoro-cut', 'salmon-fillet-cut'] }
  ]
};

// 台灣魚類常見問答 FAQ
export const FISH_FAQS_DATA = [
  {
    q: '為什麼吃魚喝紅葡萄酒容易出現「鐵鏽味」與強烈魚腥味？',
    a: '這是因為紅酒中的「單寧」與高濃度「鐵離子」會催化海鮮魚肉中的不飽和脂肪酸（魚油）迅速氧化，瞬間釋放出類似金屬生鏽與腥臭的揮發性化合物。因此海鮮佐餐首選高酸度的白葡萄酒（如 Chablis、Sauvignon Blanc、Albariño）、香檳氣泡酒或日本清酒；若一定要搭配紅酒，僅建議選擇單寧極低、果酸純淨的黑皮諾 (Pinot Noir) 搭配醬燒或香煎魚排。'
  },
  {
    q: '台灣俗語「一午、二紅衫、三鯧、四馬加」代表什麼意思？為什麼首選午仔魚？',
    a: '這是台灣早期漁民評選最好吃魚類的排行榜：「一午」指午仔魚、「二紅衫」指嘉鱲或紅衫、「三鯧」指白鯧、「四馬加」指土魠魚。午仔魚之所以榮登榜首，是因為其油脂豐富細緻、肉質如凝脂般細嫩，且體內幾無細小暗刺，無論清蒸、乾煎、煮湯或做成一夜干皆極為美味，是全家大小的最佳選擇。'
  },
  {
    q: '全魚利用的典範：虱目魚各部位該怎麼買、怎麼煮？',
    a: '虱目魚是台灣全魚利用最徹底的魚種：魚肚（側線下方腹肉）油脂最肥美，適合乾煎或煮薑絲湯；魚柳（去骨魚菲力）無刺極嫩，適合快炒或炸魚柳；魚皮（帶薄層魚肉）富含膠質，汆燙佐芥末醬油膏爽脆無比；魚嶺（背脊骨邊肉）適合乾煎酥炸下酒；魚頭臉頰肉鮮美適合紅燒；魚腸則是台南在地老饕必點的薑絲快炒珍味。'
  },
  {
    q: '香煎魚排如何做到「魚皮金黃酥脆、魚肉多汁不碎裂」？',
    a: '掌握三大秘訣：1. 下鍋前務必用紙巾「將魚身表面水分徹底吸乾」；2. 熱鍋下適量油，魚皮朝下入鍋後，用鍋鏟輕壓 15 秒防止魚皮受熱蜷曲；3. 定型前切勿隨意翻動，待魚皮煎至金黃焦酥能輕易脫離鍋面時再翻面煎熟即可。'
  }
];

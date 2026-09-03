// 魚類海鮮部位與分切區域資料
export const FISH_PRIMAL_AREAS = [
  {
    id: 'fish-head',
    name: '魚頭部',
    enName: 'Fish Head',
    color: '#D8963E', // 暖芥末赭黃
    textColor: 'text-charcoal',
    extendedCuts: ['鮭魚頭塊', '石斑魚頭', '鰱魚大頭'],
    positioning: '膠質濃郁、砂鍋與慢燉湯品極品',
    description: '包含魚鰓蓋肉、眼窩膠質與頭骨軟骨，富含極高膠原蛋白與天然鮮味，慢熬後湯頭乳白醇厚。',
    recommendedCooking: ['砂鍋魚頭煲', '日式味噌豆腐湯', '鹽烤魚頭'],
    idealWine: ['Junmai Sake (純米清酒)', 'Unoaked Chardonnay (未過桶夏多內)', 'Brut Champagne']
  },
  {
    id: 'fish-collar',
    name: '魚下巴 (Kama)',
    enName: 'Fish Collar / Kama',
    color: '#B84A39', // 陶土磚紅
    textColor: 'text-white',
    extendedCuts: ['鹽烤鮭魚下巴', '青甘/鰤魚下巴', '石斑魚下巴'],
    positioning: '油香滿溢、居酒屋鹽烤必點',
    description: '魚鰓後方與胸鰭相連的三角形肉塊，活動量大且油脂儲量豐富，肉質極為滑嫩、外皮焦脆多汁。',
    recommendedCooking: ['日式居酒屋椒鹽炭烤', '味噌醃漬嫩烤', '照燒香煎'],
    idealWine: ['Crisp Sauvignon Blanc', 'Dry Riesling (乾型麗絲玲)', '辛口本釀造清酒']
  },
  {
    id: 'fish-loin',
    name: '魚背肉 / 菲力',
    enName: 'Fish Loin / Fillet',
    color: '#5B705B', // 鼠尾草灰綠
    textColor: 'text-white',
    extendedCuts: ['鮭魚菲力排', '金目鱸魚排', '龍虎斑清肉', '台灣鯛魚片'],
    positioning: '刺少肉厚、香煎清蒸與舒肥首選',
    description: '魚脊椎上側的厚實清肉，幾無暗刺、肌理緊實細嫩，是家庭料理與西式魚排最受歡迎的精華部位。',
    recommendedCooking: ['奶油香煎魚排', '蔥薑樹子清蒸', '義式香草紙包烤魚', '低溫舒肥'],
    idealWine: ['Chablis (夏布利白酒)', 'Pinot Grigio (灰皮諾)', 'Sauvignon Blanc']
  },
  {
    id: 'fish-belly',
    name: '魚肚 / 大腹 (Toro)',
    enName: 'Fish Belly / Toro',
    color: '#D26C42', // 珊瑚橘
    textColor: 'text-white',
    extendedCuts: ['鮪魚大腹 (Otoro)', '無刺虱目魚肚', '鮭魚腹肉刺身', '炙燒魚肚壽司'],
    positioning: '脂肪之王、生食刺身與煎魚肚靈魂',
    description: '魚腹腔周圍的軟嫩肉層，富含大量 Omega-3 不飽和脂肪酸，油脂熔點低，入口即化、香氣濃郁。',
    recommendedCooking: ['頂級生魚片刺身', '乾煎無刺虱目魚肚', '炙燒握壽司', '日式照燒'],
    idealWine: ['桶陳 Chardonnay', 'Brut Rosé Champagne (粉紅香檳)', '純米大吟釀']
  },
  {
    id: 'fish-tail',
    name: '魚尾部',
    enName: 'Fish Tail',
    color: '#7C2333', // 深勃根地酒紅
    textColor: 'text-white',
    extendedCuts: ['白帶魚尾段', '石斑魚尾', '紅燒魚尾'],
    positioning: '皮彈肉緊、家常紅燒與快煎',
    description: '魚隻推進游動的主力肌肉，脂肪最少、膠質皮膜厚實，適合醬汁濃郁的紅燒或裹粉乾煎。',
    recommendedCooking: ['家常紅燒豆瓣魚', '蔥燒魚尾', '裹粉香煎酥脆'],
    idealWine: ['輕盈 Pinot Noir (黑皮諾)', 'Dry Rosé (粉紅酒)', '純米吟釀']
  },
  {
    id: 'fish-frame',
    name: '魚骨與高湯料',
    enName: 'Fish Bone & Frame',
    color: '#A89279', // 暖燕麥褐
    textColor: 'text-white',
    extendedCuts: ['魚骨高湯包', '魚雜煮湯塊'],
    positioning: '天然海味精華、鮮美高湯基底',
    description: '片魚後留下的脊骨與骨邊肉，經高溫烘烤或煎香後熬煮，能釋放濃郁天然肌苷酸鮮味。',
    recommendedCooking: ['法式海鮮魚高湯 (Fumet de Poisson)', '薑絲魚骨清湯'],
    idealWine: ['Muscadet (慕斯卡得)', 'Sauvignon Blanc']
  }
];

// 12 款精選魚類海鮮部位規格資料庫
export const FISH_CUTS_DATA = [
  {
    id: 'salmon-fillet',
    name: '鮭魚菲力排',
    enName: 'Atlantic Salmon Fillet',
    aliases: '鮭魚排、三文魚柳、厚切鮭魚菲力',
    primalId: 'fish-loin',
    primalName: '魚背肉 (Fish Loin)',
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
      { name: '日式照燒', desc: '醬油味醂清酒黃金比例，慢火收汁至魚肉裹上一層晶亮甘甜。' },
      { name: '紙包蒔蘿烘烤', desc: '與檸檬片、白酒、蒔蘿包入烘焙紙悶烤，鎖住原汁。' }
    ],
    donenessTip: '建議中心保持 50°C~52°C（約 7-8 分熟），肉質最為細嫩多汁，過熟容易滲出白色蛋白質變乾。',
    winePairing: {
      wines: ['桶陳 Chardonnay (夏多內)', 'Pinot Noir (黑皮諾)', 'Brut Rosé Champagne'],
      rationale: '鮭魚豐富的天然魚油與濃郁風味，能完美承接帶有香草橡木桶奶油香的 Chardonnay；或搭配輕盈細緻的紅酒黑皮諾。',
      styleSummary: '烤橡木奶油香 · 圓潤酒體 · 活潑果酸'
    }
  },
  {
    id: 'tuna-otoro',
    name: '鮪魚大腹 / 赤身',
    enName: 'Bluefin Tuna Otoro & Akami',
    aliases: '黑鮪魚大腹、Toro、刺身極品',
    primalId: 'fish-belly',
    primalName: '魚肚部 (Fish Belly)',
    tagBadge: '入口即化 · 刺身殿堂級',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    scores: {
      tenderness: 5,
      fat: 5,
      flavor: 5
    },
    locationDesc: '取自黑鮪魚前腹近鰓下部，油脂比例高達 30%~40%，呈現粉嫩雪花紋理。',
    keywords: ['生魚片之王', '入口即化', '雪花油紋', '極致鮮甜', '炙燒握壽司'],
    cookingMethods: [
      { name: '頂級刺身厚切', desc: '冰鎮後厚切，佐現磨山葵與薄鹽生抽，油脂在舌尖瞬間融化。' },
      { name: '炙燒握壽司', desc: '噴槍高溫秒炙表面逼出焦香魚脂，佐特製醬油。' }
    ],
    donenessTip: '極度推薦生食或微炙表面。高溫全熟會破壞其如冰淇淋般的細膩油花質地。',
    winePairing: {
      wines: ['純米大吟釀 (Junmai Daiginjo)', 'Vintage Champagne (年份香檳)', 'Pinot Noir'],
      rationale: '高油脂的黑鮪魚大腹與年份香檳的高酸氣泡是絕配；搭配精米步合高的純米大吟釀更能帶出極致清甜旨味。',
      styleSummary: '純淨旨味 · 精緻果香 · 細膩氣泡'
    }
  },
  {
    id: 'grouper-fillet',
    name: '龍虎斑清肉排',
    enName: 'Dragon Tiger Grouper Fillet',
    aliases: '珍珠石斑排、龍膽石斑清肉、帶皮斑魚排',
    primalId: 'fish-loin',
    primalName: '魚背肉 (Fish Loin)',
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
    id: 'milkfish-belly',
    name: '無刺虱目魚肚',
    enName: 'Milkfish Belly',
    aliases: '台南虱目魚、牛奶魚、麻豆魚肚',
    primalId: 'fish-belly',
    primalName: '魚肚部 (Fish Belly)',
    tagBadge: '台南在地代表 · 黑色甘醇魚油',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    scores: {
      tenderness: 4,
      fat: 5,
      flavor: 4
    },
    locationDesc: '台灣南部經典特產，取自整尾虱目魚正中心腹肉，中央包覆一塊標誌性深色甘甜魚油脂。',
    keywords: ['台南名產', '無刺處理', '黑色魚油精華', '香煎焦脆', '薑絲魚肚湯'],
    cookingMethods: [
      { name: '乾煎香脆魚肚', desc: '不放油冷鍋下鍋，逼出天然魚油煎至雙面焦黃酥脆，撒椒鹽白胡椒。' },
      { name: '台南薑絲魚肚湯', desc: '魚肚與老薑絲、米酒大火煮滾 3 分鐘，湯頭鮮甜回甘。' },
      { name: '古早味鳳梨豆醬煨煮', desc: '蔭鳳梨豆醬文火燜煮入味，鹹甘開胃。' }
    ],
    donenessTip: '乾煎時皮面先下，大火逼出魚油至微焦脆；煮湯則滾水快燙避免魚油融散。',
    winePairing: {
      wines: ['Dry Riesling (乾型麗絲玲)', 'Albarino (阿爾巴利諾)', '台灣在地金柑氣泡酒'],
      rationale: '虱目魚肚天然油脂極為豐沛，西班牙 Albarino 或乾型 Riesling 的高酸度與鹹鮮礦物感能俐落切除油膩感。',
      styleSummary: '明亮核果酸度 · 鹹鮮礦物感 · 生津洗油'
    }
  },
  {
    id: 'barramundi-fillet',
    name: '金目鱸魚排',
    enName: 'Barramundi Fillet',
    aliases: '金目鱸、鱸魚菲力、月子鱸魚',
    primalId: 'fish-loin',
    primalName: '魚背肉 (Fish Loin)',
    tagBadge: '肉質潔白 · 滋補養生首選',
    tagColor: 'bg-stone-100 text-stone-900 border-stone-300',
    scores: {
      tenderness: 4,
      fat: 2,
      flavor: 3
    },
    locationDesc: '鱸魚背脊肉，肉質純白細嫩成片狀，幾無細刺且脂肪含量適中，是術後與日常調養的最佳蛋白質。',
    keywords: ['養生鱸魚湯', '白肉魚經典', '無腥味好吸收', '義式香草紙包', '萬用魚排'],
    cookingMethods: [
      { name: '薑絲清燉鱸魚湯', desc: '鱸魚切塊，加入薑絲、米酒與蛤蜊燉湯，鮮甘滋補。' },
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
    id: 'salmon-collar',
    name: '居酒屋烤魚下巴',
    enName: 'Grilled Salmon / Yellowtail Collar',
    aliases: '鮭魚下巴、青甘下巴、鰤魚下巴',
    primalId: 'fish-collar',
    primalName: '魚下巴 (Fish Collar)',
    tagBadge: '皮焦肉嫩 · 居酒屋下酒霸主',
    tagColor: 'bg-red-100 text-red-900 border-red-300',
    scores: {
      tenderness: 5,
      fat: 5,
      flavor: 5
    },
    locationDesc: '位於魚鰓下方連接胸鰭的三角運動肌，外有厚實魚鱗皮，內有最飽滿滑嫩的運動油脂肉。',
    keywords: ['居酒屋必點', '外酥內嫩多汁', '椒鹽香烤', '下酒神物', '油脂大爆發'],
    cookingMethods: [
      { name: '日式炭火椒鹽烤', desc: '均勻抹鹽靜置出水擦乾，烤箱 200°C 烤 15 分鐘至表皮滋滋冒泡金黃焦脆。' },
      { name: '西京漬白味噌烤', desc: '以白味噌、味醂清酒醃漬兩天後慢火烘烤，甜鹹香濃。' }
    ],
    donenessTip: '務必烤至外皮酥脆焦香，高溫能逼出多餘油脂，使內部肉質多汁而不膩口。',
    winePairing: {
      wines: ['辛口本釀造清酒 (Dry Sake)', 'Sauvignon Blanc (紐西蘭白蘇維濃)', '氣泡酒 (Cava)'],
      rationale: '焦香爆汁的魚下巴，需要高酸度果香或辛口俐落的日本清酒，瞬間洗刷油脂並重啟味蕾。',
      styleSummary: '辛口俐落 · 芭樂百香果酸香 · 乾爽氣泡'
    }
  },
  {
    id: 'fish-head-pot',
    name: '砂鍋大魚頭',
    enName: 'Braised Fish Head',
    aliases: '鰱魚頭、鮭魚頭塊、石斑魚頭煲',
    primalId: 'fish-head',
    primalName: '魚頭部 (Fish Head)',
    tagBadge: '膠質濃郁 · 圍爐砂鍋經典',
    tagColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    scores: {
      tenderness: 4,
      fat: 4,
      flavor: 5
    },
    locationDesc: '整顆大魚頭，包含臉頰腮肉、眼窩膠質與軟骨，經過炸香與長時間燉煮，精華全入湯中。',
    keywords: ['砂鍋魚頭', '滿滿膠原', '濃郁沙茶', '圍爐年菜', '味噌魚頭湯'],
    cookingMethods: [
      { name: '台式沙茶砂鍋魚頭', desc: '魚頭裹粉炸至酥透，與大白菜、凍豆腐、蛋酥、沙茶慢熬一大鍋。' },
      { name: '日式鮭魚頭味噌煮', desc: '魚頭川燙去腥後與白蘿蔔、紅味噌文火慢燉入味。' }
    ],
    donenessTip: '魚頭入鍋前務必先高溫油炸或乾煎至定型金黃，既能鎖住鮮味又能消除腥味。',
    winePairing: {
      wines: ['純米清酒 (Junmai Sake)', 'Unoaked Chardonnay', 'Gewürztraminer'],
      rationale: '沙茶或味噌砂鍋調味濃郁且帶甜鹹，純米清酒的天然米香旨味能與沙茶香料完美融合。',
      styleSummary: '米香醇厚 · 圓潤包覆感 · 旨味加乘'
    }
  },
  {
    id: 'ribbonfish-cut',
    name: '香煎白帶魚段',
    enName: 'Ribbonfish / Cutlassfish Cut',
    aliases: '白帶魚排、油帶、厚切白帶魚',
    primalId: 'fish-tail',
    primalName: '魚尾部 (Fish Tail)',
    tagBadge: '銀亮銀皮 · 肉質細緻甘甜',
    tagColor: 'bg-zinc-200 text-zinc-900 border-zinc-400',
    scores: {
      tenderness: 4,
      fat: 3,
      flavor: 4
    },
    locationDesc: '野生捕撈之白帶魚中後段厚切切塊，銀亮魚皮富含天然鳥嘌呤，肉質細緻如絲、甘甜鮮美。',
    keywords: ['家常便當菜', '外酥內嫩', '野生海味', '銀亮外皮', '香煎首選'],
    cookingMethods: [
      { name: '乾煎椒鹽白帶魚', desc: '兩面劃菱格紋，抹薄鹽裹地瓜粉煎至金黃酥脆，擠檸檬汁。' },
      { name: '紅燒白帶魚段', desc: '煎香後加入蔥段、薑片、黑醋與醬油大火燜燒收汁。' }
    ],
    donenessTip: '煎魚前確保魚體表面乾燥，中小火慢煎定型後再翻面，保持銀皮完整酥脆。',
    winePairing: {
      wines: ['Vinho Verde (綠酒)', 'Vermentino (維蒙蒂諾)', 'Sauvignon Blanc'],
      rationale: '白帶魚肉細鮮甜，葡萄牙微氣泡綠酒 (Vinho Verde) 的微酸微氣泡感能完美襯托酥炸魚皮的香氣。',
      styleSummary: '微氣泡生津 · 清脆柑橘 · 爽口去油'
    }
  },
  {
    id: 'tilapia-fillet',
    name: '台灣鯛魚片',
    enName: 'Taiwan Tilapia Fillet',
    aliases: '潮鯛片、台灣鯛、無刺鯛魚',
    primalId: 'fish-loin',
    primalName: '魚背肉 (Fish Loin)',
    tagBadge: '高蛋白低脂 · 健身備餐國民神魚',
    tagColor: 'bg-red-100 text-red-900 border-red-300',
    scores: {
      tenderness: 3,
      fat: 1,
      flavor: 3
    },
    locationDesc: '台灣優質精緻養殖吳郭魚之精修清肉片，完全去骨無刺，肉質緊實、蛋白質含量高且幾無脂肪。',
    keywords: ['減脂備餐', '無刺便利', '火鍋常備', '經濟實惠', '蒲燒鯛魚'],
    cookingMethods: [
      { name: '蒲燒醬烤鯛魚片', desc: '抹照燒蒲燒醬高溫烘烤，撒熟白芝麻蓋飯。' },
      { name: '昆布柴魚火鍋涮片', desc: '斜切薄片入火鍋涮燙 15 秒，沾日式桔醬。' }
    ],
    donenessTip: '因脂肪極低，避免長時間過度高溫油炸，快煎或快蒸保持水分最為嫩口。',
    winePairing: {
      wines: ['Pinot Grigio (灰皮諾)', 'Soave (索阿維白酒)', '輕盈白酒'],
      rationale: '味道溫和清淡的鯛魚，最適合酸度輕快、帶白色花香與青檸香氣的義大利北部白酒。',
      styleSummary: '白花香氣 · 清爽淡雅 · 輕盈酸度'
    }
  },
  {
    id: 'cod-steak',
    name: '格陵蘭扁鱈 / 大比目魚排',
    enName: 'Greenland Halibut / Cod Steak',
    aliases: '扁鱈切片、大比目魚排、冰海鱈魚',
    primalId: 'fish-loin',
    primalName: '魚背肉 (Fish Loin)',
    tagBadge: '雪白大片肉瓣 · 水嫩滑口',
    tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
    scores: {
      tenderness: 5,
      fat: 4,
      flavor: 4
    },
    locationDesc: '來自北大西洋寒冷深海，肉質呈現雪白的大片瓣狀肌理，水分與油脂豐富，入口極為滑嫩。',
    keywords: ['清蒸豆豉鱈魚', '肉瓣分明', '極致滑嫩', '老人小孩最愛', '香煎檸檬鱈魚'],
    cookingMethods: [
      { name: '豆豉樹子蒸扁鱈', desc: '抹少許鹽，鋪上黑豆豉與薑絲蒸 8 分鐘，淋蔥油。' },
      { name: '檸檬香草奶油香煎', desc: '表面沾麵粉防散，慢火煎至金黃，淋檸檬奶油醬。' }
    ],
    donenessTip: '扁鱈含水量極高，烹調前需先用紙巾充分吸乾水分，香煎時需沾薄粉防碎。',
    winePairing: {
      wines: ['Chardonnay (夏多內)', 'Viognier (維歐尼耶)', 'Albariño (阿爾巴利諾)'],
      rationale: '鱈魚滑嫩且帶有豐郁奶油感，適合搭配帶有成熟黃蘋果、杏桃香氣且酸度平衡的白葡萄酒。',
      styleSummary: '成熟核果香 · 滑順酒體 · 雅緻酸度'
    }
  },
  {
    id: 'mackerel-steak',
    name: '澎湖野生土魠魚排',
    enName: 'Spanish Mackerel Steak',
    aliases: '土魠魚、馬加魚、土魠魚羹肉',
    primalId: 'fish-loin',
    primalName: '魚背肉 (Fish Loin)',
    tagBadge: '肉質紮實 · 冬季油脂最美',
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
      wines: ['Sauvignon Blanc', 'Dry Riesling', '冰鎮清酒'],
      rationale: '土魠魚風味濃郁且具深海油脂感，紐西蘭 Sauvignon Blanc 的草本與百香果酸香能完美襯托魚香。',
      styleSummary: '草本百香果 · 高酸洗油 · 明快清爽'
    }
  },
  {
    id: 'mullet-roe',
    name: '野生烏魚子',
    enName: 'Taiwan Bottarga / Mullet Roe',
    aliases: '烏金、台灣烏魚子、炙燒烏魚子',
    primalId: 'fish-belly',
    primalName: '魚肚部 (Fish Belly)',
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

// 魚類海鮮餐酒搭配科學原則
export const FISH_WINE_PRINCIPLES = [
  {
    title: '原則一：魚油多寡決定酒款酸度與酒體',
    subtitle: 'Fat Content & Fish Oil Dictate Acidity & Weight',
    desc: '高魚油魚種（鮭魚、鮪魚大腹、烤魚下巴）需要具備桶陳結構的 Chardonnay、粉紅香檳或純米大吟釀切油；清瘦白肉魚（石斑、鱸魚、鯛魚）則應選擇輕盈高酸的夏布利、灰皮諾或 Sauvignon Blanc。',
    items: [
      { meatType: '高油脂魚類 (鮭魚、鮪魚大腹、魚下巴、虱目魚肚)', wineStyle: '桶陳圓潤、高酸氣泡或辛口清酒', examples: 'Oaked Chardonnay、Brut Rosé Champagne、純米大吟釀' },
      { meatType: '膠質清甜魚類 (龍虎斑、石斑魚、金目鱸魚)', wineStyle: '純淨礦石感、明亮柑橘果酸', examples: 'Chablis (夏布利)、Sauvignon Blanc、Pinot Grigio' },
      { meatType: '濃郁濃縮海味 (烏魚子、魚頭砂鍋煲)', wineStyle: '氣泡洗刷感、雪莉酒堅果香或純米酒旨味', examples: 'Champagne、Fino Sherry、純米清酒 (Junmai Sake)' }
    ]
  },
  {
    title: '原則二：清蒸檸檬佐高酸白酒，醬燒照燒佐輕紅酒或清酒',
    subtitle: 'Cooking & Sauce Shape Wine Compatibility',
    desc: '海鮮最忌諱高單寧厚重紅酒（會與魚油結合產生強烈鐵鏽與魚腥味）。清蒸與檸檬香煎配高酸白酒；日式醬燒、照燒或紅燒則可跨界搭配低單寧黑皮諾或日本清酒。',
    items: [
      { method: '原味清蒸 / 樹子蔥油', wineFocus: '礦物冷冽感、生津果酸', picks: 'Chablis、Sauvignon Blanc、純米吟釀' },
      { method: '奶油香煎 / 西式紙包烤', wineFocus: '烤青蘋果、適度乳酸圓潤感', picks: 'Unoaked Chardonnay、Pinot Grigio' },
      { method: '日式照燒 / 蒲燒 / 紅燒醬汁', wineFocus: '輕柔單寧、深色櫻桃或米香旨味', picks: 'Pinot Noir (黑皮諾)、純米清酒' },
      { method: '生食刺身 / 炙燒握壽司', wineFocus: '細膩微氣泡、極致純淨純米旨味', picks: 'Blanc de Blancs 香檳、純米大吟釀' }
    ]
  }
];

// 魚類選魚助手問答資料
export const FISH_WIZARD_DATA = {
  textures: [
    { id: 'tender-flake', label: '細嫩多汁、瓣狀肉質', icon: 'Sparkles', desc: '追求如白雪般滑順細嫩的口感', recommendedIds: ['cod-steak', 'salmon-fillet', 'barramundi-fillet', 'tilapia-fillet'] },
    { id: 'fatty-melt', label: '魚油滿溢、入口即化', icon: 'Droplets', desc: '熱愛豐富 Omega-3 魚油與濃郁脂香', recommendedIds: ['tuna-otoro', 'salmon-collar', 'milkfish-belly', 'salmon-fillet'] },
    { id: 'springy-skin', label: '皮Q肉彈、滿滿膠質', icon: 'Clock', desc: '喜歡石斑魚皮的彈牙與膠原蛋白', recommendedIds: ['grouper-fillet', 'fish-head-pot', 'salmon-collar'] },
    { id: 'firm-meaty', label: '肉感紮實、無小暗刺', icon: 'HeartPulse', desc: '喜歡大口吃肉、大塊厚切口感', recommendedIds: ['mackerel-steak', 'ribbonfish-cut', 'grouper-fillet'] },
    { id: 'umami-savory', label: '濃縮鹹鮮、珍味老饕', icon: 'Flame', desc: '追求頂級下酒珍味與深邃海味', recommendedIds: ['mullet-roe', 'tuna-otoro', 'fish-head-pot'] }
  ],
  cookingMethods: [
    { id: 'pan-sear', label: '脆皮香煎 / 奶油煎魚排', icon: 'UtensilsCrossed', desc: '魚皮金黃酥脆、鎖住肉汁', recommendedIds: ['salmon-fillet', 'milkfish-belly', 'ribbonfish-cut', 'mackerel-steak'] },
    { id: 'steam-fresh', label: '蔥薑樹子清蒸', icon: 'Soup', desc: '原汁原味、鮮甜嫩滑', recommendedIds: ['grouper-fillet', 'cod-steak', 'barramundi-fillet'] },
    { id: 'sashimi-raw', label: '頂級刺身 / 炙燒生食', icon: 'Sparkles', desc: '冰鎮厚切、品嚐原味油香', recommendedIds: ['tuna-otoro', 'salmon-fillet'] },
    { id: 'grill-bbq', label: '居酒屋鹽烤 / 照燒', icon: 'Flame', desc: '直火炭烤逼出魚油焦香', recommendedIds: ['salmon-collar', 'mullet-roe', 'tilapia-fillet', 'salmon-fillet'] },
    { id: 'soup-pot', label: '薑絲魚湯 / 砂鍋魚頭煲', icon: 'Clock', desc: '濃醇膠質高湯、暖胃甘甜', recommendedIds: ['fish-head-pot', 'barramundi-fillet', 'milkfish-belly'] },
    { id: 'braise-sauce', label: '台式紅燒 / 醬油樹子燜煮', icon: 'Soup', desc: '鹹香入味、醬香下飯', recommendedIds: ['ribbonfish-cut', 'mackerel-steak', 'fish-head-pot'] }
  ]
};

// 魚類海鮮常見問答 FAQ
export const FISH_FAQS_DATA = [
  {
    q: '為什麼吃魚喝紅葡萄酒容易出現「鐵鏽味」與魚腥味？',
    a: '這是因為紅酒中的「單寧」與高濃度「鐵離子」會與海鮮魚肉中的不飽和脂肪酸產生化學反應，瞬間氧化並釋放出類似金屬生鏽的強烈魚腥味。因此海鮮佐餐首選高酸度的白葡萄酒（如 Chablis、Sauvignon Blanc）、氣泡酒或日本清酒；若一定要搭配紅酒，僅建議選擇單寧極低、果酸純淨的黑皮諾 (Pinot Noir) 搭配醬燒魚類。'
  },
  {
    q: '魚肚（如鮭魚肚、虱目魚肚）與魚背肉（菲力）在料理上有何不同？',
    a: '魚肚部位油脂含量極高，最適合以「乾煎」（利用自身魚油煎出脆皮）或做成生魚片、炙燒壽司；而魚背肉（菲力）肌肉組織緊密、肉厚且刺少，適合「奶油香煎」、「清蒸」、「低溫舒肥」或「紙包烤」，能呈現多汁純淨的細嫩瓣狀肉質。'
  },
  {
    q: '「生食級」魚肉與一般煎烤用魚排的標準差在哪裡？',
    a: '生食級（Sashimi Grade）肉品必須經過嚴格的超低溫急速冷凍（通常為 -60°C 深度凍結），以徹底消滅可能存在的寄生蟲與細菌，且在加工、分切與冷鏈運送過程中具備極高衛生標準。一般超市標示生鮮或煎烤用的魚排，請務必完全加熱熟化後食用。'
  },
  {
    q: '香煎魚排如何做到「魚皮酥脆、魚肉不碎裂」？',
    a: '掌握三大秘訣：1. 下鍋前務必以廚房紙巾「將魚身表面水分徹底吸乾」；2. 熱鍋下適量油，魚皮朝下後用鍋鏟輕壓 15 秒防止蜷曲；3. 定型前切勿隨意翻動，待魚皮煎至金黃焦酥能輕易脫離鍋面時再翻面煎熟即可。'
  }
];

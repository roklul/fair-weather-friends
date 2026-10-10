// 雞肉 8 大分切區域資料（經典家禽與日式職人燒鳥分切體系）
export const CHICKEN_PRIMAL_AREAS = [
  {
    id: 'chicken-breast',
    name: '雞胸部 (胸肉·白肉)',
    enName: 'Chicken Breast',
    color: '#4A7C59', // 森林鼠尾草綠 (高對比)
    textColor: 'text-white',
    extendedCuts: ['舒肥嫩雞胸', '帶皮香煎雞胸排', '法式藍帶雞排'],
    positioning: '白肉之冠、極致低脂高蛋白',
    description: '位於雞隻胸骨兩側，運動量小。衛福部營養數據：每100g去皮熱量僅104大卡、蛋白質高達22.4g、脂肪僅0.9g；帶皮熱量則升至219大卡（脂肪15.1g，脂肪高度集中於雞皮）。掌握三大不柴秘訣：打水10%或鹽水浸泡、逆紋切斷纖維、72°C離火餘溫熟成至74°C安全標準。',
    recommendedCooking: ['低溫舒肥香煎', '打水10%嫩炒', '日式炸雞排', '清炒雞肉絲'],
    idealWine: ['未過桶 Chardonnay', 'Sauvignon Blanc (白蘇維濃)', 'Pinot Grigio (灰皮諾)']
  },
  {
    id: 'chicken-tender',
    name: '雞柳部 (里肌·Sasami)',
    enName: 'Chicken Tenderloin / Sasami',
    color: '#5E4B3C', // 暖色皮革褐
    textColor: 'text-white',
    extendedCuts: ['頂級雞里肌條', '日式紫蘇梅肉卷', '炙燒半生熟雞刺身'],
    positioning: '全雞最嫩無筋、細緻清甜',
    description: '緊貼雞胸骨內側的兩條長條肌肉（小里肌/雞柳），中央帶白色筋膜。衛福部數據：每100g熱量僅109大卡、蛋白質高達24.2g、脂肪僅0.6g，為全雞最高蛋白增肌首選。剔除中央筋膜後滑炒、香炸或微滾3分鐘關火悶熟，口感細嫩帶Q。',
    recommendedCooking: ['香酥炸雞柳條', '日式串燒佐芥末', '炙燒溫泉蛋雞肉丼', '輕羹高湯'],
    idealWine: ['Chablis (夏布利夏多內)', '純米吟釀清酒 (Sake)', 'Brut Champagne (乾型香檳)']
  },
  {
    id: 'chicken-thigh',
    name: '雞腿部 (大腿·骨腿)',
    enName: 'Chicken Thigh',
    color: '#B84E28', // 陶土磚紅
    textColor: 'text-white',
    extendedCuts: ['黃金去骨雞腿排', '照燒雞肉串', '土雞腿切塊'],
    positioning: '肉汁豐沛飽滿、煎炸烤全能之王',
    description: '雞隻大腿肉，活動量充沛，肌紅蛋白豐富。衛福部數據：去皮每100g熱量165大卡/脂8.9g，帶皮173大卡/脂11.3g。厚處劃刀斷筋、皮面徹底擦乾再煎烤可保外脆內爆汁；做醬烤時醬汁留最後兩次刷上可避免焦黑。',
    recommendedCooking: ['脆皮鑄鐵鍋香煎', '日式炭火照燒串', '椒麻雞 / 唐揚炸雞', '法式紅酒燉雞 (Coq au Vin)'],
    idealWine: ['Pinot Noir (黑皮諾)', '桶陳 Chardonnay', 'Beaujolais (薄酒萊加美)']
  },
  {
    id: 'chicken-drumstick',
    name: '棒棒腿 (小腿部)',
    enName: 'Chicken Drumstick',
    color: '#D48C46', // 琥珀金棕
    textColor: 'text-white',
    extendedCuts: ['香酥鮮嫩棒棒腿', '醬烤小腿棒', '藥膳蔘雞湯腿'],
    positioning: '膠質筋膜濃郁、吮指肉感霸主',
    description: '膝關節以下小腿，運動量大，結締組織與骨邊膠原蛋白豐富。台灣土雞棒腿肉質紮實、纖維感明顯且風味濃郁（白斬、燉湯首選）；白肉雞則軟嫩多汁（美式炸雞首選）。慢火燉煮、紅燒或炸烤皆能釋放黏嘴膠質。',
    recommendedCooking: ['美式酥脆炸雞', '慢火滷燉肉汁醬', '韓式甜辣醬烤腿', '養生蒜頭雞湯'],
    idealWine: ['Grenache (格納希)', 'Dry Rosé (粉紅酒)', '美國精釀 IPA 啤酒']
  },
  {
    id: 'chicken-wing',
    name: '雞翅部 (二節翅·三節翅)',
    enName: 'Chicken Wings',
    color: '#D97736', // 活力焦糖橘
    textColor: 'text-white',
    extendedCuts: ['酥脆二節翅', '明太子包餡雞翅', '水牛城香辣翅小腿'],
    positioning: '高皮脂比、外酥內嫩下酒神物',
    description: '由翅小腿（一節）、二節翅與翅尖組成。衛福部數據：三節翅每100g熱量210大卡、脂肪14.6g。二節翅皮脂極高、明膠豐厚，適合可樂滷雞翅、名古屋手羽先或明太子鑲烤，高溫油炸或直火炙烤能迅速逼出金黃酥脆薄殼。',
    recommendedCooking: ['水牛城辣雞翅', '名古屋手羽先串燒', '可樂醬油滷二節翅', '氣炸香檸椒鹽翅'],
    idealWine: ['Cava 氣泡酒', 'Riesling (微甜麗絲玲)', '威士忌蘇打 Highball']
  },
  {
    id: 'chicken-neck',
    name: '雞頸部 (雞松阪·頸肉)',
    enName: 'Chicken Neck Meat (Seseri)',
    color: '#7C2333', // 勃根地酒紅
    textColor: 'text-white',
    extendedCuts: ['彈脆極品雞松阪', '炭烤椒鹽頸肉串', '蔥香熱炒雞松阪'],
    positioning: '稀少老饕部位、彈牙爽脆極品',
    description: '取自頸部兩側的剔骨純肉（せせり），每隻雞僅約30-40克。隨雞首靈活擺動，肌肉紋理緊緻且交織薄薄油脂，神似松阪豬般爽脆彈牙。雞脖子料理前除去雞皮與淋巴結，只要煮熟即安全衛生，是頂級燒鳥店必點。',
    recommendedCooking: ['炭火鹽烤雞松阪', '九層塔快炒', '鐵板炙燒檸檬汁', '氣炸蒜香下酒菜'],
    idealWine: ['日本辛口純米酒', 'Sauvignon Blanc', 'Paloma 龍舌蘭特調']
  },
  {
    id: 'chicken-tail',
    name: '雞尾與背部 (七里香·雞背)',
    enName: 'Chicken Tail & Back (Bonjiri)',
    color: '#8A4A5B', // 熟成紫梅紅
    textColor: 'text-white',
    extendedCuts: ['炙烤琥珀七里香', '香酥炸雞屁股', '炭烤老饕雞牡蠣肉'],
    positioning: '豐潤脂肪熔點低、炭烤爆漿香氣',
    description: '尾椎尾脂腺周圍（七里香），台式鹹酥雞常先以火烤逼出過多油脂以去除腥味；背骨兩側凹窩更藏有珍貴的「牡蠣肉 (Sot-l\'y-laisse)」，一口咬下肉汁豐腴爆漿，超越一般大腿排。',
    recommendedCooking: ['炭火直烤逼油七里香', '酥炸椒鹽佐胡椒', '法式平底鍋奶油煎牡蠣肉', '串燒照燒醬烤'],
    idealWine: ['Syrah (希哈)', 'Brut Champagne (乾型香檳)', 'Whiskey Highball']
  },
  {
    id: 'chicken-cartilage',
    name: '軟骨與內臟 (三角骨·雞心)',
    enName: 'Cartilage & Offal (Yagen / Hatsu)',
    color: '#4A6B6C', // 藍綠石板灰
    textColor: 'text-white',
    extendedCuts: ['椒鹽三角胸軟骨', '炙燒黑椒嫩雞心', '甘露煮雞胗'],
    positioning: '喀吱酥脆口感、低卡高鈣佐酒王',
    description: '取自胸骨尖端的三角軟骨（Yagen）富含明膠與鈣質；搭配雞心與雞胗等內臟，料理前以大盆清水持續旋轉沖洗徹底洗出血水以除腥味，滷製時加入薑黃可增添特殊辛香，口感乾淨爽脆。',
    recommendedCooking: ['日式椒鹽烤三角軟骨', '酥炸雞軟骨下酒', '麻油爆炒雞心胗', '薑黃香料慢滷'],
    idealWine: ['乾型 Prosecco 氣泡酒', '特別純米清酒', 'Gin & Tonic (琴通寧)']
  }
];

// 雞肉 12 款精選部位規格庫（7 大標準面向 + 3 維評分）
export const CHICKEN_CUTS_DATA = [
  {
    id: 'chicken-breast-cut',
    name: '舒肥嫩雞胸',
    enName: 'Sous-vide Chicken Breast',
    aliases: '清肉、白肉、雞柳原切',
    primalId: 'chicken-breast',
    primalName: '雞胸部',
    category: 'chicken',
    scores: {
      tenderness: 4.5,
      fat: 1.5,
      flavor: 3.5
    },
    tagBadge: '低脂高蛋白 · 舒肥多汁',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: '嚴選 CAS 生鮮冷藏清雞胸肉，肉質純淨無筋膜。透過 62°C 恆溫水浴烹煮，打破傳統雞胸乾柴刻板印象，肉汁充沛且軟嫩無比。',
    idealDoneness: '中心溫度 65°C 熟成 (或 62°C 舒肥 60 分鐘)',
    recommendedCooking: ['低溫舒肥香煎', '義式香草溫沙拉', '酪梨雞胸冷盤', '日式清炒時蔬'],
    idealWine: '未過桶 Chardonnay (夏多內) · Pinot Grigio (灰皮諾) · Sauvignon Blanc',
    culinarySecrets: '烹調前使用 3% 鹽水與香草鹽浸泡（Brining）2 小時，能大幅提升肌肉保水度與細胞滲透壓，保證多汁不乾柴。',
    wineRationale: '極低脂肪與純淨白肉，需要未過橡木桶、酸度明亮且果香細緻的白酒相輔相成，避免過重單寧產生金屬苦味。',
    classicCocktailSynergy: 'French 75 (琴酒香檳特調) 或 Daiquiri (黛綺莉)，以優雅柑橘果酸穿透肌理，烘托白肉鮮甜。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-tenderloin-cut',
    name: '鮮嫩雞里肌 (雞柳)',
    enName: 'Chicken Tenderloin / Sasami',
    aliases: '小里肌、竹籤肉、ささみ (Sasami)',
    primalId: 'chicken-tender',
    primalName: '雞柳部',
    category: 'chicken',
    scores: {
      tenderness: 5.0,
      fat: 1.0,
      flavor: 3.0
    },
    tagBadge: '全雞最軟嫩 · 零脂肪負擔',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: '位於雞胸骨內側的細長柳葉形肌肉，運動量近乎為零。無筋皮、纖維極其柔嫩，是全雞軟嫩度最高的神級部位。',
    idealDoneness: '中心溫度 66°C 全熟 (日式頂級生食級可微炙燒 7 分熟)',
    recommendedCooking: ['香酥炸雞柳佐塔塔醬', '日式串燒佐柚子胡椒', '紫蘇梅肉捲', '清蒸翡翠雞柳'],
    idealWine: 'Chablis (夏布利產區夏多內) · 純米大吟釀 (Sake) · Vinho Verde (綠酒)',
    culinarySecrets: '中央有一條細白筋膜，料理前以刀尖捏住筋頭輕輕往後抽除，口感即可達到如同棉花糖般的化口極致。',
    wineRationale: '質地極度清雅柔順，夏布利的白堊土礦物感與冷涼酸度能提亮雞肉的本真鮮甜，宛如在舌尖鋪上一層天鵝絨。',
    classicCocktailSynergy: 'Gin & Tonic (琴通寧)，杜松子的高雅木質草本與奎寧微苦，完全呼應雞柳的純粹纖維。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-boneless-thigh',
    name: '黃金去骨雞腿排',
    enName: 'Boneless Chicken Thigh Cut',
    aliases: '大腿排、肉雞腿排、土雞排',
    primalId: 'chicken-thigh',
    primalName: '雞腿部',
    category: 'chicken',
    scores: {
      tenderness: 4.5,
      fat: 4.0,
      flavor: 4.5
    },
    tagBadge: '皮脆肉嫩 · 肉汁飽滿之王',
    tagColor: 'bg-orange-100 text-orange-800 border-orange-300',
    description: '去骨留皮之整片大腿肉，皮下油脂厚實，肌纖維交織天然膠質。冷鍋下鍋慢煎能將雞皮煎至如威化餅乾般香脆，肉心多汁燙口。',
    idealDoneness: '中心溫度 74°C 全熟 (皮面酥脆、肉汁清澈)',
    recommendedCooking: ['迷迭香脆皮鑄鐵鍋煎', '日式照燒醬汁烤', '泰式椒麻雞', '法式蘑菇白醬燉煮'],
    idealWine: 'Pinot Noir (勃根地黑皮諾) · 桶陳 Chardonnay · Cru Beaujolais (薄酒萊)',
    culinarySecrets: '冷鍋冷油皮朝下，壓上重物以中小火慢煎 8-10 分鐘，皮脆後翻面僅需煎 2 分鐘即可離火靜置，外脆內爆汁。',
    wineRationale: '雞皮的飽滿焦香與深色腿肉的濃厚風味，既能承接中度酒體過桶白酒的奶油香，也能完美匹配黑皮諾柔順的紅色莓果單寧。',
    classicCocktailSynergy: 'Paper Plane (紙飛機調酒) 或 Paloma (葡萄柚龍舌蘭)，高酸度果香俐落化解皮脂油膩。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-drumstick-cut',
    name: '香酥鮮嫩棒棒腿',
    enName: 'Juicy Chicken Drumstick',
    aliases: '小腿、琵琶腿、棒腿',
    primalId: 'chicken-drumstick',
    primalName: '棒棒腿部',
    category: 'chicken',
    scores: {
      tenderness: 4.0,
      fat: 3.5,
      flavor: 4.5
    },
    tagBadge: '骨香肉美 · 吮指多汁經典',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: '連骨帶肉的小腿部位，運動量充足，肉質結實有彈性。靠近骨頭處骨髓香氣濃烈，慢火燉煮或炸烤皆能釋放黏嘴膠質。',
    recommendedCooking: ['美式南蠻香酥炸雞', '台式家常滷小腿', '韓式甜辣醬烤棒腿', '蒜香剝皮辣椒雞湯'],
    idealWine: 'Dry Rosé (普羅旺斯粉紅酒) · Grenache (格納希) · 冰鎮生啤酒',
    culinarySecrets: '醃製時以叉子在肉質厚處戳洞並劃兩刀斷筋，不僅醬汁容易滲透入味，受熱時也能熟度均勻不縮肉。',
    wineRationale: '炸烤棒腿的辛香醬汁與骨邊濃郁風味，適合果香甜美、單寧親民的粉紅酒或地中海風格紅酒。',
    classicCocktailSynergy: 'Mojito (莫希托)，大量鮮壓薄荷與蘇打氣泡，一口肉一口酒痛快解膩。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-wings-cut',
    name: '酥脆雙節雞翅',
    enName: 'Crispy Double Chicken Wings',
    aliases: '中翅、二節翅、手羽先',
    primalId: 'chicken-wing',
    primalName: '雞翅部',
    category: 'chicken',
    scores: {
      tenderness: 4.0,
      fat: 4.5,
      flavor: 4.5
    },
    tagBadge: '膠質滿載 · 外酥內嫩必點',
    tagColor: 'bg-red-100 text-red-800 border-red-300',
    description: '包含翅中與翅尖，皮脂比例極高，兩根細長骨骼間藏著極其幼嫩的肉絲。炙烤或油炸時膠原蛋白轉化為香濃明膠，肉汁滿溢。',
    idealDoneness: '中心溫度 75°C 全熟 (表皮呈現金黃焦脆琥珀色)',
    recommendedCooking: ['名古屋甘辛手羽先', '明太子鑲烤雞翅', '美式水牛城酸辣烤翅', '椒鹽氣炸雞中節'],
    idealWine: 'Off-dry Riesling (微甜麗絲玲) · Cava 氣泡酒 · 德國小麥白啤酒',
    culinarySecrets: '炸烤前表皮充分風乾，並薄刷一層白醋水或小蘇打粉，能使雞皮在高溫下產生細緻微氣泡脆殼。',
    wineRationale: '雞翅皮脆油脂飽滿且常搭配重口味醬料，高酸度帶微甜的麗絲玲能完美降伏辣味與油感，共奏甘美樂章。',
    classicCocktailSynergy: 'Whiskey Sour (威士忌酸酒)，檸檬的高酸度與綿密蛋白泡，是重醬香烤雞翅的天作之合。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-neck-seseri',
    name: '彈脆極品雞松阪',
    enName: 'Chicken Neck Meat (Seseri)',
    aliases: '雞頸肉、松阪雞、せせり (Seseri)',
    primalId: 'chicken-neck',
    primalName: '雞頸部',
    category: 'chicken',
    scores: {
      tenderness: 4.5,
      fat: 3.5,
      flavor: 5.0
    },
    tagBadge: '稀少限量 · 爽脆彈牙老饕珍味',
    tagColor: 'bg-purple-100 text-purple-800 border-purple-300',
    description: '取自雞隻頸椎兩側的靈巧長條肌肉，一隻雞僅有約 30-40 克。運動量大造就了令人驚豔的爽脆咬感與濃烈肉香，是頂級燒鳥店招牌。',
    idealDoneness: '中心溫度 72°C (直火高溫炙燒逼油斷筋)',
    recommendedCooking: ['炭火鹽烤雞松阪串', '青蔥爆炒雞頸肉', '椒鹽香煎佐金桔', '七味唐辛子鐵板炙烤'],
    idealWine: '辛口純米吟釀 (Sake) · Sauvignon Blanc · 白梢楠 (Chenin Blanc)',
    culinarySecrets: '熱鍋直火大火快炒或炭烤，逼出多餘油脂並讓表面微焦微脆，起鍋前滴入數滴生榨檸檬汁或金桔提香。',
    wineRationale: '彈牙的肉質與直火炭香，搭配未經橡木桶的草本風白酒或辛口清酒，能把油脂昇華為純粹甘甜。',
    classicCocktailSynergy: 'Whiskey Highball (威士忌蘇打)，強勁的碳酸氣泡與大麥香氣，是燒鳥串燒的最佳拍檔。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-cartilage-cut',
    name: '椒鹽三角胸軟骨',
    enName: 'Chicken Breast Cartilage (Yagen)',
    aliases: '三角骨、胸軟骨、ヤゲン (Yagen)',
    primalId: 'chicken-cartilage',
    primalName: '軟骨部',
    category: 'chicken',
    scores: {
      tenderness: 2.0,
      fat: 1.0,
      flavor: 4.0
    },
    tagBadge: '喀吱酥脆 · 零罪惡感高鈣下酒',
    tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    description: '位於雞胸骨最前端的三角形半透明軟骨，帶著薄薄一層胸肉碎。富含膠原蛋白與軟骨素，咀嚼時「喀吱喀吱」清脆悅耳。',
    idealDoneness: '全熟酥脆 (表面微焦金黃)',
    recommendedCooking: ['日式椒鹽烤三角骨串', '酥炸雞軟骨佐胡椒鹽', '氣炸蒜香九層塔軟骨', '川味辣子雞軟骨'],
    idealWine: '乾型 Prosecco 氣泡酒 · 鮮榨檸檬沙瓦 · 德式皮爾森 (Pilsner)',
    culinarySecrets: '油炸前先用白胡椒、蒜汁與清酒抓醃 15 分鐘，拍上極薄一層木薯粉高溫快炸 3 分鐘，即可保有極致脆度。',
    wineRationale: '軟骨本身風味純淨重在口感，搭餐酒應選擇氣泡活潑、冰鎮清涼的義大利氣泡酒或拉格啤酒，無限放大爽快感。',
    classicCocktailSynergy: 'Gin Gin Mule (琴騾特調)，生薑啤酒的辛口刺激與薄荷清香，把炸軟骨的酥脆感推向巔峰。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-tail-bonjiri',
    name: '炙烤琥珀七里香',
    enName: 'Charcoal Grilled Chicken Tail (Bonjiri)',
    aliases: '雞屁股、鳳尾、ぼんじり (Bonjiri)',
    primalId: 'chicken-tail',
    primalName: '尾椎部',
    category: 'chicken',
    scores: {
      tenderness: 4.5,
      fat: 5.0,
      flavor: 4.5
    },
    tagBadge: '極致肥美 · 外酥內爆漿脂香',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    description: '嚴選去除尾脂腺之純淨雞尾肉，脂肪含量高且熔點極低。經過炭火直烤將油脂逼出至外皮酥脆如薄紙，內部豐腴滑嫩，濃香四溢。',
    idealDoneness: '中心溫度 75°C (炭火強烈逼油，表面深金黃香脆)',
    recommendedCooking: ['直火炭烤鹽燒七里香串', '高溫酥炸椒鹽雞屁股', '秘傳蒲燒醬烤串', '乾鍋香辣七里香'],
    idealWine: 'Champagne Brut (乾型香檳) · 高酸度 Barbera · 琥珀愛爾啤酒 (Amber Ale)',
    culinarySecrets: '必須精細切除中央黃色異味尾脂腺，慢火將內部 50% 以上油脂融出炸脆，方能達到「油而不膩、皮酥脂化」的境界。',
    wineRationale: '極致豐厚的脂肪需要香檳如同手術刀般鋒利的酸度與細緻酵母氣泡切割，在口中洗刷出優雅平衡。',
    classicCocktailSynergy: 'Old Fashioned (古典雞尾酒) 或 Negroni (內格羅尼)，草本苦甜與柑橘皮油完美承接豐厚禽脂。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-skin-cut',
    name: '炭火香脆雞皮串',
    enName: 'Crispy Grilled Chicken Skin (Kawa)',
    aliases: '雞皮、とり皮 (Torikawa)',
    primalId: 'chicken-tail',
    primalName: '皮脂部',
    category: 'chicken',
    scores: {
      tenderness: 3.5,
      fat: 5.0,
      flavor: 4.0
    },
    tagBadge: '焦香薄脆 · 濃縮雞油精華',
    tagColor: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    description: '精選新鮮雞胸與雞腿完整大張雞皮，去除皮下肥油後螺旋緊密串起。反覆炭火烘烤與醬汁浸漬，締造如同洋芋片般的極限酥脆。',
    idealDoneness: '炭火全熟烘烤至金黃酥脆無軟脂',
    recommendedCooking: ['福岡博多風螺旋醬烤雞皮', '酥炸椒鹽雞皮餅乾', '柚子醋拌冰鎮雞皮絲', '氣炸蒜味香脆皮'],
    idealWine: '西班牙 Cava 氣泡酒 · 辛口白酒 (Albariño) · 爽口 Highball',
    culinarySecrets: '福岡博多名物作法：先汆燙去腥、刮除殘油，反覆烘烤、浸醬並靜置熟成數日，讓醬汁深層滲入皮肉微結構中。',
    wineRationale: '高油脂烘烤後的梅納反應香氣，與高酸度、柑橘果香鮮明的阿爾巴利諾 (Albariño) 白酒相撞，生津解膩。',
    classicCocktailSynergy: 'Paloma (帕洛瑪特調)，葡萄柚的苦甜果酸與碳酸蘇打，俐落擊退所有油膩。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-oyster-cut',
    name: '夢幻老饕牡蠣肉',
    enName: 'Chicken Oyster (Sot-l\'y-laisse)',
    aliases: '傻瓜才留下 (法語原意)、雞腰窩肉、ソリレス (Solirisu)',
    primalId: 'chicken-tail',
    primalName: '骨背部',
    category: 'chicken',
    scores: {
      tenderness: 4.8,
      fat: 4.0,
      flavor: 5.0
    },
    tagBadge: '全雞唯一雙球 · 法國名廚隱藏部位',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    description: '隱藏於雞隻骨盆背側凹窩處的兩塊圓球形肌肉。法語稱為 Sot-l\'y-laisse（只有傻瓜才會把它留在骨架上）。多汁軟嫩超越腿排，肉味濃郁非凡。',
    idealDoneness: '中心溫度 70°C (兩面微煎金黃，保有多汁肉球彈性)',
    recommendedCooking: ['法式平底鍋焦化奶油香煎', '備長炭鹽烤牡蠣肉串', '迷迭香蒜香溫油泡', '頂級烤雞套餐主角'],
    idealWine: 'Bordeaux Blanc (波爾多白酒) · 勃根地 Premier Cru Pinot Noir · Viognier',
    culinarySecrets: '帶皮完整取下，皮面朝下煎至極脆，肉面以蒜香迷迭香奶油反覆淋洗（Arrosé），展現米其林級的高雅層次。',
    wineRationale: '濃郁無比的深邃肉汁與高雅彈性，能與頂級過桶夏多內或陳年黑皮諾的松露森林地表氣息共鳴。',
    classicCocktailSynergy: 'Paper Plane (紙飛機調酒)，義大利草本利口酒與波本的圓潤，呼應老饕肉的深厚層次。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-heart-cut',
    name: '炙燒黑椒嫩雞心',
    enName: 'Tender Grilled Chicken Heart (Hatsu)',
    aliases: '心型串、雞心、ハツ (Hatsu)',
    primalId: 'chicken-cartilage',
    primalName: '內臟部',
    category: 'chicken',
    scores: {
      tenderness: 4.0,
      fat: 3.0,
      flavor: 4.8
    },
    tagBadge: '彈牙無腥 · 鮮美鐵質與濃郁肉汁',
    tagColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: '純淨心肌組織，質地緊密富有絕佳彈性。富含天然鐵質與肉香，處理得宜完全無腥味，一口咬下肉汁微爆，彈嫩過癮。',
    idealDoneness: '中心溫度 72°C (保留飽滿水份與彈性，切忌乾縮)',
    recommendedCooking: ['日式醬烤雞心串', '九層塔麻油爆炒雞心', '黑胡椒鐵板炙燒', '滷味冰鎮切片'],
    idealWine: 'Syrah / Shiraz (希哈) · 義大利 Chianti (奇揚地) · 熟成黑啤酒',
    culinarySecrets: '將頂部油脂血管修整乾淨，剖開擠除內部殘血並泡冰水洗淨，以竹籤撐平受熱，高溫短時間快烤保證水嫩。',
    wineRationale: '內臟特有的深層鐵質與肉感，與希哈紅酒中標誌性的黑胡椒辛香料及黑莓果香如天作之合。',
    classicCocktailSynergy: 'Penicillin (盤尼西林特調)，艾雷島泥煤威士忌的煙燻感與薑汁蜂蜜，把烤雞心的風味昇華至新高度。',
    isDemo: true,
    isPurchasable: false
  },
  {
    id: 'chicken-bone-broth',
    name: '老母雞全雞高湯切塊',
    enName: 'Rich Collagen Chicken Stew Cut',
    aliases: '熬湯土雞、燉湯骨、煲湯切塊',
    primalId: 'chicken-thigh',
    primalName: '燉湯部',
    category: 'chicken',
    scores: {
      tenderness: 3.0,
      fat: 3.5,
      flavor: 5.0
    },
    tagBadge: '慢火長熬 · 膠原蛋白黃金高湯',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: '嚴選生長週期足夠之放山土雞骨架與連骨帶肉切塊，骨質密度高、肌紅蛋白充沛。久熬慢燉後湯汁乳化泛金黃，膠質黏唇甘潤。',
    idealDoneness: '慢火燉煮 90-120 分鐘以上 (骨肉酥爛、湯濃如乳)',
    recommendedCooking: ['港式干貝花膠老母雞湯', '韓式一隻雞砂鍋', '台式香菇人蔘燉土雞', '法式清燉雞高湯 (Consommé)'],
    idealWine: '未過桶 Chardonnay · 紹興花雕酒 (溫飲) · 日本山廢純米酒',
    culinarySecrets: '大骨先以滾水汆燙去血沫後洗淨，冷水下鍋加蔥薑慢火微滾，保持湯面油膜不破，方能煲出清亮甘醇頂級高湯。',
    wineRationale: '雞湯富含鮮味胺基酸（Inosinate），適合低單寧、具鮮味共鳴的白葡萄酒或帶有歲月陳釀香氣的熟成黃酒/花雕。',
    classicCocktailSynergy: 'Virgin Cucumber Collins (零酒精小黃瓜柯林斯) 或 冰鎮綠茶特調，以純淨蔬果清香平衡濃雞湯。',
    isDemo: true,
    isPurchasable: false
  }
];

// 雞肉專屬餐酒搭配原則 (科學佐餐核心邏輯)
export const CHICKEN_WINE_PRINCIPLES = [
  {
    title: '原則一：部位顏色與脂肪結構決定單寧高低 (White vs. Dark Meat)',
    desc: '白肉部位（如雞胸、雞里肌）肌紅蛋白少、脂肪低，需搭配低單寧、酸度輕盈明亮的白葡萄酒（如 Sauvignon Blanc, Chablis），避免紅酒單寧摧毀白肉的細膩纖維；而暗色紅肉（如雞腿、雞松阪、七里香）油脂豐沛且肉感結實，能輕鬆駕馭果香豐滿的薄酒萊 (Gamay)、黑皮諾 (Pinot Noir) 甚至辛香的隆河紅酒。',
    items: [
      { meatType: '白肉低脂 (嫩雞胸、雞里肌、三角軟骨)', wineStyle: '未過桶白酒、冷涼果香、高酸度', examples: 'Chardonnay (夏多內)、Sauvignon Blanc、Pinot Grigio' },
      { meatType: '多汁深色肉 (雞腿排、棒棒腿、七里香)', wineStyle: '中輕度單寧紅酒、過桶白酒、粉紅酒', examples: 'Pinot Noir (黑皮諾)、Cru Beaujolais、普羅旺斯粉紅酒' }
    ]
  },
  {
    title: '原則二：料理烹調手法與醬汁主導餐酒搭配 (Sauce & Cooking Method)',
    desc: '「紅配紅、白配白」是源於西餐清淡烹調的經驗法則，但台式與亞洲雞肉料理中「醬汁濃淡與火候」才是選酒核心。清淡白斬雞適合高酸冷冽白酒；檸檬奶油適合過桶白酒；紹興醉雞適合微甜麗絲玲或溫飲花雕；而三杯雞、醬烤雞等濃油赤醬，則以果香成熟的黑皮諾或隆河丘紅酒共鳴最深；香酥炸雞則藉由香檳與啤酒氣泡俐落洗油。',
    items: [
      { method: '原味白斬雞 / 清蒸放山雞', wineFocus: '極高酸度、礦石純淨、襯托原味鮮甜', picks: 'Chablis (夏布利)、Sauvignon Blanc、純米吟釀清酒' },
      { method: '紹興醉雞 / 花雕冷盤', wineFocus: '香氣奔放、圓潤酒體、呼應酒香', picks: 'Off-dry Riesling (微甜麗絲玲)、熟成花雕酒、Gewürztraminer' },
      { method: '台式三杯雞 / 醬烤照燒手羽', wineFocus: '成熟黑櫻桃果香、柔和單寧穿透醬香', picks: 'Pinot Noir (黑皮諾)、Côtes du Rhône (隆河丘)、Chianti' },
      { method: '鹽酥雞 / 香酥炸棒腿', wineFocus: '密集高酸氣泡、物理洗滌雞油焦香', picks: 'Brut Champagne (乾型香檳)、台灣 18 天生啤、Cava' }
    ]
  }
];

// 雞肉「你想怎麼吃？」決策助手題庫與推薦演算法對應矩陣
export const CHICKEN_WIZARD_DATA = {
  textures: [
    {
      id: 'tender',
      label: '軟嫩細緻、無筋不柴',
      desc: '追求如絲綢般軟嫩的白肉極致口感',
      iconName: 'Sparkles',
      recommendedIds: ['chicken-tenderloin-cut', 'chicken-breast-cut', 'chicken-oyster-cut']
    },
    {
      id: 'fatty-juicy',
      label: '肉汁爆漿、油脂噴香',
      desc: '熱愛皮脆肉嫩、大口咬下肉汁溢滿',
      iconName: 'Droplets',
      recommendedIds: ['chicken-boneless-thigh', 'chicken-wings-cut', 'chicken-tail-bonjiri']
    },
    {
      id: 'chewy-firm',
      label: '結實Q彈、骨香肉美',
      desc: '喜歡大口咀嚼、耐啃吮指的土雞腿感',
      iconName: 'HeartPulse',
      recommendedIds: ['chicken-drumstick-cut', 'chicken-boneless-thigh', 'chicken-bone-broth']
    },
    {
      id: 'crunchy',
      label: '爽脆彈牙、下酒神物',
      desc: '熱愛軟骨喀吱口感與極品雞松阪',
      iconName: 'Zap',
      recommendedIds: ['chicken-neck-seseri', 'chicken-cartilage-cut', 'chicken-skin-cut']
    },
    {
      id: 'lean',
      label: '低脂高蛋白、健康減脂',
      desc: '健身控卡、無油膩負擔的優質蛋白',
      iconName: 'Wind',
      recommendedIds: ['chicken-breast-cut', 'chicken-tenderloin-cut', 'chicken-cartilage-cut']
    }
  ],
  cookingMethods: [
    {
      id: 'pan-sear',
      label: '鑄鐵鍋脆皮香煎',
      desc: '冷鍋慢煎皮脆如餅、肉質多汁',
      iconName: 'UtensilsCrossed',
      recommendedIds: ['chicken-boneless-thigh', 'chicken-breast-cut', 'chicken-oyster-cut']
    },
    {
      id: 'bbq-skewer',
      label: '日式燒鳥炭烤串燒',
      desc: '炭火高溫直烤、逼出雞油甘甜',
      iconName: 'Flame',
      recommendedIds: ['chicken-neck-seseri', 'chicken-wings-cut', 'chicken-tail-bonjiri', 'chicken-skin-cut']
    },
    {
      id: 'deep-fry',
      label: '香酥油炸 / 鹽酥唐揚',
      desc: '高溫鎖汁、外酥內嫩金黃噴香',
      iconName: 'Zap',
      recommendedIds: ['chicken-drumstick-cut', 'chicken-wings-cut', 'chicken-cartilage-cut']
    },
    {
      id: 'stew-soup',
      label: '滋補燉湯 / 麻油香菇鍋',
      desc: '慢火長熬慢煲、濃白膠原高湯',
      iconName: 'Soup',
      recommendedIds: ['chicken-bone-broth', 'chicken-drumstick-cut', 'chicken-boneless-thigh']
    },
    {
      id: 'sous-vide',
      label: '低溫舒肥 / 涼拌冷盤',
      desc: '恆溫水浴烹調、完美鎖住水份',
      iconName: 'Clock',
      recommendedIds: ['chicken-breast-cut', 'chicken-tenderloin-cut']
    }
  ]
};

// 雞肉常見問答庫 (FAQ)
export const CHICKEN_FAQS_DATA = [
  {
    q: '台灣肉雞（白肉雞）、土雞與放山雞在體型、肉質與料理用途上有何差異？',
    a: '根據農委會與市場實務統計，三大常見雞種特性分明：1. 白肉雞（肉雞）：生長週期短、體型較小、水分高且價格穩定，肉質極軟嫩但風味較淡，最適合炸雞排、香煎雞腿或低溫舒肥嫩雞胸；2. 土雞：體型較大（專業採購建議選 1.3-1.8 公斤全雞），肉質紮實多肉、纖維感明顯且肉香濃郁，是白斬雞、三杯雞、香菇燉湯與紅燒滷味的首選；3. 放山雞：活動量大、飼養期長（清蒸全雞建議約 1.5 公斤），皮Q肉韌富含膠質，最適合清蒸、白斬與老火煲湯。'
  },
  {
    q: '雞胸肉如何烹調才能真正多汁不乾柴？主廚有何火候秘訣？',
    a: '蛋白質在 68°C 以上會劇烈收縮擠出水分。掌握三大科學秘訣：1. 增加水分保水：烹調前加入雞肉重量約 10% 的水輕拌（打水法）並上薄粉漿鎖水，或浸泡 3% 鹽水醃漬；2. 逆紋切肉：下刀時垂直切斷肌肉纖維，入口軟嫩不塞牙；3. 善用餘溫熟成：水煮時「小火微滾 3 分鐘、關火燜 10-12 分鐘」，以餘溫熟成肉質接近舒肥（舒肥機建議 60°C 烹調 60 分鐘）。安全食用中心溫度為 74°C，建議食物溫度計量測達 72°C 即離火，靠餘溫升至 74°C 剛剛好。'
  },
  {
    q: '吃雞肉一定要搭配白葡萄酒嗎？三杯雞與醬烤雞該如何選酒？',
    a: '完全打破「紅酒配紅肉、白酒配白肉」的傳統迷思！這套原則以西式清淡白肉料理為基礎，但台式與亞洲料理中「醬汁濃淡與烹調方式」才是主導依據：原味白斬雞與清蒸放山雞適合高酸度夏布利 (Chablis) 白酒；花雕醉雞適合微甜麗絲玲或溫飲黃酒；而醬油、黑麻油、老薑與九層塔濃郁的三杯雞、醬烤雞，單寧柔和、果香奔放的黑皮諾 (Pinot Noir) 或隆河丘紅酒能完美呼應醬香；炸雞與烤雞翅則首選香檳或冰涼生啤酒，以氣泡洗刷油脂。'
  },
  {
    q: '雞肉各部位營養差異如何？去皮與帶皮脂肪差多少？內臟與雞骨如何處理？',
    a: '依據衛福部食品成分資料庫（每 100g 數據）：去皮雞胸僅 104 大卡、蛋白質高達 22.4g、脂肪僅 0.9g，帶皮則升至 219 大卡（脂肪 15.1g，脂肪高度集中於皮）；去皮雞腿 165 大卡（脂 8.9g），帶皮雞腿 173 大卡（脂 11.3g）；三節翅則達 210 大卡（脂 14.6g）。雞里肌（雞柳）更是每 100g 蛋白質 24.2g、脂肪僅 0.6g 的增肌極品。內臟處理：雞心與雞肝需以大盆清水旋轉徹底沖出血水除腥，滷製可加薑黃增香；雞骨與雞腳富含膠原蛋白，慢燉最能釋放甘醇黏唇膠質。'
  }
];

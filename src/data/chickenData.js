// 雞肉 8 大分切區域資料（經典家禽與日式職人燒鳥分切體系）
export const CHICKEN_PRIMAL_AREAS = [
  {
    id: 'chicken-breast',
    name: '雞胸部 (胸肉·白肉)',
    enName: 'Chicken Breast',
    color: '#D4A373', // 杏仁暖褐
    textColor: 'text-charcoal',
    extendedCuts: ['舒肥嫩雞胸', '帶皮香煎雞胸排', '法式藍帶雞排'],
    positioning: '白肉之冠、極致低脂高蛋白',
    description: '位於雞隻胸骨兩側，運動量極小，脂肪含量極低且富含優質蛋白質。透過精準低溫舒肥或鹽水浸泡醃漬，能達到不可思議的柔嫩多汁。',
    recommendedCooking: ['低溫舒肥香煎', '溫沙拉冷盤', '日式炸雞排', '清炒雞肉絲'],
    idealWine: ['未過桶 Chardonnay', 'Sauvignon Blanc (白蘇維濃)', 'Pinot Grigio (灰皮諾)']
  },
  {
    id: 'chicken-tender',
    name: '雞柳部 (里肌·Sasami)',
    enName: 'Chicken Tenderloin / Sasami',
    color: '#C67D5A', // 陶土磚橘
    textColor: 'text-white',
    extendedCuts: ['頂級雞里肌條', '日式紫蘇梅肉卷', '炙燒半生熟雞刺身'],
    positioning: '全雞最嫩無筋、細緻清甜',
    description: '緊貼雞胸骨內側的兩條長條肌肉（小里肌），形似柳葉。幾無筋膜與脂肪，肉質是全雞最軟嫩的部位，日式燒鳥名物「ささみ」即此部位。',
    recommendedCooking: ['香酥炸雞柳條', '日式串燒佐芥末', '炙燒溫泉蛋雞肉丼', '輕羹高湯'],
    idealWine: ['Chablis (夏布利夏多內)', '純米吟釀清酒 (Sake)', 'Brut Champagne (乾型香檳)']
  },
  {
    id: 'chicken-thigh',
    name: '雞腿部 (大腿·骨腿)',
    enName: 'Chicken Thigh',
    color: '#9C3D3D', // 熟成胭脂紅
    textColor: 'text-white',
    extendedCuts: ['黃金去骨雞腿排', '照燒雞肉串', '土雞腿切塊'],
    positioning: '肉汁豐沛飽滿、煎炸烤全能之王',
    description: '雞隻髖部以下、膝關節以上之大腿肉，富含微血管與肌紅蛋白。活動量充沛造就紮實彈性與豐潤雞油香，久煎不柴且皮脆肉滑。',
    recommendedCooking: ['脆皮鑄鐵鍋香煎', '日式炭火照燒串', '椒麻雞 / 唐揚炸雞', '法式紅酒燉雞 (Coq au Vin)'],
    idealWine: ['Pinot Noir (黑皮諾)', '桶陳 Chardonnay', 'Beaujolais (薄酒萊加美)']
  },
  {
    id: 'chicken-drumstick',
    name: '棒棒腿 (小腿部)',
    enName: 'Chicken Drumstick',
    color: '#B05D3B', // 琥珀楓木
    textColor: 'text-white',
    extendedCuts: ['香酥鮮嫩棒棒腿', '醬烤小腿棒', '藥膳蔘雞湯腿'],
    positioning: '膠質筋膜濃郁、吮指肉感霸主',
    description: '膝關節以下至腳踝的小腿部位，包覆結實肌肉與粗壯肌腱筋膜。脂肪與骨邊膠原蛋白豐富，極適合高溫慢烤、醬滷或慢火煲湯。',
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
    description: '由翅小腿（一節）、二節翅與翅尖組成，皮下脂肪飽滿且富含明膠蛋白。高溫油炸或直火炙烤時，雞皮油脂快速梅納焦化，脆香無比。',
    recommendedCooking: ['水牛城辣雞翅', '名古屋手羽先串燒', '明太子鑲烤雞翅', '氣炸香檸椒鹽翅'],
    idealWine: ['Cava 氣泡酒', 'Riesling (微甜麗絲玲)', '威士忌蘇打 Highball']
  },
  {
    id: 'chicken-neck',
    name: '雞頸部 (雞松阪·頸肉)',
    enName: 'Chicken Neck Meat (Seseri)',
    color: '#654321', // 炭焙深褐
    textColor: 'text-white',
    extendedCuts: ['彈脆極品雞松阪', '炭烤椒鹽頸肉串', '蔥香熱炒雞松阪'],
    positioning: '稀少老饕部位、彈牙爽脆極品',
    description: '每隻雞僅有一小條的頸部剔骨純肉，整日隨雞首靈活擺動，肌肉紋理緊緻且交織薄薄油脂。口感神似豬松阪般爽脆彈牙，是燒鳥老饕必點。',
    recommendedCooking: ['炭火鹽烤雞松阪', '九層塔快炒', '鐵板炙燒檸檬汁', '氣炸蒜香下酒菜'],
    idealWine: ['日本辛口純米酒', 'Sauvignon Blanc', 'Paloma 龍舌蘭特調']
  },
  {
    id: 'chicken-tail',
    name: '雞尾與背部 (七里香·雞背)',
    enName: 'Chicken Tail & Back (Bonjiri)',
    color: '#8A4A5B', // 紫紅酒梅
    textColor: 'text-white',
    extendedCuts: ['炙烤琥珀七里香', '香酥炸雞屁股', '炭烤老饕雞牡蠣肉'],
    positioning: '豐潤脂肪熔點低、炭烤爆漿香氣',
    description: '雞隻尾椎尾脂腺周圍肌肉，富含豐沛油脂與柔嫩軟組織；背骨兩側的凹窩更藏有珍貴的「牡蠣肉 (Sot-l\'y-laisse)」，濃郁多汁。',
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
    description: '取自胸骨尖端的三角軟骨（Yagen）與膝關節軟骨，富含硫酸軟骨素；搭配緊實富有彈性的雞心與雞胗，呈現乾淨俐落的純粹口感。',
    recommendedCooking: ['日式椒鹽烤三角軟骨', '酥炸雞軟骨下酒', '麻油爆炒雞心胗', '醬烤七味串'],
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
    title: '原則二：料理烹調火候與醬汁主導風味共振 (Crispy Skin & Glazes)',
    desc: '香煎脆皮或日式炭火燒鳥產生的梅納褐變香氣，與經橡木桶陳年的白酒或氣泡酒的烤吐司、堅果風味完美共鳴；而酥炸雞翅或韓式炸雞的飽滿油脂，則需依靠香檳 (Champagne) 或氣泡酒高密度的細緻氣泡以物理方式沖洗舌苔，帶來極致清爽感。',
    items: [
      { method: '香煎脆皮 / 迷迭香烤腿排', wineFocus: '橡木桶烘烤香、奶油乳脂滑順', picks: '桶陳 Chardonnay、Viognier (維歐尼耶)' },
      { method: '日式炭火照燒串 / 醬烤手羽先', wineFocus: '黑櫻桃果香、細膩單寧或強氣泡', picks: 'Pinot Noir、日本純米吟釀清酒、Highball' },
      { method: '酥脆炸雞 / 椒鹽雞軟骨', wineFocus: '高酸度清脆氣泡、柑橘皮香', picks: 'Brut Champagne (乾型香檳)、Cava、白啤酒' },
      { method: '砂鍋燉雞湯 / 人蔘香菇煲', wineFocus: '柔和酸度、旨味鮮甜呼應', picks: '勃根地白酒、溫飲花雕酒、乾型清酒' }
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
    q: '雞胸肉如何烹調才能真正多汁不乾柴？',
    a: '雞胸肉乾柴的主因在於蛋白質在高於 68°C 時會劇烈收縮並擠出細胞水份。三大專業秘訣：1. 鹽水浸泡法（Brining）：烹調前浸泡於 3% 鹽水中 1-2 小時，改變肌球蛋白結構鎖住水分；2. 低溫舒肥（Sous-vide）：以 62°C-64°C 恆溫水浴烹煮 60 分鐘；3. 逆紋厚切：下刀時與肌肉纖維呈垂直切斷，入口立顯柔嫩。'
  },
  {
    q: '居酒屋常聽到的「雞松阪」與「雞牡蠣 (Sot-l\'y-laisse)」是雞的哪裡？',
    a: '兩者皆是燒鳥界的頂級老饕夢幻部位！「雞松阪」是雞脖子兩側去骨的純頸肉（せせり），每隻雞僅有少許幾十克，運動量大帶有如松阪豬般的彈脆咬勁；「雞牡蠣肉（ソリレス）」則是藏在雞背骨盆凹槽處的兩顆圓形肉球，法文原意為「只有傻瓜才會把它留在骨架上」，肉汁飽滿豐腴超越大腿排。'
  },
  {
    q: '吃烤雞只能配白葡萄酒嗎？紅酒該怎麼挑？',
    a: '完全打破迷思！雖然白肉搭白酒是經典，但烤雞的「脆皮」與「深色腿肉」非常適合紅酒。關鍵在於選擇「低到中等單寧、高酸度、果香奔放」的輕紅酒，例如法國勃根地黑皮諾 (Pinot Noir)、薄酒萊 (Gamay) 或義大利奇揚地 (Chianti)。過於厚重的重單寧紅酒（如波爾多卡本內）才會破壞禽肉的細緻感。'
  },
  {
    q: '台灣土雞、仿土雞與肉雞（白肉雞）在部位挑選上有何差異？',
    a: '1. 肉雞（白肉雞）：飼育期短、肉質極度軟嫩多汁但肉味較淡，最適合炸雞、香煎雞排或低溫舒肥嫩雞胸；2. 仿土雞：肉質介於軟與韌之間，適合家常快炒、醬燒或香烤；3. 放山土雞：飼育期長且運動充沛，肌纖維結實富含膠質，最適合長時間慢燉雞湯、白斬雞或藥膳補湯，久熬骨肉不散且湯頭甘醇。'
  }
];

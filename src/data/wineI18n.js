// 牛肉、豬肉、魚類海鮮 3 大品類餐酒搭配原則與料理情境矩陣多語系字典庫 (zh-TW, en, ja)

export const WINE_PRINCIPLES_I18N = {
  beef: {
    'zh-TW': [
      {
        title: '原則一：脂肪厚度決定單寧強度 (Fat & Tannin)',
        desc: '高油花部位（如肋眼、牛小排）富含大量不飽和脂肪與蛋白質，需要高單寧、高酸度的厚重紅酒（如 Cabernet Sauvignon, Nebbiolo）來乳化油脂並軟化單寧澀感；低脂部位（如菲力、板腱）則適合單寧柔滑的紅酒（如 Pinot Noir, Merlot），避免過重的單寧掩蓋細緻肉質。',
        items: [
          { meatType: '高油花 (肋眼、牛小排、牛五花)', wineStyle: '重單寧、深色水果香、高酸度', examples: 'Cabernet Sauvignon、Nebbiolo (Barolo)、Syrah' },
          { meatType: '極嫩低脂 (菲力、腰脊、板腱)', wineStyle: '低中單寧、紅色莓果香、優雅酸度', examples: 'Pinot Noir (黑皮諾)、Merlot (梅洛)、Sangiovese' }
        ]
      },
      {
        title: '原則二：料理火候與醬汁主導風味搭配 (Cooking & Sauce)',
        desc: '直火炭烤或長時間煙燻產生的梅納褐變香氣，與經橡木桶熟成帶有香草、煙燻、黑胡椒風味的葡萄酒形成絕妙共鳴；紅酒慢燉或醬香濃郁的牛肉麵，則需酸度明亮、帶有泥土與草本香氣的酒款穿透濃稠醬汁。',
        items: [
          { method: '直火炭烤 / 煙燻 BBQ', wineFocus: '橡木桶香、黑胡椒辛香、成熟果醬', picks: 'Zinfandel、Shiraz (澳洲)、Malbec' },
          { method: '火鍋 / 壽喜燒 / 甜鹹醬', wineFocus: '果香奔放、柔順單寧或氣泡酒', picks: 'Grenache、乾型氣泡酒 (Brut Rosé)' },
          { method: '台式紅燒 / 滷汁牛肉麵', wineFocus: '辛香草本、明亮酸度', picks: 'Côtes du Rhône (隆河丘)、Sangiovese' },
          { method: '法式紅酒燉牛肉', wineFocus: '櫻桃果酸、中高酒體', picks: 'Sangiovese (Chianti)、Barbera' }
        ]
      }
    ],
    'en': [
      {
        title: 'Principle 1: Fat Content Dictates Tannin Power',
        desc: 'Marbled cuts (Ribeye, Short Ribs) are packed with unctuous fat and proteins requiring structured, high-tannin reds (Cabernet Sauvignon, Nebbiolo) to emulsify lipids and soften astringency. Lean cuts (Filet Mignon, Top Blade) excel with silky, delicate tannins (Pinot Noir, Merlot) that do not overpower fine meat fibers.',
        items: [
          { meatType: 'Rich Marbling (Ribeye, Short Rib, Plate)', wineStyle: 'Heavy Tannins, Dark Berries, Crisp Acidity', examples: 'Cabernet Sauvignon, Nebbiolo (Barolo), Syrah' },
          { meatType: 'Lean & Tender (Filet Mignon, Loin, Flat Iron)', wineStyle: 'Low-Med Tannin, Red Berry, Elegant Body', examples: 'Pinot Noir, Merlot, Sangiovese' }
        ]
      },
      {
        title: 'Principle 2: Cooking Intensity & Sauces Guide Flavor Synergy',
        desc: 'Charcoal flames and smoky Maillard crusts harmonize with oak-aged reds featuring vanilla, toasted wood, and black pepper notes. Rich stews or Taiwanese beef noodle broth demand bright acidity and earthy herbs to cut through savory collagen richness.',
        items: [
          { method: 'Charcoal BBQ / Smoked Grills', wineFocus: 'Toasted Oak, Peppery Spice, Ripe Jam', picks: 'Zinfandel, Australian Shiraz, Malbec' },
          { method: 'Shabu Shabu / Sukiyaki / Sweet Glaze', wineFocus: 'Fruit Forward, Soft Tannins or Bubbles', picks: 'Grenache, Dry Rosé Champagne (Brut Rosé)' },
          { method: 'Braised Beef Noodles / Soy Stews', wineFocus: 'Herbal Spice, High Refreshing Acidity', picks: 'Côtes du Rhône, Sangiovese' },
          { method: 'Classic Boeuf Bourguignon', wineFocus: 'Cherry Acidity, Medium-Full Body', picks: 'Sangiovese (Chianti), Barbera' }
        ]
      }
    ],
    'ja': [
      {
        title: '原則一：脂肪の厚みがタンニンの強さを決める (Fat & Tannin)',
        desc: 'リブロースやカルビなど霜降りの豊かな部位は、力強いタンニンと高酸度を持つ重口赤ワイン（カベルネ、ネッビオーロ）が脂を乳化させ渋みをまろやかにします。一方、ヒレやミスジなど赤身部位は滑らかなピノ・ノワールやメルローが繊細な肉質を引き立てます。',
        items: [
          { meatType: '霜降り・サシ (リブロース、ショートリブ、牛バラ)', wineStyle: '重厚なタンニン、黒果実香、しっかりした酸', examples: 'カベルネ・ソーヴィニヨン、バローロ (Nebbiolo)、シラー' },
          { meatType: '赤身・極軟 (ヒレ、サーロイン、ミスジ)', wineStyle: '滑らかな渋み、赤系ベリー香、優雅な酸味', examples: 'ピノ・ノワール (Pinot Noir)、メルロー、サンジョヴェーゼ' }
        ]
      },
      {
        title: '原則二：調理の火加減とソースがペアリングを主導 (Cooking & Sauce)',
        desc: '直火炭火焼きやスモークによる香ばしい焦げ目は、オーク樽熟成のバニラや黒胡椒のアロマと美しく共鳴。赤ワイン煮込みや濃厚な醤油スープには、明るい酸味とハーブのニュアンスを持つワインがソースの重さを切り抜けます。',
        items: [
          { method: '炭火BBQ焼肉・スモーク', wineFocus: '樽香、ブラックペッパー、熟成ジャム', picks: 'ジンファンデル、豪州シラーズ、マルベック' },
          { method: 'しゃぶしゃぶ・すき焼き', wineFocus: '華やかな果実味、ソフトな渋み、泡', picks: 'グルナッシュ、辛口ロゼスパークリング' },
          { method: '台湾牛肉麺・醤油煮込み', wineFocus: 'スパイスハーブ、キレのある酸', picks: 'コート・デュ・ローヌ、サンジョヴェーゼ' },
          { method: '牛肉の赤ワイン煮込み', wineFocus: 'チェリーの酸味、ミディアムフルボディ', picks: 'キアンティ (Chianti)、バルベーラ' }
        ]
      }
    ]
  },
  pork: {
    'zh-TW': [
      {
        title: '原則一：豬肉是白肉與紅肉的平衡橋樑 (White vs Light Red)',
        desc: '豬肉肌紅蛋白低於牛肉，但油脂豐厚度極高。料理方式決定了搭配的主軸：白切或香煎里肌宜搭酒體飽滿的乾型白酒或粉紅酒；控肉、叉燒或肋排則需果香奔放、單寧圓潤的中輕度紅酒，既解油膩又不壓過鮮甜。',
        items: [
          { meatType: '清爽低脂 (小里肌、大里肌、後腿肉)', wineStyle: '清新果酸、未過桶白酒、輕盈黑皮諾', examples: 'Chardonnay (未過桶)、Pinot Noir、Pinot Gris' },
          { meatType: '肥美油脂 (五花肉、松阪豬、蹄膀)', wineStyle: '微甜高酸、果香粉紅酒、爽快氣泡酒', examples: 'Off-dry Riesling (微甜麗絲玲)、Cava、Rosé' }
        ]
      },
      {
        title: '原則二：醬汁甜度、辛香與煙燻主導餐酒共振 (Sauce & Smoke)',
        desc: '台式醬油紅燒、冰糖滷汁或美式 BBQ 甜辣醬，極度忌諱高單寧澀口紅酒；具備高酸度以切割豬脂、帶微甜以呼應糖香，或具備泥土草本辛香的酒款是完美解方。',
        items: [
          { method: '美式 BBQ 煙燻肋排 / 蜜汁叉燒', wineFocus: '果香奔放、成熟黑李、煙燻香草', picks: 'Zinfandel (金芬黛)、Shiraz、Grenache' },
          { method: '日式炸豬排 / 香煎豬排', wineFocus: '爽快氣泡、清新白果酸、俐落去油', picks: '冰涼啤酒 (Lager)、未過桶 Chardonnay、清酒' },
          { method: '台式紅燒 / 醬滷肉燥', wineFocus: '活潑果酸、柔和單寧', picks: 'Gamay (薄酒萊)、Sangiovese' },
          { method: '火腿 / 鹹香醃肉冷盤', wineFocus: '高酸氣泡、果香生津', picks: 'Champagne、Cava、Prosecco' }
        ]
      }
    ],
    'en': [
      {
        title: 'Principle 1: Pork Bridges White and Light Red Wines',
        desc: 'Pork possesses lower myoglobin than beef but superior intramuscular fat. Delicate seared loins thrive with full-bodied dry white or rosé, whereas rich Dongpo belly and ribs call for vibrant, fruit-forward reds with supple tannins.',
        items: [
          { meatType: 'Lean & Tender (Tenderloin, Loin Chops, Ham)', wineStyle: 'Crisp Acidity, Unoaked Whites, Silky Pinot Noir', examples: 'Unoaked Chardonnay, Pinot Noir, Pinot Gris' },
          { meatType: 'Fatty & Collagen (Pork Belly, Matsusaka Jowl, Hock)', wineStyle: 'Off-Dry Acidity, Fruity Rosé, Dry Bubbles', examples: 'Off-dry Riesling, Cava, Dry Provence Rosé' }
        ]
      },
      {
        title: 'Principle 2: Glaze Sweetness, Smoke & Spices Dictate Pairing',
        desc: 'Soy-braised pork, caramelized char siu, and American BBQ sauces clash with harsh tannins. Wines with bright acidity to cut grease and subtle residual sweetness or herbal depth achieve effortless resonance.',
        items: [
          { method: 'Smoked BBQ Ribs / Honey Glazed Char Siu', wineFocus: 'Jammy Dark Fruit, Sweet Vanilla, Smoke', picks: 'Zinfandel, Shiraz, Grenache' },
          { method: 'Crispy Tonkatsu / Pan-Seared Chops', wineFocus: 'Crisp Carbonation, Green Apple Acid', picks: 'Chilled Lager Beer, Unoaked Chardonnay, Junmai Sake' },
          { method: 'Braised Dongpo Belly / Lu Rou Sauce', wineFocus: 'Lively Red Cherry Acid, Soft Tannins', picks: 'Gamay (Beaujolais), Sangiovese' },
          { method: 'Cured Ham / Charcuterie Board', wineFocus: 'Effervescent High Acidity, Mineral Crisp', picks: 'Champagne, Cava, Prosecco' }
        ]
      }
    ],
    'ja': [
      {
        title: '原則一：豚肉は白ワインと軽口赤ワインの架け橋 (White vs Light Red)',
        desc: '豚肉は牛肉よりもミオグロビンが少ないですが、脂の甘みが豊かです。ヒレのソテーにはふくよかな辛口白やロゼが、角煮やスペアリブには果実味豊かで渋みの穏やかな軽口赤がベストマッチします。',
        items: [
          { meatType: 'ヘルシー赤身 (ヒレ、ロース、モモ)', wineStyle: 'フレッシュな果実酸、樽なし白、軽快なピノ', examples: '樽なしシャルドネ、ピノ・ノワール、ピノ・グリ' },
          { meatType: 'ジューシー脂身 (豚バラ、トントロ、豚足)', wineStyle: '微甘口＆高酸度、フルーティーロゼ、爽快な泡', examples: 'リースリング (Riesling)、カヴァ (Cava)、ロゼワイン' }
        ]
      },
      {
        title: '原則二：タレの甘み・スパイス・スモークが調和を決定 (Sauce & Smoke)',
        desc: '醤油ベースの角煮やBBQソースの甘辛さには、渋い赤ワインは厳禁。脂を切る高い酸味や、タレの甘みに寄り添うフルーティーなワイン、キレのあるビールや紹興酒が最高です。',
        items: [
          { method: 'スモークスペアリブ・チャーシュー', wineFocus: '豊かな果実味、プラムジャム、スパイス', picks: 'ジンファンデル、シラーズ、グルナッシュ' },
          { method: 'とんかつ・厚切りポークソテー', wineFocus: '爽快な炭酸、リンゴの酸味、油切れ', picks: '生ビール (Lager)、辛口白ワイン、特別純米酒' },
          { method: '豚の角煮・東坡肉・ルーロー', wineFocus: '活き活きとしたチェリー酸、滑らかなタンニン', picks: 'ガメイ (ボジョレー)、サンジョヴェーゼ' },
          { method: '生ハム・サラミ盛り合わせ', wineFocus: '高酸味の泡、塩味を引き立てるミネラル', picks: 'シャンパーニュ、カヴァ、プロセッコ' }
        ]
      }
    ]
  },
  fish: {
    'zh-TW': [
      {
        title: '原則一：魚油多寡與鮮味強度決定酸度與酒體 (Fat & Acidity)',
        desc: '海鮮搭酒最忌諱高單寧厚重紅酒（單寧與鐵離子會催化魚油氧化產生金屬鐵鏽魚腥味）。細緻白肉魚配冷冽高酸白酒（Chablis / Pinot Grigio）；高油脂魚類（鮭魚、鮪魚大腹、鯖魚）則需桶陳 Chardonnay、粉紅香檳或純米大吟釀切除油膩。',
        items: [
          { meatType: '細緻白肉型 (午仔魚、鱸魚、白鯧、石斑)', wineStyle: '純淨礦石感、明亮柑橘果酸、吟釀清酒', examples: 'Chablis (夏布利)、Sauvignon Blanc、Albariño、純米吟釀' },
          { meatType: '肥美高脂型 (鮪魚大腹、鮭魚菲力、虱目魚肚、下巴)', wineStyle: '桶陳圓潤白酒、高酸氣泡酒、純米大吟釀', examples: 'Oaked Chardonnay (過桶夏多內)、Brut Rosé 香檳、純米大吟釀' }
        ]
      },
      {
        title: '原則二：清蒸鮮甜 vs 鹽烤煙燻主導佐餐方向 (Steam vs Char)',
        desc: '原汁原味的清蒸與生食刺身，以「不干擾魚肉天然鮮甜」的極淨白酒為尊；炭火鹽烤、香煎脆皮或砂鍋煲湯，則需微氣泡、辛口清酒或帶有橡木堅果香的酒款呼應焦香。',
        items: [
          { method: '清蒸鮮魚 / 蔥油樹子', wineFocus: '白花香氣、冷冽礦物感、極致純淨', picks: 'Albariño、Chablis (夏布利)、吟釀清酒' },
          { method: '居酒屋鹽烤魚下巴 / 鯖魚一夜干', wineFocus: '超高酸度、俐落微氣泡、辛口洗油', picks: 'Txakoli、Vinho Verde (綠酒)、辛口本釀造清酒' },
          { method: '脆皮奶油煎魚排 (鮭魚 / 土魠)', wineFocus: '烤橡木香、奶油堅果調、圓潤酒體', picks: '桶陳 Chardonnay、Pinot Noir (黑皮諾)' },
          { method: '野生烏魚子 / 炙燒海味', wineFocus: '細緻氣泡、堅果酵母香、氧化甜美', picks: 'Vintage Champagne、Fino 雪莉酒、金門高粱' }
        ]
      }
    ],
    'en': [
      {
        title: 'Principle 1: Fat Content & Umami Dictate Wine Acidity & Body',
        desc: 'Avoid heavy red wine tannins at all costs—ferrous iron ions catalyze fish oils into a metallic rust odor. Delicate white fish pairs with high-acid whites (Chablis, Pinot Grigio), while rich fatty fish (Salmon, Otoro, Mackerel) requires oak-aged Chardonnay, Rosé Champagne, or Junmai Daiginjo.',
        items: [
          { meatType: 'Delicate White Fish (Threadfin, Sea Bass, Pomfret, Grouper)', wineStyle: 'Crisp Minerals, Bright Citrus, Clean Ginjo Sake', examples: 'Chablis, Sauvignon Blanc, Albariño, Junmai Ginjo' },
          { meatType: 'Rich & Fatty (Tuna Otoro, Salmon, Milkfish Belly, Collar)', wineStyle: 'Oaked Body, High-Acid Bubbles, Daiginjo Sake', examples: 'Oaked Chardonnay, Brut Rosé Champagne, Junmai Daiginjo' }
        ]
      },
      {
        title: 'Principle 2: Steamed Purity vs. Salt-Grilled Char',
        desc: 'Steamed and raw seafood require pure, undisturbed whites to let marine sweetness sing. Salt-grilled collars, crispy pan-seared fillets, or claypot fish heads need lively effervescence, dry sake, or nutty barrel aromatics to match the Maillard crust.',
        items: [
          { method: 'Steamed Fish / Scallion & Ginger Glaze', wineFocus: 'White Blossom, Chilled Slate Minerals, Pure Acidity', picks: 'Albariño, Chablis, Junmai Ginjo Sake' },
          { method: 'Izakaya Salt-Grilled Collar / Mackerel', wineFocus: 'Ultra-High Acid, Tight Micro-Bubbles, Dry Cleanser', picks: 'Txakoli, Vinho Verde, Dry Honjozo Sake' },
          { method: 'Crispy Butter Pan-Seared Fillet (Salmon / Kingfish)', wineFocus: 'Toasted Oak, Creamy Nutty Notes, Rounded Body', picks: 'Oaked Chardonnay, Pinot Noir' },
          { method: 'Wild Bottarga (Mullet Roe) / Torched Seafood', wineFocus: 'Fine Carbonation, Nutty Yeast, Oxidative Harmony', picks: 'Vintage Champagne, Fino Sherry, Kaoliang' }
        ]
      }
    ],
    'ja': [
      {
        title: '原則一：魚油の量と旨味の強さが酸味とボディを決める (Fat & Acidity)',
        desc: '海鮮に重口赤ワインは絶対NG（タンニンと鉄分が魚油と反応し生臭さを発生させます）。淡白な白身魚にはキリッとした高酸白ワイン（シャブリ、ピノ・グリージョ）を、脂の乗ったサーモンや大トロには樽熟シャルドネや大吟醸、ロゼシャンパンが調和します。',
        items: [
          { meatType: '繊細な白身魚 (ミナミコノシロ、スズキ、マナガツオ、ハタ)', wineStyle: 'ピュアなミネラル、柑橘の酸味、純米吟醸', examples: 'シャブリ (Chablis)、ソーヴィニヨン・ブラン、純米吟醸' },
          { meatType: '極上脂身魚 (大トロ、サーモン、ハラス、カマ)', wineStyle: '樽熟白ワイン、高酸度スパークリング、純米大吟醸', examples: '樽熟シャルドネ、ロゼシャンパーニュ、純米大吟醸' }
        ]
      },
      {
        title: '原則二：清蒸・刺身の純度 vs 塩焼き・ソテーの香ばしさ (Steam vs Char)',
        desc: '刺身や清蒸には魚本来の甘みを損なわないピュアな白ワインや吟醸酒を。炭火塩焼きやバターソテーには、微発泡の白ワインや辛口清酒、樽香のあるワインが焦げ目と脂を包み込みます。',
        items: [
          { method: '鮮魚の清蒸・蒸し物・ネギ油', wineFocus: '白い花のアロマ、冷涼なミネラル感、極めて純粋', picks: 'アルバリーニョ、シャブリ、純米吟醸酒' },
          { method: '居酒屋の塩焼きカマ・サバの一夜干し', wineFocus: '超高酸味、爽快な微炭酸、辛口の油切り', picks: 'チャコリ (Txakoli)、ヴィーニョ・ヴェルデ、辛口本醸造' },
          { method: '皮パリバターソテー (サーモン・サワラ)', wineFocus: 'オーク樽香、香ばしいナッツ感、まろやかボディ', picks: '樽熟シャルドネ、ピノ・ノワール (赤)' },
          { method: '極上からすみ (烏魚子)・炙り海鮮', wineFocus: '繊細な泡、酵母のトースト香、熟成の旨味', picks: 'ヴィンテージシャンパン、フィノ・シェリー、台湾高粱酒' }
        ]
      }
    ]
  }
};

export const COOKING_MATRICES_I18N = {
  beef: {
    'zh-TW': [
      {
        method: '火鍋涮燙 / 日式壽喜燒 / 麻辣鍋',
        meatExamples: '牛五花、薄切肋眼、翼板薄片',
        characteristics: '薄切快速熟化、油脂迅速釋放、甜鹹壽喜燒醬或香辣牛油高湯',
        principles: '涮牛肉與麻辣鍋油脂豐厚，台灣金牌/18天生啤酒的爽快氣泡或冰鎮酸梅酒能極速解辣消脂；若搭葡萄酒宜選果香甜美的 Grenache 或乾型粉紅氣泡酒。',
        recommendedWines: [
          '🍺 台灣 18 天生啤酒 / 金牌啤酒 (極速洗油解辣)',
          '🍷 Grenache / Garnacha (果香甜美·柔和單寧)',
          '🍾 Brut Rosé (粉紅氣泡酒 / 香檳)',
          '🍶 辛口本釀造清酒 (Dry Sake)'
        ],
        tastingNotes: '爽快麥芽氣泡 · 鮮甜草莓櫻桃 · 俐落生津解膩'
      },
      {
        method: '原味香煎 / 奶油淋煎牛排',
        meatExamples: '肋眼、紐約客、沙朗、菲力',
        characteristics: '焦化梅納褐變外殼、奶油香、濃郁天然肉汁',
        principles: '高油花選高單寧 Cabernet 或精釀黑啤酒；細緻菲力選柔順 Merlot 或 Pinot Noir。',
        recommendedWines: [
          '🍷 Cabernet Sauvignon (卡本內蘇維濃)',
          '🍷 Merlot (梅洛) / Pinot Noir (黑皮諾)',
          '🍺 司陶特黑啤酒 / 精釀 IPA (Stout / IPA)'
        ],
        tastingNotes: '深色黑醋栗 · 烤橡木桶香 · 圓潤單寧骨架'
      },
      {
        method: '直火炭烤 / 柴燒煙燻 BBQ',
        meatExamples: '帶骨牛小排、翼板、Brisket 前胸',
        characteristics: '木炭香氣、焦香外殼、油脂滴落煙燻氣息',
        principles: '炭香與煙燻感需對應帶黑胡椒、辛香料的重酒體紅酒或冰凍金門高粱酒，激發焦香甜味。',
        recommendedWines: [
          '🍷 Syrah / Shiraz (希哈 / 煙燻黑胡椒)',
          '🥃 金門 58 度高粱酒 (冷凍凍飲·甘冽回甘)',
          '🍷 Zinfandel (金芬黛·黑李果醬)',
          '🍺 琥珀愛爾精釀啤酒 (Amber Ale)'
        ],
        tastingNotes: '黑胡椒辛香 · 煙燻皮革 · 穀物高粱甘醇'
      },
      {
        method: '台式紅燒 / 醬香牛肉麵 / 滷牛腱',
        meatExamples: '牛腱心、前胸牛腩、牛肋條',
        characteristics: '純釀醬油、八角、花椒、蔥薑蒜、中藥辛香與膠質濃汁',
        principles: '台式滷汁的醬香與八角，與陳年台灣紹興酒、南法隆河丘的草本辛香料形成絕妙共鳴。',
        recommendedWines: [
          '🍶 台灣陳年特級紹興酒 (溫飲·醬香加乘)',
          '🍷 Côtes du Rhône (法國隆河丘紅酒)',
          '🍷 Sangiovese (Chianti 奇揚地)',
          '🍺 台灣小麥啤酒 (Wheat Beer)'
        ],
        tastingNotes: '地中海百里香 · 焦糖麥香 · 沉穩陳年醬香'
      },
      {
        method: '法式紅酒慢燉牛肉 (Boeuf Bourguignon)',
        meatExamples: '牛腱、牛肋條、牛腩、牛肩胛',
        characteristics: '番茄糊、紅酒酸香、洋蔥胡蘿蔔甘甜、膠原蛋白稠化',
        principles: '高酸度、帶櫻桃與草本氣息的紅酒能穿透濃稠醬汁，提升燉肉的鮮甜感。',
        recommendedWines: [
          '🍷 Sangiovese (桑嬌維塞)',
          '🍷 Pinot Noir (勃根地黑皮諾)',
          '🍷 Barbera (巴貝拉)'
        ],
        tastingNotes: '明亮鮮櫻桃酸度 · 泥土蕈菇 · 均衡骨架'
      }
    ],
    'en': [
      {
        method: 'Hotpot Shabu Shabu / Sukiyaki / Mala Broth',
        meatExamples: 'Short Plate, Thin Ribeye, Flat Iron Slices',
        characteristics: 'Quick cooking, instant fat release, sweet savory sukiyaki glaze or spicy tallow broth',
        principles: 'Taiwan 18-Day Draft Beer or chilled sparkling wine cuts greasy heat instantly; fruity Grenache or Brut Rosé bridges sweet glazes.',
        recommendedWines: [
          '🍺 Taiwan 18-Day Draft Beer / Gold Medal Lager',
          '🍷 Grenache / Garnacha (Fruity & Soft Tannin)',
          '🍾 Brut Rosé (Sparkling Wine / Champagne)',
          '🍶 Dry Junmai Sake'
        ],
        tastingNotes: 'Crisp Malt Bubbles · Sweet Strawberry & Cherry · Palate Cleansing'
      },
      {
        method: 'Pan-Seared & Butter-Basted Steaks',
        meatExamples: 'Ribeye, NY Strip, Sirloin, Filet Mignon',
        characteristics: 'Caramelized Maillard crust, aromatic butter, rich natural jus',
        principles: 'High marbling demands Cabernet tannins or craft Stout; lean Filet pairs luxuriously with silky Merlot or Pinot Noir.',
        recommendedWines: [
          '🍷 Cabernet Sauvignon',
          '🍷 Merlot / Pinot Noir',
          '🍺 Craft Stout / West Coast IPA'
        ],
        tastingNotes: 'Dark Cassis · Toasted French Oak · Supple Tannic Spine'
      },
      {
        method: 'Charcoal Grilling / Texas Smoked BBQ',
        meatExamples: 'Bone-in Short Ribs, Flat Iron, Smoked Brisket',
        characteristics: 'Charcoal smoke, crispy charred edges, rendered beef tallow',
        principles: 'Smoky char pairs seamlessly with peppery Syrah/Shiraz or frozen Kinmen Kaoliang for grain sweetness.',
        recommendedWines: [
          '🍷 Syrah / Shiraz (Smoky Black Pepper)',
          '🥃 58° Kinmen Kaoliang (Ice-Chilled Frozen Shot)',
          '🍷 Zinfandel (Ripe Blackberry Jam)',
          '🍺 Craft Amber Ale'
        ],
        tastingNotes: 'Cracked Black Pepper · Toasted Leather · Grain Sweetness'
      },
      {
        method: 'Taiwanese Red-Braised Beef Noodle & Stewed Shank',
        meatExamples: 'Shank Heart, Brisket Stew, Rib Finger',
        characteristics: 'Aged soy sauce, star anise, Sichuan pepper, scallions, rich collagen broth',
        principles: 'Star anise and soy depth find timeless harmony with warm Puli Shaoxing wine or herbal Côtes du Rhône.',
        recommendedWines: [
          '🍶 Aged Taiwanese Premium Shaoxing Wine',
          '🍷 Côtes du Rhône (Southern France Red)',
          '🍷 Sangiovese (Chianti Classico)',
          '🍺 Taiwanese Craft Wheat Beer'
        ],
        tastingNotes: 'Provençal Thyme · Caramelized Malt · Aged Umami'
      },
      {
        method: 'French Boeuf Bourguignon (Red Wine Braised)',
        meatExamples: 'Beef Shank, Rib Finger, Chuck Pot Roast',
        characteristics: 'Tomato paste, reduced red wine acidity, sweet root vegetables, rich gelatin',
        principles: 'High-acid reds with cherry and earthy mushroom notes pierce through rich reductions to elevate beef sweetness.',
        recommendedWines: [
          '🍷 Sangiovese (Chianti)',
          '🍷 Pinot Noir (Burgundy)',
          '🍷 Barbera d\'Asti'
        ],
        tastingNotes: 'Vibrant Sour Cherry · Forest Floor & Truffle · Balanced Acid Spine'
      }
    ],
    'ja': [
      {
        method: 'しゃぶしゃぶ・すき焼き・麻辣火鍋',
        meatExamples: '牛バラ薄切り、リブロース、ミスジスライス',
        characteristics: '素早い火入れ、ジューシーな脂の溶出、甘辛い割り下や辛口スープ',
        principles: '台湾18天生ビールやすっきりした辛口ロゼスパークリングが脂っこさと辛味を瞬時に中和。甘辛いすき焼きには果実味豊かなグルナッシュが合います。',
        recommendedWines: [
          '🍺 台湾18天生ビール / プレミアムラガー',
          '🍷 グルナッシュ / ガルナッチャ (華やかな果実味)',
          '🍾 辛口ロゼスパークリング (Brut Rosé)',
          '🍶 辛口本醸造清酒 (Dry Sake)'
        ],
        tastingNotes: '爽快な麦芽炭酸 · 熟したベリー香 · キレのある後味'
      },
      {
        method: '厚切りステーキ・バターアロゼ',
        meatExamples: 'リブロース、サーロイン、ヒレ肉',
        characteristics: 'メイラード反応の香ばしい焼き目、バターのアロマ、濃厚な肉汁',
        principles: '霜降りリブロースにはカベルネ・ソーヴィニヨン、繊細なヒレには滑らかなメルローやピノ・ノワールが極上のマリアージュを生み出します。',
        recommendedWines: [
          '🍷 カベルネ・ソーヴィニヨン (Cabernet Sauvignon)',
          '🍷 メルロー / ピノ・ノワール (Pinot Noir)',
          '🍺 スタウト黒ビール / クラフトIPA'
        ],
        tastingNotes: 'カシスとブラックベリー · 芳醇な樽香 · 上質なタンニン'
      },
      {
        method: '炭火BBQ焼肉・スモーク料理',
        meatExamples: '骨付きショートリブ、ミスジ、ブリスケット',
        characteristics: '炭火の煙、香ばしいカリカリの焦げ目、凝縮した旨味',
        principles: '黒胡椒やスパイス感香るシラーズや、氷点下に冷やした金門高粱酒が炭火の香ばしい甘みを引き出します。',
        recommendedWines: [
          '🍷 シラー / シラーズ (Syrah / Shiraz)',
          '🥃 金門58度高粱酒 (冷凍ショット)',
          '🍷 ジンファンデル (Zinfandel)',
          '🍺 アンバーエールビール'
        ],
        tastingNotes: 'ブラックペッパー · スモーキーレザー · 芳醇な穀物香'
      },
      {
        method: '台湾風紅焼牛肉麺・牛スネ煮込み',
        meatExamples: '牛スネ肉、牛すじ、牛バラ煮込み',
        characteristics: '熟成醤油、八角、花椒、生姜、漢方スパイスとコラーゲンスープ',
        principles: '八角や醤油の風味には、温めた熟成紹興酒や南仏ローヌのハーブ香る赤ワインが驚くほど調和します。',
        recommendedWines: [
          '🍶 台湾特級熟成紹興酒 (燗酒)',
          '🍷 コート・デュ・ローヌ (フランス赤)',
          '🍷 サンジョヴェーゼ (キアンティ)',
          '🍺 台湾ヴァイツェン白ビール'
        ],
        tastingNotes: '地中海タイム · カラメルモルト · 深い熟成旨味'
      },
      {
        method: '牛肉の赤ワイン煮込み (ブッフ・ブルギニョン)',
        meatExamples: '牛スネ肉、牛肩ロース、ショートリブ',
        characteristics: 'トマト、煮詰めた赤ワインの酸味、香味野菜の甘み、濃厚ソース',
        principles: 'チェリーの酸味とキノコや土の香りを持つ赤ワインが、濃厚なソースの重さを切り抜けて肉の旨味を昇華。',
        recommendedWines: [
          '🍷 サンジョヴェーゼ (Chianti)',
          '🍷 ブルゴーニュ ピノ・ノワール',
          '🍷 バルベーラ (Barbera)'
        ],
        tastingNotes: '鮮やかなチェリーの酸 · トリュフと森の香り · 端正な骨格'
      }
    ]
  },
  pork: {
    'zh-TW': [
      {
        method: '台式焢肉 / 東坡肉 / 滷肉 (甜鹹醬香)',
        meatExamples: '五花三層肉、前腿肉、蹄膀',
        characteristics: '冰糖紅燒、醬油醇香、八角蔥薑、豐富軟爛油脂',
        principles: '高酸度白酒如檸檬汁般切除油脂；台味搭配以台灣特級紹興酒或 18 天生啤酒最為道地痛快！',
        recommendedWines: [
          '🍶 台灣埔里特級紹興酒 (溫潤醇厚)',
          '🍺 台灣 18 天生啤酒 (爽脆氣泡洗油)',
          '🍷 Off-dry Riesling (微甜麗絲玲)',
          '🍾 Brut Champagne (香檳)'
        ],
        tastingNotes: '鮮脆青蘋果 · 醇厚黃酒香 · 俐落酸爽氣泡'
      },
      {
        method: '美式煙燻 BBQ 烤肋排 / 蜜汁叉燒',
        meatExamples: '豬肋排、梅花肉、厚切五花',
        characteristics: 'BBQ 焦糖化甜辣醬汁、木炭煙燻、表面焦脆邊',
        principles: '甜鹹煙燻醬汁需要果香奔放的紅酒、精釀 IPA 或清爽日式梅酒承接。',
        recommendedWines: [
          '🍷 Zinfandel (金芬黛·果醬甜香)',
          '🍺 精釀美式 IPA (柑橘酒花香)',
          '🥃 冰鎮本格青梅酒 (酸甜開胃)',
          '🍷 Shiraz (希哈)'
        ],
        tastingNotes: '成熟黑李果醬 · 烤橡木香草 · 辛香黑胡椒'
      },
      {
        method: '日式炸豬排 / 香煎大里肌',
        meatExamples: '大里肌、小里肌 (腰內肉)',
        characteristics: '酥脆金黃麵衣、純淨緊實瘦肉、豬排沾醬',
        principles: '避免高單寧紅酒壓過纖細肉質；冰涼生啤酒、未過桶夏多內或清酒能完美化解炸物油膩。',
        recommendedWines: [
          '🍺 冰鎮拉格生啤酒 (Lager / 爽快解炸物)',
          '🍷 未過桶 Chardonnay (夏多內)',
          '🍶 特別純米清酒 (Special Junmai)',
          '🍷 Pinot Noir (黑皮諾)'
        ],
        tastingNotes: '青蘋果柑橘 · 優雅清爽 · 圓潤不澀口'
      },
      {
        method: '鹽烤松阪豬 / 蒜泥白切嘴邊肉',
        meatExamples: '松阪豬 (頸頰肉)、豬頰嘴邊肉',
        characteristics: '霜降脆彈油脂、簡單椒鹽或蒜泥醬油提鮮',
        principles: '脆彈口感與清甜脂香，適合台灣生啤酒、金門高粱或果香清亮的粉紅酒。',
        recommendedWines: [
          '🍺 台灣金牌啤酒 / 18 天生啤',
          '🥃 金門 38 度高粱酒 (凍飲提鮮)',
          '🍷 普羅旺斯 Dry Rosé (粉紅酒)',
          '🍶 吟釀清酒'
        ],
        tastingNotes: '鮮紅莓果 · 白花清香 · 活潑開胃'
      },
      {
        method: '花生燉豬腳湯 / 筍乾大封肉 (濃稠膠質)',
        meatExamples: '豬蹄 (豬腳)、蹄膀 (腿庫)',
        characteristics: '乳白黏唇膠原高湯、厚實豬皮油脂',
        principles: '黏唇膠質需要高酸白酒、氣泡酒或辛口清酒瞬間洗刷味蕾，恢復清爽。',
        recommendedWines: [
          '🍷 Riesling (麗絲玲)',
          '🍶 辛口本釀造清酒 (Dry Sake)',
          '🍾 Cava 氣泡酒'
        ],
        tastingNotes: '明快高酸度 · 爽脆氣泡 · 生津去膩'
      }
    ],
    'en': [
      {
        method: 'Braised Dongpo Pork Belly / Lu Rou Stew',
        meatExamples: '5-Layer Pork Belly, Picnic Shoulder, Pork Hock',
        characteristics: 'Rock sugar soy reduction, star anise, rich melting gelatinous fat',
        principles: 'High-acid off-dry Riesling cuts grease like lemon; local pairing with warm Shaoxing or draft beer is unbeatable.',
        recommendedWines: [
          '🍶 Taiwanese Premium Aged Shaoxing Wine',
          '🍺 Taiwan 18-Day Draft Beer',
          '🍷 Off-dry German Riesling',
          '🍾 Brut Champagne'
        ],
        tastingNotes: 'Crisp Green Apple · Warm Shaoxing Umami · Refreshing Effervescence'
      },
      {
        method: 'Smoked BBQ Ribs / Honey Char Siu',
        meatExamples: 'Spare Ribs, Pork Collar, Thick-Cut Belly',
        characteristics: 'Caramelized sweet & spicy glaze, charcoal smoke, crispy charred bark',
        principles: 'Sweet smoky glazes call for fruit-forward Zinfandel, citrusy West Coast IPA, or chilled plum wine.',
        recommendedWines: [
          '🍷 Zinfandel (Plum & Jammy Sweetness)',
          '🍺 American Craft IPA (Citrus Hops)',
          '🥃 Chilled Japanese Umeshu Plum Wine',
          '🍷 Shiraz'
        ],
        tastingNotes: 'Ripe Dark Plum · Toasted Vanilla Oak · Peppery Finish'
      },
      {
        method: 'Crispy Tonkatsu / Pan-Seared Pork Loin',
        meatExamples: 'Pork Loin Chop, Tenderloin Filet',
        characteristics: 'Golden crispy panko crust, tender juicy lean meat, savory tonkatsu sauce',
        principles: 'Avoid harsh tannins; chilled lager beer, unoaked Chardonnay, or silky Pinot Noir cleanses frying oil.',
        recommendedWines: [
          '🍺 Ice-Cold Lager Draft Beer',
          '🍷 Unoaked Chardonnay (Clean Apple Acid)',
          '🍶 Tokubetsu Junmai Sake',
          '🍷 Pinot Noir'
        ],
        tastingNotes: 'Green Apple Citrus · Crisp & Clean · Silky No Astringency'
      },
      {
        method: 'Salt-Grilled Matsusaka Jowl / Poached Pork Slices',
        meatExamples: 'Matsusaka Jowl, Cheek Meat',
        characteristics: 'Crunchy marbled fat, simple salt-pepper seasoning or garlic soy dip',
        principles: 'Crunchy texture and sweet pork fat pair marvelously with draft beer, chilled Kaoliang, or Provence Rosé.',
        recommendedWines: [
          '🍺 Gold Medal Taiwan Beer / 18-Day Draft',
          '🥃 38° Kinmen Kaoliang (Ice Chilled)',
          '🍷 Dry Provence Rosé',
          '🍶 Ginjo Sake'
        ],
        tastingNotes: 'Fresh Red Berries · White Floral Notes · Vibrant Palate'
      },
      {
        method: 'Slow-Stewed Pork Trotters / Hock Collagen Broth',
        meatExamples: 'Pork Trotters, Pork Hock',
        characteristics: 'Sticky milky collagen broth, rich gelatinous pork skin',
        principles: 'Collagen-rich broth calls for high-acid dry whites, Cava, or dry sake to reset the palate.',
        recommendedWines: [
          '🍷 Dry Riesling',
          '🍶 Dry Honjozo Sake',
          '🍾 Brut Cava Sparkling Wine'
        ],
        tastingNotes: 'Lively Acid Spine · Tight Bubbles · Palate Reviving'
      }
    ],
    'ja': [
      {
        method: '豚の角煮・東坡肉・ルーロー (甘辛醤油仕立て)',
        meatExamples: '豚バラ肉、ウデ肉、豚足・すね肉',
        characteristics: '氷砂糖と熟成醤油の甘辛さ、八角、トロトロに煮込まれた脂身',
        principles: '高い酸味を持つリースリングが脂をサッパリ流し、温めた紹興酒や生ビールが本場の美味しさを引き立てます。',
        recommendedWines: [
          '🍶 台湾埔里特級熟成紹興酒 (燗酒)',
          '🍺 台湾18天生ビール (爽快な喉越し)',
          '🍷 微甘口リースリング (Off-dry Riesling)',
          '🍾 辛口シャンパーニュ (Brut Champagne)'
        ],
        tastingNotes: '青リンゴの酸味 · 芳醇な黄酒香 · 爽快な泡'
      },
      {
        method: 'BBQスペアリブ・蜜汁チャーシュー',
        meatExamples: 'ポークリブ、肩ロース、厚切りバラ',
        characteristics: 'カラメル状の甘辛BBQソース、炭火スモーク、香ばしい焦げ目',
        principles: '甘辛いタレと燻製香には、果実味豊かなジンファンデルや柑橘香るIPA、冷やした梅酒がベストマッチ。',
        recommendedWines: [
          '🍷 ジンファンデル (ジャムのような果実味)',
          '🍺 アメリカンクラフトIPA (ホップの香り)',
          '🥃 冷やし本格梅酒 (甘酸っぱく食欲増進)',
          '🍷 シラーズ (Shiraz)'
        ],
        tastingNotes: '熟したプラムジャム · バニラオーク · スパイシー黒胡椒'
      },
      {
        method: 'サクサクとんかつ・厚切りポークソテー',
        meatExamples: 'ロースカツ、ヒレカツ (腰内肉)',
        characteristics: '黄金色のサクサク衣、ジューシーで柔らかな赤身、とんかつソース',
        principles: '渋い赤ワインを避け、キリッと冷えた生ビールや樽なしシャルドネ、特別純米酒で揚げ油をスッキリ流します。',
        recommendedWines: [
          '🍺 氷冷ラガー生ビール (Lager)',
          '🍷 樽なしシャルドネ (Unoaked Chardonnay)',
          '🍶 特別純米酒 (米の旨味とキレ)',
          '🍷 ピノ・ノワール (滑らかな赤)'
        ],
        tastingNotes: '青リンゴと柑橘 · エレガントで軽快 · 渋みなし'
      },
      {
        method: 'トントロの塩焼き・茹で豚のニンニク醤油',
        meatExamples: 'トントロ (豚トロ)、カシラ肉 (頬肉)',
        characteristics: 'サクサクとした霜降り脂、シンプルな塩胡椒やニンニク醤油',
        principles: '歯切れの良い食感と脂の甘みには、台湾生ビール、冷凍高粱酒、辛口ロゼワインが最高です。',
        recommendedWines: [
          '🍺 台湾金牌ビール / 18天生ビール',
          '🥃 金門38度高粱酒 (冷凍ショット)',
          '🍷 プロヴァンス辛口ロゼワイン (Dry Rosé)',
          '🍶 吟醸清酒'
        ],
        tastingNotes: 'フレッシュベリー · 白い花の香り · 軽快な飲み口'
      },
      {
        method: '豚足の煮込みスープ・コラーゲン鍋',
        meatExamples: '豚足 (テビチ)、豚すね肉',
        characteristics: '濃厚でクリーミーなコラーゲンスープ、もっちりした豚皮のゼラチン',
        principles: '濃厚なゼラチン質には、キリッとしたリースリング、カヴァ、辛口清酒が口内をリフレッシュ。',
        recommendedWines: [
          '🍷 辛口リースリング (Dry Riesling)',
          '🍶 辛口本醸造酒',
          '🍾 カヴァ (Cava スパークリング)'
        ],
        tastingNotes: 'シャープな酸味 · 爽快な泡 · 油切れ抜群'
      }
    ]
  },
  fish: {
    'zh-TW': [
      {
        method: '古法清蒸鮮魚 / 蔥油淋汁',
        meatExamples: '龍虎斑、金目鱸、石斑清肉排',
        characteristics: '細緻膠質魚皮、清甜魚肉肌理、蔥薑清香',
        principles: '以帶柑橘、白花香氣的干型白酒或純米吟釀清酒，襯托魚肉極致鮮甜。',
        recommendedWines: [
          '🍷 Chablis (夏布利白酒)',
          '🍷 Albariño (阿爾巴利諾)',
          '🍶 純米吟釀清酒 (Junmai Ginjo)'
        ],
        tastingNotes: '純淨礦石感 · 鮮爽檸檬酸度 · 優雅俐落'
      },
      {
        method: '頂級刺身生食 / 炙燒大腹',
        meatExamples: '黑鮪魚大腹、鮭魚肚刺身、干貝',
        characteristics: '入口即化天然魚油、高甘甜度、芥末薄鹽生抽',
        principles: '高油脂刺身與年份香檳的高酸氣泡或純米大吟釀是極致絕配。',
        recommendedWines: [
          '🍾 Vintage Champagne (年份香檳)',
          '🍶 純米大吟釀 (Junmai Daiginjo)',
          '🍷 桶陳 Chardonnay (夏多內)'
        ],
        tastingNotes: '純淨旨味 · 精緻果香 · 細膩氣泡'
      },
      {
        method: '脆皮奶油香煎魚排 (鮭魚 / 土魠)',
        meatExamples: '挪威鮭魚排、澎湖土魠魚排、無刺虱目魚肚',
        characteristics: '金黃酥脆魚皮、奶油蒜香、外酥內嫩多汁',
        principles: '鮭魚與土魠的豐富魚油，能承接過桶夏多內的烤橡木香草奶油調性。',
        recommendedWines: [
          '🍷 桶陳 Chardonnay (夏多內)',
          '🍷 Pinot Noir (黑皮諾紅酒)',
          '🍷 Sauvignon Blanc (白蘇維濃)'
        ],
        tastingNotes: '烤橡木奶油香 · 圓潤酒體 · 活潑果酸'
      },
      {
        method: '居酒屋鹽烤魚下巴 / 炭烤魚頭',
        meatExamples: '青魽下巴、鮭魚下巴、海鱺下巴',
        characteristics: '厚潤焦香魚皮、高油脂、炭火焦香',
        principles: '炭烤魚油需要台灣生啤酒、威士忌 Highball 或果香飽滿的愛爾啤酒消解油膩。',
        recommendedWines: [
          '🍺 台灣 18 天生啤酒 (爽脆氣泡)',
          '🥃 威士忌 Highball (蘇打威士忌)',
          '🍶 辛口本釀造清酒 (Dry Sake)'
        ],
        tastingNotes: '麥芽爽脆 · 柑橘酒花 · 碳酸解油'
      },
      {
        method: '野生烏魚子 / 炙燒珍味',
        meatExamples: '野生烏魚子、烤透抽、炙燒干貝',
        characteristics: '濃郁鹹鮮黏牙油脂、高粱炙烤焦香',
        principles: '烏魚子鹹鮮濃醇，香檳氣泡能迅速解膩，西班牙雪莉酒更是世界級餐酒共鳴。',
        recommendedWines: [
          '🍾 Brut Champagne (乾型香檳)',
          '🍷 Fino Sherry (西班牙雪莉酒)',
          '🥃 金門 58 度高粱酒 (凍飲)'
        ],
        tastingNotes: '堅果酵母香 · 細緻高酸氣泡 · 完美鹹甜共振'
      }
    ],
    'en': [
      {
        method: 'Steamed Whole Fish / Scallion & Ginger Glaze',
        meatExamples: 'Dragon Tiger Grouper, Sea Bass, Pomfret',
        characteristics: 'Delicate gelatinous skin, tender sweet meat flakes, scallion ginger aromatics',
        principles: 'Mineral-driven dry whites or Junmai Ginjo sake elevate the natural sweet umami without distraction.',
        recommendedWines: [
          '🍷 Chablis (Domaine White)',
          '🍷 Albariño (Galician Coast)',
          '🍶 Junmai Ginjo Sake'
        ],
        tastingNotes: 'Pure Flint Minerality · Crisp Lemon Acidity · Sleek & Refined'
      },
      {
        method: 'Prime Sashimi & Torched Otoro',
        meatExamples: 'Bluefin Tuna Otoro, Salmon Belly, Scallop',
        characteristics: 'Melt-in-mouth raw fish oils, intense sweet umami, wasabi soy dip',
        principles: 'Rich sashimi matches exquisitely with vintage Champagne bubbles or aromatic Junmai Daiginjo.',
        recommendedWines: [
          '🍾 Vintage Champagne (High Acid Bubbles)',
          '🍶 Junmai Daiginjo Sake',
          '🍷 Oaked Chardonnay'
        ],
        tastingNotes: 'Pure Umami · Refined Melon Aromas · Silky Effervescence'
      },
      {
        method: 'Crispy Butter Pan-Seared Fillet (Salmon / Kingfish)',
        meatExamples: 'Atlantic Salmon, Spanish Mackerel, Milkfish Belly',
        characteristics: 'Golden crispy skin, garlic thyme butter, juicy tender core',
        principles: 'Deep marine fats carry the toasted vanilla oak and buttery texture of oaked Chardonnay.',
        recommendedWines: [
          '🍷 Oaked Chardonnay',
          '🍷 Pinot Noir (Light Red Wine)',
          '🍷 Sauvignon Blanc'
        ],
        tastingNotes: 'Toasted Brioche & Butter · Full Bodied · Vibrant Acidity'
      },
      {
        method: 'Izakaya Salt-Grilled Collar / Broiled Fish Head',
        meatExamples: 'Amberjack Collar, Salmon Kama, Cobia Collar',
        characteristics: 'Rich charred skin, high collagen fats, charcoal smoke',
        principles: 'Rendered fish oils call for crisp draft beer, Whisky Highball, or bone-dry sake.',
        recommendedWines: [
          '🍺 Taiwan 18-Day Draft Beer',
          '🥃 Whisky Highball (Soda & Lemon)',
          '🍶 Dry Honjozo Sake'
        ],
        tastingNotes: 'Crisp Malt Effervescence · Citrus Fizz · Palate Cleansing'
      },
      {
        method: 'Wild Bottarga (Mullet Roe) / Torched Delicacies',
        meatExamples: 'Taiwanese Wild Bottarga, Grilled Squid, Torched Scallop',
        characteristics: 'Intense savory umami, fudge-like sticky oils, Kaoliang torch crust',
        principles: 'Savory rich bottarga finds world-class resonance with nutty Fino Sherry, Champagne, or frozen Kaoliang.',
        recommendedWines: [
          '🍾 Brut Champagne / Cava',
          '🍷 Spanish Fino Sherry',
          '🥃 58° Kinmen Kaoliang'
        ],
        tastingNotes: 'Toasted Almond & Yeast · Tight High Acidity · Salty Sweet Resonance'
      }
    ],
    'ja': [
      {
        method: '鮮魚の清蒸 (蒸し魚)・ネギ生姜風味',
        meatExamples: '龍虎ハタ、スズキ、マナガツオ',
        characteristics: 'ゼラチン質の皮、ふっくら甘みのある身、ネギ生姜の清涼感',
        principles: '柑橘や白い花のアロマを持つ辛口白ワインや純米吟醸酒が、魚本来の繊細な甘みを引き立てます。',
        recommendedWines: [
          '🍷 シャブリ (Chablis)',
          '🍷 アルバリーニョ (Albariño)',
          '🍶 純米吟醸酒 (Junmai Ginjo)'
        ],
        tastingNotes: '純粋なミネラル感 · 爽やかなレモンの酸味 · 上品でキレのある余韻'
      },
      {
        method: '極上刺身・炙り大トロ',
        meatExamples: '本マグロ大トロ、サーモンハラス刺身、ホタテ',
        characteristics: 'とろける天然の魚油、濃厚な甘み、ワサビ醤油',
        principles: '脂の乗った刺身には、ヴィンテージシャンパンのきめ細かな泡や純米大吟醸が最高の相棒です。',
        recommendedWines: [
          '🍾 ヴィンテージシャンパーニュ',
          '🍶 純米大吟醸酒',
          '🍷 樽熟シャルドネ'
        ],
        tastingNotes: 'ピュアな旨味 · 華やかな吟醸香 · 繊細な泡立ち'
      },
      {
        method: '皮パリバターソテー (サーモン・サワラ)',
        meatExamples: 'サーモンフィレ、サワラ切り身、サバヒーハラス',
        characteristics: 'カリッとした皮目、バターガーリックの香り、ジューシーな身',
        principles: '魚の豊かな脂が、樽熟成シャルドネの香ばしいバニラバターの風味をしっかりと受け止めます。',
        recommendedWines: [
          '🍷 樽熟シャルドネ (Oaked Chardonnay)',
          '🍷 ピノ・ノワール (軽やかな赤ワイン)',
          '🍷 ソーヴィニヨン・ブラン'
        ],
        tastingNotes: '香ばしいトーストバター · まろやかなボディ · 活き活きとした果実酸'
      },
      {
        method: '居酒屋の塩焼きカマ・炭火焼き魚頭',
        meatExamples: 'カンパチカマ、サーモンカマ、スギカマ',
        characteristics: '香ばしい皮、たっぷりの脂、炭火の燻製香',
        principles: 'ジューシーな魚の脂には、生ビール、ウイスキーハイボール、辛口本醸造が最高の油切りになります。',
        recommendedWines: [
          '🍺 台湾18天生ビール / プレミアム生',
          '🥃 ウイスキーハイボール (Whisky Highball)',
          '🍶 辛口本醸造清酒 (Dry Sake)'
        ],
        tastingNotes: '麦芽のキレ · 炭酸の刺激 · スッキリ油切り'
      },
      {
        method: '極上からすみ (烏魚子)・炙り海鮮珍味',
        meatExamples: '台湾産天然からすみ、焼きイカ、炙りホタテ',
        characteristics: '濃厚な塩気とねっとりした旨味、高粱酒の炙り香',
        principles: 'からすみの凝縮した旨味には、シャンパンの泡やスペインのフィノ・シェリー、冷凍高粱酒が最高です。',
        recommendedWines: [
          '🍾 辛口シャンパーニュ / カヴァ',
          '🍷 スペイン産フィノ・シェリー (Fino Sherry)',
          '🥃 金門58度高粱酒 (冷凍ショット)'
        ],
        tastingNotes: 'ナッツとトースト香 · 高い酸味の泡 · 完璧な旨味の共鳴'
      }
    ]
  }
};

// 輔助函式：取得特定品類與語言的 Wine 原則
export function getLocalizedWinePrinciples(activeCategory = 'beef', currentLang = 'zh-TW') {
  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  const categoryPrinciples = WINE_PRINCIPLES_I18N[activeCategory] || WINE_PRINCIPLES_I18N.beef;
  return categoryPrinciples[langKey] || categoryPrinciples['zh-TW'];
}

// 輔助函式：取得特定品類與語言的 Cooking Matrix
export function getLocalizedCookingMatrix(activeCategory = 'beef', currentLang = 'zh-TW') {
  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  const categoryMatrix = COOKING_MATRICES_I18N[activeCategory] || COOKING_MATRICES_I18N.beef;
  return categoryMatrix[langKey] || categoryMatrix['zh-TW'];
}

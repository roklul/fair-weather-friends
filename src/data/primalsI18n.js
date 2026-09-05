// 完整三語部位解剖字典庫 (Multilingual Primal Anatomy Dictionary: zh-TW, en, ja)

export const PRIMALS_I18N = {
  // 牛肉 8 大分切
  chuck: {
    'zh-TW': {
      name: '肩胛部',
      positioning: '高 CP 值、煎烤與燉煮皆宜',
      description: '牛隻前肩與頸部下方，運動量大、肌肉結實，富含結締組織，但特定細分切（如翼板、板腱）兼具極佳油花與軟嫩度。',
      extendedCuts: ['板腱 (Top Blade)', '翼板 (Flat Iron)', '肩胛里肌 (Chuck Tender)', '黃瓜條 (Chuck Rib)'],
      recommendedCooking: ['厚切香煎', '炭火燒烤', '舒肥低溫烹調', '家常紅燒燉煮'],
      idealWine: ['Merlot (梅洛)', 'Malbec (馬爾貝克)', 'Syrah (希哈)']
    },
    'en': {
      name: 'Chuck (Shoulder)',
      positioning: 'High Value · Great for Sealing, BBQ & Stewing',
      description: 'Located in the upper front shoulder and neck. Heavy muscular activity with rich connective tissue, yet cuts like Flat Iron & Top Blade feature marvelous marbling and tenderness.',
      extendedCuts: ['Top Blade (Oyster Blade)', 'Flat Iron (Blade Steak)', 'Chuck Tender', 'Chuck Rib'],
      recommendedCooking: ['Pan-Seared Steak', 'Charcoal Grilling', 'Sous-vide Slow Cook', 'Classic Beef Stew'],
      idealWine: ['Merlot', 'Malbec', 'Syrah']
    },
    'ja': {
      name: '肩ロース (チャック)',
      positioning: '高いコスパ · 焼き肉から煮込みまで万能',
      description: '牛の前肩から首の下部にかけての部位。運動量が多く筋肉質でコラーゲンが豊富ですが、ミスジやザブトンなどは素晴らしい霜降りと柔らかさを誇ります。',
      extendedCuts: ['ミスジ (Top Blade)', 'ザブトン (Flat Iron)', 'トウガラシ (Chuck Tender)', '肩三角 (Chuck Rib)'],
      recommendedCooking: ['厚切りソテー', '炭火焼肉', '低温調理 (スーヴィード)', 'じっくり赤ワイン煮込み'],
      idealWine: ['メルロー (Merlot)', 'マルベック (Malbec)', 'シラー (Syrah)']
    }
  },
  rib: {
    'zh-TW': {
      name: '肋脊部',
      positioning: '油花豐富、牛排與頂級燒烤主力',
      description: '背部中央前段肋骨區域，運動量極少，大理石花紋油脂分布極為均勻細緻，香氣濃厚、肉汁豐沛。',
      extendedCuts: ['肋眼 (Ribeye)', '老饕牛排 (Ribeye Cap)', '帶骨牛小排 (Short Rib)', '牛肋條 (Rib Finger)', '戰斧牛排 (Tomahawk)'],
      recommendedCooking: ['厚切鑄鐵鍋香煎', '直火炭烤', '戰斧聚餐料理', '頂級火鍋薄片'],
      idealWine: ['Cabernet Sauvignon (卡本內蘇維濃)', 'Zinfandel (金芬黛)', 'Syrah (希哈)']
    },
    'en': {
      name: 'Rib (Ribeye)',
      positioning: 'Rich Marbling · King of Steaks & Grilling',
      description: 'Located along the upper middle backbone. Minimal movement yields dense, fine marbling with intense beefy aromatics and luscious juices.',
      extendedCuts: ['Ribeye Steak', 'Ribeye Cap (Spinalis)', 'Short Ribs', 'Rib Finger', 'Tomahawk Steak'],
      recommendedCooking: ['Cast-Iron Pan Sear', 'Direct Charcoal Grill', 'Tomahawk Party Roast', 'Premium Shabu Shabu'],
      idealWine: ['Cabernet Sauvignon', 'Zinfandel', 'Syrah']
    },
    'ja': {
      name: 'リブロース (リブ)',
      positioning: '濃厚な霜降り · ステーキと極上焼肉の王道',
      description: '背中の中央前部、運動量が極めて少ない部位。細やかな霜降りが美しく入り、濃厚な肉の旨味とジューシーな肉汁が溢れます。',
      extendedCuts: ['リブロース (Ribeye)', 'リブキャップ (老饕牛排)', '骨付きショートリブ', '中落ちカルビ (Rib Finger)', 'トマホークステーキ'],
      recommendedCooking: ['厚切り鉄板ソテー', '炭火直火焼き', 'トマホーク豪快ロースト', '極上しゃぶしゃぶ・すき焼き'],
      idealWine: ['カベルネ・ソーヴィニヨン', 'ジンファンデル', 'シラー']
    }
  },
  loin: {
    'zh-TW': {
      name: '腰脊部',
      positioning: '頂級經典牛排區、軟嫩之王',
      description: '牛隻後背脊骨兩側及腰椎內側，包含全牛最柔嫩的菲力與肉感濃郁的紐約客，是牛排館菜單的靈魂核心。',
      extendedCuts: ['菲力 (Tenderloin)', '紐約客 (New York Strip)', '丁骨牛排 (T-Bone)', '紅屋牛排 (Porterhouse)', '沙朗 (Sirloin)'],
      recommendedCooking: ['厚切低熟度香煎', '羅西尼牛排', '炭火炙燒', '先煎後烤'],
      idealWine: ['Pinot Noir (黑皮諾)', 'Merlot (梅洛)', 'Sangiovese (奇揚地)', 'Cabernet Sauvignon']
    },
    'en': {
      name: 'Loin (Strip & Tenderloin)',
      positioning: 'Prime Steakhouse Core · Ultimate Tenderness',
      description: 'Located along the lower spine and inner lumbar, featuring the prized Filet Mignon and robust New York Strip steak.',
      extendedCuts: ['Tenderloin (Filet Mignon)', 'New York Strip', 'T-Bone Steak', 'Porterhouse', 'Sirloin'],
      recommendedCooking: ['Medium-Rare Sear', 'Tournedos Rossini', 'Flame Broiling', 'Reverse Sear'],
      idealWine: ['Pinot Noir', 'Merlot', 'Sangiovese', 'Cabernet Sauvignon']
    },
    'ja': {
      name: 'サーロイン・ヒレ (ロイン)',
      positioning: '最高峰ステーキ部位 · 究極の柔らかさ',
      description: '背骨の後ろ側と腰の内側。全部位の中で最も柔らかいヒレ（フィレミニョン）と肉の味が濃いサーロイン・ニューヨークストリップを含みます。',
      extendedCuts: ['ヒレ・フィレ (Tenderloin)', 'サーロイン (New York Strip)', 'Tボーンステーキ', 'ポーターハウス', 'ランプ・サーロイン'],
      recommendedCooking: ['レア・ミディアムレアソテー', 'ロッシーニ風ステーキ', '炭火炙り焼き', 'オーブン仕上げ'],
      idealWine: ['ピノ・ノワール (Pinot Noir)', 'メルロー', 'サンジョヴェーゼ', 'カベルネ・ソーヴィニヨン']
    }
  },
  brisket: {
    'zh-TW': {
      name: '前胸部',
      positioning: '美式煙燻、慢燉與紅燒首選',
      description: '牛隻兩前肢之間與前胸下側，支撐牛身重量，纖維粗壯且筋膜膠質豐富，須經長時間低溫慢煮轉化。',
      extendedCuts: ['前胸肉 (Flat/Point Cut)', '前胸牛腩', '煙燻胸肉 (Pastrami)'],
      recommendedCooking: ['美式低溫柴燒煙燻 BBQ', '港式柱侯牛腩', '清燉牛肉湯', '紅燒牛肉麵'],
      idealWine: ['Shiraz (希哈)', 'Petite Sirah', '金門 58 高粱酒']
    },
    'en': {
      name: 'Brisket (Breast)',
      positioning: 'Texas BBQ Smoked · Slow Braise Favorite',
      description: 'Located in the breast area between the front legs. Coarse muscle fibers with massive collagen layers that transform into melt-in-your-mouth tenderness through slow cooking.',
      extendedCuts: ['Brisket Flat', 'Brisket Point', 'Beef Flank/Brisket Stew Cut', 'Pastrami'],
      recommendedCooking: ['Low & Slow Texas BBQ Smoked', 'Braised Beef Stew', 'Clear Beef Soup', 'Taiwanese Beef Noodle'],
      idealWine: ['Shiraz', 'Petite Sirah', 'Bourbon Whiskey']
    },
    'ja': {
      name: 'ブリスケット (肩バラ・前胸)',
      positioning: '本格BBQスモーク・長時間煮込みの真骨頂',
      description: '前脚の間から胸の部位。体重を支えるため筋肉繊維が太くコラーゲンが豊富で、低温でじっくり加熱することでとろけるような食感になります。',
      extendedCuts: ['ブリスケット・フラット', 'ブリスケット・ポイント', '牛すじ・牛煮込み用肉', 'パストラミ'],
      recommendedCooking: ['テキサス風BBQスモーク', '台湾風牛肉麺', '牛すじ煮込み', 'ポトフ'],
      idealWine: ['シラーズ (Shiraz)', 'プティ・シラー', 'バーボンウイスキー']
    }
  },
  plate: {
    'zh-TW': {
      name: '胸腹部',
      positioning: '油脂豐沛、牛五花與丼飯靈魂',
      description: '肋骨下方前腹部，油脂含量高、肥瘦層次分明，切成薄片加熱極易釋放香濃牛油甜香。',
      extendedCuts: ['牛五花 (Short Plate)', '牛培根', '牛五花火鍋片', '牛丼肉片'],
      recommendedCooking: ['日式牛丼飯', '麻辣火鍋涮片', '韓式烤五花', '日式燒肉'],
      idealWine: ['台灣 18 天生啤酒', 'Grenache (格納希)', 'Dry Riesling (乾型麗絲玲)']
    },
    'en': {
      name: 'Short Plate (Belly)',
      positioning: 'Rich Marbling · Gyudon & Shabu Shabu Star',
      description: 'Located below the rib section in the lower front belly. Alternating layers of fat and lean meat create intense aromas when sliced thin and grilled.',
      extendedCuts: ['Short Plate (Beef Belly)', 'Beef Bacon', 'Hotpot Thin Slice', 'Gyudon Beef Slice'],
      recommendedCooking: ['Japanese Gyudon Beef Bowl', 'Hotpot / Shabu Shabu', 'Korean BBQ', 'Yakiniku Grilling'],
      idealWine: ['Taiwan 18-Day Draft Beer', 'Grenache', 'Dry Riesling']
    },
    'ja': {
      name: 'ショートプレート (牛バラ・カルビ)',
      positioning: '脂の旨味満点 · 牛丼や焼肉カルビの主役',
      description: 'あばら骨の下側の腹部。脂身と赤身が美しい層をなし、薄切りにして加熱すると香ばしい牛脂の甘みが広がります。',
      extendedCuts: ['牛バラカルビ (Short Plate)', '牛ベーコン', 'しゃぶしゃぶ用極薄切り', '牛丼用スライス'],
      recommendedCooking: ['牛丼', '麻辣火鍋・しゃぶしゃぶ', '韓国風焼肉', 'カルビ焼き'],
      idealWine: ['台湾18天生ビール', 'グルナッシュ (Grenache)', '辛口リースリング']
    }
  },
  flank: {
    'zh-TW': {
      name: '腹脅部',
      positioning: '肉味濃郁、墨西哥料理與快炒王',
      description: '牛隻後腹部肌肉，長條纖維清晰、油脂低但肉味濃郁，適合逆紋薄切後高溫快炒或炙烤。',
      extendedCuts: ['側腹牛排 (Flank Steak)', '腹脇肉', '蔥爆牛肉條'],
      recommendedCooking: ['墨西哥牛肉 Taco (Fajitas)', '台式蔥爆牛肉', '沙茶牛肉炒麵', '高溫快速炙烤'],
      idealWine: ['Malbec (馬爾貝克)', 'Tempranillo (田帕尼優)', 'Margarita 調酒']
    },
    'en': {
      name: 'Flank (Abdominal)',
      positioning: 'Robust Beef Flavor · Fajitas & Stir-Fry Champion',
      description: 'Located in the lower rear abdomen. Distinct long grain with lean, intense beef flavor. Best sliced thinly against the grain after hot, fast cooking.',
      extendedCuts: ['Flank Steak', 'Skirt-style Flank', 'Stir-Fry Beef Strips'],
      recommendedCooking: ['Mexican Beef Fajitas / Tacos', 'Asian Scallion Beef Stir-Fry', 'High-Heat Flash Grilling'],
      idealWine: ['Malbec', 'Tempranillo', 'Margarita Cocktail']
    },
    'ja': {
      name: 'フランク (ささみ・腹脅部)',
      positioning: '赤身の濃い旨味 · タコスや中華強火炒めの定番',
      description: '下腹部の筋肉。太い繊維が走る赤身肉で、脂質は控えめですが濃厚なコクがあり、繊維を断ち切るように薄切りにして強火調理します。',
      extendedCuts: ['フランクステーキ (Flank Steak)', '笹肉 (ささみ)', '牛細切り炒め用肉'],
      recommendedCooking: ['メキシカンタコス (Fajitas)', 'ネギと牛肉の中華強火炒め', 'サッと炙り焼き'],
      idealWine: ['マルベック (Malbec)', 'テンプラニーリョ', 'マルガリータカクテル']
    }
  },
  round: {
    'zh-TW': {
      name: '後腿部',
      positioning: '超低脂高蛋白、健康減脂與肉乾首選',
      description: '牛隻後臀與後大腿部位，運動量極大，肌肉纖維緊實且幾無脂肪，適合切片炒肉、滷製或製作牛肉乾。',
      extendedCuts: ['臀肉 (Top Round)', '牛後腿腱 (Bottom Round)', '和尚頭 (Knuckle / 內側後腿)'],
      recommendedCooking: ['英式烤牛肉 (Roast Beef)', '減脂高蛋白水煮/炒肉', '低溫舒肥牛排', '天然牛肉乾'],
      idealWine: ['Chianti (奇揚地)', 'Valpolicella', 'Pinot Noir']
    },
    'en': {
      name: 'Round (Rear Leg)',
      positioning: 'Ultra Lean & High Protein · Roast Beef Favorite',
      description: 'Located in the rear hind leg and rump. High muscle density with virtually zero intramuscular fat. Excellent for roast beef or high-protein meals.',
      extendedCuts: ['Top Round (Inside Round)', 'Bottom Round (Outside Round)', 'Knuckle (Sirloin Tip)'],
      recommendedCooking: ['Sunday Roast Beef', 'High-Protein Stir-Fry', 'Sous-vide Lean Steak', 'Artisanal Beef Jerky'],
      idealWine: ['Chianti', 'Valpolicella', 'Light Pinot Noir']
    },
    'ja': {
      name: 'モモ・ラウンド (後腿部)',
      positioning: '極上の低脂質・高タンパク · ローストビーフに最適',
      description: '後ろ脚からお尻にかけての部位。運動量が非常に多く、赤身の塊で脂質が極めて低いため、ローストビーフやヘルシー料理に重宝されます。',
      extendedCuts: ['ウチモモ (Top Round)', 'ソトモモ (Bottom Round)', 'シンタマ・マルキョウ (Knuckle)'],
      recommendedCooking: ['クラシックローストビーフ', '高タンパクヘルシー炒め', '低温調理赤身ステーキ', 'ビーフジャーキー'],
      idealWine: ['キャンティ (Chianti)', 'ヴァルポリチェッラ', 'ライトボディのピノ・ノワール']
    }
  },
  shank: {
    'zh-TW': {
      name: '牛腱/小腿',
      positioning: '富含筋膜膠質、牛肉麵與滷水霸主',
      description: '牛隻前後肢小腿部位，因大量承重與跑動，肉質密布交錯如花紋般的筋膜膠原蛋白，久燉後轉化為Q彈果凍膠質。',
      extendedCuts: ['牛腱心 (Shank Tender)', '金錢腱 (Heel Muscle)', '帶骨牛小腿 (Osso Buco)'],
      recommendedCooking: ['台式紅燒半筋半肉牛肉麵', '私房五香醬牛肉 (切片冷盤)', '義式燉牛膝 (Osso Buco)', '清燉牛腱湯'],
      idealWine: ['台灣陳年特級紹興酒', 'Barolo (巴羅洛)', 'Côtes du Rhône (隆河丘)']
    },
    'en': {
      name: 'Shank (Leg Muscle)',
      positioning: 'Rich Collagen Tendons · Braised Osso Buco Star',
      description: 'Located in the lower fore and hind legs. Dense collagen tendons weave through muscular fibers, melting into gelatinous silkiness during long braising.',
      extendedCuts: ['Beef Shank Tender', 'Heel Muscle (Golden Shank)', 'Bone-in Cross-cut Shank (Osso Buco)'],
      recommendedCooking: ['Taiwanese Braised Beef Noodle Soup', 'Chilled Spiced Beef Shank', 'Milanese Osso Buco Stew'],
      idealWine: ['Taiwan Aged Shaoxing Wine', 'Barolo', 'Côtes du Rhône']
    },
    'ja': {
      name: 'スネ肉 (シャンク)',
      positioning: 'コラーゲンとゼラチン質の宝庫 · 煮込みとオッソブーコ',
      description: '牛の前脚・後脚のふくらはぎ。網目状に美しいスジ（結合組織）が入り組んでおり、じっくり煮込むことで極上のトロトロ食感に仕上がります。',
      extendedCuts: ['牛スネ芯 (Shank Tender)', '牛スジ・スネ肉スライス', '骨付きスネ肉 (オッソブーコ用)'],
      recommendedCooking: ['台湾風牛肉麺（半筋半肉）', '中華風牛スネの冷製スパイス煮', 'ミラノ風オッソブーコ煮込み'],
      idealWine: ['台湾陳年特級紹興酒', 'バローロ (Barolo)', 'コート・デュ・ローヌ']
    }
  },

  // 豬肉 8 大分切
  'pork-shoulder': {
    'zh-TW': {
      name: '肩胛部 (梅花·胛心)',
      positioning: '油花均勻、煎烤燉煮全能',
      description: '豬隻前肩胛上方與背側相連處，筋膜細緻、油花分布如梅花般均勻，肉香濃郁且久煮不乾柴。',
      extendedCuts: ['梅花肉 (Boston Butt)', '胛心肉 (Blade Shoulder)', '夾心絞肉'],
      recommendedCooking: ['火鍋涮片', '日式叉燒', '韓式燒肉', '紅燒慢燉'],
      idealWine: ['Pinot Noir (黑皮諾)', 'Grenache (格納希)', '乾型 Rosé (粉紅酒)']
    },
    'en': {
      name: 'Pork Shoulder (Boston Butt)',
      positioning: 'Even Marbling · All-around Pan, Roast & Braise',
      description: 'Located in the upper front shoulder and blade. Delicate collagen marbling ensures tender, juicy results whether roasted, barbecued, or stewed.',
      extendedCuts: ['Boston Butt (Pork Collar)', 'Blade Shoulder', 'Pork Mince'],
      recommendedCooking: ['Shabu Shabu Slices', 'Japanese Chashu Pork', 'Korean BBQ', 'Slow Braised Pork'],
      idealWine: ['Pinot Noir', 'Grenache', 'Dry Rosé']
    },
    'ja': {
      name: '肩ロース (梅花·ボストンバット)',
      positioning: '絶妙な霜降り · 焼き・煮込み・鍋に万能',
      description: '豚の前肩から背中にかけての部位。細やかな筋膜と脂肪が霜降り状に入り、ジューシーでコクがあり、長時間煮込んでもパサつきません。',
      extendedCuts: ['豚肩ロース (Boston Butt)', 'ウデ肉 (Blade Shoulder)', '豚ひき肉'],
      recommendedCooking: ['豚しゃぶしゃぶ', '自家製チャーシュー', '韓国風サムギョプサル焼肉', '角煮・煮込み'],
      idealWine: ['ピノ・ノワール (Pinot Noir)', 'グルナッシュ', '辛口ロゼワイン']
    }
  },
  'pork-loin': {
    'zh-TW': {
      name: '背脊部 (大里肌)',
      positioning: '肌理緊實、經典炸豬排首選',
      description: '豬背脊中央兩側長條肌肉，運動量適中，脂肪含量低但肉質結實有彈性，適合短時間高溫快煮。',
      extendedCuts: ['大里肌肉排', '帶骨豬排 (Pork Chop)', '里肌火鍋薄片'],
      recommendedCooking: ['日式炸豬排 (Tonkatsu)', '厚切香煎豬排', '蔥爆肉絲', '醃烤肉排'],
      idealWine: ['未過桶 Chardonnay', 'Pinot Noir (黑皮諾)', 'Pinot Gris (灰皮諾)']
    },
    'en': {
      name: 'Pork Loin (Rib & Loin Chops)',
      positioning: 'Firm Grain · King of Classic Tonkatsu',
      description: 'Located along the upper back. Lean, clean muscular structure with balanced tenderness, perfect for high-heat cutlets and chops.',
      extendedCuts: ['Boneless Pork Loin Chops', 'Bone-in Pork Chop', 'Loin Shabu Slices'],
      recommendedCooking: ['Japanese Crispy Tonkatsu', 'Pan-Seared Loin Chop', 'Scallion Pork Stir-Fry'],
      idealWine: ['Unoaked Chardonnay', 'Pinot Noir', 'Pinot Gris']
    },
    'ja': {
      name: 'ロース (大里肌)',
      positioning: 'キメ細やかな赤身 · 王道とんかつの主役',
      description: '豚の背中の中央部分。適度な弾力と上品な赤身の旨味があり、外側に程よい脂身をまとっています。高温短時間のカツやソテーに最適。',
      extendedCuts: ['豚ロースとんかつ用', '骨付きポークチョップ', 'ロース薄切りスライス'],
      recommendedCooking: ['極上ロースとんかつ', '厚切りポークソテー', '豚肉とネギの炒め物'],
      idealWine: ['ステンレスタンク熟成シャルドネ', 'ピノ・ノワール', 'ピノ・グリ']
    }
  },
  'pork-tenderloin': {
    'zh-TW': {
      name: '腰脊部 (小里肌·腰內)',
      positioning: '全豬最嫩、低脂無筋極致',
      description: '位於豬背脊下方內側，是活動量最低的腰內肉，組織極為細嫩純淨、幾無脂肪與筋膜。',
      extendedCuts: ['腰內肉 (Tenderloin)', '小里肌菲力', '清炒肉柳'],
      recommendedCooking: ['腰內炸豬排', '低溫舒肥香煎', '佐水果醬炙烤', '滑蛋肉柳'],
      idealWine: ['Pinot Noir (黑皮諾)', 'Gamay (薄酒萊)', 'Riesling (麗絲玲)']
    },
    'en': {
      name: 'Pork Tenderloin (Filet)',
      positioning: 'Most Tender Pork Cut · Ultra Lean & Delicate',
      description: 'Located inside the lumbar backbone. The tenderest and leanest pork cut with virtually zero fat or tough gristle.',
      extendedCuts: ['Pork Tenderloin (Fillet)', 'Pork Medallions', 'Tenderloin Strips'],
      recommendedCooking: ['Tenderloin Cutlet (Hire Katsu)', 'Sous-vide Sear', 'Fruit Glazed Pork Medallions'],
      idealWine: ['Pinot Noir', 'Beaujolais Gamay', 'Off-dry Riesling']
    },
    'ja': {
      name: 'ヒレ・腰内 (小里肌)',
      positioning: '全豚肉で最も柔らかい · 極上の赤身ヒレ肉',
      description: '背骨の内側に沿った希少部位。豚の筋肉の中で最も動かさないため、筋膜や脂質が極めて少なく、非常に柔らかい食感です。',
      extendedCuts: ['豚ヒレ肉 (Tenderloin)', 'ヒレカツ用厚切り', 'ヒレ一口カット'],
      recommendedCooking: ['サクサク一口ヒレカツ', '低温調理ポークフィレソテー', 'フルーツソース添えロースト'],
      idealWine: ['ピノ・ノワール', 'ガメイ (ボジョレー)', 'リースリング']
    }
  },
  'pork-belly': {
    'zh-TW': {
      name: '腹脅部 (五花·三層肉)',
      positioning: '肥瘦黃金比例、控肉東坡肉靈魂',
      description: '豬腹部肋骨下緣，皮、油、肉層層相間，油脂豐潤且膠質豐富，久燉慢熬後入口即化。',
      extendedCuts: ['五花肉 (Pork Belly)', '三層肉塊', '培根條', '五花火鍋片'],
      recommendedCooking: ['台式焢肉 / 滷肉飯', '杭州東坡肉', '廣式脆皮燒肉', '韓式烤厚五花'],
      idealWine: ['微甜 Off-dry Riesling', 'Chenin Blanc (白詩南)', '台灣 18 天生啤酒']
    },
    'en': {
      name: 'Pork Belly (Three-Layer)',
      positioning: 'Golden Ratio of Fat & Meat · Braised Belly Soul',
      description: 'Located in the lower belly ribs. Alternating layers of succulent fat and lean meat create decadent tenderness after slow simmering or roasting.',
      extendedCuts: ['Pork Belly Slab', 'Bacon Strips', 'Thin Shabu Slices', 'Dongpo Braise Block'],
      recommendedCooking: ['Taiwanese Braised Lu Rou Fan', 'Hangzhou Dongpo Pork', 'Crispy Cantonese Roast Pork', 'Korean Samgyeopsal BBQ'],
      idealWine: ['Off-dry Riesling', 'Chenin Blanc', 'Brut Champagne / Draft Beer']
    },
    'ja': {
      name: '豚バラ・三枚肉 (五花肉)',
      positioning: '脂と赤身の黄金比 · 角煮・東坡肉の主役',
      description: 'あばら骨周辺の腹肉。皮・脂・赤身が美しい三層を形成し、濃厚な脂の甘みとコラーゲンがじっくり煮込むことでトロトロに溶け出します。',
      extendedCuts: ['豚バラブロック', '三枚肉スライス', '厚切りサムギョプサル用', 'ベーコン'],
      recommendedCooking: ['台湾ルーローファン (滷肉飯)', '豚の角煮・東坡肉', '韓国風厚切りサムギョプサル', '豚バラ白菜鍋'],
      idealWine: ['オフドライ・リースリング', 'シュナン・ブラン', '台湾18天生ビール']
    }
  },
  'pork-ribs': {
    'zh-TW': {
      name: '肋排部 (腩排·肋小排)',
      positioning: '骨香肉美、美式煙燻與燉湯霸主',
      description: '豬胸腹兩側肋骨部位，連骨帶肉且交織著豐美油脂與筋膜，骨邊肉香氣特別濃烈。',
      extendedCuts: ['豬肋排 (Spare Ribs)', '聖路易切排 (St. Louis Cut)', '京都排骨', '排骨湯塊'],
      recommendedCooking: ['美式低溫柴燒 BBQ 肋排', '無錫醬排骨', '糖醋排骨', '藥膳排骨湯'],
      idealWine: ['Zinfandel (金芬黛)', 'Shiraz (希哈)', 'Tempranillo (田帕尼優)']
    },
    'en': {
      name: 'Pork Ribs (Spare Ribs & Baby Back)',
      positioning: 'Flavorful Bone-in Meat · BBQ & Rib Stew King',
      description: 'Located along the rib cage. Interlocking layers of rich fat, meat, and bone marrow that release deep savory flavor during slow smoking or braising.',
      extendedCuts: ['Spare Ribs', 'St. Louis Cut Ribs', 'Baby Back Ribs', 'Pork Rib Soup Cubes'],
      recommendedCooking: ['Slow-Smoked BBQ Ribs', 'Sweet & Sour Glazed Ribs', 'Herbal Pork Rib Soup'],
      idealWine: ['Zinfandel', 'Shiraz', 'Tempranillo']
    },
    'ja': {
      name: 'スペアリブ (肋排・骨付きカルビ)',
      positioning: '骨周りの濃厚な旨味 · スモークBBQと煮込みの王道',
      description: '胸から腹のあばら骨周辺。骨の周りに濃厚な脂と筋膜が絡み合い、加熱することで骨髄の旨味が染み出します。',
      extendedCuts: ['骨付きスペアリブ', 'バックリブ (Baby Back)', '中華風スペアリブ煮込み用カット'],
      recommendedCooking: ['アメリカンBBQスペアリブ', '甘酢スペアリブ', '薬膳スペアリブスープ'],
      idealWine: ['ジンファンデル', 'シラーズ', 'テンプラニーリョ']
    }
  },
  'pork-neck': {
    'zh-TW': {
      name: '頸頰部 (松阪·嘴邊肉)',
      positioning: '脆彈極品、全豬稀有黃金肉',
      description: '豬頭頸兩側與下顎後方，包含極具彈性嚼勁的「松阪豬（黃金六兩）」與膠質滿點的「嘴邊肉」。',
      extendedCuts: ['松阪豬 (雪花肉 / Jowl)', '豬頰肉 (嘴邊肉)', '下顎肉'],
      recommendedCooking: ['椒鹽香煎松阪豬', '麻油松阪豬', '白灼嘴邊肉 (黑白切)', '泰式炭烤豬頸肉'],
      idealWine: ['乾型香檳 (Brut Champagne)', 'Sauvignon Blanc (白蘇維濃)', '金門高粱酒']
    },
    'en': {
      name: 'Pork Neck & Jowl (Matsusaka Pork)',
      positioning: 'Crisp & Bouncy Texture · Rare Golden Six-Ounce Cut',
      description: 'Located around the pig neck and jowl. Includes the prized Matsusaka pork (pork neck fillet) with its signature crisp, springy texture and rich cheek collagen.',
      extendedCuts: ['Matsusaka Pork (Jowl Fillet)', 'Pork Cheek (Jowl)', 'Neck Meat'],
      recommendedCooking: ['Salt & Pepper Pan-Seared Matsusaka', 'Sesame Oil Pork Neck', 'Thai Charcoal Grilled Neck'],
      idealWine: ['Brut Champagne', 'Sauvignon Blanc', 'Kinmen Kaoliang Liquor']
    },
    'ja': {
      name: 'トントロ・豚トロ (松阪豚・頬肉)',
      positioning: 'サクサクとした独特の歯ごたえ · 一頭からわずかの希少部位',
      description: '豚の首から頬にかけての部位。「松阪豚」とも称されるトントロは、霜降りの脂とコリコリとした独特の歯切れの良さが絶品です。',
      extendedCuts: ['トントロ・ネック (Jowl Fillet)', '豚頬肉・カシラ', '豚首肉'],
      recommendedCooking: ['塩コショウ香ばしトントロ焼き', 'ごま油香るトントロ炒め', 'タイ風グリルポークネック'],
      idealWine: ['辛口シャンパン (Brut Champagne)', 'ソーヴィニヨン・ブラン', '金門高粱酒・焼酎']
    }
  },
  'pork-front-leg': {
    'zh-TW': {
      name: '前腿與蹄膀 (前腿·腿庫)',
      positioning: '膠質豐富、萬巒豬腳與滷腿庫靈魂',
      description: '豬前肢部位，運動量大、瘦肉多且外覆厚實膠原蛋白豬皮與筋膜，是滷蹄膀與紅燒豬腳的唯一首選。',
      extendedCuts: ['前腿肉', '前蹄膀 (腿庫)', '前豬腳圈'],
      recommendedCooking: ['筍絲滷封肉蹄膀', '萬巒紅燒豬腳', '家常紅燒肉', '高湯肉丸餡'],
      idealWine: ['台灣陳年特級紹興酒', 'Merlot (梅洛)', '台灣金牌啤酒']
    },
    'en': {
      name: 'Front Picnic & Pork Hock',
      positioning: 'Rich in Gelatin & Skin · Braised Hock Champion',
      description: 'Located in the foreleg. Heavy muscular texture wrapped in thick, collagen-rich skin. The gold standard for Taiwanese braised pork knuckles and German eisbein.',
      extendedCuts: ['Front Picnic Shoulder', 'Pork Hock (Leg Knuckle)', 'Front Trotters'],
      recommendedCooking: ['Taiwanese Braised Pork Knuckle', 'German Roasted Pork Hock (Schweinshaxe)', 'Slow-Simmered Broth'],
      idealWine: ['Taiwan Aged Shaoxing Wine', 'Merlot', 'Taiwan Gold Medal Beer']
    },
    'ja': {
      name: '前ウデ・豚足 (前腿·腿庫)',
      positioning: 'ゼラチン質たっぷり · 煮込み豚足と角煮の極み',
      description: '豚の前脚部位。運動量が多く赤身がしっかりしており、表面をコラーゲンたっぷりの厚い皮と筋膜が包んでいます。じっくり煮込む料理に最適。',
      extendedCuts: ['前ウデ肉', '豚スネ肉・スネブロック (腿庫)', '前豚足'],
      recommendedCooking: ['台湾萬巒風煮込み豚足', 'ドイツ風シュバイネハクセ', '豚骨スープ'],
      idealWine: ['台湾陳年特級紹興酒', 'メルロー', '台湾金牌ビール']
    }
  },
  'pork-hind-leg': {
    'zh-TW': {
      name: '後腿與蹄部 (後腿·豬腳)',
      positioning: '高瘦肉比、火腿與貢丸香腸基底',
      description: '豬後臀與後大腿部位，肌肉量全豬最大、脂肪極低，是製作金華火腿、義式火腿、台式貢丸與香腸的基礎用肉。',
      extendedCuts: ['後腿瘦肉塊', '後腿絞肉', '後豬蹄 (富含膠質)', '風乾火腿原塊'],
      recommendedCooking: ['古法烘製肉乾', '手工彈牙貢丸', '花生燉豬腳膠原湯', '金華火腿老母雞老火湯'],
      idealWine: ['Chianti (奇揚地)', 'Barbera (巴貝拉)', '台灣 18 天生啤酒']
    },
    'en': {
      name: 'Ham & Hind Trotters (Rear Leg)',
      positioning: 'High Lean Ratio · Foundation of Prosciutto & Meatballs',
      description: 'Located in the rear hind leg and rump. Large muscle blocks with low fat content, prized for curing prosciutto, ham, and crafting juicy meatballs.',
      extendedCuts: ['Ham Lean Blocks', 'Minced Pork Leg', 'Hind Trotters', 'Cured Ham'],
      recommendedCooking: ['Artisanal Pork Jerky', 'Handmade Taiwanese Meatballs', 'Peanut & Trotter Collagen Broth'],
      idealWine: ['Chianti', 'Barbera', 'Taiwan 18-Day Draft Beer']
    },
    'ja': {
      name: 'モモ・豚足 (後腿·生ハム)',
      positioning: '高タンパク低脂質 · 生ハムや手作り肉団子のベース',
      description: '豚の後ろ脚とお尻。脂肪が少なくキメの整った赤身肉で、生ハム（プロシュート）や金華ハム、プリプリの手作り肉団子の原料として使われます。',
      extendedCuts: ['豚モモ赤身ブロック', '豚モモ挽肉', '後豚足 (コラーゲン)', '熟成生ハム用原木'],
      recommendedCooking: ['自家製ポークジャーキー', '手作り肉団子・つみれ', '落花生と豚足のコラーゲンスープ'],
      idealWine: ['キャンティ (Chianti)', 'バルベーラ (Barbera)', '台湾18天生ビール']
    }
  },

  // 魚類海鮮 5 大部位
  'fish-dorsal': {
    'zh-TW': {
      name: '背肉 (魚菲力·厚切背排)',
      positioning: '肌肉緊實、低脂無刺、香煎與清蒸主力',
      description: '魚隻背鰭兩側厚實肌群，運動量大、組織緊密細緻，脂肪含量均勻，是頂級西式乾煎魚排與中式清蒸鮮魚的黃金首選。',
      extendedCuts: ['鮭魚厚切菲力 (Loin)', '金目鱸魚清肉排', '龍虎斑清肉排', '鮪魚赤身排'],
      recommendedCooking: ['法式香草奶油乾煎', '古法樹子蔥油清蒸', '日式味噌西京燒', '低溫慢烤魚排'],
      idealWine: ['Sauvignon Blanc (白蘇維濃)', 'Pinot Grigio (灰皮諾)', '純米吟釀清酒']
    },
    'en': {
      name: 'Dorsal Loin (Fish Fillet)',
      positioning: 'Firm Texture · Low Fat & Boneless · Pan-Sear Star',
      description: 'Thick muscular loins along the upper spine. Tight, refined flake with clean flavor, ideal for delicate steaming and crispy skin pan-searing.',
      extendedCuts: ['Salmon Loin Fillet', 'Sea Bass Supreme Fillet', 'Grouper Fillet', 'Tuna Akami Steak'],
      recommendedCooking: ['Crispy Skin Pan-Sear with Herb Butter', 'Steamed Fillet with Ginger & Scallions', 'Miso Saikyo-yaki'],
      idealWine: ['Sauvignon Blanc', 'Pinot Grigio', 'Junmai Ginjo Sake']
    },
    'ja': {
      name: '背肉 (魚フィレ・ロイン)',
      positioning: '身が締まり低脂肪 · 清蒸やムニエルに最適',
      description: '背びれに沿った厚みのある筋肉。身が細やかに締まっておりクセがなく、パリッとした皮目のソテーやネギ生姜蒸しに抜群です。',
      extendedCuts: ['サーモンロインフィレ', 'スズキの切り身', 'ハタの上身', '本マグロ赤身'],
      recommendedCooking: ['ハーブバタームニエル', 'ネギ生姜の中華風清蒸', '西京焼き', 'オーブンロースト'],
      idealWine: ['ソーヴィニヨン・ブラン', 'ピノ・グリージョ', '純米吟醸日本酒']
    }
  },
  'fish-ventral': {
    'zh-TW': {
      name: '腹肉 (魚腩·大腹·哈拉斯)',
      positioning: '油脂極致豐腴、頂級生魚片與炙燒之王',
      description: '魚腹腔兩側包覆內臟的軟嫩肌肉，富含 Omega-3 不飽和脂肪酸，油脂融點低，入口即化且甘香濃郁。',
      extendedCuts: ['黑鮪魚大腹 (Otoro)', '鮭魚肚條 (Belly Strip / Harasu)', '龍膽石斑魚肚', '紅甘肚刺身'],
      recommendedCooking: ['頂級生魚片刺身 (Sashimi)', '直火炭烤鹽燒魚腹', '噴槍炙燒壽司 (Aburi)', '薑絲鮮魚肚湯'],
      idealWine: ['乾型香檳 (Brut Champagne)', 'Chablis (夏布利白酒)', '辛口純米酒 (Dry Sake)']
    },
    'en': {
      name: 'Ventral Belly (Toro / Harasu)',
      positioning: 'Ultimate Rich Marbling · King of Sashimi & Aburi',
      description: 'Located along the lower ventral belly. Packed with rich Omega-3 fatty acids with a low melting point that dissolves delightfully across the palate.',
      extendedCuts: ['Bluefin Tuna Otoro', 'Salmon Belly Strips (Harasu)', 'Giant Grouper Belly', 'Amberjack Belly'],
      recommendedCooking: ['Prime Raw Sashimi', 'Charcoal Salt-Grilled Belly', 'Flame-Seared Aburi Sushi', 'Ginger Fish Belly Soup'],
      idealWine: ['Brut Champagne', 'Chablis', 'Dry Junmai Sake']
    },
    'ja': {
      name: '腹肉 (ハラス・大トロ)',
      positioning: '極上の脂の乗り · 刺身と炙り寿司の頂点',
      description: '内臓を包むお腹の部位。豊富なオメガ3脂肪酸を含み、融点が低いため口の中に入れた瞬間に甘い脂がとろけます。',
      extendedCuts: ['本マグロ大トロ (Otoro)', 'サーモンハラス', 'タマカイ・ハタ腹肉', 'カンパチ大トロ'],
      recommendedCooking: ['極上生刺身', 'ハラスの塩焼き', '炙り握り寿司', '生姜と魚腹のスープ'],
      idealWine: ['辛口シャンパン (Brut Champagne)', 'シャブリ (Chablis)', '辛口純米酒']
    }
  },
  'fish-collar': {
    'zh-TW': {
      name: '魚下巴 (喉頰肉·魚胸鰭連帶部)',
      positioning: '皮脆油香膠質滿點、日料居酒屋靈魂下酒菜',
      description: '魚鰓後方連同胸鰭周邊的三角形肌肉，兼具結實活動肌、厚潤魚皮與豐富天然魚油，是炭烤料理的無冕之王。',
      extendedCuts: ['鮭魚下巴 (Salmon Collar)', '紅甘魚下巴 (Hamachi Kama)', '海鱸魚下巴', '龍虎斑下巴'],
      recommendedCooking: ['日式居酒屋鹽烤魚下巴', '炭火醬燒', '空氣炸鍋酥烤', '酸菜魚下巴煲'],
      idealWine: ['台灣 18 天生啤酒', '吟釀辛口清酒', '威士忌 Highball (高球調酒)']
    },
    'en': {
      name: 'Fish Collar (Kama / Throat & Cheek)',
      positioning: 'Crispy Skin, Rich Fat & Collagen · Izakaya Favorite',
      description: 'Located behind the gills around the pectoral fins. Dense active muscle combined with rich fat pockets that crisp up gorgeously over charcoal.',
      extendedCuts: ['Salmon Collar', 'Yellowtail Collar (Hamachi Kama)', 'Sea Bass Collar', 'Grouper Collar'],
      recommendedCooking: ['Izakaya Salt-Grilled Kama', 'Charcoal Tare Glaze', 'Crispy Air-Fried Collar'],
      idealWine: ['Taiwan 18-Day Draft Beer', 'Dry Ginjo Sake', 'Whiskey Highball']
    },
    'ja': {
      name: 'カマ・魚下巴 (喉・頬肉)',
      positioning: 'パリパリの皮とジューシーな脂 · 居酒屋の絶品おつまみ',
      description: 'エラの後ろから胸ビレ周辺の部位。よく動かす筋肉とたっぷりのコラーゲン、良質な魚脂が詰まっており、塩焼きにすると最高です。',
      extendedCuts: ['サーモンカマ', 'ブリ・カンパチカマ (Hamachi Kama)', 'スズキのカマ', 'ハタのカマ'],
      recommendedCooking: ['居酒屋風カマの塩焼き', '照り焼き・タレ焼き', 'サクサクノンフライヤー焼き'],
      idealWine: ['台湾18天生ビール', '辛口吟醸酒', 'ウイスキーハイボール']
    }
  },
  'fish-head': {
    'zh-TW': {
      name: '魚頭 (骨髓·魚眼窩·膠質精華)',
      positioning: '精華膠原蛋白、砂鍋魚頭與煲湯之王',
      description: '魚頭部包含眼窩膠質（DHA寶庫）、下顎軟骨與腮邊肉，極耐久煮，經慢火細熬能釋放乳白濃郁膠質高湯。',
      extendedCuts: ['大頭鰱魚頭 (砂鍋專用)', '鮭魚整顆開邊魚頭', '龍虎斑魚頭切塊', '石斑魚骨膠原塊'],
      recommendedCooking: ['嘉義經典沙茶砂鍋魚頭', '港式蔥薑蒸魚頭', '味噌鮭魚頭豆腐湯', '剁椒魚頭'],
      idealWine: ['金門 58 度高粱酒', '埔里特級紹興酒', '生原酒清酒']
    },
    'en': {
      name: 'Fish Head & Collar (Collagen & Broth)',
      positioning: 'Rich Collagen & DHA · King of Claypot Fish Stews',
      description: 'Contains cheek medallions, eye sockets (DHA rich), and cartilaginous collagen that melt into a luscious, velvety broth during simmering.',
      extendedCuts: ['Bighead Carp Head', 'Salmon Split Head', 'Grouper Head Chunks', 'Collagen Bone Chunks'],
      recommendedCooking: ['Taiwanese Claypot Fish Head Stew', 'Steamed Fish Head with Fermented Chili', 'Salmon Head Miso Soup'],
      idealWine: ['Kinmen 58 Kaoliang', 'Puli Shaoxing Wine', 'Nama Sake']
    },
    'ja': {
      name: '魚頭・兜 (コラーゲン・スープの王様)',
      positioning: 'DHAとコラーゲンの宝庫 · 鍋物・兜焼き・アラ汁',
      description: '頬肉、目玉周りのゼラチン質（DHA豊富）、軟骨が凝縮された部位。じっくり煮込むことで濃厚な白濁スープが抽出されます。',
      extendedCuts: ['タイ・ハタの兜・頭部', 'サーモンの兜割り', 'ハタのアラ切り身', 'コラーゲン骨ブロック'],
      recommendedCooking: ['台湾風土鍋海鮮魚頭鍋 (砂鍋魚頭)', '兜焼き・塩焼き', 'サーモンアラの味噌汁', '中華風唐辛子蒸し (剁椒魚頭)'],
      idealWine: ['金門高粱酒', '紹興酒', '無濾過生原酒']
    }
  },
  'fish-tail': {
    'zh-TW': {
      name: '魚尾與皮 (天然明膠·活動肌排)',
      positioning: '極高結締組織、紅燒慢燉與魚皮凍首選',
      description: '魚隻尾柄肌肉與整尾厚實魚皮，運動頻率最高、富含天然明膠蛋白，適合長時間燜燒或熬製成彈牙爽口的天然魚皮凍。',
      extendedCuts: ['石斑魚尾段排', '鮭魚尾排', '涼拌深海魚皮', '手工膠原魚皮凍'],
      recommendedCooking: ['紅燒慢燜魚尾排', '台式涼拌蒜香魚皮', '藥膳魚尾骨膠原湯', '日式甘辛照燒魚尾'],
      idealWine: ['台灣金牌啤酒', 'Dry Rosé (粉紅酒)', '純米清酒']
    },
    'en': {
      name: 'Fish Tail & Skin (Natural Gelatin)',
      positioning: 'High Connective Muscle · Slow Braise & Fish Skin Aspic',
      description: 'The highest motion area on the fish. Densely woven with natural gelatin and firm muscular flakes, ideal for braising and chilled collagen jelly dishes.',
      extendedCuts: ['Grouper Tail Section', 'Salmon Tail Steak', 'Chilled Seasoned Fish Skin', 'Collagen Skin Aspic'],
      recommendedCooking: ['Slow Braised Fish Tail in Soy Sauce', 'Taiwanese Chilled Garlic Fish Skin', 'Collagen Herb Broth'],
      idealWine: ['Taiwan Gold Medal Beer', 'Dry Rosé', 'Junmai Sake']
    },
    'ja': {
      name: '尾肉・魚皮 (天然ゼラチン・コラーゲン)',
      positioning: '筋肉質でゼラチン質豊富 · 煮付けや皮ポン酢に',
      description: '魚の中で最も激しく動かす尾びれの筋肉と厚い皮。良質な天然ゼラチンと弾力ある赤身が特徴で、煮付けやコラーゲンスープに最適です。',
      extendedCuts: ['ハタの尾肉切り身', 'サーモンテールステーキ', '味付け魚皮', 'コラーゲン煮凝り'],
      recommendedCooking: ['魚テールの甘辛煮付け', 'サッパリ魚皮ポン酢', '薬膳コラーゲンスープ', '照り焼き'],
      idealWine: ['台湾金牌ビール', '辛口ロゼワイン', '純米酒']
    }
  }
};

/**
 * 取得本地化之大分切物件 (支援 zh-TW, en, ja)
 */
export function getLocalizedPrimal(primal = {}, currentLang = 'zh-TW') {
  if (!primal || !primal.id) return primal;
  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  const i18nData = PRIMALS_I18N[primal.id]?.[langKey];

  if (!i18nData) return primal;

  return {
    ...primal,
    name: i18nData.name || primal.name,
    positioning: i18nData.positioning || primal.positioning,
    description: i18nData.description || primal.description,
    extendedCuts: i18nData.extendedCuts || primal.extendedCuts,
    recommendedCooking: i18nData.recommendedCooking || primal.recommendedCooking,
    idealWine: i18nData.idealWine || primal.idealWine,
  };
}

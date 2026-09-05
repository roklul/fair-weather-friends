// 10 款經典調酒、4 大法則與 8 大料理搭餐情境完整多語系字典庫 (zh-TW, en, ja)

export const COCKTAIL_PRINCIPLES_I18N = {
  'zh-TW': [
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
  ],
  'en': [
    {
      title: 'Principle 1: Weight to Weight',
      desc: 'Delicate dishes (raw, steamed, salads) pair with light, high-acid cocktails (Daiquiri, Mojito); rich, fatty, grilled, or braised meats require structured, bittersweet, or smoky cocktails (Old Fashioned, Negroni, Penicillin) to balance.'
    },
    {
      title: 'Principle 2: Acidity Cuts Fat & Elevates Umami',
      desc: 'Lemon, lime, grapefruit, and carbonation slice through meat fat and deep-fried grease while amplifying natural seafood sweetness. For marbled short ribs or tempura, high acidity and effervescence are key.'
    },
    {
      title: 'Principle 3: Spice Clashes with High ABV (Soothe with Sweet/Bubbles)',
      desc: 'High proof and intense bitterness magnify capsaicin burn. For spicy hotpots, Thai, or Korean dishes, pair with lightly sweet, high-acid, or bubbly low-ABV cocktails (Margarita, Mojito, Gin Gin Mule) to cool the palate.'
    },
    {
      title: 'Principle 4: Dessert Pairing (Cocktail Sweetness >= Dessert)',
      desc: 'If a cocktail is less sweet than the dessert, the dessert strips away the fruit aromatics, leaving only bitter alcohol heat. Rich chocolate and tiramisu shine brightest alongside bittersweet roasted Espresso Martini.'
    }
  ],
  'ja': [
    {
      title: '原則一：重さの同調 (Weight to Weight)',
      desc: '繊細な料理（刺身・清蒸・サラダ）には軽快で酸味のあるカクテル（ダイキリ・モヒート）を。濃厚な脂や炭火焼き・角煮には、骨格がしっかりしたビタースイートやスモーキーなカクテル（オールドファッションド・ネグローニ・ペニシリン）が拮抗します。'
    },
    {
      title: '原則二：酸味と炭酸は脂を切り旨味を引き立てる (Acidity Cuts Fat)',
      desc: 'レモン・ライム・グレープフルーツと炭酸の泡は、肉のサシや揚げ物の油っこさを瞬時に洗い流し、海鮮の甘みを引き出します。サシの多いカルビや天ぷらには高酸味と炭酸が最高の相棒です。'
    },
    {
      title: '原則三：辛味には甘みと微炭酸で寄り添う (Spicy vs Sweet/Bubbles)',
      desc: '高アルコールや強い苦味はカプサイシンの刺激を増幅させます。麻辣火鍋やタイ・韓国料理のスパイシーな料理には、ほのかな甘み・高酸味・炭酸のある低アルコールカクテル（マルガリータ・モヒート・ジンジンミュール）が舌を和らげます。'
    },
    {
      title: '原則四：デザートペアリング (酒の甘み ≧ デザート)',
      desc: 'カクテルの甘みがデザートより低いと、デザートに香りを奪われアルコールの刺々しさだけが残ります。濃厚なカカオやティラミスには、コーヒーのロースト感香るエスプレッソマティーニが完璧に調和します。'
    }
  ]
};

export const DISH_TO_COCKTAIL_I18N = {
  'zh-TW': [
    {
      category: '炭烤牛排 / 煙燻肉品',
      dishes: '厚切肋眼、牛小排、煙燻牛胸 (Brisket)、烤豬肋排',
      rationale: '肉脂柔化波本酒精感，橡木桶、香草與焦糖香氣與炭烤梅納反應完美共鳴。'
    },
    {
      category: '酥脆炸物 / 鹽酥料理',
      dishes: '日式唐揚雞、台式鹽酥雞、炸蝦天婦羅、炸魚薯條',
      rationale: '生薑辛辣、薄荷冷香與密集氣泡如天然滅火器，極速消除炸皮油耗感。'
    },
    {
      category: '生食海鮮 / 清蒸鮮魚',
      dishes: '生蠔冷盤、清蒸龍虎斑、午仔魚、酸辣生蝦 (Ceviche)',
      rationale: '極致純淨的萊姆果酸代替檸檬提鮮，完全不干擾細緻白肉魚的天然旨味。'
    },
    {
      category: '墨西哥塔可 / 辛香燒烤',
      dishes: '牛肉 Taco、牧人豬肉 Taco、香料烤雞腿、起司玉米片',
      rationale: '龍舌蘭草本與青檸海鹽與洋蔥、香菜、辣椒形成天然產地風味連結。'
    },
    {
      category: '義式冷肉 / 熟成起司盤',
      dishes: '帕瑪火腿、薩拉米、帕瑪森起司、煙燻乳酪、堅果橄欖',
      rationale: '金巴利與甜苦艾酒的草本苦甜俐落切開肉脂，烘托起司的堅果氧化風味。'
    },
    {
      category: '多汁漢堡 / 美式早午餐',
      dishes: '培根起司雙層漢堡、班尼迪克蛋、煙燻鮭魚盤',
      rationale: '番茄鮮味、黑胡椒、伍斯特醬與檸檬酸化身液態調味醬，完美承接肉汁。'
    },
    {
      category: '麻辣火鍋 / 韓式烤五花',
      dishes: '麻辣鍋涮牛五花、韓式辣醬五花肉、泰式椒麻雞',
      rationale: '低酒精、清涼薄荷、青檸酸度與微甜氣泡迅速安撫辣椒素的灼熱感。'
    },
    {
      category: '精緻甜點 / 巧克力與可可',
      dishes: '正統提拉米蘇、熔岩黑巧克力蛋糕、焦糖烤布蕾',
      rationale: '現萃義式濃縮與咖啡利口酒的甜苦烘烤調性，為甜點劃下最優雅的句點。'
    }
  ],
  'en': [
    {
      category: 'Charcoal Steaks & Smoked BBQ',
      dishes: 'Thick Ribeye, Short Ribs, Smoked Brisket, BBQ Pork Ribs',
      rationale: 'Beef fat softens bourbon heat; oak, vanilla, and caramel harmonize with char and Maillard crust.'
    },
    {
      category: 'Crispy Deep-Fried & Tempura',
      dishes: 'Karaage Fried Chicken, Salt & Pepper Chicken, Shrimp Tempura, Fish & Chips',
      rationale: 'Zesty ginger, cool mint, and tight effervescence act as a palate cleanser against fried richness.'
    },
    {
      category: 'Raw Seafood & Steamed Fish',
      dishes: 'Fresh Oysters, Steamed Grouper, Threadfin Fillet, Seafood Ceviche',
      rationale: 'Pure lime acidity substitutes for lemon garnish, lifting natural sweet umami of delicate white fish.'
    },
    {
      category: 'Tacos & Spiced Grills',
      dishes: 'Beef Birria Tacos, Al Pastor Pork, Spiced Chicken Skewers, Nachos',
      rationale: 'Agave herbal notes and lime salt rim connect naturally with onions, cilantro, and chili heat.'
    },
    {
      category: 'Charcuterie & Aged Cheese',
      dishes: 'Prosciutto di Parma, Salami, Parmigiano-Reggiano, Smoked Gouda',
      rationale: 'Campari and sweet vermouth herbal bitters slice through cured meat fat, elevating aged nuttiness.'
    },
    {
      category: 'Juicy Burgers & Brunch',
      dishes: 'Double Bacon Cheeseburger, Eggs Benedict, Smoked Salmon Platter',
      rationale: 'Tomato umami, black pepper, Worcestershire, and lemon serve as a savory sauce for luscious juices.'
    },
    {
      category: 'Spicy Hotpot & Chili BBQ',
      dishes: 'Sichuan Mala Beef Hotpot, Korean Gochujang Pork, Thai Spicy Chicken',
      rationale: 'Low proof, cool mint, lime acidity, and subtle carbonation extinguish capsaicin fire instantly.'
    },
    {
      category: 'Artisan Desserts & Cocoa',
      dishes: 'Classic Tiramisu, Molten Lava Cake, Crème Brûlée',
      rationale: 'Fresh espresso and coffee liqueur provide bittersweet roasted depth for rich cocoa finishes.'
    }
  ],
  'ja': [
    {
      category: '炭火ステーキ・スモークBBQ',
      dishes: '厚切りリブロース、ショートリブ、スモークブリスケット、スペアリブ',
      rationale: '肉の脂がバーボンのアルコール感を和らげ、オーク樽・バニラ・カラメルの香りがメイラード反応の焦げ香と共鳴。'
    },
    {
      category: 'サクサク揚げ物・天ぷら',
      dishes: '鶏の唐揚げ、台湾風唐揚げ (塩酥鶏)、海老天ぷら、フィッシュ＆チップス',
      rationale: '生姜のキレ、ミントの爽快感、炭酸の刺激が揚げ油の重さを瞬時にリセット。'
    },
    {
      category: '生鮮魚介・清蒸鮮魚',
      dishes: '生牡蠣、ハタの清蒸、蒸し魚、シーフードセビーチェ',
      rationale: '極めてピュアなライムの酸味がレモンの役割を果たし、白身魚の繊細な旨味を邪魔しません。'
    },
    {
      category: 'メキシカンタコス・スパイス焼き',
      dishes: 'ビーフタコス、パストール豚肉タコス、スパイスチキン、ナチョス',
      rationale: 'テキーラの青草香とライム塩が、玉ねぎ・パクチー・唐辛子と産地の風味で直結。'
    },
    {
      category: '生ハム・熟成チーズプレート',
      dishes: 'パルマ産生ハム、サラミ、パルミジャーノ、スモークチーズ',
      rationale: 'カンパリとスイートベルモットのほろ苦さが脂を切り、チーズのナッツ香を引き立てます。'
    },
    {
      category: 'ジューシーバーガー・ブランチ',
      dishes: 'ベーコンチーズバーガー、エッグベネディクト、スモークサーモン',
      rationale: 'トマトの旨味、黒胡椒、ウスターソース、レモンが液体ソースとなって肉汁を包み込みます。'
    },
    {
      category: '麻辣火鍋・激辛サムギョプサル',
      dishes: '麻辣火鍋牛しゃぶ、コチュジャン豚バラ、タイ風スパイシーチキン',
      rationale: '低アルコール、爽快なミント、ライムの酸味、微炭酸がカプサイシンの刺激を優しく鎮静。'
    },
    {
      category: '極上デザート・ショコラ',
      dishes: '本格ティラミス、フォンダンショコラ、クレームブリュレ',
      rationale: '淹れたてエスプレッソとコーヒーリキュールのビタースイートが濃厚な甘みに極上の余韻を付与。'
    }
  ]
};

export const COCKTAILS_I18N = {
  margarita: {
    'zh-TW': {
      name: '瑪格麗特',
      baseSpirit: 'Tequila (龍舌蘭)',
      tagline: '塔可、炸物與酸辣海鮮的萬用解膩霸主',
      flavorTags: ['高酸爽口', '微鹹海鹽', '柑橘果香', '植物草本'],
      glassware: 'Coupe / Margarita 鹽口杯',
      method: 'Shake (搖盪法) · 雙重過濾',
      ratioText: '龍舌蘭 : 橙酒 : 萊姆汁 = 3 : 1 : 1.5',
      pairingDish: '墨西哥牛肉 Taco / 牧人豬肉 Taco'
    },
    'en': {
      name: 'Margarita',
      baseSpirit: 'Tequila Base',
      tagline: 'Ultimate Palate Cleanser for Tacos, Fried Food & Zesty Seafood',
      flavorTags: ['Crisp Acidity', 'Sea Salt Rim', 'Citrus Fruit', 'Agave Herbal'],
      glassware: 'Coupe / Salt-Rimmed Margarita Glass',
      method: 'Shake & Double Strain',
      ratioText: 'Tequila : Cointreau : Lime = 3 : 1 : 1.5',
      pairingDish: 'Beef Birria Tacos / Al Pastor Pork Tacos',
      tastingNotes: {
        initial: 'Crisp and sharp lime acidity strikes first, with the salted rim electrifying the palate.',
        mid: 'Agave herbal notes, white pepper, and ripe citrus orange blossom unfold smoothly.',
        finish: 'A subtle salty mineral finish with clean botanical sweetness, leaving the mouth completely refreshed.'
      },
      ingredients: [
        { name: 'Blanco Tequila', amount: 45, unit: 'mL' },
        { name: 'Cointreau / Triple Sec', amount: 15, unit: 'mL' },
        { name: 'Fresh Lime Juice', amount: 22.5, unit: 'mL' },
        { name: 'Agave Syrup (Optional)', amount: 5, unit: 'mL' },
        { name: 'Fine Sea Salt (Half-Rim)', amount: 1, unit: 'portion' }
      ],
      steps: [
        'Moisten half the rim of a chilled coupe glass with a lime wedge and roll in sea salt.',
        'Add Blanco Tequila, Cointreau, fresh lime juice, and agave syrup into a shaker.',
        'Fill with ice and shake vigorously for 12–15 seconds until frosty.',
        'Double strain into the prepared coupe glass and garnish with a lime wheel.'
      ],
      pairingFood: [
        { dish: 'Beef Birria Tacos / Al Pastor Pork Tacos', reason: 'Agave botanicals catch charred meat flavors; high acidity cuts through fat, and salt rim amplifies chili, onion, and cilantro.' },
        { dish: 'Crispy Fried Shrimp / Tempura Platter', reason: 'Lime acidity and salt act as a natural lemon-pepper seasoning, cutting fried oiliness instantly.' },
        { dish: 'Grilled Short Ribs / Pork Belly', reason: 'Citrus oils and tequila aromatics embrace charcoal grill notes while slicing through rich beef fat.' },
        { dish: 'Guacamole & Tortilla Chips', reason: 'Bright citrus acidity cuts through rich avocado lipids.' }
      ],
      avoidFood: ['Heavy Seafood Chowder', 'Ultra-Sweet Chocolate Desserts', 'Poached White Fish'],
      mocktailVersion: {
        name: 'Virgin Margarita',
        recipe: 'Fresh Lime Juice 30mL + Agave Syrup 15mL + Orange Juice 20mL + Soda Water 60mL + Half Salt Rim',
        rationale: 'Retains vibrant lime acidity and rich agave nectar aromatics; effervescence cleanses fried oils effortlessly.'
      }
    },
    'ja': {
      name: 'マルガリータ',
      baseSpirit: 'テキーラ (Tequila)',
      tagline: 'タコス・揚げ物・スパイシー魚介の万能リフレッシャー',
      flavorTags: ['爽快な高酸味', 'スノースタイル海塩', '柑橘の果実感', 'アガベの青草香'],
      glassware: 'クープグラス / 塩リムグラス',
      method: 'シェイク · ダブルストレイン',
      ratioText: 'テキーラ : コアントロー : ライム = 3 : 1 : 1.5',
      pairingDish: 'ビーフタコス / パストール豚肉タコス',
      tastingNotes: {
        initial: 'キリッとした鋭いライムの酸味が先陣を切り、ソルトリムが舌を目覚めさせます。',
        mid: 'アガベの青草香、ホワイトペッパー、熟成オレンジの甘みが滑らかに広がります。',
        finish: 'ほのかな塩気とミネラル感、クリーンな植物の甘みで締めくくり、後味は爽快そのもの。'
      },
      ingredients: [
        { name: 'ブランコ・テキーラ (Blanco Tequila)', amount: 45, unit: 'mL' },
        { name: 'コアントロー / トリプルセック', amount: 15, unit: 'mL' },
        { name: 'フレッシュライム果汁', amount: 22.5, unit: 'mL' },
        { name: 'アガベシロップ (お好みで)', amount: 5, unit: 'mL' },
        { name: '海塩 (グラス半周スノースタイル)', amount: 1, unit: '回分' }
      ],
      steps: [
        '冷やしたクープグラスの縁の半分をライムで湿らせ、海塩をつけます。',
        'シェーカーにテキーラ、コアントロー、ライム果汁、アガベシロップを注ぎます。',
        '氷をたっぷり入れ、シェーカーが白く霜を帯びるまで12〜15秒間ハードシェイクします。',
        'ダブルストレインでグラスに注ぎ、ライムスライスを飾ります。'
      ],
      pairingFood: [
        { dish: 'ビーフタコス / パストール豚肉タコス', reason: 'テキーラの青草香が炭火焼き肉を受け止め、高酸味が脂を切り、塩味が唐辛子・玉ねぎ・パクチーの旨味を引き立てます。' },
        { dish: '海老の天ぷら / 台湾風唐揚げ', reason: 'ライムの酸味と塩がレモンペッパーの役割を果たし、揚げ油の重さを瞬時にリセット。' },
        { dish: '牛カルビ炭火焼き / 豚バラ焼肉', reason: 'オレンジとテキーラの香りが香ばしさに寄り添い、酸味が濃厚な脂をスッキリ流します。' },
        { dish: 'ワカモレ＆トルティーヤチップス', reason: '柑橘のシャープな酸味がアボカドの濃厚な脂質を和らげます。' }
      ],
      avoidFood: ['濃厚クリームスープ', '激甘チョコレートケーキ', '繊細な白身魚の蒸し物'],
      mocktailVersion: {
        name: 'ノンアルコール・ライムマルガリータ',
        recipe: 'ライム果汁 30mL + アガベシロップ 15mL + オレンジ果汁 20mL + 炭酸水 60mL + ハーフソルトリム',
        rationale: 'ライムの高酸味とアガベの芳醇な蜜香を維持し、炭酸が揚げ油を綺麗に洗い流します。'
      }
    }
  },
  daiquiri: {
    'zh-TW': {
      name: '黛綺莉',
      baseSpirit: 'White Rum (白蘭姆酒)',
      tagline: '生食海鮮與清爽白肉的酸度天花板',
      flavorTags: ['明亮果酸', '甘蔗清甜', '純淨俐落', '低負擔'],
      glassware: '冰鎮 Coupe 碟型香檳杯',
      method: 'Shake (搖盪法) · 雙重過濾',
      ratioText: '白蘭姆 : 萊姆汁 : 糖漿 = 4 : 1.5 : 1',
      pairingDish: '生蠔冷盤 / 鮮蒸蛤蜊'
    },
    'en': {
      name: 'Daiquiri',
      baseSpirit: 'White Rum Base',
      tagline: 'Pinnacle of Pure Acidity for Raw Seafood & Delicate White Meat',
      flavorTags: ['Bright Citrus', 'Sugarcane Sweetness', 'Pure & Clean', 'Light Bodied'],
      glassware: 'Chilled Coupe Glass',
      method: 'Shake & Double Strain',
      ratioText: 'Rum : Lime Juice : Syrup = 4 : 1.5 : 1',
      pairingDish: 'Fresh Oysters / Steamed Clams',
      tastingNotes: {
        initial: 'Pure, crisp lime acidity strikes directly, clean and invigorating.',
        mid: 'Sugarcane sweetness and tropical fruit esters from white rum emerge gracefully.',
        finish: 'Flawlessly balanced sweet-tart finish that awakens the palate and salivates.'
      },
      ingredients: [
        { name: 'White Rum', amount: 60, unit: 'mL' },
        { name: 'Fresh Lime Juice', amount: 22.5, unit: 'mL' },
        { name: '1:1 Pure Cane Simple Syrup', amount: 15, unit: 'mL' }
      ],
      steps: [
        'Pre-chill a coupe glass thoroughly in the freezer.',
        'Add white rum, freshly squeezed lime juice, and simple syrup into a shaker.',
        'Fill with solid ice and shake vigorously for 10–12 seconds.',
        'Double strain through a fine mesh strainer into the chilled coupe.'
      ],
      pairingFood: [
        { dish: 'Fresh Oysters / Steamed Clams', reason: 'Pure lime acidity substitutes for lemon juice; rum cane sweetness elevates shellfish umami.' },
        { dish: 'Steamed Grouper / Threadfin with Ginger & Scallions', reason: 'Light-bodied with zero heaviness, perfectly respecting delicate fish fibers.' },
        { dish: 'Seafood Ceviche / Grilled Calamari', reason: 'Harmonious citrus interplay; rum softens vinegar and citrus sharpness.' },
        { dish: 'Garlic Butter Sautéed Prawns', reason: 'Clean acidity cuts through butter lipids, highlighting prawn snap and sweetness.' }
      ],
      avoidFood: ['Braised Beef Stew', 'Heavy Cheese Fondue', 'Spicy Sichuan Hotpot'],
      mocktailVersion: {
        name: 'Virgin Daiquiri',
        recipe: 'Fresh Lime Juice 30mL + Cane Syrup 15mL + Cold Brew White Peony Oolong Tea 30mL + Shake with Ice',
        rationale: 'White Peony Oolong provides fermented tea tannins mimicking white rum, with vibrant lime and cane sweetness.'
      }
    },
    'ja': {
      name: 'ダイキリ',
      baseSpirit: 'ホワイトラム (Rum)',
      tagline: '生鮮魚介と繊細な白身魚のための究極の酸味',
      flavorTags: ['鮮烈な果実酸', 'サトウキビの甘み', 'ピュア＆クリーン', '軽やかな飲み心地'],
      glassware: '冷やしたクープグラス',
      method: 'シェイク · ダブルストレイン',
      ratioText: 'ラム : ライム果汁 : シロップ = 4 : 1.5 : 1',
      pairingDish: '生牡蠣プレート / 蒸しハマグリ',
      tastingNotes: {
        initial: 'ピュアで雑味のないライム果汁の酸味が口いっぱいに広がり爽快。',
        mid: 'ホワイトラム由来のサトウキビの天然の甘みと発酵フルーツ香が調和。',
        finish: '酸味と甘みのバランスが完璧で、キレの良い後味が唾液を促します。'
      },
      ingredients: [
        { name: 'ホワイトラム (White Rum)', amount: 60, unit: 'mL' },
        { name: 'フレッシュライム果汁', amount: 22.5, unit: 'mL' },
        { name: 'シュガーシロップ (1:1)', amount: 15, unit: 'mL' }
      ],
      steps: [
        'クープグラスをあらかじめ冷凍庫で冷やしておきます。',
        'シェーカーにホワイトラム、絞りたてライム果汁、シロップを注ぎます。',
        '硬い氷をたっぷり入れ、10〜12秒間素早くハードシェイクします。',
        '茶こしを使ってダブルストレインし、冷えたクープグラスに注ぎます。'
      ],
      pairingFood: [
        { dish: '生牡蠣プレート / 蒸しハマグリ', reason: 'ライムの酸味がレモンの役割を果たし、ラムの甘みが貝類の旨味を引き立てます。' },
        { dish: 'ハタや白身魚の清蒸 (蒸し魚)', reason: '軽快で雑味がなく、繊細な白身の繊維やネギ生姜の香りを損ないません。' },
        { dish: 'シーフードセビーチェ / イカのグリル', reason: '柑橘の酸味同士が共鳴し、ラムが酢の刺激をまろやかに包みます。' },
        { dish: 'ガーリックシュリンプ', reason: 'キレのある酸味がバターの重さを切り、海老のプリプリ感を際立たせます。' }
      ],
      avoidFood: ['牛すじ煮込み', 'チーズフォンデュ', '激辛麻辣火鍋'],
      mocktailVersion: {
        name: 'ノンアルコール・ライムダイキリ',
        recipe: 'ライム果汁 30mL + サトウキビシロップ 15mL + 水出し白茶/烏龍茶 30mL + シェイク',
        rationale: '水出し茶のポリフェノールがラムのボディ感を再現し、ライムの酸味が極上の清涼感をもたらします。'
      }
    }
  },
  mojito: {
    'zh-TW': {
      name: '莫希托',
      baseSpirit: 'White Rum (白蘭姆酒)',
      tagline: '夏日炸物、海鮮與熱帶烤肉的高相容安全牌',
      flavorTags: ['新鮮薄荷', '氣泡清爽', '低酒精感', '青檸消暑'],
      glassware: 'Highball 高球杯 / 柯林杯',
      method: 'Muddle (壓榨薄荷) · 攪拌',
      ratioText: '白蘭姆 : 萊姆汁 : 糖漿 : 氣泡水 = 4 : 2 : 1.5 : 6',
      pairingDish: '台式鹽酥雞 / 炸物拼盤'
    },
    'en': {
      name: 'Mojito',
      baseSpirit: 'White Rum Base',
      tagline: 'Crowd Favorite for Summer Fried Dishes, Seafood & BBQ',
      flavorTags: ['Fresh Mint', 'Bubbly Refreshing', 'Low ABV Feel', 'Lime Cooler'],
      glassware: 'Highball / Collins Glass',
      method: 'Muddle Mint & Stir with Crushed Ice',
      ratioText: 'Rum : Lime : Syrup : Soda = 4 : 2 : 1.5 : 6',
      pairingDish: 'Taiwanese Salt & Pepper Chicken / Tempura Platter',
      tastingNotes: {
        initial: 'Invigorating cool mint aromas and lively effervescence instantly cool the palate.',
        mid: 'Zesty lime acidity melts into sweet sugarcane notes with gentle alcohol presence.',
        finish: 'Long-lasting mint coolness lingers in the throat, effortlessly drinkable.'
      },
      ingredients: [
        { name: 'White Rum', amount: 45, unit: 'mL' },
        { name: 'Fresh Lime Juice', amount: 20, unit: 'mL' },
        { name: 'Fine Sugar or Simple Syrup', amount: 15, unit: 'mL' },
        { name: 'Fresh Mint Leaves', amount: 10, unit: 'leaves' },
        { name: 'Club Soda Water', amount: 80, unit: 'mL' },
        { name: 'Crushed Ice', amount: 1, unit: 'full glass' }
      ],
      steps: [
        'Place mint leaves and syrup in glass; gently press 3-5 times to release essential oils.',
        'Add fresh lime juice and white rum.',
        'Fill glass 80% with crushed ice and stir gently from bottom up with a bar spoon.',
        'Top with soda water and crushed ice; slap a fresh mint sprig and garnish.'
      ],
      pairingFood: [
        { dish: 'Taiwanese Salt & Pepper Chicken / Tempura Platter', reason: 'Crushed ice, carbonation, and mint coolly extinguish deep-fried grease.' },
        { dish: 'Lemongrass Grilled Chicken / Herb Roast', reason: 'Mint and lime echo Southeast Asian lemongrass, basil, and charcoal char.' },
        { dish: 'Thai Shrimp Cakes / Spicy Seafood Salad', reason: 'Light sweetness and cool mint soothe chili heat while lifting seafood umami.' }
      ],
      avoidFood: ['Thick Black Pepper Steak', 'Red Wine Braised Beef', 'Intense Blue Cheese'],
      mocktailVersion: {
        name: 'Virgin Mojito',
        recipe: '10 Mint Leaves + Lime Juice 25mL + Syrup 15mL + Crushed Ice + Club Soda Top',
        rationale: 'Retains 100% of mint aroma and effervescent palate-cleansing power for all guests.'
      }
    },
    'ja': {
      name: 'モヒート',
      baseSpirit: 'ホワイトラム (Rum)',
      tagline: '揚げ物・魚介・BBQに寄り添う夏の爽快王道カクテル',
      flavorTags: ['フレッシュミント', '爽快な炭酸', '軽快なアルコール感', 'ライムの清涼感'],
      glassware: 'ハイボール / コリンズグラス',
      method: 'ミドル (ミントを軽く潰す) · ビルド',
      ratioText: 'ラム : ライム : シロップ : ソーダ = 4 : 2 : 1.5 : 6',
      pairingDish: '台湾風唐揚げ (塩酥鶏) / 揚げ物盛り合わせ',
      tastingNotes: {
        initial: '鼻を抜ける清涼なミントのハーブ香ときめ細かな炭酸泡で一気にクールダウン。',
        mid: 'ライムの爽やかな酸味とサトウキビの甘みが調和し、アルコール感も穏やか。',
        finish: '喉の奥にミントの清涼感が長く残り、何杯でも飲みたくなる爽やかさ。'
      },
      ingredients: [
        { name: 'ホワイトラム (White Rum)', amount: 45, unit: 'mL' },
        { name: 'フレッシュライム果汁', amount: 20, unit: 'mL' },
        { name: 'シロップまたは微粒子グラニュー糖', amount: 15, unit: 'mL' },
        { name: 'フレッシュミントの葉', amount: 10, unit: '枚' },
        { name: '無糖ソーダ水 (Soda Water)', amount: 80, unit: 'mL' },
        { name: 'クラッシュアイス', amount: 1, unit: 'グラス一杯' }
      ],
      steps: [
        'グラスの底にミント葉とシロップを入れ、ペストルで3〜5回軽く押して香りを引き出します。',
        'ライム果汁とホワイトラムを加えます。',
        'クラッシュアイスを8分目まで満たし、バースプーンで下から持ち上げるように優しく混ぜます。',
        'ソーダ水とクラッシュアイスを満たし、手のひらで叩いて香りを立たせたミントを飾ります。'
      ],
      pairingFood: [
        { dish: '台湾風唐揚げ (塩酥鶏) / 揚げ物盛り合わせ', reason: 'クラッシュアイス、炭酸、ミントの冷涼感が揚げ物の油っこさを即座にリセット。' },
        { dish: 'レモングラスチキングリル / ハーブチキン', reason: 'ミントとライムがエスニックハーブや炭火の香ばしさと完璧に調和。' },
        { dish: 'タイ風海老のすり身揚げ / ヤムウンセン', reason: 'ほのかな甘みと炭酸が唐辛子の刺激を優しく和らげ、魚介の甘みを引き立てます。' }
      ],
      avoidFood: ['厚切りペッパーステーキ', '牛すね肉の赤ワイン煮', '濃厚なブルーチーズ'],
      mocktailVersion: {
        name: 'バージン・モヒート (Virgin Mojito)',
        recipe: 'ミント葉 10枚 + ライム果汁 25mL + シロップ 15mL + クラッシュアイス + ソーダ水適量',
        rationale: 'ミントの芳香と炭酸の油切り効果はそのままに、誰もが安心して楽しめる一杯。'
      }
    }
  },
  'bloody-mary': {
    'zh-TW': {
      name: '血腥瑪麗',
      baseSpirit: 'Vodka (伏特加)',
      tagline: '早午餐、多汁漢堡與煙燻鹹肉的液態調味天花板',
      flavorTags: ['鹹鮮鮮味 (Umami)', '番茄酸甜', '辛香胡椒', '開胃解宿醉'],
      glassware: 'Highball 高球杯',
      method: 'Roll (滾杯法) 或 輕攪拌',
      ratioText: '伏特加 : 番茄汁 : 調味醬汁 = 3 : 8 : 1',
      pairingDish: '培根起司牛肉漢堡 / 薯條'
    },
    'en': {
      name: 'Bloody Mary',
      baseSpirit: 'Vodka Base',
      tagline: 'Liquid Umami Sauce for Brunch, Juicy Burgers & Smoked Bacon',
      flavorTags: ['Savory Umami', 'Zesty Tomato', 'Spicy Pepper', 'Aperitif & Brunch'],
      glassware: 'Highball Glass',
      method: 'Roll or Gentle Stir',
      ratioText: 'Vodka : Tomato Juice : Spices = 3 : 8 : 1',
      pairingDish: 'Bacon Cheeseburger / Truffle Fries',
      tastingNotes: {
        initial: 'Lush natural tomato sweetness and lemon acidity coat the palate like chilled gazpacho.',
        mid: 'Black pepper, savory Worcestershire umami, and Tabasco heat warm the back of the tongue.',
        finish: 'Celery salt aromatics and vodka\'s crisp backbone deliver profound savory complexity.'
      },
      ingredients: [
        { name: 'Vodka', amount: 45, unit: 'mL' },
        { name: 'Premium Unsalted Tomato Juice', amount: 100, unit: 'mL' },
        { name: 'Fresh Lemon Juice', amount: 15, unit: 'mL' },
        { name: 'Worcestershire Sauce', amount: 3, unit: 'dashes' },
        { name: 'Tabasco Sauce', amount: 3, unit: 'dashes' },
        { name: 'Celery Salt & Freshly Ground Black Pepper', amount: 1, unit: 'pinch' },
        { name: 'Fresh Celery Stalk & Lemon Wedge', amount: 1, unit: 'garnish' }
      ],
      steps: [
        'Combine vodka, tomato juice, lemon juice, Worcestershire, Tabasco, celery salt, and pepper in a tin.',
        'Add ice and gently roll between two shaker tins 4-5 times without vigorous shaking.',
        'Strain into a highball glass filled with fresh ice.',
        'Garnish with a crisp celery stalk and lemon wedge.'
      ],
      pairingFood: [
        { dish: 'Bacon Cheeseburger / Truffle Fries', reason: 'Acts as liquid ketchup and black pepper gravy, cutting through rich burger fat.' },
        { dish: 'Eggs Benedict / German Sausage Brunch', reason: 'Savory acidity slices through hollandaise sauce and creamy egg yolks.' },
        { dish: 'Smoked Salmon Platter / Crispy Bacon', reason: 'Tomato acid and spicy horseradish wash away heavy smoke lipids, highlighting cured savor.' }
      ],
      avoidFood: ['Classic Tiramisu', 'Delicate Steamed Pomfret', 'Fruit Sorbet'],
      mocktailVersion: {
        name: 'Virgin Mary',
        recipe: 'Tomato Juice 120mL + Lemon Juice 20mL + Worcestershire 3 dashes + Tabasco 3 dashes + Celery Salt + Ice',
        rationale: 'Retains complete savory, spicy, and tangy structure without alcohol; world-famous brunch mocktail.'
      }
    },
    'ja': {
      name: 'ブラッディメアリー',
      baseSpirit: 'ウォッカ (Vodka)',
      tagline: 'ブランチ・ジューシーバーガー・燻製ベーコンの飲む旨味ソース',
      flavorTags: ['凝縮された旨味 (Umami)', 'トマトの酸味', 'スパイシーペッパー', '食欲増進'],
      glassware: 'ハイボールグラス',
      method: 'ロール (氷ごと優しく移し替える)',
      ratioText: 'ウォッカ : トマトジュース : スパイス = 3 : 8 : 1',
      pairingDish: 'ベーコンチーズバーガー / ポテトフライ',
      tastingNotes: {
        initial: '濃厚な完熟トマトの旨味とレモンの酸味が舌を包み、まるで冷製ガスパチョのよう。',
        mid: '黒胡椒、ウスターソースのアンチョビ風味、タバスコの刺激が心地よく広がります。',
        finish: 'セロリの爽やかな香りとウォッカのクリアなキレが、奥深いスパイシーな余韻を残します。'
      },
      ingredients: [
        { name: 'ウォッカ (Vodka)', amount: 45, unit: 'mL' },
        { name: 'プレミアム無塩トマトジュース', amount: 100, unit: 'mL' },
        { name: 'フレッシュレモン果汁', amount: 15, unit: 'mL' },
        { name: 'ウスターソース (Worcestershire)', amount: 3, unit: 'ダッシュ' },
        { name: 'タバスコ (Tabasco)', amount: 3, unit: 'ダッシュ' },
        { name: 'セロリソルト＆粗挽き黒胡椒', amount: 1, unit: 'ひとつまみ' },
        { name: 'セロリスティック＆レモンカット', amount: 1, unit: '飾り' }
      ],
      steps: [
        'ミキシンググラスにウォッカ、トマトジュース、レモン果汁、調味料をすべて入れます。',
        '氷を加え、泡立てないよう2つのカップの間で4〜5回優しく「ロール (移し替え)」します。',
        '氷を入れたハイボールグラスに注ぎます。',
        '新鮮なセロリスティックとレモンを飾って完成です。'
      ],
      pairingFood: [
        { dish: 'ベーコンチーズバーガー / ポテトフライ', reason: '飲む特製ソースのように機能し、トマトの酸味とスパイスが濃厚な牛脂を綺麗に受け止めます。' },
        { dish: 'エッグベネディクト / ソーセージブランチ', reason: 'オランデーズソースや黄身の濃厚さを酸味とスパイシーさで爽快にリセット。' },
        { dish: 'スモークサーモン / 厚切り燻製ベーコン', reason: 'トマト酸とホースラディッシュ風味が燻製の重さを和らげ、旨味を引き立てます。' }
      ],
      avoidFood: ['ティラミス', '繊細な白身魚の蒸し物', 'フルーツシャーベット'],
      mocktailVersion: {
        name: 'バージン・メアリー (Virgin Mary)',
        recipe: 'トマトジュース 120mL + レモン果汁 20mL + ウスターソース 3滴 + タバスコ 3滴 + セロリソルト + 氷',
        rationale: 'ノンアルコールでも濃厚な旨味とスパイスの骨格は完璧で、ブランチの定番として世界中で愛されています。'
      }
    }
  },
  negroni: {
    'zh-TW': {
      name: '內格羅尼',
      baseSpirit: 'Gin (琴酒)',
      tagline: '義式冷肉、起司盤、炭烤香腸與燉肉的苦甜之王',
      flavorTags: ['草本苦甜', '甜美紅苦艾', '義大利金巴利', '高酒體開胃'],
      glassware: 'Rocks 古典短飲杯 (加大方冰)',
      method: 'Stir (攪拌法)',
      ratioText: '琴酒 : 金巴利 : 甜苦艾酒 = 1 : 1 : 1 (經典黃金等比)',
      pairingDish: '義式風乾火腿 (Prosciutto) / 薩拉米肉盤'
    },
    'en': {
      name: 'Negroni',
      baseSpirit: 'Gin Base',
      tagline: 'The Bittersweet King for Charcuterie, Aged Cheeses & Stews',
      flavorTags: ['Herbal Bittersweet', 'Sweet Vermouth', 'Italian Campari', 'Robust Aperitivo'],
      glassware: 'Rocks Glass with Clear Ice Sphere',
      method: 'Stir & Strain over Fresh Ice',
      ratioText: 'Gin : Campari : Sweet Vermouth = 1 : 1 : 1',
      pairingDish: 'Prosciutto di Parma / Salami & Cheese Board',
      tastingNotes: {
        initial: 'Campari\'s signature citrus peel bitterness and botanical aromas fill the nose immediately.',
        mid: 'Sweet vermouth\'s red grape, vanilla, and caramel counterbalance the bitter, supported by gin\'s crisp juniper.',
        finish: 'A remarkably prolonged bittersweet botanical finish that stimulates saliva and elevates appetite.'
      },
      ingredients: [
        { name: 'London Dry Gin', amount: 30, unit: 'mL' },
        { name: 'Campari Bitters', amount: 30, unit: 'mL' },
        { name: 'Sweet Red Vermouth', amount: 30, unit: 'mL' },
        { name: 'Fresh Orange Peel', amount: 1, unit: 'twist' }
      ],
      steps: [
        'Pour gin, Campari, and sweet vermouth in equal parts into a mixing glass.',
        'Fill with ice and stir smoothly for 30–40 seconds for optimal chill and dilution.',
        'Strain over a large clear ice rock into a rocks glass.',
        'Express fresh orange oils over the glass surface and drop the peel inside.'
      ],
      pairingFood: [
        { dish: 'Prosciutto di Parma / Salami Charcuterie', reason: 'Campari herbal bitters slice through cured charcuterie fat, lifting cured meat aromatics.' },
        { dish: 'Parmigiano-Reggiano / Aged Gouda Cheese', reason: 'Powerful body balances high dairy fats and salty crystals; bittersweet complexity elevates nuttiness.' },
        { dish: 'Charcoal Grilled Sausage / Pork Belly / Ribeye', reason: 'Herbal bitterness harmonizes with charred Maillard crusts, balancing heavy grease.' },
        { dish: 'Truffle Fries / Roasted Wild Mushrooms', reason: 'Sweet vermouth\'s earthy botanicals fuse seamlessly with wild mushrooms and truffle oils.' }
      ],
      avoidFood: ['Steamed Sea Bass', 'Fresh Raw Oysters', 'Spicy Sichuan Hotpot', 'Sweet Buttercream Cake'],
      mocktailVersion: {
        name: 'No-Groni',
        recipe: 'Non-alcoholic Gin 30mL + Italian Red Bitter Syrup 30mL + Non-alcoholic Red Vermouth 30mL + Orange Twist',
        rationale: 'Utilizes gentian root and citrus peel extracts to replicate the iconic 1:1:1 bittersweet appetite-stimulating balance.'
      }
    },
    'ja': {
      name: 'ネグローニ',
      baseSpirit: 'ジン (Gin)',
      tagline: '生ハム・熟成チーズ・炭火ソーセージのビタースイートの王様',
      flavorTags: ['ハーブのほろ苦さ', 'スイートベルモット', 'カンパリの赤', '重厚な食前酒'],
      glassware: 'ロックグラス (大氷)',
      method: 'ステア',
      ratioText: 'ジン : カンパリ : スイートベルモット = 1 : 1 : 1',
      pairingDish: 'プロシュート生ハム / サラミ盛り合わせ',
      tastingNotes: {
        initial: 'カンパリ特有のビターオレンジとハーブの香りが心地よく鼻腔を刺激。',
        mid: 'スイートベルモットのブドウ感やバニラの甘みが苦味を包み込み、ジンのジュニパーが骨格を支えます。',
        finish: 'ビタースイートなハーブの余韻が長く続き、食欲を最高潮に刺激します。'
      },
      ingredients: [
        { name: 'ロンドンドライジン (London Dry Gin)', amount: 30, unit: 'mL' },
        { name: 'カンパリ (Campari)', amount: 30, unit: 'mL' },
        { name: 'スイートベルモット (Sweet Vermouth)', amount: 30, unit: 'mL' },
        { name: 'フレッシュオレンジピール', amount: 1, unit: '枚' }
      ],
      steps: [
        'ミキシンググラスにジン、カンパリ、スイートベルモットを等量注ぎます。',
        '大きな氷を入れ、バースプーンで30〜40秒間滑らかにステアして冷却します。',
        '大きな透明氷を入れたロックグラスに注ぎ入れます。',
        'オレンジピールの精油をグラス表面に絞りかけ、グラスの中に落とします。'
      ],
      pairingFood: [
        { dish: 'プロシュート生ハム / サラミ盛り合わせ', reason: 'カンパリのほろ苦さが熟成肉の脂をすっきり切り、オレンジ香が肉の旨味を引き立てます。' },
        { dish: 'パルミジャーノ・レッジャーノ / 熟成ゴーダチーズ', reason: '力強い骨格がチーズの濃厚な乳脂肪や塩味の結晶を受け止め、ナッツ香と見事に調和。' },
        { dish: '炭火焼きサルシッチャ / 豚バラ焼肉 / ステーキ', reason: 'ハーブの苦味がメイラード反応の焦げ目と共鳴し、重たい脂っこさを中和。' },
        { dish: 'トリュフポテト / キノコのバターロースト', reason: 'ベルモットの大地を感じるハーブ香がキノコやトリュフの野性味と調和します。' }
      ],
      avoidFood: ['スズキの清蒸', '生牡蠣', '激辛火鍋 (苦味と辛味が衝突)', '甘すぎる生クリームケーキ'],
      mocktailVersion: {
        name: 'ノングローニ (No-Groni)',
        recipe: 'ノンアルコールジン 30mL + レッドビターシロップ 30mL + ノンアルコールベルモット 30mL + オレンジピール',
        rationale: 'リンドウ根や柑橘精油のエキスにより、1:1:1の黄金のビタースイート感と食欲増進効果を再現。'
      }
    }
  },
  'old-fashioned': {
    'zh-TW': {
      name: '古典雞尾酒',
      baseSpirit: 'Bourbon / Rye Whiskey (波本/裸麥威士忌)',
      tagline: '厚切肋眼、牛小排、煙燻肉排與黑巧克力的紳士搭配',
      flavorTags: ['木質橡木桶', '香草焦糖', '安格仕苦精', '厚實沉穩'],
      glassware: 'Rocks 重底古典杯',
      method: 'Build (直接注入直調法) / Stir',
      ratioText: '威士忌 60mL + 方糖 1顆 + 苦精 3滴',
      pairingDish: '厚切炭烤肋眼 / 紐約客牛排'
    },
    'en': {
      name: 'Old Fashioned',
      baseSpirit: 'Bourbon / Rye Whiskey',
      tagline: 'Gentleman\'s Match for Thick Ribeye, Smoked BBQ & Dark Chocolate',
      flavorTags: ['Toasted Oak', 'Vanilla Caramel', 'Angostura Bitters', 'Rich & Heavy'],
      glassware: 'Heavy Rocks Glass',
      method: 'Build in Glass / Gentle Stir',
      ratioText: 'Whiskey 60mL + Sugar Cube + 3 Dashes Bitters',
      pairingDish: 'Thick Charcoal Ribeye / NY Strip Steak',
      tastingNotes: {
        initial: 'Expressive orange oils lead into warm bourbon aromas of toasted oak and vanilla.',
        mid: 'Syrupy sweetness softens the alcohol warmth; cinnamon and clove spice notes emerge from Angostura.',
        finish: 'A magnificent, lingering finish of caramel, toffee, and toasted wood—sturdy, velvety, and profound.'
      },
      ingredients: [
        { name: 'Bourbon or Rye Whiskey', amount: 60, unit: 'mL' },
        { name: '2:1 Rich Simple Syrup (or 1 Sugar Cube)', amount: 7.5, unit: 'mL' },
        { name: 'Angostura Aromatic Bitters', amount: 2, unit: 'dashes' },
        { name: 'Fresh Orange Twist', amount: 1, unit: 'twist' }
      ],
      steps: [
        'Dash bitters and syrup into the base of a rocks glass.',
        'Add a large clear ice cube, pour in 30mL whiskey, and stir slowly for 20 seconds.',
        'Add remaining 30mL whiskey and continue stirring to reach velvety dilution.',
        'Express orange twist oils over the glass and drop into drink.'
      ],
      pairingFood: [
        { dish: 'Thick Charcoal Ribeye / NY Strip Steak', reason: 'Rich marbled beef fat softens high alcohol; oak and caramel harmonize with charcoal crust.' },
        { dish: 'Low & Slow Smoked Brisket / BBQ Ribs', reason: 'Bitters spices and bourbon sweetness embrace woodsmoke aromatics and tangy BBQ sauces.' },
        { dish: '70%+ Dark Chocolate / Crème Brûlée', reason: 'Whiskey vanilla and toasted wood extend chocolate bittersweetness without cloying.' }
      ],
      avoidFood: ['Spicy Seafood Tom Yum', 'Delicate Sashimi Platter', 'Sweet Fruit Salad'],
      mocktailVersion: {
        name: 'Virgin Old Fashioned',
        recipe: 'Non-alcoholic Whiskey 60mL + Maple Syrup 7.5mL + Aromatic NA Bitters 2 dashes + Orange Twist',
        rationale: 'Maple syrup and wood-extract botanicals deliver deep caramel and citrus synergy without alcohol.'
      }
    },
    'ja': {
      name: 'オールドファッションド',
      baseSpirit: 'バーボン / ライウイスキー',
      tagline: '厚切りリブロース・スモーク肉・ダークチョコの紳士の定番',
      flavorTags: ['オーク樽香', 'バニラ＆カラメル', 'アロマティックビターズ', '重厚な余韻'],
      glassware: 'ロックグラス',
      method: 'ビルド (グラス内で調合) / ステア',
      ratioText: 'ウイスキー 60mL + 角砂糖 1個 + ビターズ 3ダッシュ',
      pairingDish: '厚切り炭火リブロース / サーロインステーキ',
      tastingNotes: {
        initial: '華やかなオレンジピールの香りが先行し、バーボンの温かいバニラとオーク樽香が満ちます。',
        mid: 'ほのかな甘みがアルコールの刺激を包み、ビターズ由来のシナモンやナツメグのスパイスが浮上。',
        finish: 'カラメル、トフィー、スモーキーな樽香が喉の奥で長く続き、深みのある重厚な余韻を残します。'
      },
      ingredients: [
        { name: 'バーボンまたはライウイスキー', amount: 60, unit: 'mL' },
        { name: 'リッチシロップ (または角砂糖 1個)', amount: 7.5, unit: 'mL' },
        { name: 'アンゴスチュラ・アロマティック・ビターズ', amount: 2, unit: 'ダッシュ' },
        { name: 'フレッシュオレンジピール', amount: 1, unit: '枚' }
      ],
      steps: [
        'ロックグラスの底にビターズとシロップを入れます。',
        '大きな透明氷を入れ、ウイスキー半量(30mL)を注ぎ20秒間ゆっくりステア。',
        '残りのウイスキーを注ぎ、滑らかな口当たりになるまでステアを続けます。',
        'オレンジピールの精油を表面に絞りかけ、グラスに添えます。'
      ],
      pairingFood: [
        { dish: '厚切り炭火リブロース / サーロインステーキ', reason: '肉の豊富なサシがアルコール感を和らげ、オーク樽のカラメル香が焦げ目のメイラード香と共鳴。' },
        { dish: 'スモークブリスケット / スペアリブBBQ', reason: 'スパイスと甘みが燻製香やバーベキューソースの甘辛さに力強く寄り添います。' },
        { dish: 'カカオ70%以上のダークチョコ / クレームブリュレ', reason: 'ウイスキーのバニラ樽香がカカオのビタースイートな余韻を優雅に引き伸ばします。' }
      ],
      avoidFood: ['酸辣海鮮スープ', '刺身盛り合わせ', '甘いフルーツサラダ'],
      mocktailVersion: {
        name: 'ノンアルコール・オールドファッションド',
        recipe: 'ノンアルコールウイスキー 60mL + メープルシロップ 7.5mL + ノンアルビターズ 2滴 + オレンジピール',
        rationale: 'メープルのコクとオークエキスのウイスキーベースが、アルコールなしでも重厚なペアリング体験を提供。'
      }
    }
  },
  'paper-plane': {
    'zh-TW': {
      name: '紙飛機',
      baseSpirit: 'Bourbon Whiskey (波本威士忌)',
      tagline: '香料烤雞、烤豬肉、番茄燉肉與烤菇的現代經典解方',
      flavorTags: ['檸檬明亮酸', '苦橙利口酒', '草本堅果', '波本香草'],
      glassware: '冰鎮 Coupe 碟型杯',
      method: 'Shake (搖盪法) · 雙重過濾',
      ratioText: '波本 : 阿佩羅 : 阿瑪羅 : 萊姆 = 1 : 1 : 1 : 1 (四重等比)',
      pairingDish: '義式香料烤半雞 / 脆皮烤雞腿'
    },
    'en': {
      name: 'Paper Plane',
      baseSpirit: 'Bourbon Whiskey Base',
      tagline: 'Modern Classic for Herb Roasted Chicken, Roast Pork & Stews',
      flavorTags: ['Crisp Lemon', 'Aperol Bitter Orange', 'Amaro Herbal', 'Equal 4-Part Balance'],
      glassware: 'Chilled Coupe Glass',
      method: 'Shake & Double Strain',
      ratioText: 'Bourbon : Aperol : Amaro Nonino : Lemon = 1 : 1 : 1 : 1',
      pairingDish: 'Herb Roasted Chicken / Crispy Pork Chops',
      tastingNotes: {
        initial: 'Bright fresh lemon acidity and Aperol\'s bitter-sweet orange burst forth dynamically.',
        mid: 'Bourbon\'s rich corn sweetness and vanilla provide warm, rounded mid-palate support.',
        finish: 'Amaro Nonino\'s elegant Alpine herbs, botanicals, and citrus bitters create a craveable finish.'
      },
      ingredients: [
        { name: 'Bourbon Whiskey', amount: 22.5, unit: 'mL' },
        { name: 'Aperol Aperitivo', amount: 22.5, unit: 'mL' },
        { name: 'Amaro Nonino Quintessentia', amount: 22.5, unit: 'mL' },
        { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'mL' }
      ],
      steps: [
        'Add bourbon, Aperol, Amaro Nonino, and freshly squeezed lemon juice into a shaker in equal 1:1:1:1 parts.',
        'Fill with hard ice and shake vigorously for 12 seconds until frosty.',
        'Double strain into a chilled coupe glass with no ice.',
        'Garnish with a tiny origami paper plane or expressed lemon peel.'
      ],
      pairingFood: [
        { dish: 'Herb Roasted Chicken / Crispy Pork Chops', reason: 'Vibrant lemon acid cuts poultry skin fat; bourbon and amaro herbs meet roasting char.' },
        { dish: 'Pan-Seared Pork Shoulder / Grilled Sausages', reason: 'Bitter orange and herbal fruitiness effortlessly balance rich pork fat.' },
        { dish: 'Tomato Meatball Pasta / Artisan Pizza', reason: 'Aperol and lemon echo tomato acidity while bourbon adds sauce depth.' },
        { dish: 'Truffle Butter Roasted Wild Mushrooms', reason: 'Amaro\'s earthy herbal notes amplify wild mushroom umami and truffle richness.' }
      ],
      avoidFood: ['Buttercream Fruit Cake', 'Ultra-Spicy Sichuan Hotpot', 'Boiled White Shrimp'],
      mocktailVersion: {
        name: 'Virgin Paper Plane',
        recipe: 'Non-alcoholic Bourbon 25mL + Bitter Orange Soda 25mL + Concentrated Earl Grey Tea 25mL + Lemon Juice 25mL',
        rationale: 'Earl grey bergamot and bitter orange soda reproduce the iconic 1:1:1:1 bittersweet harmony seamlessly.'
      }
    },
    'ja': {
      name: 'ペーパープレーン',
      baseSpirit: 'バーボンウイスキー',
      tagline: 'ハーブローストチキン・ポークソテー・トマト煮込みの傑作',
      flavorTags: ['レモンのシャープな酸', 'アペロールの苦橙', 'アマーロハーブ', '四等分の黄金比'],
      glassware: 'クープグラス',
      method: 'シェイク · ダブルストレイン',
      ratioText: 'バーボン : アペロール : アマーロ : レモン = 1 : 1 : 1 : 1',
      pairingDish: '香草ローストチキン / ポークチョップ',
      tastingNotes: {
        initial: '搾りたてレモンの鮮やかな酸味とアペロールのビターオレンジが華やかに炸裂。',
        mid: 'バーボンのバニラと穀物の甘みが温かくボディを支え、飲みごたえをプラス。',
        finish: 'アマーロ・ノニーノの洗練された高山ハーブとオレンジピールのほろ苦さで心地よく着地。'
      },
      ingredients: [
        { name: 'バーボンウイスキー (Bourbon Whiskey)', amount: 22.5, unit: 'mL' },
        { name: 'アペロール (Aperol)', amount: 22.5, unit: 'mL' },
        { name: 'アマーロ・ノニーノ (Amaro Nonino)', amount: 22.5, unit: 'mL' },
        { name: 'フレッシュレモン果汁', amount: 22.5, unit: 'mL' }
      ],
      steps: [
        'シェーカーにバーボン、アペロール、ノニーノ、レモン果汁を等量(1:1:1:1)で注ぎます。',
        '硬い氷をたっぷり入れ、12秒間力強くシェイクして急冷します。',
        '氷が入らないようダブルストレインで冷えたクープグラスに注ぎます。',
        '小さな折り紙の紙飛行機をグラスの縁に挟んで提供します。'
      ],
      pairingFood: [
        { dish: '香草ローストチキン / ポークチョップ', reason: 'レモンの酸味が皮の脂を切り、バーボンとアマーロのスパイスが炭火の香ばしさと調和。' },
        { dish: '豚肩ロースのソテー / グリルソーセージ', reason: 'ビターオレンジとハーブの果実感が豚肉の甘い脂と抜群の相乗効果を生みます。' },
        { dish: 'トマトミートボールパスタ / マルゲリータピザ', reason: 'アペロールとレモンがトマトの酸味と共鳴し、バーボンがソースに厚みを与えます。' },
        { dish: 'キノコのトリュフバターソテー', reason: 'アマーロの大地を感じるハーブ香が野生キノコの旨味とトリュフの香りを倍増させます。' }
      ],
      avoidFood: ['フルーツ生クリームケーキ', '激辛麻辣火鍋', 'ボイルエビ'],
      mocktailVersion: {
        name: 'ノンアルコール・ペーパープレーン',
        recipe: 'ノンアルバーボン 25mL + ビターオレンジソーダ 25mL + 濃縮アールグレイ 25mL + レモン果汁 25mL',
        rationale: 'アールグレイのベルガモットタンニンと柑橘炭酸により、1:1:1:1の完璧なバランスを再現。'
      }
    }
  },
  penicillin: {
    'zh-TW': {
      name: '盤尼西林',
      baseSpirit: 'Blended Scotch & Islay Peated (蘇格蘭調和與泥煤威士忌)',
      tagline: '煙燻牛胸、羊排、薑母鴨、胡椒鴨與炭火燒烤的神級良藥',
      flavorTags: ['泥煤煙燻', '辛香薑汁', '濃純蜂蜜', '檸檬生津'],
      glassware: 'Rocks 威士忌杯 (加大冰塊)',
      method: 'Shake (搖盪) + 頂層漂浮泥煤威士忌 (Float)',
      ratioText: '調和蘇格蘭 : 檸檬 : 蜂蜜薑汁 : 泥煤蘇格蘭 = 6 : 2.25 : 2.25 : 1',
      pairingDish: '低溫煙燻牛胸肉 (Brisket) / 炭火烤羊排'
    },
    'en': {
      name: 'Penicillin',
      baseSpirit: 'Blended Scotch & Islay Peated',
      tagline: 'Smoky Panacea for Smoked Brisket, Lamb Chops & BBQ Roasts',
      flavorTags: ['Peaty Smoke', 'Zesty Ginger', 'Raw Honey', 'Citrus Lift'],
      glassware: 'Rocks Glass with Large Ice',
      method: 'Shake Base Ingredients + Islay Scotch Float',
      ratioText: 'Scotch : Lemon : Honey-Ginger : Islay Float = 6 : 2.25 : 2.25 : 1',
      pairingDish: 'Low & Slow Smoked Brisket / Grilled Lamb Chops',
      tastingNotes: {
        initial: 'Bringing the glass close delivers instant aromas of campfire smoke, Islay peat, and oceanic brine.',
        mid: 'Taking a sip reveals comforting lemon-honey sweet acidity, followed by a burst of fiery ginger spice.',
        finish: 'Smoky oak, malt sweetness, and lingering ginger heat warm the throat with incredible layered impact.'
      },
      ingredients: [
        { name: 'Blended Scotch Whisky', amount: 60, unit: 'mL' },
        { name: 'Fresh Lemon Juice', amount: 22.5, unit: 'mL' },
        { name: 'Honey-Ginger Syrup', amount: 22.5, unit: 'mL' },
        { name: 'Islay Heavily Peated Scotch', amount: 7.5, unit: 'mL (Float)' },
        { name: 'Candied Ginger or Fresh Ginger Slice', amount: 1, unit: 'garnish' }
      ],
      steps: [
        'Add blended Scotch, fresh lemon juice, and honey-ginger syrup into a shaker.',
        'Fill with ice and shake vigorously for 12–15 seconds.',
        'Strain into a rocks glass over a single large ice rock.',
        'Gently float 7.5mL of peated Islay Scotch across the back of a bar spoon onto the top.',
        'Garnish with a slice of candied ginger.'
      ],
      pairingFood: [
        { dish: 'Low & Slow Smoked Brisket / Grilled Lamb Chops', reason: 'Top-layer peat smoke joins BBQ charred wood seamlessly; honey-ginger tames lamb gaminess.' },
        { dish: 'Taiwanese Pepper Duck / Ginger Duck Stew', reason: 'Ginger, pepper, and honey botanicals form an uninterrupted aromatic harmony with braised poultry.' },
        { dish: 'Charcoal Grilled Pork Ribs', reason: 'Crisp pork lipids are enveloped by smoky peat, while ginger heat stimulates saliva to cleanse the palate.' }
      ],
      avoidFood: ['Steamed White Fish', 'Delicate Raw Oysters', 'Fruit Yogurt Salad'],
      mocktailVersion: {
        name: 'Smoked Ginger Cure',
        recipe: 'Fresh Ginger-Honey Syrup 30mL + Lemon Juice 25mL + Lapsang Souchong Smoked Black Tea 60mL + Shake with Ice',
        rationale: 'Pine-smoked Lapsang Souchong tea perfectly replaces Islay peat; ginger and honey provide warming spice depth.'
      }
    },
    'ja': {
      name: 'ペニシリン',
      baseSpirit: 'スコッチ＆アイラピートウイスキー',
      tagline: 'スモークブリスケット・ラムチョップ・炭火焼き肉の特効薬',
      flavorTags: ['アイラ島のピート煙', 'スパイシージンジャー', '濃厚ハチミツ', 'レモンの酸味'],
      glassware: 'ロックグラス',
      method: 'シェイク ＋ アイラウイスキーをフロート',
      ratioText: 'ブレンデッド : レモン : 蜂蜜生姜 : アイラ = 6 : 2.25 : 2.25 : 1',
      pairingDish: 'スモークブリスケット / 炭火ラムチョップ',
      tastingNotes: {
        initial: 'グラスを近づけた瞬間、アイラ島特有の焚き火のようなピート煙と潮風の香りが鼻腔を直撃。',
        mid: '口に含むとレモンと蜂蜜の優しい甘酸っぱさが広がり、続いて生姜の鮮烈なスパイシー感が炸裂。',
        finish: 'スモーキーな樽香、モルトの甘み、生姜の温かさが喉の奥で長く持続し、圧倒的な重厚感を残します。'
      },
      ingredients: [
        { name: 'ブレンデッド・スコッチウイスキー', amount: 60, unit: 'mL' },
        { name: 'フレッシュレモン果汁', amount: 22.5, unit: 'mL' },
        { name: '自家製ハニー・ジンジャーシロップ', amount: 22.5, unit: 'mL' },
        { name: 'アイラ島ヘビリーピーテッドウイスキー', amount: 7.5, unit: 'mL (フロート)' },
        { name: '砂糖漬け生姜スライス', amount: 1, unit: '枚' }
      ],
      steps: [
        'シェーカーにブレンデッドスコッチ、レモン果汁、蜂蜜生姜シロップを注ぎます。',
        '氷を入れ、12〜15秒間ハードシェイクして急冷します。',
        '大氷を入れたロックグラスに注ぎ入れます。',
        'バースプーンの背を使って、アイラウイスキー7.5mLを液面に優しく「フロート」します。',
        '砂糖漬け生姜を飾って完成です。'
      ],
      pairingFood: [
        { dish: 'スモークブリスケット / 炭火ラムチョップ', reason: '表面のピート煙が炭火スモークと直結し、蜂蜜生姜がラムや牛肉の脂をまろやかに包みます。' },
        { dish: '台湾風生姜鴨鍋 (薑母鴨) / 黒胡椒鴨', reason: '生姜・胡椒・蜂蜜のスパイス構成が鴨肉の濃厚なスープと完璧に共鳴。' },
        { dish: '炭火焼き黒豚スペアリブ', reason: '香ばしい豚の脂をスモーキーなピートが包み、生姜の刺激が脂っこさを素早くリセット。' }
      ],
      avoidFood: ['白身魚の清蒸', '繊細な生牡蠣', 'フルーツヨーグルト'],
      mocktailVersion: {
        name: 'ノンアルコール・スモークジンジャー',
        recipe: '生姜蜂蜜シロップ 30mL + レモン果汁 25mL + 正山小種 (松燻製紅茶) 60mL + シェイク',
        rationale: '松葉で燻製された正山小種紅茶がアイラピートを見事に代用し、生姜と蜂蜜が温かいスパイス感を提供。'
      }
    }
  },
  'gin-gin-mule': {
    'zh-TW': {
      name: '琴騾子',
      baseSpirit: 'Gin (琴酒)',
      tagline: '炸物海鮮、唐揚雞、泰式椒麻雞與草本辛香料理的氣泡解方',
      flavorTags: ['辛辣薑汁氣泡', '新鮮薄荷', '杜松子草本', '青檸酸爽'],
      glassware: 'Highball 高球杯 / 銅馬克杯',
      method: 'Muddle, Shake & Top with Ginger Beer',
      ratioText: '琴酒 : 萊姆 : 糖漿 : 薑汁啤酒 = 5 : 2 : 1.5 : 9',
      pairingDish: '日式唐揚炸雞 / 炸蝦蟹天婦羅'
    },
    'en': {
      name: 'Gin Gin Mule',
      baseSpirit: 'Gin Base',
      tagline: 'Bubbly Panacea for Fried Foods, Karaage, Thai Crispy Chicken & Herbs',
      flavorTags: ['Spicy Ginger Fizz', 'Fresh Mint', 'Juniper Herbal', 'Zesty Lime'],
      glassware: 'Highball Glass / Copper Mug',
      method: 'Muddle, Shake & Top with Ginger Beer',
      ratioText: 'Gin : Lime : Syrup : Ginger Beer = 5 : 2 : 1.5 : 9',
      pairingDish: 'Japanese Karaage Chicken / Tempura Platter',
      tastingNotes: {
        initial: 'Spicy ginger beer carbonation and fresh mint coolly electrify the palate.',
        mid: 'Gin\'s woody juniper botanicals and crisp lime acidity interlock, firmer and more structured than a Mojito.',
        finish: 'Leaves gentle ginger warmth and effervescent freshness, instantly resetting the taste buds.'
      },
      ingredients: [
        { name: 'London Dry Gin', amount: 50, unit: 'mL' },
        { name: 'Fresh Lime Juice', amount: 20, unit: 'mL' },
        { name: 'Simple Cane Syrup', amount: 15, unit: 'mL' },
        { name: 'Fresh Mint Leaves', amount: 8, unit: 'leaves' },
        { name: 'Spicy Ginger Beer', amount: 90, unit: 'mL (Top)' }
      ],
      steps: [
        'Lightly press mint leaves and simple syrup in shaker to release aromatics.',
        'Add gin, lime juice, and ice; shake for 10 seconds.',
        'Double strain into a highball glass or copper mug packed with ice.',
        'Top slowly with spicy ginger beer, lift gently with a bar spoon, and garnish with mint sprig and lime wheel.'
      ],
      pairingFood: [
        { dish: 'Japanese Karaage Chicken / Tempura Platter', reason: 'Fiery ginger and crisp bubbles cut batter grease instantly, while mint lifts meat aromatics.' },
        { dish: 'Thai Crispy Lemon Chicken / Lemongrass Seafood', reason: 'Gin botanicals naturally echo Thai kaffir lime and lemongrass; ginger sweet soothes spice heat.' },
        { dish: 'Charcoal Salted Yakitori Skewers', reason: 'Replaces traditional lemon and sake with a refreshing, bubbly palate cleanser.' }
      ],
      avoidFood: ['Red Wine Braised Beef', 'Intense Dark Chocolate', 'Parmesan Cheese Board'],
      mocktailVersion: {
        name: 'Virgin Gin Mule',
        recipe: '8 Mint Leaves + Lime Juice 20mL + Juniper Botanical Water 40mL + Ice + Ginger Beer Top',
        rationale: 'Juniper botanical water replicates classic gin botanicals, pairing with spicy ginger fizz to conquer fried foods.'
      }
    },
    'ja': {
      name: 'ジンジンミュール',
      baseSpirit: 'ジン (Gin)',
      tagline: '唐揚げ・天ぷら・タイ風チキン・ハーブ料理の炭酸リフレッシャー',
      flavorTags: ['スパイシージンジャー炭酸', 'フレッシュミント', 'ジュニパーハーブ', 'ライムのキレ'],
      glassware: 'ハイボールグラス / 銅製マグカップ',
      method: 'ミドル、シェイク ＆ ジンジャービアで満たす',
      ratioText: 'ジン : ライム : シロップ : ジンジャービア = 5 : 2 : 1.5 : 9',
      pairingDish: '鶏の唐揚げ / 海老天ぷら盛り合わせ',
      tastingNotes: {
        initial: 'ピリッとしたジンジャービアの刺激的な炭酸とミントの清涼感が一気に舌を目覚めさせます。',
        mid: 'ジンのジュニパーベリーとライムの酸味が交差し、モヒートよりも骨格のしっかりした味わい。',
        finish: '喉元に心地よい生姜の温もりと炭酸の爽快感が残り、味覚を瞬時にリセット。'
      },
      ingredients: [
        { name: 'ロンドンドライジン (London Dry Gin)', amount: 50, unit: 'mL' },
        { name: 'フレッシュライム果汁', amount: 20, unit: 'mL' },
        { name: 'シュガーシロップ', amount: 15, unit: 'mL' },
        { name: 'フレッシュミントの葉', amount: 8, unit: '枚' },
        { name: 'スパイシージンジャービア (Ginger Beer)', amount: 90, unit: 'mL (満たす)' }
      ],
      steps: [
        'シェーカーの底にミント葉とシロップを入れ、軽く押して香りを引き出します。',
        'ジン、ライム果汁、氷を入れ、10秒間シェイクします。',
        '氷をたっぷり入れたハイボールグラスまたは銅製マグにダブルストレインします。',
        'スパイシーなジンジャービアを注ぎ、軽くステアしてミントとライムを飾ります。'
      ],
      pairingFood: [
        { dish: '鶏の唐揚げ / 海老天ぷら盛り合わせ', reason: '生姜の辛みと強炭酸が衣の油っこさを瞬時に消し去り、ミントが肉の旨味を引き立てます。' },
        { dish: 'タイ風スパイシーチキン / レモングラス魚介', reason: 'ジンのハーブがバイマックルーやレモングラスと同調し、生姜の甘みが辛さを鎮静。' },
        { dish: '炭火焼き鳥 (塩)', reason: 'レモン絞りや冷酒の代わりに、爽快な炭酸とハーブで口の中をリフレッシュ。' }
      ],
      avoidFood: ['牛すじ赤ワイン煮', '濃厚ダークチョコ', 'パルミジャーノチーズ'],
      mocktailVersion: {
        name: 'ノンアルコール・ジンジンミュール',
        recipe: 'ミント 8枚 + ライム果汁 20mL + ジュニパーハーブウォーター 40mL + 氷 + ジンジャービア',
        rationale: 'ジュニパーウォーターでジンの香りを再現し、スパイシーな生姜炭酸が揚げ物の油をリフレッシュ。'
      }
    }
  },
  'espresso-martini': {
    'zh-TW': {
      name: '艾斯普雷索馬丁尼',
      baseSpirit: 'Vodka (伏特加)',
      tagline: '提拉米蘇、巧克力甜點與重口味餐後收束的極致句點',
      flavorTags: ['現萃義式濃縮', '烘焙可可香', '綿密咖啡泡沫', '甜苦醇厚'],
      glassware: '冰鎮 Martini / Coupe 馬丁尼杯',
      method: 'Hard Shake (強力搖盪產生 Crema 泡沫)',
      ratioText: '伏特加 : 咖啡利口酒 : 義式濃縮 = 2 : 1 : 1.5',
      pairingDish: '義式正統提拉米蘇 (Tiramisu)'
    },
    'en': {
      name: 'Espresso Martini',
      baseSpirit: 'Vodka Base',
      tagline: 'Ultimate Dessert Finale for Tiramisu, Lava Cakes & After-Dinner Indulgence',
      flavorTags: ['Fresh Espresso', 'Toasted Cocoa', 'Velvety Crema Foam', 'Bittersweet Depth'],
      glassware: 'Chilled Martini / Coupe Glass',
      method: 'Hard Shake for Thick Velvety Crema',
      ratioText: 'Vodka : Coffee Liqueur : Espresso = 2 : 1 : 1.5',
      pairingDish: 'Classic Italian Tiramisu',
      tastingNotes: {
        initial: 'Lips meet the luxurious, velvety crema foam with intoxicating freshly roasted nutty aromas.',
        mid: 'Intense fresh espresso bitterness integrates with crisp vodka, cushioned by rich coffee liqueur sweetness.',
        finish: 'Dark chocolate, toasted almonds, and roasted caramel bittersweetness linger gracefully—invigorating and refined.'
      },
      ingredients: [
        { name: 'Vodka', amount: 45, unit: 'mL' },
        { name: 'Kahlúa Coffee Liqueur', amount: 20, unit: 'mL' },
        { name: 'Freshly Brewed Hot Espresso', amount: 30, unit: 'mL' },
        { name: 'Simple Cane Syrup (to taste)', amount: 5, unit: 'mL' },
        { name: 'Roasted Coffee Beans (Garnish)', amount: 3, unit: 'beans' }
      ],
      steps: [
        'Pre-chill a martini coupe glass. Brew a fresh, crema-rich shot of hot espresso.',
        'Combine vodka, coffee liqueur, hot espresso, and simple syrup in a shaker.',
        'Fill completely with hard ice and HARD SHAKE vigorously for 15 seconds to whip up thick crema foam.',
        'Double strain quickly into the chilled martini glass; a velvety crema head will float to the surface.',
        'Gently float 3 roasted coffee beans in the center (representing health, wealth, and happiness).'
      ],
      pairingFood: [
        { dish: 'Classic Italian Tiramisu', reason: 'Coffee, spirits, cocoa, and mascarpone harmonize in complete synergy—a world-class dessert pairing!' },
        { dish: '70% Molten Dark Chocolate Lava Cake / Brownie', reason: 'Roasted coffee bitterness blends with rich cocoa; liqueur sweetness prevents chocolate from turning the drink astringent.' },
        { dish: 'Crème Brûlée / Vanilla Gelato', reason: 'Bittersweet coffee cuts through dense custard egg yolks, like an elevated adult Affogato.' }
      ],
      avoidFood: ['Steamed Seafood', 'Sashimi & Raw Oysters', 'Spicy Hotpot', 'Garlic Stir-Fries'],
      mocktailVersion: {
        name: 'Virgin Espresso Martini',
        recipe: 'Fresh Hot Espresso 35mL + Cold Brew Coffee Concentrate 30mL + Vanilla Syrup 15mL + Hard Shake for Crema',
        rationale: 'Shaking hot espresso with ice whips up luxurious crema foam, delivering robust coffee depth without alcohol.'
      }
    },
    'ja': {
      name: 'エスプレッソマティーニ',
      baseSpirit: 'ウォッカ (Vodka)',
      tagline: 'ティラミス・フォンダンショコラ・クレームブリュレの完璧な締めくくり',
      flavorTags: ['淹れたてエスプレッソ', 'ローストカカオ', '濃密なクレマ泡', '深みのあるビタースイート'],
      glassware: '冷やしたクープまたはマティーニグラス',
      method: 'ハードシェイク (豊かな泡を立てる)',
      ratioText: 'ウォッカ : カルーア : エスプレッソ : シロップ = 4 : 2 : 3 : 0.5',
      pairingDish: '本格ティラミス (Tiramisu) / フォンダンショコラ',
      tastingNotes: {
        initial: '唇に触れるシルクのように濃密なクレマ泡と、ローストナッツの香ばしいアロマ。',
        mid: '淹れたてエスプレッソの芳醇な苦味とウォッカのキレ、コーヒーリキュールの滑らかな甘みが融合。',
        finish: 'ダークチョコレート、ローストアーモンド、カラメルのビタースイートな余韻が優雅に持続。'
      },
      ingredients: [
        { name: 'ウォッカ (Vodka)', amount: 45, unit: 'mL' },
        { name: 'カルーア・コーヒーリキュール (Kahlúa)', amount: 20, unit: 'mL' },
        { name: '淹れたて熱々エスプレッソ', amount: 30, unit: 'mL' },
        { name: 'シュガーシロップ (お好みで)', amount: 5, unit: 'mL' },
        { name: '焙煎コーヒー豆', amount: 3, unit: '粒 (飾り)' }
      ],
      steps: [
        'マティーニグラスを冷やしておきます。クレマ豊かなエスプレッソを抽出します。',
        'シェーカーにウォッカ、リキュール、熱いエスプレッソ、シロップを素早く注ぎます。',
        '氷をたっぷり入れ、濃密なクレマ泡が立つよう15秒間「全力でハードシェイク」します。',
        'ダブルストレインでグラスに素早く注ぐと、表面に美しいベルベット状の泡が浮かびます。',
        '中央に3粒のコーヒー豆 (健康・富・幸福の象徴) を浮かべて完成です。'
      ],
      pairingFood: [
        { dish: '本格ティラミス (Tiramisu)', reason: 'コーヒー、洋酒、ココアパウダー、マスカルポーネが完璧に重なり合う世界最高峰のデザートペアリング！' },
        { dish: 'フォンダンショコラ / 濃厚ブラウニー', reason: 'コーヒーのロースト感がカカオの深みと調和し、リキュールの甘みがチョコの苦味をまろやかにします。' },
        { dish: 'クレームブリュレ / バニラアイスクリーム', reason: 'コーヒーのほろ苦さが濃厚なカスタードの卵黄や乳脂肪を切り、大人のアフォガートのように機能。' }
      ],
      avoidFood: ['蒸し魚・海鮮料理', '刺身・生牡蠣', '激辛麻辣火鍋', 'ニンニク炒め'],
      mocktailVersion: {
        name: 'ノンアルコール・エスプレッソマティーニ',
        recipe: '熱いエスプレッソ 35mL + コールドブリュー濃縮液 30mL + バニラシロップ 15mL + ハードシェイク',
        rationale: '熱いエスプレッソと氷の急冷シェイクで濃密なクレマ泡を再現し、ノンアルコールでも濃厚なコーヒー感を堪能できます。'
      }
    }
  }
};

// 輔助函式：取得在地化調酒物件
export function getLocalizedCocktail(cocktail, currentLang = 'zh-TW') {
  if (!cocktail) return null;
  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  const loc = COCKTAILS_I18N[cocktail.id]?.[langKey];
  if (!loc) return cocktail;

  return {
    ...cocktail,
    name: loc.name || cocktail.name,
    baseSpirit: loc.baseSpirit || cocktail.baseSpirit,
    tagline: loc.tagline || cocktail.tagline,
    flavorTags: loc.flavorTags || cocktail.flavorTags,
    glassware: loc.glassware || cocktail.glassware,
    method: loc.method || cocktail.method,
    ratioText: loc.ratioText || cocktail.ratioText,
    tastingNotes: loc.tastingNotes || cocktail.tastingNotes,
    ingredients: loc.ingredients || cocktail.ingredients,
    steps: loc.steps || cocktail.steps,
    pairingFood: loc.pairingFood || (cocktail.pairingFood ? [
      {
        ...cocktail.pairingFood[0],
        dish: loc.pairingDish || cocktail.pairingFood[0].dish
      },
      ...cocktail.pairingFood.slice(1)
    ] : cocktail.pairingFood),
    avoidFood: loc.avoidFood || cocktail.avoidFood,
    mocktailVersion: loc.mocktailVersion || cocktail.mocktailVersion
  };
}

// 輔助函式：取得在地化 4 大黃金調酒法則
export function getLocalizedCocktailPrinciples(currentLang = 'zh-TW') {
  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  return COCKTAIL_PRINCIPLES_I18N[langKey] || COCKTAIL_PRINCIPLES_I18N['zh-TW'];
}

// 輔助函式：取得在地化料理找調酒情境列表
export function getLocalizedDishMatrix(currentLang = 'zh-TW') {
  const langKey = ['en', 'ja'].includes(currentLang) ? currentLang : 'zh-TW';
  const localizedList = DISH_TO_COCKTAIL_I18N[langKey] || DISH_TO_COCKTAIL_I18N['zh-TW'];
  return localizedList;
}

// 零酒精調飲 (Mocktail / Zero-Proof / Spirit-Free) 全方位多語系資料庫 (zh-TW, en, ja)

export const ZERO_PROOF_TERMINOLOGY_I18N = {
  'zh-TW': [
    {
      name: 'Mocktail',
      localizedName: '無酒精調酒 / 仿雞尾酒',
      meaning: '由「Mock (模仿)」與「Cocktail」組合，強調雞尾酒風格的無酒精版本。',
      context: '大眾市場、居家派對、日常佐餐食譜'
    },
    {
      name: 'Virgin Cocktail',
      localizedName: '維珍調酒 / 零酒精經典版',
      meaning: '通常指將經典雞尾酒中移除基酒，以果汁、糖漿、茶或氣泡水重構。',
      context: 'Virgin Mary、Virgin Mojito、Virgin Colada 等經典延伸'
    },
    {
      name: 'Non-Alcoholic',
      localizedName: '無酒精雞尾酒 (≤0.5% ABV)',
      meaning: '強調飲品本身不含或僅含低於 0.5% 微量酒精，符合國際食品法規。',
      context: '正規餐廳、酒吧酒單、商務清醒佐餐'
    },
    {
      name: 'Zero-Proof',
      localizedName: '零酒精特調 (0.0% ABV)',
      meaning: '強調酒精含量完全為零，且具備如精品烈酒般的獨立風味創作價值。',
      context: '專業酒吧、健康養生、清醒社交 (Sober Curious)'
    },
    {
      name: 'Spirit-Free',
      localizedName: '無基酒純萃調飲',
      meaning: '強調不依賴傳統烈酒，以冷萃茶、發酵液與植物蒸餾液獨立調製的高端飲品。',
      context: '米其林星級餐搭 (Pairing Menu)、頂級創意調飲'
    }
  ],
  'en': [
    {
      name: 'Mocktail',
      localizedName: 'Mocktail / Faux Cocktail',
      meaning: 'Portmanteau of "Mock" and "Cocktail", denoting an alcohol-free drink styled after classic cocktail aesthetics.',
      context: 'Mass market, home parties, everyday casual dining'
    },
    {
      name: 'Virgin Cocktail',
      localizedName: 'Virgin Classic Cocktail',
      meaning: 'Removes the base liquor from a classic recipe, reconstructing balance with juices, syrups, tea, or soda.',
      context: 'Virgin Mary, Virgin Mojito, Virgin Colada'
    },
    {
      name: 'Non-Alcoholic',
      localizedName: 'Non-Alcoholic (≤0.5% ABV)',
      meaning: 'Designates beverages containing less than 0.5% ABV, adhering to international food & beverage labeling standards.',
      context: 'Formal dining, bar menus, business mindful lunch'
    },
    {
      name: 'Zero-Proof',
      localizedName: 'Zero-Proof Craft (0.0% ABV)',
      meaning: 'Strictly 0.0% ABV crafted with the intention, depth, and independent artistic integrity of fine spirits.',
      context: 'Cocktail bars, wellness, Sober Curious movement'
    },
    {
      name: 'Spirit-Free',
      localizedName: 'Spirit-Free Botanical Craft',
      meaning: 'Crafted without reliance on traditional liquor, relying on cold brew teas, fermentations, and botanical distillates.',
      context: 'Michelin tasting pairing menus, avant-garde mixology'
    }
  ],
  'ja': [
    {
      name: 'Mocktail',
      localizedName: 'モクテル / 仿カクテル',
      meaning: '「Mock（真似た）」と「Cocktail」の造語。カクテル風に美しく仕立てたノンアルコール飲料。',
      context: '一般市場、ホームパーティー、日常の気軽な食事'
    },
    {
      name: 'Virgin Cocktail',
      localizedName: 'バージンカクテル (Virgin)',
      meaning: '伝統的カクテルからベース酒を除き、果汁・シロップ・お茶・炭酸等で再構築した定番派生スタイル。',
      context: 'バージンメアリー、バージンモヒートなど'
    },
    {
      name: 'Non-Alcoholic',
      localizedName: 'ノンアルコール (≤0.5% ABV)',
      meaning: 'アルコール分0.5%未満の飲料を指し、主要国の食品表示法規・基準に準拠。',
      context: '本格レストラン、バーメニュー、ビジネス会食'
    },
    {
      name: 'Zero-Proof',
      localizedName: 'ゼロプルーフ (0.0% ABV)',
      meaning: 'アルコール分が完全に0.0%であり、スピリッツ同等の独立した風味と深みを持つ特調ドリンク。',
      context: '専門カクテルバー、健康志向、ソーバーキュリアス'
    },
    {
      name: 'Spirit-Free',
      localizedName: 'スピリットフリー純萃調飲',
      meaning: '蒸留酒に頼らず、水出し茶や発酵液、ボタニカル蒸留エキスで独立設計された高級ペアリング飲料。',
      context: 'ミシュラン星付きペアリング、最先端の創作調飲'
    }
  ]
};

export const ZERO_PROOF_PILLARS_I18N = {
  'zh-TW': [
    {
      id: 'juice',
      icon: '🍊',
      title: '果汁與新鮮水果 (Fruits & Juices)',
      role: '酸甜基礎與天然色澤',
      desc: '柳橙、檸檬、萊姆、葡萄柚、鳳梨、莓果與百香果。搭配酸液或氣泡水，避免單一死甜。'
    },
    {
      id: 'tea',
      icon: '🍵',
      title: '茶飲與冷萃茶 (Tea Tannins)',
      role: '單寧澀感與酒體骨架',
      desc: '阿薩姆、紅玉、金萱、烏龍與焙茶，提供如紅白酒般的單寧回甘、木質複雜度與中後段尾韻。'
    },
    {
      id: 'bubbles',
      icon: '🫧',
      title: '氣泡水與碳酸氣泡 (Effervescence)',
      role: '切油爽口與香氣揮發',
      desc: '蘇打水與氣泡茶放大果酸明亮感，降低糖漿厚重滯膩，賦予如同香檳般的入口刺激。'
    },
    {
      id: 'botanicals',
      icon: '🌿',
      title: '草本植物與辛香料 (Botanicals & Spices)',
      role: '植物性骨架與成熟香氣',
      desc: '薄荷、羅勒、迷迭香、生薑、肉桂、丁香與墨西哥辣椒，提供喉頭微溫熱與多層次香氣。'
    },
    {
      id: 'distillates',
      icon: '💧',
      title: '無酒精蒸餾液 (Zero-Proof Distillates)',
      role: '重現烈酒香氣層次',
      desc: '杜松子、柑橘皮、橡木與煙燻植物低溫蒸餾，不含酒精依然具備如琴酒、威士忌的芳香輪廓。'
    },
    {
      id: 'fermentation',
      icon: '🧪',
      title: '發酵液、康普茶與 Shrub (Fermentation)',
      role: '天然活酸與悠長尾韻',
      desc: '水果果醋、醋飲糖漿 (Shrub) 與發酵茶，帶來酒精飲品特有的成熟深度與酸度延展。'
    }
  ],
  'en': [
    {
      id: 'juice',
      icon: '🍊',
      title: 'Fresh Fruits & Juices (Citrus & Berries)',
      role: 'Sweet-Tart Foundation & Natural Color',
      desc: 'Orange, lemon, lime, grapefruit, pineapple, berries, and passionfruit balanced with crisp acidity and effervescence to prevent cloying sweetness.'
    },
    {
      id: 'tea',
      icon: '🍵',
      title: 'Tea Tannins & Cold Brews (Mouthfeel)',
      role: 'Tannic Grip & Structural Backbone',
      desc: 'Assam, Ruby Black, Jin Xuan, Oolong, and Hojicha provide wine-like tannic lingering notes, woody complexity, and mid-to-finish depth.'
    },
    {
      id: 'bubbles',
      icon: '🫧',
      title: 'Sparkling Water & Carbonation (Fizz)',
      role: 'Fat Cutting & Aromatic Volatility',
      desc: 'Club soda and sparkling tea amplify fruit brightness, slice through heavy syrup viscosities, and deliver champagne-like effervescent attack.'
    },
    {
      id: 'botanicals',
      icon: '🌿',
      title: 'Botanicals, Herbs & Spices (Aromatics)',
      role: 'Herbal Architecture & Warmth',
      desc: 'Mint, basil, rosemary, fresh ginger, cinnamon, clove, and jalapeño impart spirit-like throat warmth and multi-layered aromatic complexity.'
    },
    {
      id: 'distillates',
      icon: '💧',
      title: 'Zero-Proof Distillates (Hydro-sols)',
      role: 'Replicating Distilled Complexity',
      desc: 'Low-temperature vacuum distillations of juniper, citrus peel, oak, and smoked botanicals capturing the aromatic profiles of gin or whiskey without alcohol.'
    },
    {
      id: 'fermentation',
      icon: '🧪',
      title: 'Ferments, Kombucha & Shrubs (Living Acid)',
      role: 'Living Acidity & Extended Finish',
      desc: 'Drinking vinegars (shrubs), fruit ferments, and kombucha deliver the mature depth and lingering, wine-like acid tension.'
    }
  ],
  'ja': [
    {
      id: 'juice',
      icon: '🍊',
      title: '果汁とフレッシュフルーツ (Fruits & Juices)',
      role: '甘酸っぱさのベースと自然な色彩',
      desc: 'オレンジ、レモン、ライム、グレープフルーツ、パイン、ベリー、パッションフルーツ。酸や炭酸と合わせ単調な甘さを防ぎます。'
    },
    {
      id: 'tea',
      icon: '🍵',
      title: 'お茶と水出し茶 (Tea Tannins)',
      role: 'タンニンの渋みとボディの骨格',
      desc: 'アッサム、紅玉紅茶、金萱、烏龍茶、ほうじ茶。ワインのような心地よい渋みとウッディな複雑味、奥深い余韻をもたらします。'
    },
    {
      id: 'bubbles',
      icon: '🫧',
      title: '炭酸水と発泡性 (Effervescence)',
      role: '油分のキレと香りの揮発',
      desc: 'ソーダや発泡茶が果実の酸味を際立たせ、シロップの重たさを軽減。シャンパンのような心地よい刺激を与えます。'
    },
    {
      id: 'botanicals',
      icon: '🌿',
      title: 'ハーブとスパイス (Botanicals & Spices)',
      role: '植物性の骨格と成熟したアロマ',
      desc: 'ミント、バジル、ローズマリー、生姜、シナモン、クローブ、唐辛子。喉元に温かみを与え、多層的な香りを生み出します。'
    },
    {
      id: 'distillates',
      icon: '💧',
      title: 'ノンアルコール蒸留エキス (Distillates)',
      role: 'スピリッツの香りと重厚感を再現',
      desc: 'ジュニパーベリー、柑橘ピール、オーク、スモーキーな植物を低温蒸留。アルコールなしでジンやウイスキーの香気を再現します。'
    },
    {
      id: 'fermentation',
      icon: '🧪',
      title: '発酵飲料・コンブチャ・シュラブ (Fermentation)',
      role: '生きた天然の酸と長い余韻',
      desc: 'フルーツビネガー、飲むお酢 (シュラブ)、発酵茶。熟成された深みとワインのような伸びやかな酸味をもたらします。'
    }
  ]
};

export const ZERO_PROOF_SAFETY_I18N = {
  'zh-TW': {
    title: '無酒精調飲的衛生、安全與 0.5% ABV 標示法則',
    rules: [
      {
        title: '0.5% ABV 法律界線與 0.0% 區分',
        desc: '多數國家將酒精含量 <0.5% 歸類為「無酒精/非酒精飲料」。但對孕婦、酒精嚴重過敏者、戒酒者、宗教禁酒者與駕駛人，仍應特別確認是否標示為「0.0% 絕對無酒精」。'
      },
      {
        title: '無酒精缺少酒精抑菌，保存更需嚴謹',
        desc: '1:1 水糖比例糖漿密封冷藏可保存約 30 天；新鮮果汁、果泥、濃奶油與草本浸泡水（如小黃瓜水）建議於 24-48 小時內冷藏使用完畢，避免微生物滋生。'
      },
      {
        title: '發酵康普茶與 Shrub 自製風險控管',
        desc: '自製發酵液涉及菌種、酸度與溫度控制。若發酵液出現異常霉斑、腐敗異味或非預期氣體膨脹，應立即報廢，建議優先採用合規商業發酵液。'
      }
    ]
  },
  'en': {
    title: 'Hygiene, Safety & The 0.5% ABV Labeling Standard',
    rules: [
      {
        title: 'The 0.5% ABV Legal Threshold vs 0.0% Absolute Zero',
        desc: 'Many jurisdictions classify <0.5% ABV as "non-alcoholic". However, pregnant individuals, those with severe alcohol allergies, recovering alcoholics, drivers, and religious observers should look for "0.0% Zero-Proof" labels.'
      },
      {
        title: 'Lack of Alcohol Antimicrobial Action Requires Strict Hygiene',
        desc: '1:1 simple syrup lasts approx. 30 days sealed and refrigerated. Fresh juices, purees, cream, and herbal infusions (such as cucumber water) should be consumed within 24–48 hours to prevent bacterial contamination.'
      },
      {
        title: 'Fermentation, Kombucha & Shrub Quality Control',
        desc: 'Homemade fermentations require careful monitoring of cultures, pH acidity, and temperature. Discard immediately if mold, off-odors, or uncontrolled carbonation occur; commercial food-grade ferments are recommended.'
      }
    ]
  },
  'ja': {
    title: 'ノンアルコール飲料の衛生・安全基準と 0.5% ABV 表示規則',
    rules: [
      {
        title: '0.5% ABV の法的境界と 0.0% 完全ゼロの区別',
        desc: '多くの国で0.5%未満は「ノンアルコール」と表記可能ですが、妊婦の方、アルコール過敏症の方、ドライバー、禁酒中の方は「0.0%」の明記を必ず確認してください。'
      },
      {
        title: 'アルコールによる殺菌効果がないため厳格な冷蔵保存が必要',
        desc: '1:1のシロップは冷蔵密封で約30日保存可能ですが、生搾り果汁、ピューレ、生クリーム、水出しハーブ水（きゅうり水等）は24〜48時間以内に消費し、雑菌繁殖を防ぎます。'
      },
      {
        title: '自家製コンブチャやシュラブ（果実酢）のリスク管理',
        desc: '発酵飲料は菌種・酸度・温度管理が極めて重要です。異臭、カビ、異常な容器膨張が見られた場合は直ちに廃棄し、安全な市販食品グレードの活用を推奨します。'
      }
    ]
  }
};

export const MOCKTAILS_I18N = {
  'virgin-berry-spritz': {
    'zh-TW': {
      name: '零酒精莓果氣泡飲',
      category: '果香氣泡型 (Fruity & Effervescent)',
      tagline: '莓果酸甜交織薄荷清香，如微風般輕盈洗滌味蕾的極致開胃氣泡調飲',
      flavorTags: ['新鮮綜合莓果', '薄荷冷涼', '百花蜂蜜', '明亮檸檬酸'],
      glassware: '葡萄酒大肚杯 (Wine Glass / Highball)',
      ratioText: '莓果汁蜜 : 檸檬汁 : 蘇打水 = 2 : 1 : 8',
      ingredients: [
        { name: '新鮮綜合莓果 (草莓/藍莓/黑莓)', amount: 40, unit: 'g' },
        { name: '新鮮現榨檸檬汁', amount: 15, unit: 'mL' },
        { name: '純天然百花蜂蜜', amount: 15, unit: 'mL' },
        { name: '新鮮薄荷葉', amount: 6, unit: '片' },
        { name: '高端蘇打水 (Soda Water)', amount: 120, unit: 'mL 補滿' },
        { name: '純淨方冰塊', amount: 1, unit: '滿杯' }
      ],
      steps: [
        '在雪克杯或調酒杯底放入綜合莓果、薄荷葉、檸檬汁與蜂蜜。',
        '使用搗棒「輕柔搗壓 3-5 次」，充分釋放莓果汁液與薄荷精油（切勿搗成碎泥以保清澈）。',
        '加入適量冰塊，輕快搖盪 8 秒使蜂蜜與酸液完全乳化融合。',
        '過濾倒入裝有滿冰的大肚杯中，最後優雅注滿冰鎮蘇打水。',
        '以新鮮薄荷頂端嫩葉與整顆草莓輕巧裝飾於杯口即可享用。'
      ],
      tastingNotes: {
        initial: '雙唇碰觸細緻氣泡，明亮奔放的黑莓與草莓天然果香撲鼻。',
        mid: '檸檬的高酸度與蜂蜜的溫潤圓融完美交融，薄荷帶來如晨露般的冷涼感。',
        finish: '餘韻清爽乾淨，莓果天然果皮單寧在舌根留下微微甘甜回甘。'
      },
      pairingFood: [
        { dish: '義式香草烤雞胸 / 爐烤鮮蔬沙拉', reason: '果酸與氣泡切開雞肉油脂，薄荷冷香與迷迭香等草本天然呼應。' },
        { dish: '乾煎北海道生食干貝 / 蒜香烤蝦', reason: '檸檬果酸如天然滴管提鮮海鮮甘甜，完全不遮蓋干貝的細緻旨味。' },
        { dish: '白身魚生魚片 / 輕漬海鮮冷盤', reason: '純淨酸甜氣泡重置味蕾，營造無負擔的優雅開胃體驗。' }
      ],
      avoidFood: ['紅酒慢燉厚牛小排', '老火麻辣牛雜鍋', '重度黑巧克力熔岩'],
      flavorScience: '花青素與檸檬酸形成高明度酸香，蜂蜜果糖增加液體質地，細緻二氧化碳氣泡迅速洗滌舌面油脂分子。'
    },
    'en': {
      name: 'Virgin Berry Spritz',
      category: 'Fruity & Effervescent',
      tagline: 'Vibrant berry tartness interwoven with cool mint, a breezy effervescent aperitif cleansing the palate.',
      flavorTags: ['Fresh Mixed Berries', 'Cooling Mint', 'Wildflower Honey', 'Crisp Citric Acid'],
      glassware: 'Wine Glass / Highball',
      ratioText: 'Berry Honey Purée : Lemon Juice : Soda Water = 2 : 1 : 8',
      ingredients: [
        { name: 'Fresh mixed berries (strawberries, blueberries, blackberries)', amount: 40, unit: 'g' },
        { name: 'Freshly squeezed lemon juice', amount: 15, unit: 'mL' },
        { name: 'Pure wildflower honey', amount: 15, unit: 'mL' },
        { name: 'Fresh mint leaves', amount: 6, unit: 'leaves' },
        { name: 'Premium club soda (Soda Water)', amount: 120, unit: 'mL (to fill)' },
        { name: 'Clear ice cubes', amount: 1, unit: 'full glass' }
      ],
      steps: [
        'Place mixed berries, mint leaves, lemon juice, and honey into the shaker base.',
        'Gently press with a muddler 3–5 times to release berry juices and mint essential oils (avoid pulverizing).',
        'Add ice cubes and shake briskly for 8 seconds to thoroughly emulsify honey and lemon acidity.',
        'Strain into a large wine glass filled with fresh ice, then gently top with chilled club soda.',
        'Garnish with fresh mint sprig tip and a whole fresh strawberry at the rim.'
      ],
      tastingNotes: {
        initial: 'Delicately fizzy attack bursting with fragrant blackberries and ripe strawberries.',
        mid: 'Bright lemon acidity and rounded honey sweetness harmonize with crisp morning-dew mint coolness.',
        finish: 'Clean, crisp finish with subtle berry skin tannins leaving an appetizing sweet lingering note.'
      },
      pairingFood: [
        { dish: 'Rosemary Roasted Herb Chicken Breast / Grilled Veggie Salad', reason: 'Fruit acids and fizz cut chicken fats; cool mint mirrors rosemary and garden herb nuances.' },
        { dish: 'Pan-Seared Hokkaido Scallops / Garlic Grilled Shrimp', reason: 'Natural lemon acidity acts as a natural seasoning highlighting seafood umami without overwhelming sweet scallop delicacy.' },
        { dish: 'White Fish Sashimi / Lightly Cured Seafood Carpaccio', reason: 'Pure effervescent fruit tartness resets tastebuds for an unburdened, refined aperitif journey.' }
      ],
      avoidFood: ['Red Wine Braised Beef Short Ribs', 'Spicy Sichuan Beef Offal Hotpot', 'Dense Molten Lava Dark Chocolate'],
      flavorScience: 'Anthocyanins and citric acid create a luminous aroma profile, fructose enriches mouthfeel, and fine CO2 effervescence promptly sweeps away lipid coating.'
    },
    'ja': {
      name: 'バージン・ベリースプリッツ',
      category: 'フルーティー＆発泡系',
      tagline: '甘酸っぱいベリーと清涼なミントが織りなす、そよ風のように軽やかに舌を洗う極上の食前スパークリング',
      flavorTags: ['フレッシュベリー', '清涼ミント', '百花蜜', '爽やかなレモン酸'],
      glassware: 'ワイングラス / ハイボール',
      ratioText: 'ベリーハニー果汁 : レモン果汁 : ソーダ = 2 : 1 : 8',
      ingredients: [
        { name: 'フレッシュミックスベリー (苺・ブルーベリー・ブラックベリー)', amount: 40, unit: 'g' },
        { name: '搾りたてフレッシュレモン果汁', amount: 15, unit: 'mL' },
        { name: '天然百花蜂蜜', amount: 15, unit: 'mL' },
        { name: 'フレッシュミントの葉', amount: 6, unit: '枚' },
        { name: 'プレミアム炭酸水 (ソーダ)', amount: 120, unit: 'mL (満たす)' },
        { name: '純氷キューブ', amount: 1, unit: 'グラス一杯' }
      ],
      steps: [
        'シェーカーの底にミックスベリー、ミントの葉、レモン果汁、蜂蜜を入れます。',
        'ペストル（すりこぎ棒）で3〜5回優しくマドルし、果汁とミント精油を抽出します（濁りを防ぐため潰しすぎないこと）。',
        '氷を加えて8秒間軽快にシェイクし、蜂蜜と酸をしっかり乳化・調和させます。',
        '氷を満たした大ぶりのワイングラスに濾しながら注ぎ、冷えた炭酸水を静かに満たします。',
        'ミントの若葉と丸ごとの苺をグラスの縁に飾り、優雅に仕上げます。'
      ],
      tastingNotes: {
        initial: '唇に触れる繊細な炭酸とともに、ブラックベリーと苺の華やかな香りが立ち上ります。',
        mid: 'レモンの鮮烈な酸味と蜂蜜のまろやかさが調和し、ミントが朝露のような清涼感をもたらします。',
        finish: '後味は極めてクリーン。ベリーの果皮由来の自然なタンニンが心地よい余韻を残します。'
      },
      pairingFood: [
        { dish: 'ハーブローストチキン胸肉 / グリル野菜のサラダ', reason: '果実酸と炭酸が鶏肉の油分を切り、ミントの清涼感がローズマリーなどのハーブ香と見事に呼応します。' },
        { dish: '北海道産ホタテ貝柱のソテー / ガーリックシュリンプ', reason: 'レモン酸が天然の調味料として魚介の甘みを引き出し、ホタテの繊細な旨味を邪魔しません。' },
        { dish: '白身魚のカルパッチョ / 魚介のマリネ', reason: '澄んだ甘酸っぱい炭酸が味蕾をリセットし、負担のない優雅なアペリティフ体験を生み出します。' }
      ],
      avoidFood: ['牛ショートリブの赤ワイン煮込み', '激辛麻辣牛もつ鍋', '濃厚フォンダンショコラ'],
      flavorScience: 'アントシアニンとクエン酸が高明度な酸味とアロマを形成し、蜂蜜の果糖が心地よいボディ感を与え、細やかな炭酸の泡が舌上の脂質分子を瞬時に洗い流します。'
    }
  },

  'zero-proof-espresso-martini': {
    'zh-TW': {
      name: '無酒精冷萃濃縮馬丁尼',
      category: '甜苦濃郁型 (Rich & Roasted)',
      tagline: '現萃濃縮熱搖產生絲絨 Crema 泡沫，烘焙堅果與黑巧可可交織的成熟句點',
      flavorTags: ['現萃熱濃縮', '低溫冷萃濃縮', '香草純蔗糖', '絲絨咖啡Crema'],
      glassware: '冰鎮馬丁尼杯 (Martini / Coupe)',
      ratioText: '熱濃縮 : 冷萃液 : 香草糖漿 = 2 : 2 : 1',
      ingredients: [
        { name: '新鮮現萃熱 Espresso 義式濃縮', amount: 35, unit: 'mL' },
        { name: '低溫冷萃咖啡濃縮液 (Cold Brew)', amount: 30, unit: 'mL' },
        { name: '香草純蔗糖漿 (Vanilla Syrup)', amount: 15, unit: 'mL' },
        { name: '純濃鮮奶油 (或燕麥奶泡沫)', amount: 10, unit: 'mL' },
        { name: '天然肉桂粉 (Cinnamon)', amount: 1, unit: '少許' },
        { name: '精選烘焙咖啡豆', amount: 3, unit: '顆裝飾' }
      ],
      steps: [
        '預先將馬丁尼杯置於冷凍庫冰鎮。現萃一份油脂豐富的新鮮熱 Espresso。',
        '在雪克杯中迅速加入熱濃縮、冷萃咖啡液、香草糖漿與微量鮮奶油。',
        '裝入大量堅硬大冰塊，以最快速度「強力劇烈搖盪 (Hard Shake) 15 秒」，打出極致濃密的金黃 Crema 咖啡油脂奶泡。',
        '透過雙重濾網 (Fine Strainer) 迅速倒入冰鎮馬丁尼杯，表面將立即浮現厚達 5mm 的絲絨咖啡奶泡。',
        '在泡沫中央輕輕灑上肉桂微粉，並擺上 3 顆咖啡豆即刻上桌。'
      ],
      tastingNotes: {
        initial: '雙唇先碰觸到綿密微溫的冰涼咖啡奶泡，濃郁可可烘焙香氣撲鼻。',
        mid: '深焙咖啡的醇厚苦韻與香草糖漿的柔甜交融，冷萃液帶來深邃黑巧克力厚度。',
        finish: '肉桂微辛與咖啡單寧在口中悠長迴盪，如品嚐高級黑巧克力般成熟回味。'
      },
      pairingFood: [
        { dish: '義式正統提拉米蘇 (Tiramisu)', reason: '咖啡烘焙苦韻、香草與馬斯卡彭起司達到 100% 同頻共振，天作之合！' },
        { dish: '70% 濃郁熔岩黑巧克力蛋糕 / 布朗尼', reason: '咖啡的苦甜層次包裹可可脂，甜度平衡防止巧克力使味蕾疲勞。' },
        { dish: '法式焦糖烤布蕾 / 香草冰淇淋', reason: '如同阿法奇朵 (Affogato) 甜苦對比，切開布蕾濃郁蛋奶乳脂。' }
      ],
      avoidFood: ['清蒸鮮魚', '生蠔生魚片', '酸辣泰式涼拌', '蒜香熱炒'],
      flavorScience: '咖啡豆高溫萃取的類黑精 (Melanoidin) 與油脂乳化，重現烈酒陳釀於橡木桶的木質香與厚實酒體，不含酒精依然醇厚。'
    },
    'en': {
      name: 'Zero-Proof Espresso Martini',
      category: 'Rich & Roasted',
      tagline: 'Hot-shaken freshly extracted espresso yielding velvety Crema, a sophisticated finale of roasted nuts and dark cocoa.',
      flavorTags: ['Hot Espresso', 'Cold Brew Concentrate', 'Vanilla Pure Cane', 'Velvety Coffee Crema'],
      glassware: 'Chilled Martini / Coupe Glass',
      ratioText: 'Hot Espresso : Cold Brew : Vanilla Syrup = 2 : 2 : 1',
      ingredients: [
        { name: 'Freshly pulled hot Espresso', amount: 35, unit: 'mL' },
        { name: 'Cold brew coffee concentrate', amount: 30, unit: 'mL' },
        { name: 'Pure vanilla cane syrup', amount: 15, unit: 'mL' },
        { name: 'Heavy cream (or oat foam)', amount: 10, unit: 'mL' },
        { name: 'Ground cinnamon', amount: 1, unit: 'pinch' },
        { name: 'Roasted coffee beans', amount: 3, unit: 'beans (garnish)' }
      ],
      steps: [
        'Pre-chill a martini glass in the freezer. Pull a fresh, Crema-rich hot espresso shot.',
        'In a cocktail shaker, immediately combine hot espresso, cold brew concentrate, vanilla syrup, and cream.',
        'Fill with solid ice cubes and execute a vigorous hard shake for 15 seconds to develop rich golden Crema foam.',
        'Rapidly double strain through a fine mesh strainer into the chilled glass, allowing a 5mm velvety coffee foam head to form.',
        'Lightly dust cinnamon over the center and garnish with 3 coffee beans.'
      ],
      tastingNotes: {
        initial: 'Lips first meet the dense, chilled coffee crema foam, followed by intense dark cocoa and roasted nut aromas.',
        mid: 'Deep dark roast bitterness harmonizes with silky vanilla sweetness, while cold brew lends layered dark chocolate depth.',
        finish: 'Warm cinnamon spice and coffee tannins linger gracefully, reminiscent of fine artisanal dark chocolate.'
      },
      pairingFood: [
        { dish: 'Classic Italian Tiramisu', reason: 'Roasted coffee notes, vanilla, and mascarpone cheese create a 100% harmonic resonance.' },
        { dish: '70% Dark Chocolate Lava Cake / Walnut Brownie', reason: 'Coffee bittersweet complexity envelops rich cocoa butter, preventing palate fatigue.' },
        { dish: 'Crème Brûlée / Artisan Vanilla Gelato', reason: 'Mimics an Affogato contrast, slicing through rich custard creaminess.' }
      ],
      avoidFood: ['Steamed Fish', 'Raw Oysters / Sashimi', 'Spicy Thai Salad', 'Garlic Stir-fry'],
      flavorScience: 'Melanoidins and lipids extracted at high temperature emulsify, mimicking oak-barrel spirit body and woody complexity without alcohol.'
    },
    'ja': {
      name: 'ノンアルコール・エスプレッソマティーニ',
      category: '濃厚＆ロースト系',
      tagline: '抽出仕立てのエスプレッソを急冷シェイクして生み出す極上クレマ、香ばしいナッツとビターカカオが響き合う大人の余韻',
      flavorTags: ['熱々エスプレッソ', '水出し濃縮珈琲', 'バニラシロップ', 'ベルベットクレマ'],
      glassware: '冷やしたマティーニグラス / クープ',
      ratioText: 'エスプレッソ : コールドブリュー : バニラシロップ = 2 : 2 : 1',
      ingredients: [
        { name: '淹れたて熱々エスプレッソ', amount: 35, unit: 'mL' },
        { name: '水出し濃縮コーヒー (コールドブリュー)', amount: 30, unit: 'mL' },
        { name: 'バニラシュガーシロップ', amount: 15, unit: 'mL' },
        { name: '純生クリーム (またはオーツミルク)', amount: 10, unit: 'mL' },
        { name: 'シナモンパウダー', amount: 1, unit: '少々' },
        { name: '焙煎コーヒー豆', amount: 3, unit: '粒 (飾り)' }
      ],
      steps: [
        'マティーニグラスをあらかじめ冷凍庫で冷やします。クレマたっぷりの熱々エスプレッソを抽出します。',
        'シェーカーにエスプレッソ、コールドブリュー、バニラシロップ、生クリームを素早く投入します。',
        '堅い大氷を満たし、15秒間全力でハードシェイクして黄金色の濃密なクレマ泡を立ち上げます。',
        'ストレーナーと茶こしでダブルストレインしながらグラスに注ぎ、表面に約5mmのベルベット状の泡層を形成します。',
        '泡の中央にシナモンを軽く振り、コーヒー豆3粒を浮かべて提供します。'
      ],
      tastingNotes: {
        initial: '唇に触れるひんやりと濃密なコーヒークレマの泡、立ち上るローストカカオの深遠な芳香。',
        mid: '深煎りコーヒーの力強い苦味とバニラの優しい甘みが溶け合い、コールドブリューが重厚なダークチョコの深みを与えます。',
        finish: 'シナモンのスパイスとコーヒーのタンニンが長く心地よく漂い、高級ショコラを味わったような満足感が残ります。'
      },
      pairingFood: [
        { dish: '本格イタリアンティラミス (Tiramisu)', reason: 'コーヒーのロースト感、バニラ、マスカルポーネチーズが完璧な同調を見せる最高の相棒です。' },
        { dish: '70%フォンダンショコラ / 濃厚ブラウニー', reason: 'カプチーノのような苦味と甘みがカカオバターを包み込み、重たさを感じさせず最後まで美味しくいただけます。' },
        { dish: 'クレームブリュレ / バニラアイスクリーム', reason: 'アフォガートのような対比を生み出し、カスタードの濃厚なコクを爽やかに引き締めます。' }
      ],
      avoidFood: ['鮮魚の清蒸', '生牡蠣・刺身', '酸味の強いタイ風春雨サラダ', 'ニンニク炒め'],
      flavorScience: '高温抽出されたメラノイジンと油脂が乳化し、樽熟成スピリッツのような重厚なボディ感とウッディな骨格を再現します。'
    }
  },

  'spicy-watermelon-fizz': {
    'zh-TW': {
      name: '零酒精西瓜辛香氣泡飲',
      category: '辛香消暑型 (Spicy & Refreshing)',
      tagline: '西瓜清甜被生薑與墨西哥辣椒鹽束緊，舌尖微溫熱與冰爽氣泡的絕妙對比',
      flavorTags: ['現榨紅西瓜汁', '新鮮生薑辛香', '墨西哥辣椒鹽', '龍舌蘭糖漿'],
      glassware: '高球杯 (Highball Glass)',
      ratioText: '西瓜汁 : 萊姆汁 : 龍舌蘭糖漿 : 生薑汁 = 12 : 4 : 3 : 1',
      ingredients: [
        { name: '新鮮現榨西瓜原汁', amount: 60, unit: 'mL' },
        { name: '新鮮現榨萊姆汁', amount: 20, unit: 'mL' },
        { name: '天然有機龍舌蘭蜜 (Agave)', amount: 15, unit: 'mL' },
        { name: '新鮮冷壓生薑汁', amount: 5, unit: 'mL' },
        { name: '新鮮薄荷葉', amount: 4, unit: '片' },
        { name: '冰鎮強氣泡蘇打水', amount: 80, unit: 'mL 補滿' },
        { name: '墨西哥辣椒海鹽 (Tajín 鹽邊)', amount: 1, unit: '杯口抹半圈' }
      ],
      steps: [
        '用萊姆角沾濕高球杯半邊杯口，均勻沾裹上一層薄薄的墨西哥辣椒海鹽 (Tajín)。',
        '在調酒壺中加入西瓜原汁、萊姆汁、龍舌蘭蜜與現壓生薑汁，輕壓薄荷葉。',
        '加入冰塊輕快攪拌或短搖 6 秒，讓果汁與薑香充分融合。',
        '連同冰塊倒入裹鹽的高球杯中，最後輕緩注滿強氣泡蘇打水。',
        '插上一片迷你西瓜角與新鮮薄荷嫩芽裝飾。'
      ],
      tastingNotes: {
        initial: '入口先接觸到杯口辣椒海鹽的微鹹微辣，瞬間激發唾液分泌。',
        mid: '西瓜的多汁清甜與萊姆酸度湧出，生薑在喉嚨底部帶來如烈酒般的溫潤微辛。',
        finish: '氣泡在舌面跳躍，留下西瓜清香與生薑溫熱，清涼無比又富含層次。'
      },
      pairingFood: [
        { dish: '美式炭烤厚切肋眼牛排 / 煙燻牛胸肉', reason: '生薑微辛與氣泡切開豐腴牛油，西瓜清甜與炭烤焦香形成對比美學。' },
        { dish: '墨西哥手作牛肉 Taco / 辣肉醬玉米片', reason: '龍舌蘭蜜、萊姆與辣椒海鹽與墨西哥香料完全同源，解辣又提味。' },
        { dish: '台式鹽酥雞 / 炭烤串燒', reason: '生薑與氣泡化身天然解膩劑，瞬間重置炸物麵衣的油滯感。' }
      ],
      avoidFood: ['細緻清蒸石斑魚', '法式清燉蔬菜清湯', '白松露燉飯'],
      flavorScience: '西瓜水分極高、質地輕，生薑中的薑辣素 (Gingerol) 與微量辣椒素提供類似酒精的溫熱刺激與喉頭感，防止無酒精飲品過於稀薄。'
    },
    'en': {
      name: 'Spicy Watermelon Fizz',
      category: 'Spicy & Refreshing',
      tagline: 'Sweet juicy watermelon tightened by ginger and chili salt, an exhilarating interplay between palate warmth and icy carbonation.',
      flavorTags: ['Fresh Watermelon', 'Cold-Pressed Ginger', 'Chili Sea Salt Rim', 'Agave Nectar'],
      glassware: 'Highball Glass',
      ratioText: 'Watermelon : Lime : Agave : Ginger = 12 : 4 : 3 : 1',
      ingredients: [
        { name: 'Freshly pressed watermelon juice', amount: 60, unit: 'mL' },
        { name: 'Freshly squeezed lime juice', amount: 20, unit: 'mL' },
        { name: 'Organic agave nectar', amount: 15, unit: 'mL' },
        { name: 'Cold-pressed ginger juice', amount: 5, unit: 'mL' },
        { name: 'Fresh mint leaves', amount: 4, unit: 'leaves' },
        { name: 'Chilled sparkling soda water', amount: 80, unit: 'mL (to fill)' },
        { name: 'Chili lime sea salt (Tajín rim)', amount: 1, unit: 'half rim' }
      ],
      steps: [
        'Rim half of a highball glass with a lime wedge, then coat with a delicate band of chili sea salt (Tajín).',
        'In a mixing tin, combine fresh watermelon juice, lime juice, agave nectar, ginger juice, and lightly tapped mint leaves.',
        'Add ice and shake or stir briskly for 6 seconds to blend flavors smoothly.',
        'Pour over fresh ice into the prepared rimmed glass, then slowly top with effervescent soda water.',
        'Garnish with a miniature watermelon triangle wedge and a mint sprig.'
      ],
      tastingNotes: {
        initial: 'The salted, zesty chili rim touches the lips first, instantly triggering salivation.',
        mid: 'Gushing sweet watermelon juice and lime tartness rush in, as ginger introduces spirit-like warming spice down the throat.',
        finish: 'Effervescence dances across the tongue, leaving crisp watermelon sweetness and a pleasant ginger glow.'
      },
      pairingFood: [
        { dish: 'Charcoal-Grilled Thick Ribeye Steak / Smoked Brisket', reason: 'Ginger spice and effervescence slice through rich beef tallow; juicy melon balances charcoal char.' },
        { dish: 'Handmade Mexican Beef Tacos / Spicy Chili Nachos', reason: 'Agave, lime, and chili salt share authentic terroir with Mexican culinary spices.' },
        { dish: 'Crispy Taiwanese Fried Chicken / Yakitori Skewers', reason: 'Ginger and carbonation act as a palate cleanser, cutting right through deep-fried crust greasiness.' }
      ],
      avoidFood: ['Steamed Delicate Grouper', 'Vegetable Consommé', 'White Truffle Risotto'],
      flavorScience: 'Gingerol and trace capsaicin provide spirit-like throat-kick and warmth, preventing high-water melon drinks from tasting thin.'
    },
    'ja': {
      name: 'スパイシー・ウォーターメロンフィズ',
      category: 'スパイシー＆爽快系',
      tagline: 'スイカの瑞々しい甘みをピリッと生姜とチリソルトが引き締める、喉の温もりと氷の弾ける炭酸の絶妙なコントラスト',
      flavorTags: ['搾りたてスイカ果汁', '生搾り生姜の辛み', 'チリシーソルト', 'アガベシロップ'],
      glassware: 'ハイボールグラス',
      ratioText: 'スイカ果汁 : ライム果汁 : アガベ : 生姜汁 = 12 : 4 : 3 : 1',
      ingredients: [
        { name: '搾りたてスイカ生果汁', amount: 60, unit: 'mL' },
        { name: 'フレッシュライム果汁', amount: 20, unit: 'mL' },
        { name: 'オーガニックアガベシロップ', amount: 15, unit: 'mL' },
        { name: 'コールドプレス生姜果汁', amount: 5, unit: 'mL' },
        { name: 'フレッシュミントの葉', amount: 4, unit: '枚' },
        { name: '冷やした強炭酸水', amount: 80, unit: 'mL (満たす)' },
        { name: 'メキシカンチリソルト (タヒン等)', amount: 1, unit: 'ハーフラム (縁に)' }
      ],
      steps: [
        'ライムでハイボールグラスの縁の半分を湿らせ、チリシーソルトを薄く均一につけてスノースタイルを作ります。',
        'シェーカーにスイカ果汁、ライム果汁、アガベシロップ、生姜汁を入れ、ミントの葉を軽く押さえて香りを加えます。',
        '氷を入れて6秒間軽快にステアまたはショートシェイクし、果汁と生姜を調和させます。',
        '氷とともにグラスに注ぎ入れ、最後に冷えた強炭酸水を静かに満たします。',
        '小さなスイカのくし形切りとミントの芽を添えて華やかにサーブします。'
      ],
      tastingNotes: {
        initial: '口に含むとまずグラスのチリソルトのスパイシーな塩味が広がり、食欲を刺激します。',
        mid: 'スイカのジューシーな甘みとライムの酸味が広がり、生姜が喉元にリキュールのような心地よい温もりを届けます。',
        finish: '弾ける炭酸がスイカの清涼感を際立たせ、生姜の爽快な余韻が長く続きます。'
      },
      pairingFood: [
        { dish: '厚切り炭火焼きリブロースステーキ / ブリスケット', reason: '生姜の刺激と炭酸が和牛の脂っこさを切り、スイカの自然な甘みが焦げ目の香ばしさと調和します。' },
        { dish: 'メキシカンビーフタコス / スパイシーナチョス', reason: 'アガベ、ライム、チリソルトはメキシコ料理と素材のルーツが共通しており、辛さを和らげ旨味を引き立てます。' },
        { dish: '台湾風唐揚げ (塩酥鶏) / 焼き鳥盛り合わせ', reason: '生姜と泡が天然のリセット役となり、揚げ衣の油っぽさを瞬時に解消します。' }
      ],
      avoidFood: ['ハタのあっさり蒸し魚', '繊細な野菜コンソメ', '白トリュフのリゾット'],
      flavorScience: '生姜に含まれるジンゲロールと微量のカプサイシンがアルコールのような温熱刺激とキック感をもたらし、水分量の多いドリンクが水っぽくなるのを防ぎます。'
    }
  },

  'cucumber-tom-collins': {
    'zh-TW': {
      name: '小黃瓜清香可林斯',
      category: '草本清新型 (Herbal & Crisp)',
      tagline: '低溫冷浸小黃瓜水搭配明亮檸檬酸，如清晨雨後漫步般的純淨醒腦體驗',
      flavorTags: ['8小時冷浸黃瓜水', '純淨檸檬原汁', '長條黃瓜薄片', '純淨氣泡感'],
      glassware: '可林杯 (Collins Glass)',
      ratioText: '黃瓜水 : 檸檬汁 : 糖水 = 3 : 1.2 : 1',
      ingredients: [
        { name: '低溫冷浸小黃瓜水 (8小時萃取)', amount: 60, unit: 'mL' },
        { name: '新鮮現榨黃檸檬汁', amount: 25, unit: 'mL' },
        { name: '手工純蔗糖水 (1:1 比例)', amount: 20, unit: 'mL' },
        { name: '無酒精杜松子蒸餾萃取液 (選配)', amount: 15, unit: 'mL' },
        { name: '冰鎮強氣泡水 (Sparkling Water)', amount: 90, unit: 'mL 補滿' },
        { name: '小黃瓜刨長薄片', amount: 2, unit: '條貼杯裝飾' }
      ],
      steps: [
        '事前準備：將新鮮小黃瓜切厚片浸泡於純淨氣泡水中冷藏 8 小時，萃取清香小黃瓜水。',
        '將可林長杯內壁貼入 1-2 條小黃瓜長薄片，填滿透明長條冰塊。',
        '在攪拌杯中注入黃瓜萃取水、新鮮檸檬汁與純蔗糖水，加冰長匙攪拌 (Stir) 15 秒至杯身起霧。',
        '透過濾冰器將澄清液體注入可林杯中。',
        '補入冰鎮強氣泡水，用吧叉匙由底向上輕輕提拉一次即可優雅上桌。'
      ],
      tastingNotes: {
        initial: '撲鼻而來的是極致純淨的青翠瓜果香與薄薄露水氣息。',
        mid: '黃檸檬的高明度酸感與糖水柔順甜味平衡，黃瓜帶來天然植物水分清甜。',
        finish: '氣泡持續上升釋放香氣，喉頭一片冰爽純淨，回甘生津。'
      },
      pairingFood: [
        { dish: '古法清蒸龍虎斑 / 樹子蒸午仔魚', reason: '小黃瓜的綠色香氣與清蒸魚肉鮮甜高度共鳴，檸檬酸如天然醬汁提鮮。' },
        { dish: '法式生蠔冷盤 / 酸辣鮮蝦 Ceviche', reason: '純淨清爽的瓜果酸度代替傳統白酒，完全不掩蓋生蠔的海洋礦物感。' },
        { dish: '香煎脆皮雞腿排 / 白斬雞', reason: '高酸氣泡快速切斷雞皮油脂，保留肉汁鮮美。' }
      ],
      avoidFood: ['紅酒燉牛膝', '慢火東坡肉', '重乳酪蛋糕'],
      flavorScience: '小黃瓜中的 2,6-壬二烯醛 (Nonadienal) 與清蒸白身魚的鮮味分子天然協同，澄清過濾技術賦予飲品乾淨俐落的骨架。'
    },
    'en': {
      name: 'Cucumber Zero Collins',
      category: 'Herbal & Crisp',
      tagline: 'Low-temperature cold-infused cucumber essence met with luminous lemon acidity, a refreshing walk after morning rain.',
      flavorTags: ['8hr Cold-Infused Cucumber', 'Pure Lemon Juice', 'Ribbon Cucumber Slices', 'Crisp Sparkle'],
      glassware: 'Collins Glass',
      ratioText: 'Cucumber Water : Lemon Juice : Cane Syrup = 3 : 1.2 : 1',
      ingredients: [
        { name: '8-hour cold-steeped cucumber water', amount: 60, unit: 'mL' },
        { name: 'Freshly squeezed lemon juice', amount: 25, unit: 'mL' },
        { name: 'Pure cane sugar syrup (1:1)', amount: 20, unit: 'mL' },
        { name: 'Non-alcoholic botanical juniper distillate (optional)', amount: 15, unit: 'mL' },
        { name: 'Chilled sparkling water', amount: 90, unit: 'mL (to fill)' },
        { name: 'Long shaved cucumber ribbons', amount: 2, unit: 'ribbons' }
      ],
      steps: [
        'Advance prep: Steep fresh cucumber slices in chilled sparkling water for 8 hours to extract delicate herbal water.',
        'Adhere 1–2 cucumber ribbons along the inner wall of a Collins glass, then fill with clear spear ice.',
        'In a mixing glass, combine cucumber water, fresh lemon juice, and simple syrup; stir with ice for 15 seconds until frosted.',
        'Strain the clarified liquid over ice into the Collins glass.',
        'Top with chilled sparkling water, gently lift once with a bar spoon from bottom to top, and serve elegantly.'
      ],
      tastingNotes: {
        initial: 'An exceptionally pure, green dew-kissed cucumber aroma greets the nose immediately.',
        mid: 'High-luminosity lemon acidity balances velvety cane sweetness, as cucumber delivers crisp plant hydration.',
        finish: 'Rising bubbles continuously release botanical freshness, leaving the throat wonderfully icy, clean, and salivating.'
      },
      pairingFood: [
        { dish: 'Steamed Tiger Grouper / Threadfin with Preserved Cordia Seeds', reason: 'Green cucumber aromas resonate intimately with steamed white fish, while citrus elevates delicate sweetness.' },
        { dish: 'Fresh French Oysters / Seafood Ceviche', reason: 'Crisp, clean fruit acidity replaces white wine, never masking oceanic minerality.' },
        { dish: 'Crispy Pan-Seared Chicken Thigh / Poached Chicken', reason: 'High acidity and carbonation rapidly slice chicken skin richness while highlighting tender meat juices.' }
      ],
      avoidFood: ['Osso Buco Braised Beef Shank', 'Slow-Cooked Pork Belly', 'Heavy Baked Cheesecake'],
      flavorScience: 'Nonadienal in cucumbers synergizes naturally with umami molecules in steamed fish; fine clarification delivers a crisp, crystalline architecture.'
    },
    'ja': {
      name: 'きゅうりとレモンのゼロコリンズ',
      category: 'ハーバル＆クリア系',
      tagline: '低温抽出したきゅうりの清冽な香りと澄み渡るレモンの酸味、雨上がりの朝の森を散歩するようなピュアな目覚め',
      flavorTags: ['8時間水出しきゅうり', '搾りたてレモン', '薄切りきゅうりリボン', '澄んだ微炭酸'],
      glassware: 'コリンズグラス',
      ratioText: 'きゅうり水 : レモン果汁 : シロップ = 3 : 1.2 : 1',
      ingredients: [
        { name: '8時間低温抽出きゅうり水', amount: 60, unit: 'mL' },
        { name: '搾りたて黄レモン果汁', amount: 25, unit: 'mL' },
        { name: '自家製シュガーシロップ (1:1)', amount: 20, unit: 'mL' },
        { name: 'ノンアルコール・ジュニパー蒸留エキス (任意)', amount: 15, unit: 'mL' },
        { name: '冷やした強炭酸水', amount: 90, unit: 'mL (満たす)' },
        { name: 'ピーラーで薄く削ったきゅうり', amount: 2, unit: '本 (飾り)' }
      ],
      steps: [
        '下準備：スライスしたきゅうりを炭酸水に漬け、冷蔵庫で8時間寝かせて香りを抽出します。',
        'コリンズグラスの内壁にきゅうりのリボンを沿わせ、透明な角氷を満たします。',
        'ミキシンググラスできゅうり水、レモン果汁、シロップを合わせ、氷を入れて15秒間素早くステアします。',
        'ストレーナーで濾しながらコリンズグラスに注ぎます。',
        '冷えた炭酸水を満たし、バースプーンで下から上に一度軽く持ち上げてサーブします。'
      ],
      tastingNotes: {
        initial: '鼻をくすぐる朝露のような青々としたきゅうりと爽快なシトラスのアロマ。',
        mid: '明るいレモンの酸味とシロップの優しい甘みがバランスよく溶け合い、きゅうりの瑞々しさが広がります。',
        finish: '立ち上る炭酸が香りを解き放ち、喉越しは極めて爽快で清らかな後味が続きます。'
      },
      pairingFood: [
        { dish: '白身魚やハタの酒蒸し・清蒸', reason: 'きゅうりのグリーンノートが蒸し魚の繊細な風味と共鳴し、レモンの酸味がポン酢やタレのように旨味を引き出します。' },
        { dish: '生牡蠣プレート / 鮮魚のセビーチェ', reason: '澄んだ酸味が白ワインの代わりとなり、牡蠣の海のミネラル感を損ないません。' },
        { dish: 'パリパリ鶏もも肉のソテー / 蒸し鶏', reason: '酸と炭酸が鶏皮の油分を素早く流し、ジューシーな肉汁の旨味を際立たせます。' }
      ],
      avoidFood: ['オッソブーコ (仔牛スネ肉煮込み)', '豚の角煮', '濃厚ベイクドチーズケーキ'],
      flavorScience: 'きゅうり由来の2,6-ノナジエナールが魚の旨味成分と相乗効果を生み、クリアな抽出液が雑味のない骨格を形作ります。'
    }
  },

  'virgin-pineapple-mojito': {
    'zh-TW': {
      name: '無酒精黃金鳳梨莫希托',
      category: '熱帶酸甜型 (Tropical & Citrus)',
      tagline: '熱帶熟成金鑽鳳梨與薄荷的冰爽爆發，滿杯碎冰與酵素切脂的熱炒解膩神飲',
      flavorTags: ['台灣金鑽鳳梨', '新鮮薄荷葉', '新鮮萊姆角', '滿杯碎冰清爽'],
      glassware: '高球杯 / 復古杯 (Highball / Collins)',
      ratioText: '鳳梨汁 : 萊姆角 : 糖水 = 2 : 2 : 1',
      ingredients: [
        { name: '新鮮金鑽鳳梨塊 (去芯)', amount: 40, unit: 'g' },
        { name: '新鮮薄荷嫩葉', amount: 10, unit: '片' },
        { name: '新鮮萊姆角 (Lime Wedge)', amount: 2, unit: '瓣' },
        { name: '新鮮鳳梨原汁', amount: 30, unit: 'mL' },
        { name: '純蔗糖糖水', amount: 15, unit: 'mL' },
        { name: '大量碎冰 (Crushed Ice)', amount: 1, unit: '滿杯' },
        { name: '冰鎮強氣泡蘇打水', amount: 90, unit: 'mL 補滿' }
      ],
      steps: [
        '在厚底高球杯底放入金鑽鳳梨塊、萊姆角與薄荷葉。',
        '用搗棒「輕柔按壓搗汁 4-6 次」，釋放鳳梨果汁、萊姆酸汁與薄荷葉表皮精油。',
        '注入新鮮鳳梨汁與糖水，填入大量碎冰至八分滿。',
        '用吧匙快速上下攪拌，使底部的果肉糖蜜與碎冰均勻冷卻降溫。',
        '補滿剩餘碎冰，注滿冰鎮蘇打水，插入一支薄荷嫩枝與風乾鳳梨片裝飾。'
      ],
      tastingNotes: {
        initial: '熱帶鳳梨奔放成熟的果香交織薄荷葉的冷涼，香氣撲鼻。',
        mid: '鳳梨的天然甜酸與萊姆的青澀果酸完美交融，碎冰帶來極致冰涼咀嚼感。',
        finish: '氣泡帶走甜膩感，口中殘留清甜薄荷香與鳳梨回甘，解渴無比。'
      },
      pairingFood: [
        { dish: '台式三層焢肉飯 / 滷肉飯', reason: '鳳梨天然酵素與高酸氣泡瞬間瓦解五花肉濃郁油脂，清爽無比。' },
        { dish: '廣式脆皮燒肉 / 蜜汁叉燒', reason: '熱帶果酸與焦香甜脆豬皮形成酸甜互補，薄荷消除油耗味。' },
        { dish: '韓式辣烤五花肉 / 泰式打拋豬', reason: '清涼薄荷醇與氣泡能迅速安撫辣椒素灼熱，比水更能解辣。' }
      ],
      avoidFood: ['清燉牛肉湯', '極度清淡的白灼海鮮'],
      flavorScience: '鳳梨蛋白酶 (Bromelain) 與薄荷醇 (Menthol) 形成雙重切油網絡，天然果酸與碎冰將口腔溫度快速降低，重置味覺。'
    },
    'en': {
      name: 'Virgin Pineapple Mojito',
      category: 'Tropical & Citrus',
      tagline: 'An icy burst of ripe tropical pineapple and cool mint, a crushed-ice refresher slicing through rich, sizzling culinary grease.',
      flavorTags: ['Golden Diamond Pineapple', 'Fresh Mint Leaves', 'Fresh Lime Wedges', 'Crushed Ice Chill'],
      glassware: 'Highball / Collins Glass',
      ratioText: 'Pineapple Juice : Lime Wedge : Simple Syrup = 2 : 2 : 1',
      ingredients: [
        { name: 'Fresh Golden Diamond pineapple chunks (cored)', amount: 40, unit: 'g' },
        { name: 'Fresh tender mint leaves', amount: 10, unit: 'leaves' },
        { name: 'Fresh lime wedges', amount: 2, unit: 'wedges' },
        { name: 'Fresh pineapple juice', amount: 30, unit: 'mL' },
        { name: 'Pure cane sugar syrup', amount: 15, unit: 'mL' },
        { name: 'Generous crushed ice', amount: 1, unit: 'full glass' },
        { name: 'Chilled club soda', amount: 90, unit: 'mL (to fill)' }
      ],
      steps: [
        'In a heavy-bottomed highball glass, add pineapple chunks, lime wedges, and mint leaves.',
        'Gently press with a muddler 4–6 times to release pineapple nectar, lime juice, and mint essential oils.',
        'Pour in fresh pineapple juice and simple syrup, then fill with crushed ice to 80% capacity.',
        'Churn rapidly with a bar spoon from bottom to top to chill the fruit base evenly.',
        'Top with remaining crushed ice, fill with chilled club soda, and garnish with a fresh mint sprig and dried pineapple wheel.'
      ],
      tastingNotes: {
        initial: 'Vibrant tropical aromas of sun-ripened pineapple intertwined with refreshing mint crispness.',
        mid: 'Natural pineapple tart-sweetness perfectly marries zesty lime acidity, while crushed ice provides an invigorating, icy crunch.',
        finish: 'Bubbles wash away sweetness, leaving behind cool mint aromatics and lingering pineapple nectar.'
      },
      pairingFood: [
        { dish: 'Braised Pork Belly Rice (Lu Rou Fan)', reason: 'Natural pineapple enzymes and bright carbonation effortlessly melt through unctuous pork belly fat.' },
        { dish: 'Crispy Cantonese Roast Pork / Honey BBQ Char Siu', reason: 'Tropical acidity and caramelized crispy pork skin form a complementary balance; mint cuts residual oiliness.' },
        { dish: 'Korean Spicy Pork Belly / Thai Basil Pork (Pad Krapow)', reason: 'Cooling menthol and sparkling effervescence soothe capsaicin heat far better than water.' }
      ],
      avoidFood: ['Clear Consommé Beef Soup', 'Ultra-Mild Boiled Shellfish'],
      flavorScience: 'Bromelain enzymes and menthol create a dual fat-cutting matrix, while natural fruit acid and crushed ice rapidly drop oral temperature to reset tastebuds.'
    },
    'ja': {
      name: 'バージン・パイナップルモヒート',
      category: 'トロピカル＆柑橘系',
      tagline: '完熟パイナップルの芳醇な果実味とミントの氷爽な弾気、クラッシュアイスと天然酵素が油っこい料理の重さを吹き飛ばす極上リフレッシャー',
      flavorTags: ['台湾金鑚パイン', 'フレッシュミント', 'フレッシュライム', 'クラッシュアイス'],
      glassware: 'ハイボール / コリンズグラス',
      ratioText: 'パイン果汁 : ライムくし切り : シロップ = 2 : 2 : 1',
      ingredients: [
        { name: '完熟パイナップル果肉 (芯なし角切り)', amount: 40, unit: 'g' },
        { name: 'フレッシュミントの若葉', amount: 10, unit: '枚' },
        { name: 'フレッシュライムのくし切り', amount: 2, unit: '切れ' },
        { name: '搾りたてパイナップル果汁', amount: 30, unit: 'mL' },
        { name: 'サトウキビシロップ', amount: 15, unit: 'mL' },
        { name: 'たっぷりのクラッシュアイス', amount: 1, unit: 'グラス一杯' },
        { name: '冷やした強炭酸水', amount: 90, unit: 'mL (満たす)' }
      ],
      steps: [
        '厚底のハイボールグラスにパイナップル果肉、ライム、ミントの葉を入れます。',
        'ペストルで4〜6回優しく押し潰し、パイン果汁、ライムの酸味、ミントの精油を抽出します。',
        'パイナップル果汁とシロップを注ぎ、クラッシュアイスをグラスの8分目まで詰めます。',
        'バースプーンで底から素早く上下にかき混ぜ、果肉と氷を急冷して均一に馴染ませます。',
        '残りのクラッシュアイスを山盛りに足し、炭酸水を静かに満たしてミントの小枝とドライパインを飾ります。'
      ],
      tastingNotes: {
        initial: '太陽を浴びた完熟パイナップルのトロピカルな甘い香りとミントの清涼感が鼻孔を満たします。',
        mid: 'パイナップルの豊かな甘酸っぱさとライムのビターな酸味が調和し、クラッシュアイスが最高の冷涼感を与えます。',
        finish: '炭酸が甘さの重さをすっきりと流し、口内に残る清々しいミント香とパインの甘美な余韻を楽しめます。'
      },
      pairingFood: [
        { dish: '台湾式豚角煮ご飯 (焢肉飯・ルーロー飯)', reason: 'パイナップルの天然酵素と高炭酸が豚バラ肉の濃厚な脂を瞬時に分解し、すっきり爽快に楽しめます。' },
        { dish: '広東風クリスピーローストポーク / チャーシュー', reason: 'トロピカルな酸味とカリカリの豚皮の旨味が甘酸っぱく調和し、ミントが油っぽさを消し去ります。' },
        { dish: '韓国風サムギョプサル / タイ風ガパオライス', reason: 'メントールの清涼感と炭酸が唐辛子の辛味を鎮め、水よりも効果的にお口を休ませます。' }
      ],
      avoidFood: ['澄んだ牛肉のコンソメスープ', '極めて淡白なボイル海鮮'],
      flavorScience: 'パイナップルに含まれるタンパク質分解酵素ブロメラインとミントのメントールがダブルで脂質をカットし、砕氷が口内温度を素早く下げて味覚をリセットします。'
    }
  }
};

/**
 * 取得完整多語系本地化的 Mocktail 資料物件
 */
export function getLocalizedMocktail(mocktail, lang = 'zh-TW') {
  if (!mocktail) return null;
  const mocktailId = mocktail.id;
  const localizedSet = MOCKTAILS_I18N[mocktailId]?.[lang] || MOCKTAILS_I18N[mocktailId]?.['zh-TW'];

  if (!localizedSet) {
    return {
      ...mocktail,
      isDemo: true,
      isPurchasable: false
    };
  }

  return {
    ...mocktail,
    ...localizedSet,
    isDemo: true,
    isPurchasable: false,
    enName: mocktail.enName || localizedSet.name,
    jaName: mocktail.jaName || localizedSet.name
  };
}

/**
 * 取得完整多語系本地化的六大原料系統
 */
export function getLocalizedPillars(lang = 'zh-TW') {
  return ZERO_PROOF_PILLARS_I18N[lang] || ZERO_PROOF_PILLARS_I18N['zh-TW'];
}

/**
 * 取得完整多語系本地化的五大名詞光譜
 */
export function getLocalizedTerminology(lang = 'zh-TW') {
  return ZERO_PROOF_TERMINOLOGY_I18N[lang] || ZERO_PROOF_TERMINOLOGY_I18N['zh-TW'];
}

/**
 * 取得完整多語系本地化的食品安全指引
 */
export function getLocalizedSafetyGuide(lang = 'zh-TW') {
  return ZERO_PROOF_SAFETY_I18N[lang] || ZERO_PROOF_SAFETY_I18N['zh-TW'];
}

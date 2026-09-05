// AI 智能侍酒師與料理顧問多語系字典與預設情境 (zh-TW, en, ja)

export const AI_SOMMELIER_I18N = {
  'zh-TW': {
    badge: 'AI Grounded Sommelier & Chef',
    title: 'AI 智能侍酒師與部位料理管家',
    subtitle: '依據專業風味協同科學與肉品細切百科，為您的聚餐與自煮場景量身打造專屬菜單與搭餐酒單。',
    byokTitle: 'OpenAI API Key 密鑰保險箱 (BYOK 模式)',
    byokDesc: '本功能採用「使用者自備金鑰（BYOK）」模式，金鑰僅儲存在您的瀏覽器中，由 API 動態呼叫，伺服器絕不儲存或紀錄。',
    apiKeyPlaceholder: '請貼上您的 OpenAI API Key (sk-...)',
    saveKeyLabel: '記住在本機瀏覽器 (localStorage)',
    clearKeyLabel: '清除金鑰',
    keySavedNotice: '已儲存於本機',
    noKeyWarning: '⚠️ 請先輸入您的 OpenAI API Key 才能呼叫 AI 侍酒師。',
    presetBadge: '💡 一鍵帶入經典情境：',
    presets: [
      {
        icon: '🥩',
        label: '厚切肋眼配威士忌',
        text: '厚切肋眼牛排配威士忌，該怎麼掌握熟度與焦香，並搭配哪款經典調酒？',
        category: 'beef',
        cooking: 'steak',
        drink: 'cocktail',
        occasion: 'friends'
      },
      {
        icon: '🐖',
        label: '台式焢肉與炸五花',
        text: '台式焢肉與炸五花三層肉，想找能解膩的調酒或精釀啤酒搭配？',
        category: 'pork',
        cooking: 'braised',
        drink: 'cocktail',
        occasion: 'family'
      },
      {
        icon: '🐟',
        label: '黑鮪大腹與清蒸石斑',
        text: '生食黑鮪魚大腹刺身與清蒸石斑，適合搭配哪種清酒、白酒或無酒精特調？',
        category: 'fish',
        cooking: 'steamed_raw',
        drink: 'wine',
        occasion: 'business'
      }
    ],
    form: {
      guestsTitle: '用餐人數與客群組成',
      adultsLabel: '位大人',
      kidsLabel: '位小孩/不飲酒者',
      occasionTitle: '聚餐目的與氛圍',
      occasions: [
        { id: 'business', label: '👔 商務宴客', desc: '注重分道優雅、不易弄髒與正式禮儀' },
        { id: 'birthday', label: '🎂 生日慶祝', desc: '儀式感、甜點搭酒與歡慶氛圍' },
        { id: 'romance', label: '🕯️ 浪漫約會', desc: '精緻細膩、優雅酸度與柔順酒體' },
        { id: 'family', label: '👨‍👩‍👧‍👦 家庭聚餐', desc: '軟嫩好嚼、老少咸宜與無酒精搭餐' },
        { id: 'friends', label: '🎉 朋友暢飲', desc: '重風味炸烤、高爽脆氣泡與痛快解膩' },
        { id: 'casual', label: '🍳 日常自煮', desc: '快速上手、簡單平底鍋與現成酒款' }
      ],
      meatTitle: '主要肉品品類',
      meats: [
        { id: 'beef', label: '🥩 頂級牛肉', desc: '肋眼、菲力、牛小排、牛五花' },
        { id: 'pork', label: '🐖 特選豬肉', desc: '松阪豬、梅花肉、五花三層肉' },
        { id: 'fish', label: '🐟 鮮魚海鮮', desc: '黑鮪魚、鮭魚、石斑、生蠔' },
        { id: 'mix', label: '🦞 海陸雙饗', desc: '牛排/五花搭配鮮蝦干貝' }
      ],
      cookingTitle: '烹調方式與手法',
      cookings: [
        { id: 'steak', label: '🍳 原味香煎 / 厚切牛排' },
        { id: 'bbq', label: '🔥 直火炭烤 / 煙燻 BBQ' },
        { id: 'hotpot', label: '🍲 火鍋涮燙 / 壽喜燒' },
        { id: 'braised', label: '🥘 台式紅燒 / 慢燉醬香' },
        { id: 'steamed_raw', label: '🧊 清蒸蔥油 / 刺身生食' }
      ],
      drinkTitle: '飲品偏好 (有酒 / 無酒)',
      drinks: [
        { id: 'cocktail', label: '🍸 經典調酒優先 (Cocktails)', desc: '10 款經典調酒科學配對' },
        { id: 'wine', label: '🍷 葡萄酒與香檳 (Wine)', desc: '紅酒單寧、白酒果酸與氣泡酒' },
        { id: 'beer_spirits', label: '🍺 在地啤酒與名酒 (Beer & Spirits)', desc: '18天生啤、金門高粱與特級紹興' },
        { id: 'mocktail', label: '🌿 零酒精特調 (Virgin Mocktails)', desc: '完全無酒精，以酸度與茶香消脂' }
      ],
      customNoteTitle: '自由補充需求 (手邊現有食材/酒款/忌口)',
      customNotePlaceholder: '例如：長輩牙口不好偏好軟嫩、冰箱有一瓶波本威士忌想用掉、不吃香菜等...',
      submitBtn: '✨ 呼叫 AI 侍酒師產生專業建議',
      submittingBtn: '🧠 侍酒主廚正在依風味科學調配建議中...'
    },
    results: {
      title: 'AI 侍酒師專屬建議報告',
      menuTitle: '🍽️ 推薦部位與烹調秘訣',
      drinkTitle: '🥂 最佳搭配酒款或特調',
      scienceTitle: '🔬 風味科學邏輯 (Why It Works)',
      etiquetteTitle: '💡 場合專屬禮儀與出菜提醒',
      disclaimer: '🔞 本建議由 AI 依據專案風味科學知識庫生成 · 受控展示用 · 未滿十八歲禁止飲酒',
      reGenerateBtn: '🔄 重新諮詢其他情境'
    }
  },
  'en': {
    badge: 'AI Grounded Sommelier & Chef',
    title: 'AI Sommelier & Culinary Concierge',
    subtitle: 'Tailored menu and drink pairings curated by culinary science and butchery encyclopedias for your exact occasion.',
    byokTitle: 'OpenAI API Key Vault (BYOK Mode)',
    byokDesc: 'This tool operates in Bring-Your-Own-Key (BYOK) mode. Your key is stored solely in your local browser and never logged or saved on our servers.',
    apiKeyPlaceholder: 'Paste your OpenAI API Key (sk-...)',
    saveKeyLabel: 'Remember in browser (localStorage)',
    clearKeyLabel: 'Clear Key',
    keySavedNotice: 'Saved locally',
    noKeyWarning: '⚠️ Please provide your OpenAI API Key to call the AI Sommelier.',
    presetBadge: '💡 Quick Scenario Presets:',
    presets: [
      {
        icon: '🥩',
        label: 'Thick Ribeye & Whiskey',
        text: 'How to master heat & char for thick ribeye steak, and which classic cocktail pairs best?',
        category: 'beef',
        cooking: 'steak',
        drink: 'cocktail',
        occasion: 'friends'
      },
      {
        icon: '🐖',
        label: 'Braised & Fried Pork Belly',
        text: 'What cocktail or craft beer pairs best with rich braised pork belly to cut through grease?',
        category: 'pork',
        cooking: 'braised',
        drink: 'cocktail',
        occasion: 'family'
      },
      {
        icon: '🐟',
        label: 'Tuna Otoro & Steamed Fish',
        text: 'Which sake, white wine, or virgin mocktail complements bluefin otoro and delicate steamed fish?',
        category: 'fish',
        cooking: 'steamed_raw',
        drink: 'wine',
        occasion: 'business'
      }
    ],
    form: {
      guestsTitle: 'Guests & Party Size',
      adultsLabel: 'Adults',
      kidsLabel: 'Kids / Non-drinkers',
      occasionTitle: 'Dining Occasion & Vibe',
      occasions: [
        { id: 'business', label: '👔 Business Dining', desc: 'Focus on elegance, clean eating & formal etiquette' },
        { id: 'birthday', label: '🎂 Birthday Celebration', desc: 'Celebratory vibes, dessert pairings & bubbly' },
        { id: 'romance', label: '🕯️ Romantic Date', desc: 'Delicate textures, crisp acidity & smooth body' },
        { id: 'family', label: '👨‍👩‍👧‍👦 Family Gathering', desc: 'Tender cuts, crowd-pleasing & alcohol-free options' },
        { id: 'friends', label: '🎉 Friends Party', desc: 'Bold grilled/fried dishes, crispy fizz & palate cleansers' },
        { id: 'casual', label: '🍳 Home Cooking', desc: 'Quick skillet mastery & accessible pantry bottles' }
      ],
      meatTitle: 'Primary Protein Cut',
      meats: [
        { id: 'beef', label: '🥩 Prime Beef', desc: 'Ribeye, Tenderloin, Short Ribs, Short Plate' },
        { id: 'pork', label: '🐖 Select Pork', desc: 'Matsusaka Pork, Pork Collar, Pork Belly' },
        { id: 'fish', label: '🐟 Seafood & Fish', desc: 'Bluefin Tuna, Salmon, Grouper, Fresh Oysters' },
        { id: 'mix', label: '🦞 Surf & Turf', desc: 'Steak / Pork paired with Prawns & Scallops' }
      ],
      cookingTitle: 'Cooking Technique & Heat',
      cookings: [
        { id: 'steak', label: '🍳 Pan-Seared / Thick Steak' },
        { id: 'bbq', label: '🔥 Charcoal Grill / Smoked BBQ' },
        { id: 'hotpot', label: '🍲 Shabu Shabu / Sukiyaki' },
        { id: 'braised', label: '🥘 Braised / Slow-Cooked Soy Stew' },
        { id: 'steamed_raw', label: '🧊 Steamed Scallion Oil / Raw Sashimi' }
      ],
      drinkTitle: 'Beverage Preference (Alcohol / Alcohol-Free)',
      drinks: [
        { id: 'cocktail', label: '🍸 Classic Cocktails (Priority)', desc: 'Science-backed 10 classic cocktails' },
        { id: 'wine', label: '🍷 Fine Wine & Champagne', desc: 'Red tannins, white acidity & Brut sparkling' },
        { id: 'beer_spirits', label: '🍺 Craft Beer & Spirits', desc: 'Draft lager, Kinmen Kaoliang & Shaoxing' },
        { id: 'mocktail', label: '🌿 Virgin Mocktails (0% ABV)', desc: 'Zero alcohol, utilizing high acid & tea tannins' }
      ],
      customNoteTitle: 'Special Notes & Pantry Ingredients (Optional)',
      customNotePlaceholder: 'e.g. Grandma prefers very tender meat, have a bottle of bourbon at home, allergic to cilantro...',
      submitBtn: '✨ Request AI Sommelier Pairing Advice',
      submittingBtn: '🧠 Crafting personalized pairing recommendations...'
    },
    results: {
      title: 'AI Sommelier Pairing & Culinary Report',
      menuTitle: '🍽️ Recommended Cuts & Cooking Techniques',
      drinkTitle: '🥂 Optimal Drink or Mocktail Pairing',
      scienceTitle: '🔬 Flavor Synergy Science (Why It Works)',
      etiquetteTitle: '💡 Occasion Etiquette & Service Tips',
      disclaimer: '🔞 Grounded in verified culinary science database · Controlled Demo · 18+ Only',
      reGenerateBtn: '🔄 Consult Another Scenario'
    }
  },
  'ja': {
    badge: 'AI Grounded Sommelier & Chef',
    title: 'AI 専属ソムリエ＆料理コンシェルジュ',
    subtitle: '風味の科学的相乗効果と部位図鑑に基づき、利用シーンに最適な肉料理とペアリングをご提案します。',
    byokTitle: 'OpenAI API Key セーフティボックス (BYOKモード)',
    byokDesc: '本機能は「ユーザー自身のAPIキー（BYOK）」を使用します。キーはブラウザにのみ保存され、サーバーには一切保存・記録されません。',
    apiKeyPlaceholder: 'OpenAI API Key (sk-...) を入力してください',
    saveKeyLabel: 'ブラウザに記憶する (localStorage)',
    clearKeyLabel: 'キーを消去',
    keySavedNotice: 'ローカルに保存済み',
    noKeyWarning: '⚠️ AIソムリエを呼び出すには OpenAI API Key を入力してください。',
    presetBadge: '💡 ワンクリックで定番シーンを設定：',
    presets: [
      {
        icon: '🥩',
        label: '厚切りリブロース＆ウイスキー',
        text: '厚切りリブロースステーキとウイスキーの火入れのコツ、おすすめのクラシックカクテルは？',
        category: 'beef',
        cooking: 'steak',
        drink: 'cocktail',
        occasion: 'friends'
      },
      {
        icon: '🐖',
        label: '台湾風角煮＆豚バラ揚げ',
        text: '濃厚な豚バラの角煮や揚げ物に合わせる、油っこさを切るカクテルやクラフトビールは？',
        category: 'pork',
        cooking: 'braised',
        drink: 'cocktail',
        occasion: 'family'
      },
      {
        icon: '🐟',
        label: '本マグロ大トロ＆清蒸鮮魚',
        text: '本マグロ大トロの刺身と白身魚の清蒸に合わせるおすすめの日本酒・白ワイン・モクテルは？',
        category: 'fish',
        cooking: 'steamed_raw',
        drink: 'wine',
        occasion: 'business'
      }
    ],
    form: {
      guestsTitle: 'ご利用人数・構成',
      adultsLabel: '名（大人）',
      kidsLabel: '名（子供・お酒を飲まない方）',
      occasionTitle: '利用目的・雰囲気',
      occasions: [
        { id: 'business', label: '👔 ビジネス会食・接待', desc: '取り分けやすさ、上品さ、マナー重視' },
        { id: 'birthday', label: '🎂 誕生日・お祝い', desc: '華やかさ、デザートペアリング、乾杯の泡' },
        { id: 'romance', label: '🕯️ デート・記念日', desc: '繊細な食感、綺麗な酸味、滑らかな余韻' },
        { id: 'family', label: '👨‍👩‍👧‍👦 ファミリー・家族', desc: '柔らかい部位、幅広い年代向け、ノンアル' },
        { id: 'friends', label: '🎉 友人との宴会・飲み会', desc: 'パンチのあるグリル・揚げ物、爽快な炭酸' },
        { id: 'casual', label: '🍳 おうちごはん・自炊', desc: 'フライパンで手軽に作れる本格ペアリング' }
      ],
      meatTitle: '主役の肉・魚介',
      meats: [
        { id: 'beef', label: '🥩 厳選牛肉', desc: 'リブロース、ヒレ、ショートリブ、牛バラ' },
        { id: 'pork', label: '🐖 特選豚肉', desc: '松阪ポーク、肩ロース、豚バラ三層肉' },
        { id: 'fish', label: '🐟 鮮魚・海鮮', desc: '本マグロ、サーモン、ハタ、生牡蠣' },
        { id: 'mix', label: '🦞 サーフ＆ターフ (肉・魚介)', desc: 'ステーキと海老・ホタテの贅沢盛り' }
      ],
      cookingTitle: '調理法・火入れスタイル',
      cookings: [
        { id: 'steak', label: '🍳 ステーキ・香ばしいソテー' },
        { id: 'bbq', label: '🔥 直火炭火焼き・スモークBBQ' },
        { id: 'hotpot', label: '🍲 しゃぶしゃぶ・すき焼き' },
        { id: 'braised', label: '🥘 醤油煮込み・赤ワイン煮' },
        { id: 'steamed_raw', label: '🧊 ネギ生姜清蒸・極上刺身' }
      ],
      drinkTitle: 'お飲み物のご希望 (アルコール / ノンアル)',
      drinks: [
        { id: 'cocktail', label: '🍸 クラシックカクテル優先', desc: '厳選10種のカクテル科学ペアリング' },
        { id: 'wine', label: '🍷 ワイン・シャンパーニュ', desc: '赤の渋み、白の酸味、辛口スパークリング' },
        { id: 'beer_spirits', label: '🍺 生ビール・銘酒', desc: '生ビール、金門高粱酒、特級紹興酒' },
        { id: 'mocktail', label: '🌿 ノンアルコール特製モクテル', desc: 'アルコール0%、酸味と茶のタンニンで油切り' }
      ],
      customNoteTitle: 'ご要望・お手元の食材やお酒 (任意)',
      customNotePlaceholder: '例：高齢者がいるので柔らかい肉が良い、家にバーボンがある、パクチーが苦手...',
      submitBtn: '✨ AIソムリエの専門アドバイスを取得',
      submittingBtn: '🧠 風味の科学に基づいて最適プランを調合中...'
    },
    results: {
      title: 'AI ソムリエ＆シェフ提案レポート',
      menuTitle: '🍽️ おすすめ部位と火入れの極意',
      drinkTitle: '🥂 最適なペアリング酒・モクテル',
      scienceTitle: '🔬 風味科学ロジック (調和の理由)',
      etiquetteTitle: '💡 シーン別マナーと提供のポイント',
      disclaimer: '🔞 専門データベースに基づきAIが生成した受控デモです · 20歳未満の飲酒は禁止されています',
      reGenerateBtn: '🔄 別の条件で相談する'
    }
  }
};

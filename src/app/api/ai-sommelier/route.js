import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { apiKey, scenario, currentLang = 'zh-TW' } = body;

    // 1. 驗證 API Key
    if (!apiKey || typeof apiKey !== 'string' || !apiKey.trim().startsWith('sk-')) {
      return NextResponse.json(
        {
          error: currentLang === 'en'
            ? 'Invalid OpenAI API Key. Please provide a valid key starting with "sk-".'
            : currentLang === 'ja'
            ? 'OpenAI APIキーが無効です。「sk-」で始まる有効なキーを入力してください。'
            : '無效的 OpenAI API Key。請提供以「sk-」開頭的有效金鑰。'
        },
        { status: 400 }
      );
    }

    const {
      guests = { adults: 2, kids: 0 },
      occasion = 'friends',
      meatCategory = 'beef',
      cookingStyle = 'steak',
      drinkPreference = 'cocktail',
      customNote = ''
    } = scenario || {};

    const langName = currentLang === 'en' ? 'English' : currentLang === 'ja' ? 'Japanese (日本語)' : 'Traditional Chinese (繁體中文)';

    // 2. 注入專業事實基準與防幻覺護欄 System Prompt
    const systemPrompt = `You are the master Sommelier & Executive Chef for the luxury dining guide "Fair Weather Friends (酒肉朋友)".
Your job is to provide authoritative, sensory, and strictly scientifically grounded meat cut selection, cooking techniques, and drink pairings based ONLY on proven culinary science and the project's verified database.

### 🛡️ STRICT GROUNDED KNOWLEDGE & RULES (DO NOT HALLUCINATE):
1. **Verified 10 Classic Cocktails Database**:
   - Margarita (Tequila, high acid, lime/salt - cuts fat for tacos, fried foods)
   - Daiquiri (White Rum, pure lime acidity - raw oysters, steamed white fish, delicate seafood)
   - Mojito (White Rum, mint, bubbles - fried chicken, spicy dishes, BBQ)
   - Bloody Mary (Vodka, tomato umami, black pepper, celery - burgers, brunch, smoked bacon)
   - Negroni (Gin, Campari, sweet vermouth bittersweet - prosciutto, salami, aged parmesan cheese)
   - Old Fashioned (Bourbon/Rye, bitters, oak, orange - thick ribeye, smoked brisket, dark chocolate)
   - Paper Plane (Bourbon, Aperol, Amaro Nonino, lemon - herb roasted chicken, pork chops, tomato stew)
   - Penicillin (Scotch, Islay peated float, honey-ginger - smoked brisket, lamb chops, ginger duck)
   - Gin Gin Mule (Gin, spicy ginger beer, mint - tempura, karaage, spicy chicken)
   - Espresso Martini (Vodka, fresh espresso, Kahlua - tiramisu, molten lava cake, creme brulee)

2. **4 Golden Rules of Pairing**:
   - Rule 1: Weight to Weight (Rich marbled cuts pair with structured high-ABV/bittersweet drinks; delicate dishes pair with light high-acid drinks).
   - Rule 2: Acidity Cuts Fat (Citrus and carbonation slice through beef/pork lipids and fried grease).
   - Rule 3: Spice Clashes with High Proof (Use sweetness, coolness, and effervescence to soothe capsaicin).
   - Rule 4: Dessert Sweetness (The drink must match or exceed dessert sweetness).

3. **Alcohol-Free & Safe Drinking Guardrail**:
   - If the user selected drink preference "mocktail" OR if children/non-drinkers are present and non-alcoholic is requested:
     YOU MUST ONLY RECOMMEND 100% ALCOHOL-FREE VIRGIN MOCKTAILS (e.g. Virgin Mojito, Virgin Margarita, Smoked Ginger Cure with Lapsang Souchong tea, Virgin Espresso Martini, or Cold Brew Sparkling Tea). ABSOLUTELY NO ALCOHOL!

4. **Tone and Language**:
   - Respond in ${langName}.
   - Professional, editorial, appetizing, and concise.
   - Do NOT make up nonexistent cuts or weird cocktails.

### 📋 OUTPUT STRUCTURE (Use clear Markdown with these 4 sections):
### 🍽️ 推薦菜單與部位火候 (Recommended Cuts & Cooking)
(Specify exact cut name, marbling, pre-heat/searing/resting tips, and doneness)

### 🥂 侍酒師搭餐推薦 (Sommelier Drink Pairing)
(Recommend matching cocktail from the 10 list, fine wine, local craft beer, or Virgin Mocktail with exact reasons)

### 🔬 風味科學原理 (Flavor Synergy Science)
(Explain the culinary chemistry: tannin-protein emulsification, acidity cutting lipids, or aroma resonance)

### 💡 場合禮儀與聚餐小提醒 (Occasion Etiquette & Service Tips)
(Tailored advice for the specific occasion: business seating, birthday celebration, family pace, etc.)`;

    const userPrompt = `
[Dining Scenario Request]:
- Number of Guests: ${guests.adults} Adults, ${guests.kids} Kids / Non-drinkers
- Occasion: ${occasion}
- Primary Protein: ${meatCategory}
- Cooking Method: ${cookingStyle}
- Beverage Preference: ${drinkPreference}
- Custom Notes / Pantry Ingredients: ${customNote ? customNote : 'None'}

Please formulate your grounded culinary and pairing consultation according to the strict system guidelines.`;

    // 3. 呼叫 OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.4,
        max_tokens: 1200
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const statusCode = response.status;
      let userFriendlyMessage = 'OpenAI API 呼叫失敗，請確認您的金鑰狀態。';

      if (statusCode === 401) {
        userFriendlyMessage = currentLang === 'en'
          ? 'Invalid API Key. Please verify your OpenAI key.'
          : currentLang === 'ja'
          ? 'APIキーが無効です。OpenAIキーをご確認ください。'
          : 'API Key 無效或已過期，請檢查您的 OpenAI 金鑰。';
      } else if (statusCode === 429) {
        userFriendlyMessage = currentLang === 'en'
          ? 'OpenAI quota exceeded or rate limit reached. Please check your OpenAI account billing.'
          : currentLang === 'ja'
          ? 'OpenAIのアカウント残高が不足しているかレート制限に達しました。'
          : 'OpenAI 帳號額度不足或超出速率限制，請檢查您的 OpenAI 帳戶餘額。';
      } else if (errorData.error?.message) {
        userFriendlyMessage = errorData.error.message;
      }

      return NextResponse.json(
        { error: userFriendlyMessage, statusCode },
        { status: statusCode }
      );
    }

    const data = await response.json();
    const recommendation = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({
      success: true,
      recommendation
    });
  } catch (err) {
    console.error('AI Sommelier API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Server error occurred while calling AI Sommelier.' },
      { status: 500 }
    );
  }
}

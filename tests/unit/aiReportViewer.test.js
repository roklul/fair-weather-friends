import { describe, expect, it } from 'vitest';

const sampleAiOutput = `
### 🍽️ 推薦菜單與部位火候 (Recommended Cuts & Cooking)
對於長輩牙口不好，建議選擇嫩滑且易於咀嚼的肉類部位，如豬肩肉（Pork Shoulder）或牛腩（Brisket）。

- **豬肩肉**：選擇帶有適度大理石紋的部位，預熱鍋具至中高溫，將肉表面煎至金黃色，然後轉小火慢燉約2-3小時，直到肉質軟嫩。建議火候為「中熟」（Medium）。
- **牛腩**：同樣選擇帶有良好大理石紋的部位，先在鍋中煎至表面焦香，然後加入高湯和香料，慢燉約3-4小時，至肉質完全軟化，建議火候為「全熟」（Well Done）。

### 🥂 侍酒師搭餐推薦 (Sommelier Drink Pairing)
由於您選擇了無酒精飲品，建議選擇**無酒精莫吉托（Virgin Mojito）**。這款飲品以薄荷和青檸的清新口感，能夠很好地平衡肉類的豐富風味。

### 🔬 風味科學原理 (Flavor Synergy Science)
無酒精莫吉托中的酸度（來自青檸）能有效切割肉類中的脂肪，減少油膩感。

### 💡 場合禮儀與聚餐小提醒 (Occasion Etiquette & Service Tips)
在這個輕鬆的聚會中，建議保持桌面整潔，並提供適合長輩使用的餐具。
`;

describe('AI Report Parsing & Structured Sectioning', () => {
  it('should split raw markdown into 4 major sections', () => {
    const lines = sampleAiOutput.trim().split('\n');
    const headers = lines.filter((l) => l.startsWith('###'));
    expect(headers.length).toBe(4);
    expect(headers[0]).toContain('🍽️');
    expect(headers[1]).toContain('🥂');
    expect(headers[2]).toContain('🔬');
    expect(headers[3]).toContain('💡');
  });

  it('should match bold inline terms properly', () => {
    const boldMatches = sampleAiOutput.match(/\*\*[^*]+\*\*/g);
    expect(boldMatches).toBeDefined();
    expect(boldMatches.length).toBeGreaterThanOrEqual(3);
    expect(boldMatches).toContain('**豬肩肉**');
    expect(boldMatches).toContain('**牛腩**');
    expect(boldMatches).toContain('**無酒精莫吉托（Virgin Mojito）**');
  });
});

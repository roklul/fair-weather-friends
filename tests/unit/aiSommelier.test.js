import { describe, expect, it } from 'vitest';
import { AI_SOMMELIER_I18N } from '../../src/data/aiSommelierI18n';

describe('AI Sommelier & Culinary Concierge - i18n and Data Integrity', () => {
  const languages = ['zh-TW', 'en', 'ja'];

  it('should have complete translation dictionary for all 3 languages', () => {
    languages.forEach((lang) => {
      const data = AI_SOMMELIER_I18N[lang];
      expect(data).toBeDefined();
      expect(data.title).toBeTruthy();
      expect(data.subtitle).toBeTruthy();
      expect(data.byokTitle).toBeTruthy();
      expect(data.presets.length).toBe(3);
      expect(data.form.occasions.length).toBe(6);
      expect(data.form.meats.length).toBe(4);
      expect(data.form.cookings.length).toBe(5);
      expect(data.form.drinks.length).toBe(4);
      expect(data.results.title).toBeTruthy();
    });
  });

  it('should have properly structured presets with icons and categories', () => {
    languages.forEach((lang) => {
      const presets = AI_SOMMELIER_I18N[lang].presets;
      presets.forEach((p) => {
        expect(p.icon).toBeTruthy();
        expect(p.label).toBeTruthy();
        expect(p.text).toBeTruthy();
        expect(['beef', 'pork', 'fish']).toContain(p.category);
        expect(p.cooking).toBeTruthy();
        expect(p.drink).toBeTruthy();
      });
    });
  });

  it('should contain full drink preference options including non-alcoholic mocktails', () => {
    languages.forEach((lang) => {
      const drinks = AI_SOMMELIER_I18N[lang].form.drinks;
      const ids = drinks.map((d) => d.id);
      expect(ids).toContain('cocktail');
      expect(ids).toContain('wine');
      expect(ids).toContain('beer_spirits');
      expect(ids).toContain('mocktail');
    });
  });
});

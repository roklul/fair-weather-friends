import { describe, expect, it } from 'vitest';
import { COCKTAILS_DATA } from '../../src/data/cocktailData';
import {
  getLocalizedCocktail,
  getLocalizedCocktailPrinciples,
  getLocalizedDishMatrix,
  COCKTAILS_I18N
} from '../../src/data/cocktailI18n';
import {
  getLocalizedWinePrinciples,
  getLocalizedCookingMatrix
} from '../../src/data/wineI18n';
import {
  getLocalizedFaqs
} from '../../src/data/faqsI18n';

describe('Localization Dictionaries and Helpers (zh-TW, en, ja)', () => {
  const languages = ['zh-TW', 'en', 'ja'];
  const categories = ['beef', 'pork', 'fish'];

  describe('Cocktail Localization', () => {
    it('should localize all 10 cocktails with complete fields across zh-TW, en, and ja', () => {
      expect(COCKTAILS_DATA.length).toBe(10);

      COCKTAILS_DATA.forEach((rawCocktail) => {
        languages.forEach((lang) => {
          const locCocktail = getLocalizedCocktail(rawCocktail, lang);
          expect(locCocktail).toBeDefined();
          expect(locCocktail.name).toBeTruthy();
          expect(locCocktail.baseSpirit).toBeTruthy();
          expect(locCocktail.tagline).toBeTruthy();
          expect(locCocktail.flavorTags.length).toBeGreaterThan(0);
          expect(locCocktail.glassware).toBeTruthy();
          expect(locCocktail.method).toBeTruthy();
          expect(locCocktail.ratioText).toBeTruthy();

          if (lang !== 'zh-TW') {
            // Check that en and ja have translated tasting notes and steps
            expect(locCocktail.tastingNotes?.initial).toBeTruthy();
            expect(locCocktail.tastingNotes?.mid).toBeTruthy();
            expect(locCocktail.tastingNotes?.finish).toBeTruthy();
            expect(locCocktail.steps?.length).toBeGreaterThan(0);
            expect(locCocktail.ingredients?.length).toBeGreaterThan(0);
          }
        });
      });
    });

    it('should return 4 golden rules in all 3 languages', () => {
      languages.forEach((lang) => {
        const principles = getLocalizedCocktailPrinciples(lang);
        expect(principles.length).toBe(4);
        principles.forEach((p) => {
          expect(p.title).toBeTruthy();
          expect(p.desc).toBeTruthy();
        });
      });
    });

    it('should return 8 dish pairing scenarios in all 3 languages', () => {
      languages.forEach((lang) => {
        const matrix = getLocalizedDishMatrix(lang);
        expect(matrix.length).toBe(8);
        matrix.forEach((m) => {
          expect(m.category).toBeTruthy();
          expect(m.dishes).toBeTruthy();
          expect(m.rationale).toBeTruthy();
        });
      });
    });
  });

  describe('Wine Pairing Localization', () => {
    it('should return 2 wine pairing principles per category for each language', () => {
      categories.forEach((cat) => {
        languages.forEach((lang) => {
          const principles = getLocalizedWinePrinciples(cat, lang);
          expect(principles.length).toBe(2);
          principles.forEach((p) => {
            expect(p.title).toBeTruthy();
            expect(p.desc).toBeTruthy();
            expect(p.items.length).toBeGreaterThan(0);
          });
        });
      });
    });

    it('should return cooking matrices for beef, pork, and fish in all 3 languages', () => {
      categories.forEach((cat) => {
        languages.forEach((lang) => {
          const matrix = getLocalizedCookingMatrix(cat, lang);
          expect(matrix.length).toBeGreaterThanOrEqual(4);
          matrix.forEach((item) => {
            expect(item.method).toBeTruthy();
            expect(item.characteristics).toBeTruthy();
            expect(item.principles).toBeTruthy();
            expect(item.recommendedWines.length).toBeGreaterThan(0);
            expect(item.tastingNotes).toBeTruthy();
          });
        });
      });
    });
  });

  describe('FAQ Localization', () => {
    it('should return 4 FAQs per category for each language', () => {
      categories.forEach((cat) => {
        languages.forEach((lang) => {
          const faqs = getLocalizedFaqs(cat, lang);
          expect(faqs.length).toBe(4);
          faqs.forEach((faq) => {
            expect(faq.q).toBeTruthy();
            expect(faq.a).toBeTruthy();
          });
        });
      });
    });
  });
});

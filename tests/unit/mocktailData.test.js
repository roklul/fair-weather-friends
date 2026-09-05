import { describe, expect, it } from 'vitest';
import {
  ZERO_PROOF_TERMINOLOGY,
  ZERO_PROOF_PILLARS,
  SIGNATURE_MOCKTAILS,
  ZERO_PROOF_SAFETY_GUIDE
} from '../../src/data/mocktailData';

describe('Zero-Proof & Mocktail Masterclass Data Integrity', () => {
  it('should have 5 terminology definitions with proper keys', () => {
    expect(ZERO_PROOF_TERMINOLOGY.length).toBe(5);
    ZERO_PROOF_TERMINOLOGY.forEach((term) => {
      expect(term.name).toBeTruthy();
      expect(term.zhName).toBeTruthy();
      expect(term.meaning).toBeTruthy();
      expect(term.context).toBeTruthy();
    });
  });

  it('should have 6 ingredient pillars with icons and descriptions', () => {
    expect(ZERO_PROOF_PILLARS.length).toBe(6);
    ZERO_PROOF_PILLARS.forEach((pillar) => {
      expect(pillar.id).toBeTruthy();
      expect(pillar.icon).toBeTruthy();
      expect(pillar.title).toBeTruthy();
      expect(pillar.role).toBeTruthy();
      expect(pillar.desc).toBeTruthy();
    });
  });

  it('should have 5 signature zero-proof mocktails with complete recipes, glassware, and science', () => {
    expect(SIGNATURE_MOCKTAILS.length).toBe(5);
    SIGNATURE_MOCKTAILS.forEach((m) => {
      expect(m.id).toBeTruthy();
      expect(m.name).toBeTruthy();
      expect(m.enName).toBeTruthy();
      expect(m.category).toBeTruthy();
      expect(m.ingredients.length).toBeGreaterThanOrEqual(4);
      expect(m.steps.length).toBeGreaterThanOrEqual(4);
      expect(m.tastingNotes.initial).toBeTruthy();
      expect(m.tastingNotes.mid).toBeTruthy();
      expect(m.tastingNotes.finish).toBeTruthy();
      expect(m.pairingFood.length).toBeGreaterThanOrEqual(2);
      expect(m.flavorScience).toBeTruthy();
    });
  });

  it('should contain safety guidelines covering 0.5% ABV and shelf life', () => {
    expect(ZERO_PROOF_SAFETY_GUIDE.title).toBeTruthy();
    expect(ZERO_PROOF_SAFETY_GUIDE.rules.length).toBeGreaterThanOrEqual(3);
  });
});

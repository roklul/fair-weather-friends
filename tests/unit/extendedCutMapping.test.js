import { describe, it, expect } from 'vitest';
import { PRIMAL_AREAS, BEEF_CUTS_DATA } from '../../src/data/beefData';
import { PORK_PRIMAL_AREAS, PORK_CUTS_DATA } from '../../src/data/porkData';
import { FISH_PRIMAL_AREAS, FISH_CUTS_DATA } from '../../src/data/fishData';
import {
  BEEF_EXTENDED_CUT_MAP,
  getCutId as getBeefCutId,
} from '../../src/components/CowDiagram/PrimalDetailPanel';
import {
  PORK_EXTENDED_CUT_MAP,
  getCutId as getPorkCutId,
} from '../../src/components/CowDiagram/PorkDetailPanel';
import {
  FISH_EXTENDED_CUT_MAP,
  getCutId as getFishCutId,
} from '../../src/components/CowDiagram/FishDetailPanel';

describe('Extended Cut Mapping Verification (Deterministic & Language-Agnostic)', () => {
  const validBeefCutIds = new Set(BEEF_CUTS_DATA.map((c) => c.id));
  const validPorkCutIds = new Set(PORK_CUTS_DATA.map((c) => c.id));
  const validFishCutIds = new Set(FISH_CUTS_DATA.map((c) => c.id));

  describe('Beef Extended Cuts Mapping', () => {
    it('covers all 8 beef primals in BEEF_EXTENDED_CUT_MAP', () => {
      PRIMAL_AREAS.forEach((primal) => {
        expect(BEEF_EXTENDED_CUT_MAP[primal.id]).toBeDefined();
        expect(BEEF_EXTENDED_CUT_MAP[primal.id].length).toBe(primal.extendedCuts.length);
      });
    });

    it('resolves every primal index to a valid cut ID in BEEF_CUTS_DATA with zero nulls', () => {
      PRIMAL_AREAS.forEach((primal) => {
        primal.extendedCuts.forEach((cutName, idx) => {
          const cutId = getBeefCutId(primal.id, idx, cutName);
          expect(cutId).not.toBeNull();
          expect(validBeefCutIds.has(cutId)).toBe(true);
        });
      });
    });

    it('falls back correctly for multi-lingual keywords (zh/en/ja)', () => {
      expect(getBeefCutId(null, null, '肋眼牛排')).toBe('ribeye');
      expect(getBeefCutId(null, null, 'USDA Prime Ribeye')).toBe('ribeye');
      expect(getBeefCutId(null, null, 'リブロース')).toBe('ribeye');
      expect(getBeefCutId(null, null, '頂級菲力')).toBe('tenderloin');
      expect(getBeefCutId(null, null, 'Filet Tenderloin')).toBe('tenderloin');
      expect(getBeefCutId(null, null, '牛ヒレステーキ')).toBe('tenderloin');
    });
  });

  describe('Pork Extended Cuts Mapping', () => {
    it('covers all 8 pork primals in PORK_EXTENDED_CUT_MAP', () => {
      PORK_PRIMAL_AREAS.forEach((primal) => {
        expect(PORK_EXTENDED_CUT_MAP[primal.id]).toBeDefined();
        expect(PORK_EXTENDED_CUT_MAP[primal.id].length).toBe(primal.extendedCuts.length);
      });
    });

    it('resolves every primal index to a valid cut ID in PORK_CUTS_DATA with zero nulls', () => {
      PORK_PRIMAL_AREAS.forEach((primal) => {
        primal.extendedCuts.forEach((cutName, idx) => {
          const cutId = getPorkCutId(primal.id, idx, cutName);
          expect(cutId).not.toBeNull();
          expect(validPorkCutIds.has(cutId)).toBe(true);
        });
      });
    });

    it('falls back correctly for multi-lingual pork keywords (zh/en/ja)', () => {
      expect(getPorkCutId(null, null, '梅花肉排')).toBe('pork-butt');
      expect(getPorkCutId(null, null, 'Boston Butt Roast')).toBe('pork-butt');
      expect(getPorkCutId(null, null, '豚肩ロース')).toBe('pork-butt');
      expect(getPorkCutId(null, null, '黃金六兩松阪豬')).toBe('matsusaka-pork');
      expect(getPorkCutId(null, null, 'Matsusaka Jowl')).toBe('matsusaka-pork');
      expect(getPorkCutId(null, null, 'トントロ')).toBe('matsusaka-pork');
    });
  });

  describe('Fish Extended Cuts Mapping', () => {
    it('covers all 9 fish primals in FISH_EXTENDED_CUT_MAP', () => {
      FISH_PRIMAL_AREAS.forEach((primal) => {
        expect(FISH_EXTENDED_CUT_MAP[primal.id]).toBeDefined();
        expect(FISH_EXTENDED_CUT_MAP[primal.id].length).toBe(primal.extendedCuts.length);
      });
    });

    it('resolves every primal index to a valid cut ID in FISH_CUTS_DATA with zero nulls', () => {
      FISH_PRIMAL_AREAS.forEach((primal) => {
        primal.extendedCuts.forEach((cutName, idx) => {
          const cutId = getFishCutId(primal.id, idx, cutName);
          expect(cutId).not.toBeNull();
          expect(validFishCutIds.has(cutId)).toBe(true);
        });
      });
    });

    it('falls back correctly for multi-lingual fish keywords (zh/en/ja)', () => {
      expect(getFishCutId(null, null, '黑鮪魚大腹')).toBe('tuna-otoro-cut');
      expect(getFishCutId(null, null, 'Bluefin Otoro')).toBe('tuna-otoro-cut');
      expect(getFishCutId(null, null, '大トロ')).toBe('tuna-otoro-cut');
      expect(getFishCutId(null, null, '青魽魚下巴')).toBe('amberjack-collar');
      expect(getFishCutId(null, null, 'Hamachi Kama')).toBe('amberjack-collar');
      expect(getFishCutId(null, null, 'ブリカマ塩焼き')).toBe('amberjack-collar');
    });
  });
});

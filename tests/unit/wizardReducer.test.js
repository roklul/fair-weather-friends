import { describe, expect, it } from 'vitest';
import {
  wizardReducer,
  WIZARD_ACTION_TYPES,
  createInitialWizardState
} from '../../src/domain/wizard/wizardReducer';

describe('wizardReducer - Wizard State Machine', () => {
  const mockWizardData = {
    textures: [{ id: 'tender' }, { id: 'fatty' }],
    cookingMethods: [{ id: 'steak' }, { id: 'hotpot' }]
  };

  it('1. 正確產生初始狀態', () => {
    const initialState = createInitialWizardState(mockWizardData);
    expect(initialState.selectedTexture).toBe('tender');
    expect(initialState.selectedCooking).toBe('steak');
    expect(initialState.isDirty).toBe(false);
  });

  it('2. 正確處理 SELECT_TEXTURE action', () => {
    const initialState = createInitialWizardState(mockWizardData);
    const nextState = wizardReducer(initialState, {
      type: WIZARD_ACTION_TYPES.SELECT_TEXTURE,
      payload: 'fatty'
    });

    expect(nextState.selectedTexture).toBe('fatty');
    expect(nextState.selectedCooking).toBe('steak');
    expect(nextState.isDirty).toBe(true);
  });

  it('3. 正確處理 SELECT_COOKING action', () => {
    const initialState = createInitialWizardState(mockWizardData);
    const nextState = wizardReducer(initialState, {
      type: WIZARD_ACTION_TYPES.SELECT_COOKING,
      payload: 'hotpot'
    });

    expect(nextState.selectedTexture).toBe('tender');
    expect(nextState.selectedCooking).toBe('hotpot');
    expect(nextState.isDirty).toBe(true);
  });

  it('4. 正確處理 PRESET_SELECTION action (快捷按鈕一鍵設定)', () => {
    const initialState = createInitialWizardState(mockWizardData);
    const nextState = wizardReducer(initialState, {
      type: WIZARD_ACTION_TYPES.PRESET_SELECTION,
      payload: {
        textureId: 'fatty',
        cookingId: 'hotpot'
      }
    });

    expect(nextState.selectedTexture).toBe('fatty');
    expect(nextState.selectedCooking).toBe('hotpot');
    expect(nextState.isDirty).toBe(true);
  });

  it('5. 正確處理 RESET_WIZARD action 重設為預設值', () => {
    const modifiedState = {
      selectedTexture: 'fatty',
      selectedCooking: 'hotpot',
      isDirty: true
    };

    const resetState = wizardReducer(modifiedState, {
      type: WIZARD_ACTION_TYPES.RESET_WIZARD,
      payload: { wizardData: mockWizardData }
    });

    expect(resetState.selectedTexture).toBe('tender');
    expect(resetState.selectedCooking).toBe('steak');
    expect(resetState.isDirty).toBe(false);
  });
});

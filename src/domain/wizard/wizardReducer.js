/**
 * 純狀態機：選肉助手 (Wizard) 狀態轉移 Reducer
 */

export const WIZARD_ACTION_TYPES = {
  SELECT_TEXTURE: 'SELECT_TEXTURE',
  SELECT_COOKING: 'SELECT_COOKING',
  RESET_WIZARD: 'RESET_WIZARD',
  PRESET_SELECTION: 'PRESET_SELECTION'
};

export const createInitialWizardState = (wizardData) => ({
  selectedTexture: wizardData?.textures?.[0]?.id || '',
  selectedCooking: wizardData?.cookingMethods?.[0]?.id || '',
  isDirty: false
});

export function wizardReducer(state, action) {
  switch (action.type) {
    case WIZARD_ACTION_TYPES.SELECT_TEXTURE:
      return {
        ...state,
        selectedTexture: action.payload,
        isDirty: true
      };

    case WIZARD_ACTION_TYPES.SELECT_COOKING:
      return {
        ...state,
        selectedCooking: action.payload,
        isDirty: true
      };

    case WIZARD_ACTION_TYPES.PRESET_SELECTION:
      return {
        ...state,
        selectedTexture: action.payload.textureId || state.selectedTexture,
        selectedCooking: action.payload.cookingId || state.selectedCooking,
        isDirty: true
      };

    case WIZARD_ACTION_TYPES.RESET_WIZARD:
      return createInitialWizardState(action.payload.wizardData);

    default:
      return state;
  }
}

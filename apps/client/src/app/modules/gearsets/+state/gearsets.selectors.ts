import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GEARSETS_FEATURE_KEY, GearsetsState } from './gearsets.reducer';

// Lookup the 'Gearsets' feature state managed by NgRx
const getGearsetsState = createFeatureSelector<GearsetsState>(
  GEARSETS_FEATURE_KEY
);

const getLoaded = createSelector(
  getGearsetsState,
  (state: GearsetsState) => state.loaded
);

const getAllGearsets = createSelector(
  getGearsetsState,
  getLoaded,
  (state: GearsetsState, isLoaded) => {
    return state.list;
  }
);

const getSelectedId = createSelector(
  getGearsetsState,
  (state: GearsetsState) => state.selectedId
);

const getSelectedGearset = createSelector(
  getAllGearsets,
  getSelectedId,
  (gearsets, id) => {
    const result = gearsets.find(it => it.$key === id);
    return result ? Object.assign({}, result) : result;
  }
);

export const gearsetsQuery = {
  getLoaded,
  getAllGearsets,
  getSelectedGearset
};

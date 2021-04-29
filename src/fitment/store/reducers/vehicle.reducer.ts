// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import { VehicleActionTypes, VehicleAction } from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  makes: string[];
  models: string[];
  trims: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: VehicleAction
): VehicleState {
  console.log(action);
  switch (action.type) {
    case VehicleActionTypes.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }
    case VehicleActionTypes.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        years: action.payload.years,
        loaded: true,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_MAKES: {
      return {
        ...state,
        loading: true
      };
    }
    case VehicleActionTypes.LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        makes: action.payload.makes,
        loaded: true,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_MODELS: {
      return {
        ...state,
        loading: true
      };
    }
    case VehicleActionTypes.LOAD_MODELS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_MODELS_SUCCESS: {
      return {
        ...state,
        models: action.payload.models,
        loaded: true,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_TRIMS: {
      return {
        ...state,
        loading: true
      };
    }
    case VehicleActionTypes.LOAD_TRIMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case VehicleActionTypes.LOAD_TRIMS_SUCCESS: {
      return {
        ...state,
        trims: action.payload.trims,
        loaded: true,
        loading: false
      };
    }
  }

  return state;
}

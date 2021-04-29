import { Action } from "@ngrx/store";
// import model/interface from db.json here...

export enum VehicleActionTypes {
  LOAD_YEARS = "[Fitment] Load Years",
  LOAD_YEARS_FAIL = "[Fitment] Load Years Fail",
  LOAD_YEARS_SUCCESS = "[Fitment] Load Years Success",
  LOAD_MAKES = "[Fitment] Load Makes",
  LOAD_MAKES_FAIL = "[Fitment] Load Makes Fail",
  LOAD_MAKES_SUCCESS = "[Fitment] Load Makes Success",
  LOAD_MODELS = "[Fitment] Load Models",
  LOAD_MODELS_FAIL = "[Fitment] Load Models Fail",
  LOAD_MODELS_SUCCESS = "[Fitment] Load Models Success",
  LOAD_TRIMS = "[Fitment] Load Trims",
  LOAD_TRIMS_FAIL = "[Fitment] Load Trims Fail",
  LOAD_TRIMS_SUCCESS = "[Fitment] Load Trims Success"
}

// Action creators
export class LoadYears implements Action {
  readonly type = VehicleActionTypes.LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = VehicleActionTypes.LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = VehicleActionTypes.LOAD_YEARS_SUCCESS;
  constructor(
    public payload: { years: string[]; loaded: boolean; loading: boolean }
  ) {} // Replace 'any' with interface
}

// Action creators
export class LoadMakes implements Action {
  readonly type = VehicleActionTypes.LOAD_MAKES;
  constructor(readonly payload: { year: string }) {}
}
export class LoadMakesFail implements Action {
  readonly type = VehicleActionTypes.LOAD_MAKES_FAIL;
  constructor(public payload: any) {}
}
export class LoadMakesSuccess implements Action {
  readonly type = VehicleActionTypes.LOAD_MAKES_SUCCESS;
  constructor(
    public payload: { makes: string[]; loaded: boolean; loading: boolean }
  ) {} // Replace 'any' with interface
}

// Action creators
export class LoadModels implements Action {
  readonly type = VehicleActionTypes.LOAD_MODELS;
  constructor(readonly payload: { make: string }) {}
}
export class LoadModelsFail implements Action {
  readonly type = VehicleActionTypes.LOAD_MODELS_FAIL;
  constructor(public payload: any) {}
}
export class LoadModelsSuccess implements Action {
  readonly type = VehicleActionTypes.LOAD_MODELS_SUCCESS;
  constructor(
    public payload: { models: string[]; loaded: boolean; loading: boolean }
  ) {} // Replace 'any' with interface
}

// Action creators
export class LoadTrims implements Action {
  readonly type = VehicleActionTypes.LOAD_TRIMS;
  constructor(readonly payload: { model: string }) {}
}
export class LoadTrimsFail implements Action {
  readonly type = VehicleActionTypes.LOAD_TRIMS_FAIL;
  constructor(public payload: any) {}
}
export class LoadTrimsSuccess implements Action {
  readonly type = VehicleActionTypes.LOAD_TRIMS_SUCCESS;
  constructor(
    public payload: { trims: string[]; loaded: boolean; loading: boolean }
  ) {} // Replace 'any' with interface
}

// Action types
export type VehicleAction =
  | LoadYears
  | LoadYearsFail
  | LoadYearsSuccess
  | LoadMakes
  | LoadMakesFail
  | LoadMakesSuccess
  | LoadModels
  | LoadModelsFail
  | LoadModelsSuccess
  | LoadTrims
  | LoadTrimsFail
  | LoadTrimsSuccess;

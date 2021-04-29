import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, delay, map, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import {
  LoadYearsFail,
  LoadYearsSuccess,
  LoadMakesFail,
  LoadMakesSuccess,
  LoadModelsFail,
  LoadModelsSuccess,
  LoadTrimsFail,
  LoadTrimsSuccess,
  VehicleActionTypes
} from "../actions/vehicle.action";

@Injectable()
export class VehicleEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadYears = this.actions$.pipe(
    ofType(VehicleActionTypes.LOAD_YEARS),
    switchMap(action => {
      return this.http
        .get("https://6080be3273292b0017cdbf2a.mockapi.io/years")
        .pipe(
          map((response: any) => {
            return new LoadYearsSuccess({
              years: response.year,
              loaded: true,
              loading: false
            });
          }),
          catchError(error => of(new LoadYearsFail(error)))
        );
    })
  );

  @Effect()
  loadMakes = this.actions$.pipe(
    ofType(VehicleActionTypes.LOAD_MAKES),
    switchMap(action => {
      return this.http
        .get("https://6080be3273292b0017cdbf2a.mockapi.io/makes")
        .pipe(
          map((response: any) => {
            return new LoadMakesSuccess({
              makes: response.make,
              loaded: true,
              loading: false
            });
          }),
          catchError(error => of(new LoadMakesFail(error)))
        );
    })
  );

  @Effect()
  loadModels = this.actions$.pipe(
    ofType(VehicleActionTypes.LOAD_MODELS),
    switchMap(action => {
      return this.http
        .get("https://6080be3273292b0017cdbf2a.mockapi.io/models")
        .pipe(
          map((response: any) => {
            return new LoadModelsSuccess({
              models: response.model,
              loaded: true,
              loading: false
            });
          }),
          catchError(error => of(new LoadModelsFail(error)))
        );
    })
  );

  @Effect()
  loadTrims = this.actions$.pipe(
    ofType(VehicleActionTypes.LOAD_TRIMS),
    switchMap(action => {
      return this.http
        .get("https://6080be3273292b0017cdbf2a.mockapi.io/trim")
        .pipe(
          map((response: any) => {
            return new LoadTrimsSuccess({
              trims: response.trim,
              loaded: true,
              loading: false
            });
          }),
          catchError(error => of(new LoadTrimsFail(error)))
        );
    })
  );
}

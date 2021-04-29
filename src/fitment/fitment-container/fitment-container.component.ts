import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { FitmentState } from "../store";
import {
  LoadYears,
  LoadMakes,
  LoadModels,
  LoadTrims
} from "../store/actions/vehicle.action";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  fitment$: Observable<FitmentState>;
  getTireForm: FormGroup;
  years$: string[];
  makes$: string[];
  models$: string[];
  trims$: string[];

  // import the store into the constructor
  constructor(private store: Store<FitmentState>) {}

  ngOnInit() {
    this.store
      .select(state => state)
      .subscribe(data => {
        this.years$ = data.vehicle.years;
        this.makes$ = data.vehicle.makes;
        this.models$ = data.vehicle.models;
        this.trims$ = data.vehicle.trims;
      });

    this.getTireForm = new FormGroup({
      years: new FormControl(""),
      makes: new FormControl(""),
      models: new FormControl(""),
      trims: new FormControl("")
    });
  }

  log(val: any) {
    console.log(val);
  }

  onChangeYear(e) {
    console.log("On Change Year");
    if (e.target.value) {
      console.log(`Year : ${e.target.value}`);
      const action = new LoadMakes({ year: e.target.value });
      this.store.dispatch(action);
    }
    this.makes$ = [];
    this.models$ = [];
    this.trims$ = [];
  }

  onChangeMake(e) {
    console.log("On Change Make");
    if (e.target.value) {
      console.log(`Make : ${e.target.value}`);
      const action = new LoadModels({ make: e.target.value });
      this.store.dispatch(action);
    }
    this.models$ = [];
    this.trims$ = [];
  }

  onChangeModel(e) {
    console.log("On Change Model");
    if (e.target.value) {
      console.log(`Model : ${e.target.value}`);
      const action = new LoadTrims({ model: e.target.value });
      this.store.dispatch(action);
    }
    this.trims$ = [];
  }

  onChangeTrim(e) {
    console.log("On Change Trim");
    if (e.target.value) {
      console.log(`Trim : ${e.target.value}`);
    }
  }

  getYears() {
    console.log("getYears");
    const action = new LoadYears();
    // dispatch an action to get array of years
    this.store.dispatch(action);
    this.makes$ = [];
    this.models$ = [];
    this.trims$ = [];
  }
  // Year
  // https://6080be3273292b0017cdbf2a.mockapi.io/years

  // Make with year (2021)
  //https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}

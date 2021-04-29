import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { FitmentModule } from "../fitment/fitment.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { VehicleEffects } from "../fitment/store/effects/vehicle.effects";
import { reducers } from "../fitment/store/reducers";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FitmentModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    EffectsModule.forRoot([VehicleEffects])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

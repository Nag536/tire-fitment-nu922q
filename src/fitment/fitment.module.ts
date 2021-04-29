import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store'

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('fitment', reducers),
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent]
})
export class FitmentModule { }
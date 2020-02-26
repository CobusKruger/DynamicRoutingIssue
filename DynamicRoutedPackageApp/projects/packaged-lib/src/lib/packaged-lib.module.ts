import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackagedLibComponent } from './packaged-lib.component';

@NgModule({
  declarations: [PackagedLibComponent],
  imports: [
    RouterModule.forChild([{path: '', component: PackagedLibComponent}])
  ],
  exports: [PackagedLibComponent]
})
export class PackagedLibModule { }

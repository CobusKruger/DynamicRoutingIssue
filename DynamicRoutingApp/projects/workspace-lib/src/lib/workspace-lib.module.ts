import { NgModule } from '@angular/core';
import { WorkspaceLibComponent } from './workspace-lib.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WorkspaceLibComponent],
  imports: [
    RouterModule.forChild([{path: '', component: WorkspaceLibComponent}])
  ],
  exports: [WorkspaceLibComponent]
})
export class WorkspaceLibModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'workspace',
  loadChildren: () => import('../../projects/workspace-lib/src/public-api').then(m => m.WorkspaceLibModule),
}, {
  path: 'packaged',
  loadChildren: () => import('../../projects/workspace-lib/src/public-api').then(m => m.WorkspaceLibModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

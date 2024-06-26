import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';


const routes: Routes = [
  { path: '', component: IndexComponent}
    // { path: '', loadChildren: initial, canActivate: [ AuthGuard ]},
    // { path: '**', redirectTo: '', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
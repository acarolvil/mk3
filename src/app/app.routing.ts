import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './parts/index/index.module';

const index = () => import('./parts/index/index.module').then(res => res.IndexModule);


const routes: Routes = [
    { path: '', loadChildren: index },
    // { path: '', loadChildren: initial, canActivate: [ AuthGuard ]},
    // { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
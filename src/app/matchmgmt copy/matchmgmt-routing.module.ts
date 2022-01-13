import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchmgtListComponent } from './matchmgt-list/matchmgt-list.component';

const routes: Routes = [
  {
    path: '',
    component: MatchmgtListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchmgmtRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'summary', component: SummaryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

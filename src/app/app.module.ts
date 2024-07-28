

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { budgetReducer } from './state/budget.reducer';

import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { FirstComponent } from './first/first.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { CreditComponent } from './credit/credit.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'summary', component: SummaryPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    BudgetListComponent,
    FirstComponent,
    SummaryPageComponent,
    CreditComponent,
    CreditListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // Add RouterModule with routes
    StoreModule.forRoot({ budget: budgetReducer }) // Set up NgRx store with the budget reducer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

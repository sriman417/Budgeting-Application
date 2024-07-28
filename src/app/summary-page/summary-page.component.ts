

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BudgetState } from '../state/app.state';
import { selectTotalExpenses, selectTotalCredits, selectSavings } from '../state/budget.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  totalExpenses = 0;
  totalCredit = 0;
  savings = 0;

  constructor(private store: Store<{ budget: BudgetState }>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectTotalExpenses).subscribe(total => this.totalExpenses = total);
    this.store.select(selectTotalCredits).subscribe(total => this.totalCredit = total);
    this.store.select(selectSavings).subscribe(savings => this.savings = savings);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

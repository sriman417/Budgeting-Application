import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  
import { BudgetState } from '../state/app.state';
import { BudgetItem } from '../models/budget-item.model';
import { CreditItem } from '../models/credit-item.model';
import {
  addBudgetItem,
  addCreditItem,
  updateTotalExpenses,
  updateTotalCredit,
  updateSavings
} from '../state/budget.actions';
import {
  selectBudgetItems,
  selectCreditItems,
  selectTotalExpenses,
  selectTotalCredits,
  selectSavings
} from '../state/budget.selectors';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  budgetItems$: Observable<BudgetItem[]>;
  creditItems$: Observable<CreditItem[]>;

  totalExpenses$: Observable<number>;
  totalCredits$: Observable<number>;
  savings$: Observable<number>;

  constructor(private store: Store<{ budget: BudgetState }>, private router: Router) {
  
    this.budgetItems$ = this.store.select(selectBudgetItems).pipe(
      map((items: BudgetItem[] | null) => items || []) 
    );

    this.creditItems$ = this.store.select(selectCreditItems).pipe(
      map((items: CreditItem[] | null) => items || []) 
    );

    this.totalExpenses$ = this.store.select(selectTotalExpenses).pipe(
      map(total => total || 0) 
    );

    this.totalCredits$ = this.store.select(selectTotalCredits).pipe(
      map(total => total || 0)
    );

    this.savings$ = this.store.select(selectSavings).pipe(
      map(savings => savings || 0) 
    );
  }

  ngOnInit(): void {
    this.budgetItems$.subscribe(() => {
      this.store.dispatch(updateTotalExpenses());
      this.store.dispatch(updateSavings());
    });

    this.creditItems$.subscribe(() => {
      this.store.dispatch(updateTotalCredit());
      this.store.dispatch(updateSavings());
    });
  }

  addExpense(item: BudgetItem): void {
    this.store.dispatch(addBudgetItem({ item }));
  }

  addCredit(item: CreditItem): void {
    this.store.dispatch(addCreditItem({ item }));
  }

  showResults(): void {
    this.totalExpenses$.subscribe(totalExpenses => {
      this.totalCredits$.subscribe(totalCredits => {
        this.savings$.subscribe(savings => {
          this.router.navigate(['/summary'], {
            state: {
              totalExpenses,
              totalCredits,
              savings
            }
          });
        });
      });
    });
  }
}

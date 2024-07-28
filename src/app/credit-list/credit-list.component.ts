import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreditItem } from '../models/credit-item.model';
import { removeCreditItem } from '../state/budget.actions';
import { BudgetState } from '../state/app.state';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent {
  @Input() creditItems: CreditItem[] | null = []; 

  constructor(private store: Store<BudgetState>) {}

  removeCredit(id: string) {
    this.store.dispatch(removeCreditItem({ id }));
  }
}

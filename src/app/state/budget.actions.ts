import { createAction, props } from '@ngrx/store';
import { BudgetItem } from '../models/budget-item.model';
import { CreditItem } from '../models/credit-item.model';

export const addBudgetItem = createAction(
  '[Budget] Add Budget Item',
  props<{ item: BudgetItem }>()
);

export const addCreditItem = createAction(
  '[Budget] Add Credit Item',
  props<{ item: CreditItem }>()
);

export const removeCreditItem = createAction(
  '[Budget] Remove Credit Item',
  props<{ id: string }>()
);

export const updateTotalExpenses = createAction('[Budget] Update Total Expenses');
export const updateTotalCredit = createAction('[Budget] Update Total Credit');
export const updateSavings = createAction('[Budget] Update Savings');

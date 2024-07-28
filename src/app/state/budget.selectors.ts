import { createSelector } from '@ngrx/store';
import { BudgetState } from './app.state';

export const selectBudget = (state: { budget: BudgetState }) => state.budget;

export const selectBudgetItems = createSelector(
  selectBudget,
  (state: BudgetState) => state.budgetItems
);

export const selectCreditItems = createSelector(
  selectBudget,
  (state: BudgetState) => state.creditItems
);

export const selectTotalExpenses = createSelector(
  selectBudget,
  (state: BudgetState) => state.totalExpenses
);

export const selectTotalCredits = createSelector( 
  selectBudget,
  (state: BudgetState) => state.totalCredits
);

export const selectSavings = createSelector(
  selectBudget,
  (state: BudgetState) => state.savings
);

import { createReducer, on, Action } from '@ngrx/store';
import {
  addBudgetItem,
  addCreditItem,
  removeCreditItem, 
  updateTotalExpenses,
  updateTotalCredit,
  updateSavings
} from './budget.actions';
import { BudgetState } from './app.state';

export const initialState: BudgetState = {
  budgetItems: [],
  creditItems: [],
  totalExpenses: 0,
  totalCredits: 0,
  savings: 0,
};

const _budgetReducer = createReducer(
  initialState,
  on(addBudgetItem, (state, { item }) => ({
    ...state,
    budgetItems: [...state.budgetItems, item],
  })),
  on(addCreditItem, (state, { item }) => ({
    ...state,
    creditItems: [...state.creditItems, item],
  })),
  on(removeCreditItem, (state, { id }) => ({
    ...state,
    creditItems: state.creditItems.filter(item => item.id !== id),
  })),
  on(updateTotalExpenses, (state) => ({
    ...state,
    totalExpenses: state.budgetItems.reduce((total, item) => total + item.amount, 0),
  })),
  on(updateTotalCredit, (state) => ({
    ...state,
    totalCredits: state.creditItems.reduce((total, item) => total + item.amount, 0),
  })),
  on(updateSavings, (state) => ({
    ...state,
    savings: state.totalCredits - state.totalExpenses,
  }))
);

export function budgetReducer(state: BudgetState | undefined, action: Action) {
  return _budgetReducer(state, action);
}

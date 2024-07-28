

import { BudgetItem } from '../models/budget-item.model';
import { CreditItem } from '../models/credit-item.model';

export interface BudgetState {
  budgetItems: BudgetItem[];
  creditItems: CreditItem[];
  totalExpenses: number;
  totalCredits: number;
  savings: number;
}

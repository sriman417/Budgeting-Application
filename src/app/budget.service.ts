import { Injectable } from '@angular/core';
import { BudgetItem } from './models/budget-item.model'; 
import { CreditItem } from './models/credit-item.model'; 

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private budgetItems: BudgetItem[] = [];
  private creditItems: CreditItem[] = [];

  constructor() {}

  
  getBudgetItems(): BudgetItem[] {
    return this.budgetItems;
  }

  addBudgetItem(item: BudgetItem): void {
    this.budgetItems.push(item);
  }

  
  removeBudgetItem(id: string): void {
    this.budgetItems = this.budgetItems.filter(item => item.id !== id);
  }

  
  getCreditItems(): CreditItem[] {
    return this.creditItems;
  }

  
  addCreditItem(item: CreditItem): void {
    this.creditItems.push(item);
  }

  removeCreditItem(id: string): void {
    this.creditItems = this.creditItems.filter(item => item.id !== id);
  }
}


export { BudgetItem, CreditItem };

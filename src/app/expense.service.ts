import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Expense {
  id: number;
  description: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];
  private totalAmountSubject = new BehaviorSubject<number>(0);

  totalAmount$ = this.totalAmountSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage();
    this.updateTotalAmount();
  }

  private saveToLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem('expenses');
    if (data) {
      this.expenses = JSON.parse(data);
    }
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
    this.saveToLocalStorage();
    this.updateTotalAmount();
  }

  removeExpense(id: number) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
    this.saveToLocalStorage();
    this.updateTotalAmount();
  }

  private updateTotalAmount() {
    const total = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    this.totalAmountSubject.next(total);
  }
}

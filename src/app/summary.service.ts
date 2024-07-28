import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private totalExpenses = 0;
  private totalCredit = 0;
  private savings = 0;

  setSummaryData(totalExpenses: number, totalCredit: number, savings: number) {
    this.totalExpenses = totalExpenses;
    this.totalCredit = totalCredit;
    this.savings = savings;
  }

  getSummaryData() {
    return {
      totalExpenses: this.totalExpenses,
      totalCredit: this.totalCredit,
      savings: this.savings
    };
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter<BudgetItem>();

  description = '';
  amount = 0;
  recurrenceType = '';
  dateTime = '';
  
  private idCounter = 0; 

  constructor() {}

  addExpense() {
    const newItem: BudgetItem = {
      id: this.idCounter.toString(), 
      description: this.description,
      amount: this.amount,
      recurrenceType: this.recurrenceType,
      dateTime: this.dateTime
    };

    this.expenseAdded.emit(newItem);
    this.description = '';
    this.amount = 0;
    this.recurrenceType = '';
    this.dateTime = '';
  }
}

// src/app/budget-list/budget-list.component.ts
import { Component, Input } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model'; // Adjust path as needed

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent {
  @Input() budgetItems: BudgetItem[] | null= []; 
  budgetService: any;

  removeBudgetItem(id: string): void {
    this.budgetService.removeItem(id);
    this.budgetItems = this.budgetService.getItems();
  }
}

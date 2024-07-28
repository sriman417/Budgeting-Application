import { Component, EventEmitter, Output } from '@angular/core';
import { CreditItem } from '../models/credit-item.model';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  @Output() creditAdded = new EventEmitter<CreditItem>();
  amount: number = 0;
  recurrenceType: string = '';
  private idCounter = 0;
  addCredit() {
    const newCredit: CreditItem = {
      id: this.generateId(), 
      amount: this.amount,
      recurrenceType: this.recurrenceType
    };
    this.creditAdded.emit(newCredit);
    this.amount = 0;
    this.recurrenceType = '';
  }
  private generateId(): string {
    return (this.idCounter++).toString();
  }
}

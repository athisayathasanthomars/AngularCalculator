import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  currentInput: string = '';
  previousInput: string = '';
  operator: string = '';
  result: string = '0';
  
  NumberClick(value: string) {
    if (value === '.' && this.currentInput.includes('.')) {
      return; // Prevent multiple decimal points
    }

    this.currentInput += value;
    this.result = this.currentInput;
  }

  OperatorClick(op: string) {
    if (this.currentInput === '') return;

    if (this.previousInput !== '') {
      this.operator = op;
      this.findResult();
    }

    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  findResult() {
    console.log(this.operator);
    if (this.previousInput === '' || this.currentInput === '' || this.operator === '') return;
    
    let num1 = parseFloat(this.previousInput);
    let num2 = parseFloat(this.currentInput);
    let calValue = 0;

    switch (this.operator) {
      case '+':
        calValue = num1 + num2;
        break;
      case '-':
        calValue = num1 - num2;
        break;
      case '*':
        calValue = num1 * num2;
        break;
      case '/':
        calValue = num2 !== 0 ? num1 / num2 : NaN; // Prevent division by zero
        break;
      case '%':
        calValue = num1 % num2;
        break;
    }

    this.result = calValue.toString();
    this.previousInput = this.result;
    this.currentInput = '';
    this.operator = '';
    console.log(this.previousInput);
  }

  clearCalculator() {
    this.currentInput = '';
    this.previousInput = '';
    this.operator = '';
    this.result = '0';
  }

  Backspace() {
    this.currentInput = this.currentInput.slice(0, -1);
    this.result = this.currentInput || '0';
  }
}

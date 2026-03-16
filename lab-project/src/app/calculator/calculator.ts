import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log("Chamando o método para calcular o resultado!");
    console.log("Numero1: " + this.numero1);
    console.log("Numero2: " + this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }
}

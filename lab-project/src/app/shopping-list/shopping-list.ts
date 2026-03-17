import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ItemLista } from './itemlista'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
})
export class ShoppingList {

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);

    this.item = '';
    console.table(this.lista);
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
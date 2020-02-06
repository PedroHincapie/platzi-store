import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from './../../product.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: [ './producto.component.css']
})
export class ProductoComponent {
  constructor() {}

  @Input()
  product: Product;

  @Output()
  productoClic: EventEmitter<any> = new EventEmitter();

  addCars() {
    this.productoClic.emit(this.product.id);
  }
}

import { Component, Input } from '@angular/core';
import { Product } from './../../product.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  constructor() {}

  @Input()
  product: Product;
}

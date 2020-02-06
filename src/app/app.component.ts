import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  nombre: string;
  apellido = 'Hincapie';
  items = ['holaaaa', 'mundo'];

  addItem() {
    this.items.push('nuevo elemenyto');
  }

  restarItem(index: number) {
    this.items.splice(index, 1);
  }
}

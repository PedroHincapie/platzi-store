import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [AppComponent, ProductoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

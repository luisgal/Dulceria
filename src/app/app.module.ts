import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ListComponent } from './Components/list/list.component';
import { EditComponent } from './Components/edit/edit.component';
import { InsertComponent } from './Components/insert/insert.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from './Service/producto.service';
import { ApiProductoService } from './Service/api-producto.service';
import { CarritoService } from './Service/carrito.service';
import { CotizacionComponent } from './Components/cotizacion/cotizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    ListComponent,
    EditComponent,
    InsertComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductoService,
    ApiProductoService,
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Producto } from '../Domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  producto: Producto;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Domain/producto';
import { ProductoService } from './producto.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {

  constructor(private httpClient:HttpClient, private productoService: ProductoService) { }

  private urlListar: string = "http://localhost:9001/producto/list";
  private urlGuardar: string = "http://localhost:9001/producto/insert";
  private urlEditar: string = "http://localhost:9001/producto/edit";
  private urlEliminar: string = "http://localhost:9001/producto/delete";

  list(){
    return this.httpClient.get<Producto[]>(this.urlListar);
  }

  insert(producto: Producto){
    return this.httpClient.post<Producto>(this.urlGuardar,producto);
  }
  
  edit(producto: Producto){
    return this.httpClient.put<Producto>(this.urlEditar,producto);
  }

  delete(){
    return this.httpClient.delete<Producto>(this.urlEliminar+"/"+this.productoService.producto.id);
  }
}

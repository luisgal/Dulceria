import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Domain/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private httpClient:HttpClient) {
    this.carrito.productos.shift();
  }

  carrito = {
    cliente: {
      name: "",
      email: ""
    },
    productos: [
      {
        id: 0,
        cantidad: 1
      }
    ]
  };

  private urlCotizar: string = "http://localhost:9010/cotizacion";

  public enviarCotizacion(nombreCliente: string, emailCliente: string){
    this.setCliente(nombreCliente,emailCliente);
    return this.httpClient.post<any>(this.urlCotizar,this.carrito);
  }

  public setCliente(nombre: string, email: string){
    this.carrito.cliente.name = nombre;
    this.carrito.cliente.email = email;
  }

  public addProducto(producto: Producto, cantidadProducto: number){
    const index: number = this.carrito.productos.findIndex(p => p.id == producto.id);
    if(index == -1){
      this.carrito.productos.push({id: producto.id, cantidad: cantidadProducto});
    } else {
      this.carrito.productos[index].cantidad += cantidadProducto;
    }
  }
}
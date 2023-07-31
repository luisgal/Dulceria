import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Domain/producto';
import { ApiProductoService } from 'src/app/Service/api-producto.service';
import { CarritoService } from 'src/app/Service/carrito.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  productos: Producto[];

  constructor(private api: ApiProductoService, private productoService: ProductoService, private carritoService: CarritoService){}

  ngOnInit(): void {
    this.api.list().subscribe(data => {
      this.productos = data;
    });
  }

  updateProducto(id: number){
    this.productoService.producto = this.productos[id];
  }

  addProducto(id: number){
    this.carritoService.addProducto(this.productos[id], 1);
  }

  getCantidadProducto(id: number): number{
    return this.carritoService.carrito.productos.find(p => p.id == this.productos[id].id)?.cantidad ?? 0;
  }
}

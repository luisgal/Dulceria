import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Domain/producto';
import { ApiProductoService } from 'src/app/Service/api-producto.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  producto : Producto;

  constructor(private router: Router, private api: ApiProductoService, private productoService: ProductoService){}

  ngOnInit(){
    if( this.productoService.producto == null){
      alert(" No se indico ningun producto");
      this.router.navigate(['list']);
    } else {
      this.producto = this.productoService.producto;
    }
  }

   delete(){
    if(window.confirm("¿Seguro que deseas eliminar el producto?")){
      this.api.delete().subscribe(data => {
        this.router.navigate(['list']);
      });
    }
   }
}

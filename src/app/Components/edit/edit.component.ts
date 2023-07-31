import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Domain/producto';
import { ApiProductoService } from 'src/app/Service/api-producto.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
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

   edit(){
    this.api.edit(this.producto).subscribe(data => {
      this.router.navigate(['list']);
    });
   }
}

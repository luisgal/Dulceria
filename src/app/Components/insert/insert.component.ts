import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Domain/producto';
import { ApiProductoService } from 'src/app/Service/api-producto.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  constructor(private router: Router, private api:ApiProductoService){}

  producto: Producto = new Producto();

  insert(){
    this.api.insert(this.producto).subscribe(data => {
      this.router.navigate(['list']);
    });
  }
}

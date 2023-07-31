import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/Service/carrito.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent {
  nombre: string;
  email: string;

  constructor(private carritoService: CarritoService, private route: Router){}

  cotizar(){
    this.carritoService.enviarCotizacion(this.nombre,this.email).subscribe(data => {
      console.log("Correo enviado");
      this.carritoService.carrito.productos = [];
      this.route.navigate(["list"]);
    });
  }
}

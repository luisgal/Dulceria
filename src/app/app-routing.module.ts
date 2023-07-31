import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Components/list/list.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { InsertComponent } from './Components/insert/insert.component';
import { EditComponent } from './Components/edit/edit.component';
import { CotizacionComponent } from './Components/cotizacion/cotizacion.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'insert', component: InsertComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'cotizar', component: CotizacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

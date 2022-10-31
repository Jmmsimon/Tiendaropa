import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./vistas/login/login.component";
import {TodoCardComponent} from "./vistas/todo-card/todo-card.component";
import {CanActivateTeam} from "./config/AuthInterceptor";
import { CompraproductoComponent } from "./paginacion/compraproducto/compraproducto.component";
import { MiscomprasComponent } from "./paginacion/miscompras/miscompras.component";
import { ProductoComponent } from "./paginacion/producto/producto.component";
import { PagoComponent } from './paginacion/pago/pago.component';
import { CarritocomprasComponent } from './paginacion/carritocompras/carritocompras.component';


const routes: Routes = [
  { path: '', component: TodoCardComponent },
  { path: 'tasks', component: TodoCardComponent },
  {path: 'login', component: LoginComponent},
  {path: 'miscompras', component: MiscomprasComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'compraproducto', component: CompraproductoComponent},
  {path: 'pago', component: PagoComponent},
  {path: 'carritocompras', component: CarritocomprasComponent}
  // { path: '', component: TodoCardComponent, canActivate: [CanActivateTeam]},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateTeam]
})
export class AppRoutingModule { }

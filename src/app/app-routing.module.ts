import { Component, createPlatform, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./vistas/login/login.component";
import {TodoCardComponent} from "./vistas/todo-card/todo-card.component";
import {CanActivateTeam} from "./config/AuthInterceptor";
import { CompraproductoComponent } from "./paginacion/compraproducto/compraproducto.component";
import { MiscomprasComponent } from "./paginacion/miscompras/miscompras.component";
import { ProductoComponent } from "./paginacion/producto/producto.component";
import { PagoComponent } from './paginacion/pago/pago.component';
import { CarritocomprasComponent } from './paginacion/carritocompras/carritocompras.component';
import { MicuentaComponent } from './paginacion/micuenta/micuenta.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { RopahombreComponent } from './categorias/ropahombre/ropahombre.component';
import { RopamujerComponent } from './categorias/ropamujer/ropamujer.component';
import { RopaninosComponent } from './categorias/ropaninos/ropaninos.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { GestionproductoComponent } from './admin/gestionproducto/gestionproducto.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { PersonalizarComponent } from './componentes/personalizar/personalizar.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { CuentadminComponent } from './admin/cuentadmin/cuentadmin.component';

const routes: Routes = [
  { path: '', component: TodoCardComponent },
  { path: 'tasks', component: TodoCardComponent },
  {path: 'login', component: LoginComponent},
  {path: 'miscompras', component: MiscomprasComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'compraproducto', component: CompraproductoComponent},
  {path: 'pago', component: PagoComponent},
  {path: 'carritocompras', component: CarritocomprasComponent},
  {path: 'micuenta', component: MicuentaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'ropahombre', component: RopahombreComponent},
  {path: 'ropamujer', component: RopamujerComponent},
  {path: 'ropanino', component: RopaninosComponent},
  {path: 'admin', component: InicioComponent},
  {path: 'gestionproducto', component: GestionproductoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'personalizar', component: PersonalizarComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'envios', component: EnviosComponent},
  {path: 'cuentadmin', component: CuentadminComponent},

  // { path: '', component: TodoCardComponent, canActivate: [CanActivateTeam]},


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateTeam]
})
export class AppRoutingModule { }

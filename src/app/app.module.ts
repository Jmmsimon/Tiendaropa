import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TodoCardComponent } from './vistas/todo-card/todo-card.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './vistas/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CompraproductoComponent } from './paginacion/compraproducto/compraproducto.component';
import { ProductoComponent } from './paginacion/producto/producto.component';
import { PagoComponent } from './paginacion/pago/pago.component';
import { CarritocomprasComponent } from './paginacion/carritocompras/carritocompras.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { MicuentaComponent } from './paginacion/micuenta/micuenta.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { RopahombreComponent } from './categorias/ropahombre/ropahombre.component';
import { RopamujerComponent } from './categorias/ropamujer/ropamujer.component';
import { RopaninosComponent} from './categorias/ropaninos/ropaninos.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { GestionproductoComponent } from './admin/gestionproducto/gestionproducto.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReportesComponent } from './admin/reportes/reportes.component';
import { PersonalizarComponent } from './componentes/personalizar/personalizar.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { CuentadminComponent } from './admin/cuentadmin/cuentadmin.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoCardComponent,
    LoginComponent,
    CompraproductoComponent,
    ProductoComponent,
    PagoComponent,
    CarritocomprasComponent,
    NavegadorComponent,
    MicuentaComponent,
    RegistroComponent,
    RopahombreComponent,
    RopamujerComponent,
    RopaninosComponent,
    InicioComponent,
    GestionproductoComponent,
    DashboardComponent,
    ReportesComponent,
    PersonalizarComponent,
    ClientesComponent,
    EnviosComponent,
    CuentadminComponent,
   
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

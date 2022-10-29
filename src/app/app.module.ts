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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoCardComponent,
    LoginComponent,
    CompraproductoComponent,
    ProductoComponent,
    PagoComponent,


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

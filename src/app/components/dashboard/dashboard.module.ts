import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { EditarUsuarioComponent } from './ventanas/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './ventanas/crear-usuario/crear-usuario.component';
import { RemoveUsuarioComponent } from './ventanas/remove-usuario/remove-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { EscenariosComponent } from './escenarios/escenarios.component';
import { EditarComponent } from './escenarios/editar/editar.component';
import { RemoveComponent } from './escenarios/remove/remove.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ListCategoriasComponent } from './list-categorias/list-categorias.component';
import { ListEscenariosComponent } from './list-escenarios/list-escenarios.component';
import { HorariosComponent } from './horarios/horarios.component';
import { BuscarUsuariosComponent } from './horarios/buscar-usuarios/buscar-usuarios.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    EditarUsuarioComponent,
    CrearUsuarioComponent,
    RemoveUsuarioComponent,
    FooterComponent,
    EscenariosComponent,
    EditarComponent,
    RemoveComponent,
    CategoriasComponent,
    PruebaComponent,
    ListCategoriasComponent,
    ListEscenariosComponent,
    HorariosComponent,
    BuscarUsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }

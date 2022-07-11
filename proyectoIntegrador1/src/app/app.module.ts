import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULO DE COMPONENTES DE MATERIAL
import { MaterialModule } from './modulos/material/material.module';

//COMPONENTES
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

//FORMULARIOS
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    TablaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

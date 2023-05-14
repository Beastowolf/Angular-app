import { Component, NgModule } from '@angular/core';
import { CommonModule, PathLocationStrategy } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { Routes,RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

const rutas:Routes=[
    {
      path:'sugerencias',
      component:SugerenciasComponent
    },
    {
      path:'inicio',
      component:InicioComponent
    },

    {
      path:'**',
      redirectTo:'inicio'
    }
  
  ]
 
  


@NgModule({
 
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }

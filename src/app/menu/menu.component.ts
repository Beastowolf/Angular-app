import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  rutas=[
    {
      titulo:'inicio',
      direccion:'/inicio'
    },
    {
      titulo:'sugerencias',
      direccion:'/sugerencias'
    }
    
  ]

}

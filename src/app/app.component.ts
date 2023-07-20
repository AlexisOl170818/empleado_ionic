import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Empleado', url: '/empleado', icon: 'person' },
    { title: 'Area', url: '/area', icon: 'business' },
    { title: 'Turnos', url: '/turno', icon: 'timer' },

    { title: 'Puestos', url: '/puesto', icon: 'briefcase' },
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

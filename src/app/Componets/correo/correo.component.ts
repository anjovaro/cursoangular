import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css'],
})
export class CorreoComponent implements OnInit {
  correo: any;
  constructor() {
    this.correo = {
      titulo: 'Título del Email',
      cuerpo: `Cuerpo del Email, Cuerpo del Email,
        Cuerpo del Email, Cuerpo del Email`,
      emisor: 'correoEmisor@dominio.invent',
      destinatario: 'correoReceptor@dominio.invent',
    };
  }
  ngOnInit(): void {}
}

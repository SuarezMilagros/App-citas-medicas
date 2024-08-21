import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core'; // Corrección aquí
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>(); // Corrección aquí

  constructor() {}

  ngOnInit(): void {}

  agregarCita() {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    // Creamos objeto para enviarselo al padre
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    };
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}

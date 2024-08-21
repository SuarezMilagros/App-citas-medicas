import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-citas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-citas.component.html',
  styleUrl: './list-citas.component.css'
})
export class ListCitasComponent implements OnInit {
@Input() listadoCitas: any;
@Output() deletCita = new EventEmitter<number>();


  constructor() { }
  ngOnInit(): void {
  }

  eliminarCita(index: number){
    this.deletCita.emit(index)

  }

}

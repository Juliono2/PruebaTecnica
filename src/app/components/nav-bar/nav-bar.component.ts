import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  @Input() isSearchDisabled: boolean = false;
  @Output() searchEvent = new EventEmitter<string>();

  //Emite el llamado del metodo
  emitSearch(searchValue: string): void {
    this.searchEvent.emit(searchValue);
  }

  //Metodos de escucha
  viewSummary() { 
    console.log('Mostrando resumen de compras...');
  }

  userProfile() {
    console.log('Accediendo al perfil de usuario...');
  }
}
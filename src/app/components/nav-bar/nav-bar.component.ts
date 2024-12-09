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

  emitSearch(searchValue: string): void {
    this.searchEvent.emit(searchValue);
  }

  viewSummary() {
    console.log('Mostrando resumen de compras...');
  }

  userProfile() {
    console.log('Accediendo al perfil de usuario...');
  }
}
import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  
  @Input() disabled: boolean = false;
  @Output() search = new EventEmitter<string>();
  searchQuery: string = ''; 

  //Emite el llamado del metodo
  onSearchChange(): void {
    this.search.emit(this.searchQuery);
  }
}

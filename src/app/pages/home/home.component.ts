import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  games: Game[] = [];
  constructor(private service: ApiServiceService){}

  ngOnInit(): void {
    this.getGames('');
  }

  //Método que trae los juegos por el nombre
  getGames(fetchGame: string) {
    this.service.getGames(fetchGame).subscribe(data => {
      this.games = data;
    })
  }

  //Realiza la busqueda
  search(fetchGame: string){
    this.getGames(fetchGame);
  }
}

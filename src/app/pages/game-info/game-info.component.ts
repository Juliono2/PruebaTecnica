import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { GameInfo } from '../../models/gameInfo';

@Component({
  selector: 'app-game-info',
  standalone: false,
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {

  isSearchDisabled = true;
  idGame: number | any;
  game?: GameInfo;
  
  constructor(private service: ApiServiceService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.idGame = this.activateRoute.snapshot.paramMap.get('id');
    this.getGame(); 
  }

  //Traer el juego seleccionado
  getGame() {
    this.service.getGame(this.idGame).subscribe(data => {
      this.game = data;
    })
  }

  // Volver al home
  return(){
    this.router.navigate(['/']);
  }
}

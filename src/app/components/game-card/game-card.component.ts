import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() game!: any;

  constructor(private router: Router){}

  seeMore(){
    this.router.navigate(['/game/', this.game.gameID]);
  }
}

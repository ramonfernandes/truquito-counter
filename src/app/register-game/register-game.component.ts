import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from '../model/gamemodel';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register-game',
  templateUrl: './register-game.component.html',
  styleUrls: ['./register-game.component.scss'],
})
export class RegisterGameComponent implements OnInit {
  game: GameModel;
  service: ServiceService;

  constructor(service: ServiceService, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
    this.game = {
      _id: null,
      gameId: '',
      player: {
        name: '',
        score: 0,
      },
      oponent: {
        name: '',
        score: 0,
      },
    };
  }

  public save() {
    this.service.post(this.game).subscribe(response => {
      this.router.navigateByUrl(`/game/${this.game.gameId}`);
    });
  }
}

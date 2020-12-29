import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModel } from '../model/gamemodel';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  gameModel: GameModel;
  service: ServiceService;

  constructor(service: ServiceService, private router: ActivatedRoute) {
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    this.gameModel = this.placeholder()
    this.service
      .getGame(this.getGameId())
      .subscribe((games: GameModel[]) => {
        this.gameModel = games[0];
      });
  }

  private getGameId(): string {
    let temp;
    this.router.paramMap.subscribe((map) => {
      temp = map.get("gameId");
    });
    return temp;
  }

  public sumPlayerOne(): void {
    if (this.gameModel.player.score < 30) this.gameModel.player.score++;
  }

  public sumPlayerTwo(): void {
    if (this.gameModel.oponent.score < 30) this.gameModel.oponent.score++;
  }

  public subPlayerOne(): void {
    if (this.gameModel.player.score > 0) this.gameModel.player.score--;
  }

  public subPlayerTwo(): void {
    if (this.gameModel.oponent.score > 0) this.gameModel.oponent.score--;
  }

  public reset(): void {
    this.gameModel.player.score = 0;
    this.gameModel.oponent.score = 0;
  }

  private placeholder() {
    return {
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
}

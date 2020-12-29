import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  playerOne = 0;
  playerTwo = 0;
  playerOneName = 'Nós';
  playerTwoName = 'Eles';

  constructor() {}

  ngOnInit(): void {}

  public sumPlayerOne(): void {
    if (this.playerOne < 30) this.playerOne++;
  }

  public sumPlayerTwo(): void {
    if (this.playerTwo < 30) this.playerTwo++;
  }

  public subPlayerOne(): void {
    if (this.playerOne > 0) this.playerOne--;
  }

  public subPlayerTwo(): void {
    if (this.playerTwo > 0) this.playerTwo--;
  }

  public reset(): void {
    this.playerOne = 0;
    this.playerTwo = 0;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  playerOne = 0;
  playerTwo = 0;
  playerOneName = "Nós";
  playerTwoName = "Eles";

  constructor() {
  }

  ngOnInit(): void {
  }

  public sumPlayerOne(): void {
    this.playerOne++;
  }

  public sumPlayerTwo(): void {
    this.playerTwo++;
  }

  public subPlayerOne(): void {
    this.playerOne--;
  }

  public subPlayerTwo(): void {
    this.playerTwo--;
  }

  public reset(): void {
    this.playerOne = 0;
    this.playerTwo = 0;
  }
}


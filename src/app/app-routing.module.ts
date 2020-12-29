import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { RegisterGameComponent } from './register-game/register-game.component';


const routes: Routes = [
  { path: 'game', component: RegisterGameComponent },
  { path: 'game/:gameId', component: CounterComponent },
  { path: '*', component: RegisterGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

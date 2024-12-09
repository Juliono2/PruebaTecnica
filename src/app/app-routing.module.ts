import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';

// Definicion de rutas 
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'game/:id', component: GameInfoComponent},
  {path:'', pathMatch:'full', redirectTo:'home'}, 
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

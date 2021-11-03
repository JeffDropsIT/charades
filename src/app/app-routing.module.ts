import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {GameRulesComponent} from './pages/game-rules/game-rules.component';
import {PlayComponent} from './pages/play/play.component';
import {EndComponent} from './pages/end/end.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'rules',
    component: GameRulesComponent
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: 'end',
    component: EndComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

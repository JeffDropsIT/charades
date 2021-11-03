import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {WordCardComponent} from './word-card/word-card.component';
import {HeaderComponent} from './header/header.component';
import {GameRulesComponent} from './pages/game-rules/game-rules.component';
import {EndComponent} from './pages/end/end.component';
import {PlayComponent} from './pages/play/play.component';
import {CounterComponent} from './counter/counter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WordCardComponent,
    HeaderComponent,
    GameRulesComponent,
    EndComponent,
    PlayComponent,
    CounterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

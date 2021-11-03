import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss']
})
export class GameRulesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  play(): void {
    this.router.navigate(['play']);
  }
}

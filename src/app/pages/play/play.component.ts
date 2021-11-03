import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public playDuration = 60000;
  private playStarted = true;
  private timer: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.redirectToHome();
  }

  counterFinished(event: Event): void {
    if (event) {
      this.playStarted = false;
      this.redirectToHome();
    }
  }

  redirectToHome(): void {
    console.log('starting count');
    this.timer = setInterval(() => {
      if (this.playStarted) {
        this.router.navigate(['end']);
        this.playStarted = false;
        this.timer = null;
        console.log('redirecting');
      }
      console.log('counting...');
    }, this.playDuration);
  }

}

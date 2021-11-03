import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  @Input() playDuration = 120000;
  @Output() counterFinished = new EventEmitter();

  private subscription: Subscription = new Subscription();

  milliSecondsInASecond = 1000;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  timeDifference: any;
  secondsToDday: any;
  minutesToDday: any;
  totalTime!: number;

  ngOnInit(): void {
    this.totalTime = this.playDuration;
    this.subscription = interval(1000)
      .subscribe(x => {
        this.playDuration = this.playDuration - 1000;
        this.playDuration = this.getTimeDifference(this.playDuration);
      });
  }

  private getTimeDifference(duration: number): number {
    if (duration < 1) {
      this.counterFinished.emit(true);
    }
    this.timeDifference = duration;
    this.allocateTimeUnits(this.timeDifference);
    return duration;
  }

  private allocateTimeUnits(timeDifference: any): void {
    this.secondsToDday = Math.floor((timeDifference) /
      (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) /
      (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

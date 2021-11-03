import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  message = 'Times Up!';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const msg = this.route.snapshot.paramMap.get('message');
    if (msg) {
      this.message = msg;
    }
  }

}

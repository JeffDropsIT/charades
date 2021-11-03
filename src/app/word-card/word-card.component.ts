import {Component, Injector, OnInit} from '@angular/core';
import {fade} from './animation';
import images from '../../assets/db/db.json';
import {Router} from '@angular/router';

interface WordImage {
  id: number;
  description?: string;
  src: string;
  href?: string;
}


@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
  animations: fade
})
export class WordCardComponent implements OnInit {

  name = 'Angular 5';
  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;
  image!: WordImage;
  wordImages: WordImage[] = [];
  loadedImagesIds: number [] = [];
  imagesSize = 0;

  private router: Router;

  constructor(private injector: Injector) {
    this.router = injector.get(Router);
  }

  ngOnInit(): void {
    this.loadedImagesIds = [];
    this.wordImages = images;
    this.image = this.drawRandomImage();
    this.imagesSize = images.length;
  }

  onClick(): void {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg(): void {
    if (this.choice === 1) {
      this.image = this.drawRandomImage();
      this.choice = 2;
    } else {
      this.image = this.drawRandomImage();
      this.choice = 1;
    }
  }

  drawRandomImage(): WordImage {
    if (this.loadedImagesIds.length === this.imagesSize && this.imagesSize !== 0) {
      this.loadedImagesIds = [];
      this.router.navigate(['end', {message: 'No Images Left'}]);
    }
    const index = Math.floor((Math.random() * this.imagesSize - 1) + 1);
    if (!this.loadedImagesIds.includes(index)) {
      this.loadedImagesIds.push(index);
      return this.wordImages[index];
    }
    return this.drawRandomImage();
  }

  onDone($event: any): void {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState(): void {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

}

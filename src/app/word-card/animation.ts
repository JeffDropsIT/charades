import {animate, state, style, transition, trigger} from '@angular/animations';

export const fade = [
  trigger('fade', [
    state('in', style({opacity: '1'})),
    state('out', style({opacity: '0'})),
    transition('* <=> *', [
      animate(500)
    ]),
  ]),
];

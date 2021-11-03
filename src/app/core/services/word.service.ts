import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface WordImage {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private images: WordImage[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public loadWordImages(): Observable<WordImage[]> {
    return this.httpClient.get<WordImage[]>('assets/db/db.json');
  }
}


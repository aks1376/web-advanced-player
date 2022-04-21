import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoFile: Subject<File> = new Subject<File>();

  constructor() { }
}

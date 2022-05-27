import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubtitleModel } from '../models/subtitle-model';
import { VideoDetailsModel } from '../models/video-details-model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoFile: Subject<File> = new Subject<File>();
  videoDetails: Subject<VideoDetailsModel> = new Subject<VideoDetailsModel>();

  constructor() { }
}

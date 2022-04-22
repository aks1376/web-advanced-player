import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SubtitleFileModel } from '../models/subtitle-file-model';
import { VideoDetailsModel } from '../models/video-details-model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoFile: Subject<File> = new Subject<File>();
  videoDetails: Subject<VideoDetailsModel> = new Subject<VideoDetailsModel>();
  subtitleFile: Subject<SubtitleFileModel> = new Subject<SubtitleFileModel>();

  constructor() { }
}

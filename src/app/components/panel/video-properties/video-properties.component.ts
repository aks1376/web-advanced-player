import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-properties',
  templateUrl: './video-properties.component.html',
  styleUrls: ['./video-properties.component.scss']
})
export class VideoPropertiesComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  onSelectVideo(event: Event) {
    if ((event.target as HTMLInputElement).files && (event.target as HTMLInputElement)?.files?.length) {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        const filesArray = Array.from(files);
        const file: File = filesArray[0];

        this.videoService.videoFile.next(file);
      }
    }
  }

}

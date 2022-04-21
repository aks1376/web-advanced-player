import { Component, OnInit } from '@angular/core';
import { VideoDetailsModel } from 'src/app/models/video-details-model';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoDetails: VideoDetailsModel = { name: '', size: 0, height: 0, width: 0, duration: 0 };

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.onLoadVideoDetails();
  }

  onLoadVideoDetails() {
    this.videoService.videoDetails.subscribe({
      next: (details) => {
        this.videoDetails = details;
      }
    })
  }

}

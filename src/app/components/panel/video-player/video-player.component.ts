import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoDetailsModel } from 'src/app/models/video-details-model';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayerRef', { static: true }) videoRef: ElementRef<HTMLVideoElement>;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.onAddVideo();
  }

  onAddVideo() {
    this.videoService.videoFile.subscribe({
      next: (video) => {
        this.onPlayVideo(video);
      }
    });
  }

  onPlayVideo(video: File) {
    this.videoRef.nativeElement.src = URL.createObjectURL(video);
    this.videoRef.nativeElement.play();

    // wait until video load on screen
    setTimeout(() => {
      this.loadVideoDetails(video);
    }, 200);
  }

  loadVideoDetails(videoFile: File) {
    const details: VideoDetailsModel = {
      name: videoFile.name,
      size: videoFile.size,
      width: this.videoRef.nativeElement.videoWidth,
      height: this.videoRef.nativeElement.videoHeight,
      duration: this.videoRef.nativeElement.duration
    };
    this.videoService.videoDetails.next(details);
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
      },
      error: () => { }
    });
  }

  onPlayVideo(video: File) {
    this.videoRef.nativeElement.src = URL.createObjectURL(video);
    this.videoRef.nativeElement.play();
  }

}

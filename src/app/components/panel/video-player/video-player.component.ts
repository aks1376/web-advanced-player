import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SubtitleModel } from 'src/app/models/subtitle-model';
import { VideoDetailsModel } from 'src/app/models/video-details-model';
import { SubtitleService } from 'src/app/services/subtitle.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('videoPlayerRef', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;

  subtitles: SubtitleModel[] = [];

  constructor(
    private videoService: VideoService,
    private subtitleService: SubtitleService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.onAddVideo();
    this.onAddOrChangeSubtitle();
    this.onSubtitleStatusChange();
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

  onAddOrChangeSubtitle() {
    this.subtitleService.addNewSubtitle.subscribe({
      next: (subtitle) => {

        const track = this.renderer.createElement('track');
        this.renderer.setAttribute(track, 'label', subtitle.label);
        this.renderer.setAttribute(track, 'kind', 'subtitles');
        this.renderer.setAttribute(track, 'srclang', subtitle.srclang);
        this.renderer.setAttribute(track, 'src', URL.createObjectURL(subtitle.file));

        this.videoRef.nativeElement.appendChild(track);
      }
    });
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

  onSubtitleStatusChange() {
    this.subtitleService.subtitleStatus.subscribe({
      next: (subtitle) => {
        const tracks = Array.from(this.videoRef.nativeElement.textTracks);
        const selectedTrackIndex = tracks.findIndex(x => x.label === subtitle.label);
        this.videoRef.nativeElement.textTracks[selectedTrackIndex].mode = subtitle.isActive ? 'showing' : 'hidden';
      }
    });
  }

  onPlay() {
    this.videoRef.nativeElement.play()
  }

  onPause() {
    this.videoRef.nativeElement.pause()
  }

  onMute() {
    this.videoRef.nativeElement.muted = true;
  }

  onUnmute() {
    this.videoRef.nativeElement.muted = false;
  }


  onFullScreen() {
    this.videoRef.nativeElement.requestFullscreen();
  }

  onPictureInPicture() {
    this.videoRef.nativeElement.requestPictureInPicture();
  }
}

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-controller',
  templateUrl: './video-controller.component.html',
  styleUrls: ['./video-controller.component.scss']
})
export class VideoControllerComponent implements OnInit {

  @ViewChild('currentTimeRef') currentTimeRef!: ElementRef<HTMLParagraphElement>;

  currentTime: number = 0;
  entirePage = false;
  @Input() duration: number = 0;
  @Input('currentTime') set setCurrentTime(time: number) {
    console.log(time);
  }

  videoRef!: HTMLVideoElement;
  @Input('videoRef') set setVideoRef(element: HTMLVideoElement) {
    console.log({ element });

    this.videoRef = element;
    element.addEventListener('timeupdate', () => {
      this.currentTimeRef.nativeElement.innerText = String(this.floorNumber(element.currentTime));
      // this.videoRef.paused
    });
  }

  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() mute = new EventEmitter();
  @Output() unmute = new EventEmitter();
  @Output() fullScreen = new EventEmitter();
  @Output() pictureInPicture = new EventEmitter();

  disableVideoController = true;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.checkVideoIsReady();
  }

  checkVideoIsReady() {
    this.videoRef.addEventListener('canplay', (event) => {
      console.log({ event });
      this.disableVideoController = false;
    });
  }

  onPlayPause() {
    this.videoRef.paused ? this.play.emit() : this.pause.emit();
  }

  onMute() {
    this.videoRef.muted ? this.unmute.emit() : this.mute.emit();
  }

  onEntirePage() {
    this.entirePage = !this.videoService.entirePage.value;
    this.videoService.entirePage.value ? this.videoService.entirePage.next(false) : this.videoService.entirePage.next(true);
  }

  onFullScreen() {
    this.fullScreen.emit();
  }

  onPictureInPicture() {
    this.pictureInPicture.emit();
  }

  onChangeTrack(event: MatSliderChange) {
    if (event.value) {
      this.videoRef.currentTime = event.value;
    }
  }

  floorNumber(number: number) {
    return Math.floor(number)
  }

  onSpeedChange(event: number) {
    this.videoRef.playbackRate = event;
  }

  fastBackward() {
    this.videoRef.currentTime -= 10;
  }

  fastForward() {
    this.videoRef.currentTime += 10;
  }

}

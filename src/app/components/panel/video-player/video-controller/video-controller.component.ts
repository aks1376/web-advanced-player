import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { SecondsToHumanPipe } from 'src/app/pipes/seconds-to-human.pipe';
import { VideoService } from 'src/app/services/video.service';
import { SubtitleManagementDialogComponent } from './subtitle-management-dialog/subtitle-management-dialog.component';

@Component({
  selector: 'app-video-controller',
  templateUrl: './video-controller.component.html',
  styleUrls: ['./video-controller.component.scss']
})
export class VideoControllerComponent implements OnInit {
  @ViewChild('currentTimeRef') currentTimeRef!: ElementRef<HTMLParagraphElement>;

  currentTime: number = 0;
  @Input() duration: number = 0;

  videoRef!: HTMLVideoElement;
  @Input('videoRef') set setVideoRef(element: HTMLVideoElement) {
    this.videoRef = element;
    element.addEventListener('timeupdate', () => {
      this.currentTimeRef.nativeElement.innerText = this.secondsToHumanPipe.transform(this.floorNumber(element.currentTime));
    });
  }

  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() mute = new EventEmitter();
  @Output() unmute = new EventEmitter();
  @Output() fullScreen = new EventEmitter();
  @Output() pictureInPicture = new EventEmitter();

  disableVideoController = true;

  constructor(
    private secondsToHumanPipe: SecondsToHumanPipe,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.checkVideoIsReady();
  }

  checkVideoIsReady() {
    this.videoRef.addEventListener('canplay', (event) => {
      this.disableVideoController = false;
    });
  }

  onPlayPause() {
    this.videoRef.paused ? this.play.emit() : this.pause.emit();
  }

  onMute() {
    this.videoRef.muted ? this.unmute.emit() : this.mute.emit();
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

  onOpenSubtitlePanel() {
    this.dialog.open(SubtitleManagementDialogComponent,
      {
        width: '400px'
      }).afterClosed().subscribe();
  }

}

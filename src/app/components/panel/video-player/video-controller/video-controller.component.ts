import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-video-controller',
  templateUrl: './video-controller.component.html',
  styleUrls: ['./video-controller.component.scss']
})
export class VideoControllerComponent implements OnInit {

  @ViewChild('currentTimeRef') currentTimeRef!: ElementRef<HTMLParagraphElement>;

  currentTime: number = 0;
  @Input() duration: number = 0;
  @Input('currentTime') set setCurrentTime(time: number) {
    console.log(time);
  }

  videoRef!: HTMLVideoElement;
  @Input('videoRef') set setVideoRef(element: HTMLVideoElement) {
    this.videoRef = element;
    element.addEventListener('timeupdate', () => {
      this.currentTimeRef.nativeElement.innerText = String(this.floorNumber(element.currentTime));
    });
  }

  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() mute = new EventEmitter();
  @Output() entireScreen = new EventEmitter();
  @Output() fullScreen = new EventEmitter();
  @Output() pictureInPicture = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPlay() {
    this.play.emit();
  }
  onPause() {
    this.pause.emit();
  }
  onMute() {
    this.mute.emit();
  }
  onEntireScreen() {
    this.entireScreen.emit();
  }
  onFullScreen() {
    this.fullScreen.emit();
  }
  onPictureInPicture() {
    this.pictureInPicture.emit();
  }

  onChangeTrack(event: MatSliderChange) {
    if(event.value){
      this.videoRef.currentTime = event.value;
    }
  }

  floorNumber(number: number) {
    return Math.floor(number)
  }
}

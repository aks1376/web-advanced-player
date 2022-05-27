import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-load-video-dialog',
  templateUrl: './load-video-dialog.component.html',
  styleUrls: ['./load-video-dialog.component.scss']
})
export class LoadVideoDialogComponent implements OnInit {

  validFileRegex = /audio\/*|video\/*/;

  constructor(
    private dialogRef: MatDialogRef<LoadVideoDialogComponent>,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
  }

  onSelectVideo(event: Event) {
    if ((event.target as HTMLInputElement).files && (event.target as HTMLInputElement)?.files?.length) {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        const filesArray = Array.from(files);
        const file: File = filesArray[0];
        this.onPlayVideo(file);

      }
    }
  }

  onFileDrop(event: File) {
    this.onPlayVideo(event);
  }

  onPlayVideo(file: File) {
    this.videoService.videoFile.next(file);
    this.dialogRef.close();
  }

}

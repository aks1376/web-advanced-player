import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubtitleModel } from 'src/app/models/subtitle-model';
import { SubtitleService } from 'src/app/services/subtitle.service';
import { VideoService } from 'src/app/services/video.service';
import { AddSubtitleDialogComponent } from './add-subtitle-dialog/add-subtitle-dialog.component';

@Component({
  selector: 'app-subtitle-management-dialog',
  templateUrl: './subtitle-management-dialog.component.html',
  styleUrls: ['./subtitle-management-dialog.component.scss']
})
export class SubtitleManagementDialogComponent implements OnInit {

  subtitles: SubtitleModel[] = [];

  constructor(
    private videoService: VideoService,
    private dialog: MatDialog,
    private subtitleService: SubtitleService
  ) { }

  ngOnInit(): void {
    this.onGetSubtitles();
  }

  onGetSubtitles() {
    this.subtitles = this.subtitleService.subtitles.value;
    this.subtitleService.subtitles.subscribe(subtitles => {
      this.subtitles = subtitles;
    });
  }

  openAddSubtitleDialog() {
    const dialogRef = this.dialog.open(AddSubtitleDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe();
  }

  onSelectSubtitle(selected: boolean, subtitle: SubtitleModel) {
    subtitle.isActive = selected;
    this.subtitleService.onChangeSubtitleStatus(subtitle, selected);
  }

}

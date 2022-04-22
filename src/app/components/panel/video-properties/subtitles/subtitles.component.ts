import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubtitleFileModel } from 'src/app/models/subtitle-file-model';
import { VideoService } from 'src/app/services/video.service';
import { AddSubtitleDialogComponent } from './add-subtitle-dialog/add-subtitle-dialog.component';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.scss']
})
export class SubtitlesComponent implements OnInit {

  subtitles: SubtitleFileModel[] = [];

  constructor(
    private videoService: VideoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddSubtitleDialog() {
    const dialogRef = this.dialog.open(AddSubtitleDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((subtitle: SubtitleFileModel) => {
      if (subtitle) {
        this.subtitles.push(subtitle);
        this.videoService.subtitleFile.next(subtitle);
      }
    });
  }

  onSelectSubtitle(selected: boolean, label: string) {
    const subtitle = this.subtitles.find(x => x.label === label);
    if (subtitle) {
    }
  }

}

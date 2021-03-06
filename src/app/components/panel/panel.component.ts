import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoService } from 'src/app/services/video.service';
import { LoadVideoDialogComponent } from './load-video-dialog/load-video-dialog.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {


  constructor(
    private videoService: VideoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadVideoFile();
  }

  loadVideoFile() {
    this.dialog.open(LoadVideoDialogComponent,{
      disableClose: true
    }).afterClosed().subscribe();
  }
}

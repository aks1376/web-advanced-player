import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  entirePage = false;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.listenOnEntirePage();
  }

  listenOnEntirePage() {
    this.videoService.entirePage.subscribe({
      next: (entirePage) => {
        this.entirePage = entirePage;
      }
    })
  }

}

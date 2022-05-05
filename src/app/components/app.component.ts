import { Component, OnInit } from '@angular/core';
import { VersionCheckService } from '../services/version-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-advanced-player';

  constructor(private versionCheckService: VersionCheckService) { }

  ngOnInit(): void {
    // use git hash to check new build version
    this.versionCheckService.check();
  }
}

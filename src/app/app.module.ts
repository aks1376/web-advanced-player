import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { VideoPlayerComponent } from './components/panel/video-player/video-player.component';
import { VideoPropertiesComponent } from './components/panel/video-properties/video-properties.component';
import { VideoDetailsComponent } from './components/panel/video-properties/video-details/video-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubtitlesComponent } from './components/panel/video-properties/subtitles/subtitles.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddSubtitleDialogComponent } from './components/panel/video-properties/subtitles/add-subtitle-dialog/add-subtitle-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    VideoPlayerComponent,
    VideoPropertiesComponent,
    VideoDetailsComponent,
    SubtitlesComponent,
    AddSubtitleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

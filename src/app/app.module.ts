import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { VideoPlayerComponent } from './components/panel/video-player/video-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoControllerComponent } from './components/panel/video-player/video-controller/video-controller.component';
import { MatSliderModule } from '@angular/material/slider';
import { SpeedComponent } from './components/utils/speed/speed.component';
import { SecondsToHumanPipe } from './pipes/seconds-to-human.pipe';
import { BytesToHumanPipe } from './pipes/bytes-to-human.pipe';
import { LoadVideoDialogComponent } from './components/panel/load-video-dialog/load-video-dialog.component';
import { DropFileDirective } from './directives/drop-file.directive';
import { SubtitleManagementDialogComponent } from './components/panel/video-player/video-controller/subtitle-management-dialog/subtitle-management-dialog.component';
import { AddSubtitleDialogComponent } from './components/panel/video-player/video-controller/subtitle-management-dialog/add-subtitle-dialog/add-subtitle-dialog.component';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    VideoPlayerComponent,
    AddSubtitleDialogComponent,
    VideoControllerComponent,
    SpeedComponent,
    SecondsToHumanPipe,
    BytesToHumanPipe,
    LoadVideoDialogComponent,
    DropFileDirective,
    SubtitleManagementDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...material,
  ],
  providers: [SecondsToHumanPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

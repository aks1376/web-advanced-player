import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { VideoPlayerComponent } from './components/panel/video-player/video-player.component';
import { VideoPropertiesComponent } from './components/panel/video-properties/video-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    VideoPlayerComponent,
    VideoPropertiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

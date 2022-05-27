import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { SubtitleModel } from "../models/subtitle-model";

@Injectable({ providedIn: 'root' })
export class SubtitleService {

  subtitles: BehaviorSubject<SubtitleModel[]> = new BehaviorSubject<SubtitleModel[]>([]);
  addNewSubtitle: Subject<SubtitleModel> = new Subject<SubtitleModel>();
  subtitleStatus: Subject<SubtitleModel> = new Subject<SubtitleModel>();


  addSubtitle(label: string, srclang: string, file: File) {
    const newSubtitle: SubtitleModel = {
      id: new Date().getTime(),
      label,
      srclang,
      file,
      isActive: false
    };
    const subtitles = this.subtitles.value;
    subtitles.push(newSubtitle);

    this.subtitles.next(subtitles);
    this.addNewSubtitle.next(newSubtitle);
  }

  onChangeSubtitleStatus(subtitle: SubtitleModel, active: boolean) {
    const subtitles = this.subtitles.value;
    const findSubtitle = subtitles.find(x => x.id === subtitle.id);
    if (findSubtitle) {
      findSubtitle.isActive = active;
      this.subtitleStatus.next(findSubtitle);
      this.subtitles.next(subtitles);
    }
  }


}
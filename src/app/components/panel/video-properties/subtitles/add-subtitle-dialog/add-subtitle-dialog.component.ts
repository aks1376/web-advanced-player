import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SubtitleFileModel } from 'src/app/models/subtitle-file-model';

@Component({
  selector: 'app-add-subtitle-dialog',
  templateUrl: './add-subtitle-dialog.component.html',
  styleUrls: ['./add-subtitle-dialog.component.scss']
})
export class AddSubtitleDialogComponent implements OnInit {

  subtitleFile!: File;
  form: FormGroup = this.fb.group({
    label: ['', [Validators.required, Validators.minLength(2)]],
    srclang: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(
    private dialogRef: MatDialogRef<AddSubtitleDialogComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onLoadSubtitle(event: Event) {
    if ((event.target as HTMLInputElement).files && (event.target as HTMLInputElement)?.files?.length) {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        const filesArray = Array.from(files);
        const file: File = filesArray[0];

        this.subtitleFile = file;
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onAddSubtitleToVideo() {
    if (this.form.valid && this.subtitleFile) {
      const value = this.form.value;

      const subtitle: SubtitleFileModel = {
        file: this.subtitleFile,
        label: value.label,
        srclang: value.srclang
      }

      this.dialogRef.close(subtitle);

    }
  }

}

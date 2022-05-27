import { Directive, ElementRef, HostListener, EventEmitter, Output, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropFile]'
})
export class DropFileDirective {

  @Input() inputType: RegExp = /^$/i;
  @Output() droppedFile = new EventEmitter();
  @HostBinding('class.valid') isValid!: boolean;
  @HostBinding('class.Invalid') isInValid!: boolean;
  @HostBinding('class.file-over') fileOver!: boolean;

  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      if (this.validateFileType(files[0], this.inputType)) {
        this.droppedFile.emit(files[0]);
        this.isValid = true;
        this.isInValid = false;
      } else {
        this.isValid = false;
        this.isInValid = true;
      }
    }
  }

  private validateFileType(file: File, validType: RegExp): boolean {
    return file.type.match(validType) ? true : false;
  }

  constructor(private el: ElementRef) { }
}

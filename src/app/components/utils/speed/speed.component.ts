import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent implements OnInit {

  @Output() speed = new EventEmitter<number>();

  speedValue = 1.00;

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.speedValue += 0.10;
    this.speed.emit(this.speedValue);
  }

  decrease() {
    if (this.speedValue > 0) {
      this.speedValue -= 0.10;
      this.speed.emit(this.speedValue);
    }
  }

  onSpeedChange(event: any) {
    if (event.target && event.target.value && event.target.value > 0) {
      this.speedValue = +event.target.value;
      this.speed.emit(this.speedValue);
    }
  }

}

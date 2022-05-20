import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadVideoDialogComponent } from './load-video-dialog.component';

describe('LoadVideoDialogComponent', () => {
  let component: LoadVideoDialogComponent;
  let fixture: ComponentFixture<LoadVideoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadVideoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

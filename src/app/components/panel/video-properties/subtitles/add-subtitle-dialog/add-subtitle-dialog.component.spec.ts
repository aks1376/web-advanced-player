import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubtitleDialogComponent } from './add-subtitle-dialog.component';

describe('AddSubtitleDialogComponent', () => {
  let component: AddSubtitleDialogComponent;
  let fixture: ComponentFixture<AddSubtitleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubtitleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubtitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

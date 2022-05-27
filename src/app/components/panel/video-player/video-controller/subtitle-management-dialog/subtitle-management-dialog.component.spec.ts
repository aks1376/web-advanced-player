import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleManagementDialogComponent } from './subtitle-management-dialog.component';

describe('SubtitleManagementDialogComponent', () => {
  let component: SubtitleManagementDialogComponent;
  let fixture: ComponentFixture<SubtitleManagementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitleManagementDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

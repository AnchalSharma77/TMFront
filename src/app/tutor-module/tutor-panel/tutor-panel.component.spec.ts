import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorPanelComponent } from './tutor-panel.component';

describe('TutorPanelComponent', () => {
  let component: TutorPanelComponent;
  let fixture: ComponentFixture<TutorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

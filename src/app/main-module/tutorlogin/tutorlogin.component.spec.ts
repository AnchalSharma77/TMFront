import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorloginComponent } from './tutorlogin.component';

describe('TutorloginComponent', () => {
  let component: TutorloginComponent;
  let fixture: ComponentFixture<TutorloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

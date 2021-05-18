import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorModuleComponent } from './tutor-module.component';

describe('TutorModuleComponent', () => {
  let component: TutorModuleComponent;
  let fixture: ComponentFixture<TutorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

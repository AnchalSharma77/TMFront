import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadnotesComponent } from './uploadnotes.component';

describe('UploadnotesComponent', () => {
  let component: UploadnotesComponent;
  let fixture: ComponentFixture<UploadnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

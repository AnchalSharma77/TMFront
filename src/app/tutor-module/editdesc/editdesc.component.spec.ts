import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdescComponent } from './editdesc.component';

describe('EditdescComponent', () => {
  let component: EditdescComponent;
  let fixture: ComponentFixture<EditdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

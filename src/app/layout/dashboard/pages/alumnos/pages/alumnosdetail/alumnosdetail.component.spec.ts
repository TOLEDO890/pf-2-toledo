import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosdetailComponent } from './alumnosdetail.component';

describe('AlumnosdetailComponent', () => {
  let component: AlumnosdetailComponent;
  let fixture: ComponentFixture<AlumnosdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

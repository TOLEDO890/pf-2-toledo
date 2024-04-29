import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDialogoComponent } from './alumno-dialogo.component';

describe('AlumnoDialogoComponent', () => {
  let component: AlumnoDialogoComponent;
  let fixture: ComponentFixture<AlumnoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoDialogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

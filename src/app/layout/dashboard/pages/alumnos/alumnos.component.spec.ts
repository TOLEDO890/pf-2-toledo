import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosComponent } from './alumnos.component';
import { IUser } from './models/index';
import { TestBed } from '@angular/core/testing';
import { AlumnoDialogoComponent } from './alumno-dialogo/alumno-dialogo.component';

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // Importamos ReactiveFormsModule
      providers: [{ provide: MatDialog, useValue: mockMatDialog }],
    });

    component = TestBed.inject(AlumnosComponent); // Inyectamos el componente desde el TestBed
  });

  it('should open dialog', () => {
    const mockUser: IUser = { id: 1, Nombre: 'John', Apellido: 'Doe', email: 'john.doe@example.com', password: '12345', Clase: '1A', role: 'alumno', Edad: 18, token: '123' };

    component.openDialog(mockUser);

    expect(mockMatDialog.open).toHaveBeenCalledWith(AlumnoDialogoComponent, { data: mockUser });
  });
});

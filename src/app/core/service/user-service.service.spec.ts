import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserServiceService } from './user-service.service';
import { IUser } from '../../layout/dashboard/pages/alumnos/models/index';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserServiceService]
    });

    service = TestBed.inject(UserServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from the API via GET', () => {
    const dummyUsers: IUser[] = [
      {
        id: 1,
        Nombre: "izuku",
        Apellido: "midoriya",
        email: "izuku.midoriya@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "120"
      },
      {
        id: 2,
        Nombre: "Katsuki",
        Apellido: "Bakugo",
        email: "katsuki.bakugo@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "121"
      },
      {
        id: 3,
        Nombre: "Shoto",
        Apellido: "Todoroki",
        email: "shoto.todoroki@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "122"
      },
      {
        id: 4,
        Nombre: "Tenya",
        Apellido: "Iida",
        email: "tenya.iida@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "123"
      },
      {
        id: 5,
        Nombre: "Fumikage",
        Apellido: "Tokoyami",
        email: "fumikage.tokoyami@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "124"
      },
      {
        id: 6,
        Nombre: "Tsuyu",
        Apellido: "Asui",
        email: "tsuyu.asui@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 16,
        token: "125"
      },
      {
        id: 7,
        Nombre: "Minoru",
        Apellido: "Mineta",
        email: "minoru.mineta@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "126"
      },
      {
        id: 8,
        Nombre: "Rikido",
        Apellido: "Sato",
        email: "rikido.sato@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "127"
      },
      {
        id: 9,
        Nombre: "Momo",
        Apellido: "Yaoyorozu",
        email: "momo.yaoyorozu@email.com",
        password: "12345",
        Clase: "1A",
        role: "alumno",
        Edad: 17,
        token: "128"
      },
      {
        id: 10,
        Nombre: "amador",
        Apellido: "toledo",
        email: "amador_toledo@email.com",
        password: "toledo",
        Clase: "1A",
        role: "profesor",
        Edad: 20,
        token: "1"
      }
    ];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(10);
      expect(users).toEqual(dummyUsers);
    });

    const request = httpMock.expectOne(`${service.apiurlspect}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUsers);
  });
});


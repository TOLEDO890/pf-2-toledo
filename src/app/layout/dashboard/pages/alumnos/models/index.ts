export type UserRole = 'profesor' | 'alumno';

export interface IUser {
    id:number;
  Clase: string;
Nombre: string;
Apellido:string;
NombreDeHeroe:string;
role: UserRole;
Don:string;
Edad:number;

  
}
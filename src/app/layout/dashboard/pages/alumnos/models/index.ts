export type UserRole = 'profesor' | 'alumno';

export interface IUser {
    id:number;
  Clase: string;
Nombre: string;
Apellido:string;
role: UserRole;
Edad:number;
}
import { Usuarios } from './usuarios';
import { Negocios } from './negocios';

export class Suscripciones{

    constructor(
        public usu_id: string,
        public usu_nombres: string,
        public usu_apellidos: string,
        public usu_correo: string,
        public usu_contrasena: string,
        public neg_nit: string,
        public neg_nombre: string,
        public neg_ciudad: string,
        public neg_direccion: string,
        public neg_usu_id: string
    ){

    }
}
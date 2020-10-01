export class Usuarios {
    constructor(
        public usu_id: string,
        public usu_nombres: string,
        public usu_apellidos: string,
        public usu_correo: string,
        public usu_contrasena: string,
        public usu_foto?: string
    ){}
}
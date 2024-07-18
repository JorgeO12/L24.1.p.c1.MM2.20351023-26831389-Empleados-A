export default class Cl_personas {
    constructor (nombre, cargo, sueldo) {
        this._nombre = nombre;
        this._cargo = cargo;
        this._sueldo = sueldo;
    } 

set nombre (nombre) {
    this._nombre = nombre;
}
get nombre () {
    return this._nombre;
}
set cargo (cargo) {
    this._cargo = cargo;
}
get cargo () {
    return this._cargo;
}
set sueldo (sueldo) {
    this._sueldo = sueldo;
}
get sueldo () {
    return this._sueldo;
} 
}
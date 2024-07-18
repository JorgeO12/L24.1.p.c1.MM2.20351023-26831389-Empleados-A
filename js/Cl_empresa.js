export default class Cl_empresa {
    constructor () {
        this.administrativos = 0;
        this.obreros = 0;
        this.sueldoObreros = 0;
        this.sueldoAdministrativos = 0;
        this.ganamenos = 999;
        this.nombremenor = "";
        
    }

    procesar (p) {
        if (p.cargo == "obrero") {
            this.obreros++;
            this.sueldoObreros += p.sueldo;

            if (p.sueldo < this.ganamenos) {
                this.ganamenos = p.sueldo;
                this.nombremenor = p.nombre;
            }
        
        } else if (p.cargo == "administrativo") {
            this.administrativos++;
            this.sueldoAdministrativos += p.sueldo;
        }
} 

    promedioadministrativos () {
        return this.sueldoAdministrativos / this.administrativos;
    }

    sueldomenor () {
        return this.ganamenos
    }

    menornombre () {
        return this.nombremenor
    }
    
} 



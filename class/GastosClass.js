export class gastosClass{
    constructor(nombre,valor){
        this.nombre = nombre;
        this.valor = valor;
    }
    getNombre() {
        return(
            this.nombre
        )    
    }
    getValor(){
        return(
            this.nombre
        )
    }
    setNombre(nuevo){
        this.nombre = nuevo;
    }
    setValor(nuevo){
        this.valor = nuevo;
    }
}
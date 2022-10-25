// Reto 7
// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
// de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe
// inicializar el array.
// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada
// objeto Person.



class Contacts

{

    constructor() //aquí se deja vacío, esto significa que no tiene parámetros de entrada
    {
        this.contacts = [] // esto es inicializar el array, que es darle un valor de inicio
    }
     
    printPersons(){

        return this.contacts
    } 
}   



module.exports = { Contacts }
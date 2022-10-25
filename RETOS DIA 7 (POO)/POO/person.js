// 1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
// “dia1”, “dia2” etc.

// 2. Para los retos de hoy trabajaremos desde la rama “dia1”.

// 3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.

// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

class Person // this
{
    constructor (alto, kg, colorPelo, colorOjos, profesion, aficiones)
        {
            this.altura = alto;
            this.Peso = kg;
            this.colorPelo = colorPelo;
            this.colorOjos = colorOjos;
            this.profesion = profesion;
            this.aficiones = aficiones;
            this.hobbies = [];
        }

    //METODOS:

    // Reto 2
    // Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
    // (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
    // clase.
    imc()
    {
        return this.peso / (this.altura * this.altura)    // Fórmula IMC :peso / altura*altura
    }

    // Reto 3
    // Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
    // como parámetro el año y calcule la edad de la persona.
    edad ()
    {
        return 2022 - this.yearOfBirth
    }

    // Reto 4
    // Añadir un método que se denomine printAll que muestre por consola cada uno de los
    // atributos de la clase Person seguido por “-” y el valor del atributo.
    printAll ()
    {
        return `
        altura - ${this.altura} 
        peso - ${this.Peso}
        colorPelo - ${this.colorPelo}
        colorOjos - ${this.colorOjos}
        profesion - ${this.profesion}
        aficiones - ${this.aficiones}`
        // {
        //     for (let propiedad in this)
        //     return propiedad + " - " + this[propiedad]
        // }
    }
}


// Reto 5

// Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
// denominado printHobbies, que muestre por consola las aficiones de la persona. //(se añade this.hobbies = [])


module.exports = {Person}











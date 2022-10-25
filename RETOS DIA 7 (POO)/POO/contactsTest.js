let {Contacts} = require("./contacts")
let {Person} = require("./person")

let fran = new Person(180,85,"negro", "negro", "tecnico", ["cantar", "musica", "deporte", "viajar"])
let vicky = new Person(170, 60, "castaño", "verde", "higienista dental", ["salir", "comer", "deporte", "musica"])
let tina = new Person(160, 80, "castaño", "verde", "artista", ["pintar", "politica", "musica","animales"])
tina.hobbies = ["hola", "hola", "hola"] // asi se rellenarian los hobbies, que es un atributo que tenia un valor de inico que era un array vacio pero ahora lo hemos rellenado a posteriori


let contacts = new Contacts()
contacts.contacts = [fran, vicky] //se puede hacer de las dos formas

contacts.contacts.push(tina) //como arriba o como aqui con un push
 
contacts.printPersons() // se imprime cada uno de los atributos del objeto person


console.log(contacts.printPersons());
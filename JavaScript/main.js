class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `nombre completo: ${this.nombre} ${this.apellido}`
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(titulo,autor) {
        this.libros.push({
            titulo: titulo,
            autor: autor
        })
    }
    getBooksNames() {
       return this.libros.map(libro => libro.titulo)

    }
}


const persona1 = new Usuario("Juan Carlos", "Batman", [{
    titulo: "Los tontos mueren",
    autor: "Mario Puzo"
}], ["Perro", "Gato"])


console.log(persona1.getFullName())
persona1.addMascota("Hamster")
console.log(persona1.mascotas)
console.log(persona1.countMascotas())
persona1.addBook("Game of Thrones","George R.R. Martin")
console.log(persona1.libros)
console.log(persona1.getBooksNames())
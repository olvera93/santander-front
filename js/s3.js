// Sesion 3 Ejemplo 1

const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
const double = []

// For
/*for(let i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2)
}*/
//console.log('Numbers: ', numbers)
//console.log('Doubled: ', double)


// For of
let sum = 0
let promedio = 0.0
for (const number of numbers) {
    // calcular el promedio de los numeros
    sum += number
    promedio = sum / numbers.length

}

//console.log('Doubled For of: ', promedio)



// OBJETOS 
const john = {
    firstName: 'John',
    lastName: 'Doe', 
    birthYear: 1990
}

//console.log(john.firstName)
//console.log(john['lastName'])

john.firstName = 'Jane'
//console.log(john.firstName)

const car = {
    brand: 'Nissan', 
    model: 'Versa',
    year: 2020
}

const keys = Object.keys(car)
const pairs = []

for (const key of keys) {
    pairs.push([key, car[key]])
}
//console.log(pairs)

const auto = Object.fromEntries(pairs)
console.log(auto)

const auto2 = {}
for (const pair of pairs) {
    auto2[pair[0]] = pair[1]
}

console.log(auto2)


// Destructuracion de objetos
const primeros = [1, 2, 3]
const segundos = [4, 5, 6]

const todos = [...primeros, ...segundos]
console.log(todos)

const colors = ['red', 'green', 'blue']
const [Red, Green, Blue] = colors

const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

const {links: {social: {facebook: fb, instagram: ig}}} = person

console.log(fb)
console.log(ig)

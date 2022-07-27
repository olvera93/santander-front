// Ejercicio 1 sesion 2

const time = 23
let greeting

if (time < 0 || time > 23) {
    greeting = 'error'
} else {
    if (time < 12) {
        greeting = 'Good morning'
    } else if (time < 19) {
        greeting = 'Good afternoon'
    } else if (time >= 19) {
        greeting = 'Good evening'
    }
}

console.log(greeting)
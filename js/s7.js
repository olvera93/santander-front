// Programacion funcional

const numbers = [1, 2, 3, 4, 5]
const doubles = numbers.map(function (numbers) {
    return numbers * 2
})

//console.log(numbers);


// Ejemplo

const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}

function addColor(car) {
    /*const newCar = Object.assign({}, car, {
        color: 'Black'
    })*/

    const newCar = {
        ...car,
        color: 'Black'
    }

    return newCar
}

console.log("Antes de ejecutar la funcion: ", car)

const newCar = addColor(car)
console.log("Despues de ejecutar la funcion: ", newCar)

console.log("Son los mismos autos?", car === newCar)

function add(a, b) {
    return a + b
}

function randomNumber() {
    return Math.floor(Math.random() * 10)
}



// Otro ejemplo

const cart = [
    {
        item: 'Laptop',
        quantity: 1
    }
]

function addItemToCart(cart ,item, quantity) {
    /*const newCart = cart.map(function(element) {
        return element
    })*/
    const newCart = [...cart]

    newCart.push({
        item,
        quantity
    })

    return newCart
}

console.log(addItemToCart( cart,'Monitor', 2))

let square = function(number) {
    return number * number
}

let squareOfFour = square(4)
console.log(squareOfFour)

const evenNumbers = numbers.filter(number => number % 2 === 0)
const sum = numbers.reduce(function(acumulator, valueActual) {
    return acumulator + valueActual
}, 0)

console.log(evenNumbers)
console.log(sum)


// Ejercicio 
const num = 12345

const str = num.toString()

const array = num.toString().split('')

const arrayOfNum = array.map(function(num) {
    return Number(num)
})
console.log(arrayOfNum)

const sum2 = arrayOfNum.reduce(function(a, b) {
    return a + b
}, 0)

console.log(sum2)


function sumDigits(number) {
    return number
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0)
}

console.log(sumDigits(12345))


function flatten(arrays) {
    // Code goes here
    return arrays.reduce(function(a, b) {
        return a.concat(b)
    })
  }
  
  const arrays = [[1, 2, 3], [4, 5], [6]];
  const array2 = flatten(arrays);
  
  console.log(array2); // [1, 2, 3, 4, 5, 6]

  function compact(array) {
    // Code goes here
    return array.filter((value) => !!value) 
  }
  
  const array3 = [0, 1, false, 2, '', 3];
  const compactedArray = compact(array3);
  
  console.log(compactedArray); // [1, 2, 3]


  const arrayOf = [0, 1, 2, 3, 4, 5, 6, 6]

  const sueEvens = arrayof.reduce(funtion(a,b) {
    return b % 2===0? a+b:a
  }, 1)

    console.log(sueEvens)
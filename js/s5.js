/*if (true) {
    var foo = 'John Doe';
    console.log(foo);
}

console.log(foo);

var numbers = [1, 2, 3, 4, 5]
var doubles = []

for (let i = 0; i < numbers.length; i++) {
    doubles.push(numbers[i] * 2)
}

for (let i = 0; i < numbers.length; i++) {
    console.log("Hola")
}


console.log(numbers)
console.log(doubles)
*/

// This

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: () => {
        const today = new Date()
        const year = today.getFullYear()
        this.age = year - john.birthYear
    }
}

//console.log(john.calculateAge(1990))
//console.log(john)


var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
  function pluck(list, propertyName) {
    // Code goes here...
    var newList = []
    for (let i = 0; i < list.length; i++) {
        newList.push(list[i][propertyName])
    }
    return newList

  }
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function telephone(numbers) {
    var telephone = '(XXX) XXX-XXXX'
    // validate numbers are numbers and not strings and exceed 10 digits exception
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.length < 0 || numbers.length > 10) {
            throw new Error('Invalid number')
        }
        if (typeof numbers[i] !== 'number') {
            throw new Error('Invalid number')
        }
        
        telephone = telephone.replace('X', numbers[i])
    }

    return telephone
}

console.log(telephone(numbers))


//Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. 
//La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

//findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]

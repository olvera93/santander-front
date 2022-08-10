
const Person = function(name, birthYear, job) {
    this.name = name
    this.birthYear = birthYear
    this.job = job
}

const jane = new Person('Jane', 1990, 'designer')

//console.log(jane)

const Vec = function(x, y) {
    this.x = x
    this.y = y 
}



Vec.prototype.plus = function(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y)
}

Vec.prototype.minus = function(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y)
}

Vec.prototype.length = function(vector) {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}

const v1 = new Vec(1, 2)
const v2 = new Vec(2, 3)
console.log(v1.plus(v2))

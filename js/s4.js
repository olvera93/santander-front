function calcularAge(birthYear) {
    const age = 2022 - birthYear
    return age
}


const whatDoYouDo = function(job, name) {
    switch (job) {
        case 'developer':
            return name + ' develops cool apps..'
            break;
        
        case 'designer':
            return name + ' designs awesome websites'
            break;
        
        default:
            return name + ' does something else'

    }
}

console.log(whatDoYouDo('developer', 'John'))
/*function startProcess() {
    console.log('Start Phase 1. Wait one second.');

    setTimeout(function () {
        console.log('Phase 1 completed')

    }, 1000);
}

startProcess()*/


function foo() {
    return new Promise((resolve) => {
        resolve(value)
        reject(new Error('Process Failed'))
    })
}

foo()
    .then(value => console.log(value))
    .catch(error => console.log(error))
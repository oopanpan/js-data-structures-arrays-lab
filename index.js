// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    const copyOfDrivers = [...drivers.slice(), name];
    return copyOfDrivers;
}

function prependDriver(name){
    const copyOfDrivers = [name, ...drivers.slice()];
    return copyOfDrivers;
}

function removeLastDriver(){
    const copyOfDrivers = drivers.slice(0, drivers.length-1);
    return copyOfDrivers;
}

function removeFirstDriver(){
    const copyOfDrivers = drivers.slice(1);
    return copyOfDrivers;
}
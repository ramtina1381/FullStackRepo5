console.log("Hello")
console.log("Bye")
console.log("Hello agian")

var obj1 ={ 
    name: 'John',
    age: 30
};

var obj2 ={ 
    name: 'John',
    age: 30,
    result: 'pass',
    pass: true,
    courses: ['Mat', 'Science', 'English'],
    car: null
};


var x = 100
console.log(typeof x)
console.log(typeof obj1)
console.log(typeof obj2.name)
console.log(typeof obj2.courses)
console.log(typeof obj2.car)

function greet(){
    console.log("Hello Ramtin");
}

console.log(typeof greet)
var greet2 = greet3 = function(){
    console.log("Hello Ramtin");
}

function greet5(name) {
    console.log('Hello' + name);
}

var greet5 = (name)=>{
    console.log('Hello' + name);
}





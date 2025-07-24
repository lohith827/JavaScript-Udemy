let person = new Object();

person['firstName'] = 'Ram';
person['lastName'] = 'Nandhan';

let firstNameProperty = 'firstName';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.lastName);

person.address = new Object();

person.address.street = '111 Maint Street';
person.address.city = 'Banglore';
person.address.pincode = '560048';

console.log(person);
console.log(person.address.street);
console.log(person['address']['city']);
console.log(person['address']['pincode']);

//Object literals

let book = {};
console.log(book);

var greet = 'Hello';
var greet = 'Hola';

console.log(greet);

let object = {
    firstName : "Ram",
    lastName : "Nandhan",
    isAProgrammer : true
};

console.log(JSON.stringify(object));

let json = JSON.parse('{"firstName": "Ramana", "isAProgrammer" : true}');
console.log(json);

//by value (primitives)
let a = 3;
let b;
b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all Objects (including functions))

let c = { greeting : 'hi'};
let d;
d = c;

c.greeting = 'hello'; // mutating the object
console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new Address)

c = { greeting: 'rowdy'};
console.log(c);
console.log(d);

let arr = [
    1,
    'Hello',
    false,
    {
        name: 'Ram',
        age: 23
    },
    function(name) {
        console.log(`Hello ${name}`);
    }
];

arr[4](arr[3].name);


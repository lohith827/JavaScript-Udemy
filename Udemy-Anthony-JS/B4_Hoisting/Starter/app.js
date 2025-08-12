function greeting() {
    let greet = 'Hi';

    setTimeout(function(){
        console.log(greet + " " + 'Lohith');
    }, 5000);// milli seconds
}
greeting();

//jQuery uses function expressions and first-class functions!
// $("button").click(function() {

// });

/* Call back Function:  */

function sayHello(callBack) {
    let a = 100;
    let b = 200;

    callBack(); // the 'callBack' it runs the function I give it
}

sayHello(function() {
    console.log('Hi Hello iam done')
})

sayHello(function() {
    console.log('Hi Hello iam not done')
})

let person = {
    firstName : 'John',
    lastName: 'Doe',
    getFullName : function() {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}


let logName = function (lang1, lang2) {
    console.log('Logged : ' +this.getFullName());
    console.log('Argumenys : ' + lang1+ ' ' +lang2);
    console.log('-------------')
};

// logName('en');
let personName = logName.bind(person); // did not create function it will creates a copy
personName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
    console.log('Logged : ' +this.getFullName());
    console.log('Argumenys : ' + lang1+ ' ' +lang2);
    console.log('------Invoking-------')
}.apply(person, ['en', 'es']));

//function borrowing
let person2 = {
    firstName: 'lohith',
    lastName : 'D'
}

console.log(person.getFullName.apply(person2));

//function currying

function multiPly(a,b) {
    return a * b;
}

let multiPlyTwo = multiPly.bind(this,2);
console.log(multiPlyTwo(4,5));
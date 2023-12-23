"use strict";
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let user = {
    id: 1,
    name: 'John'
};
const cid = 1;
const cid1 = cid;
const cid2 = cid;
var Direction;
(function (Direction) {
    Direction["Up"] = "hi";
    Direction["Down"] = "bye";
    Direction["Left"] = "hello";
    Direction["Right"] = "welcome";
})(Direction || (Direction = {}));
function addNum(x, y) {
    return x + y;
}
addNum(1, 2);
function log(message) {
    console.log(message);
}
;
log("Hello");
;
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    // public (anywhere) , private(with in the class) , protected(within the class and extended class)
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    toString() {
        return `${this.id} ${this.name}`;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
console.log(brad.toString(), mike);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
strArray.push('hello');

let company:string = 'Traversy Media';

let isPublished:boolean = true;

let x:any = 'Hello';

let age:number;

let ids: number[] = [1,2,3,4,5];

let arr: any[] = [1, true, 'Hello'];

type User =  {
    id: number,
    name: string
};

let user: User = {
    id: 1,
    name: 'John'
};

const cid = 1;

const cid1 = <number>cid;

const cid2 = cid as number;

enum Direction {
    Up = "hi",
    Down = "bye",
    Left = "hello",
    Right = "welcome"
}

function addNum(x:number , y:number) : number {
    return x+y;
}

addNum(1,2);

type All = string | number | boolean ;

function log(message : All) : void {
    console.log(message);
};

log("Hello");

interface UserInterface {
    readonly id: number, // can't be changed
    name: string,
    age?: number //can be done in both interface and type
    // ? means optional
};

const user1: UserInterface = {
    id: 1,
    name: 'John'
};

// user1.id = 30; // can't be done

interface MathFunc {
    (x:number, y:number): number
}

type MathFunc1 = {
    (x:number,y:number):number
}

const add: MathFunc = (x, y) => x+y;
const sub: MathFunc1 = (x, y) => x-y;

interface PersonInterface {
    // interface access type is public by default and can't be changed to any other access type
    id: number,
    name: string,
    register : () => string,
    toString : () => string
}

class Person implements PersonInterface{
    id:number;
    name:string;
    // public (anywhere) , private(with in the class) , protected(within the class and extended class)
    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }

    toString(){
        return `${this.id} ${this.name}`;
    }

    register(){
        return `${this.name} is now registered`;
    }
}



const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');

console.log(brad.toString(), mike);

interface EmployeeInterface extends PersonInterface {
    position: string
}

class Employee extends Person implements EmployeeInterface {
    position:string;

    constructor(id:number, name:string, position:string){
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', 'Developer');

console.log(emp.register());

// Generics

function getArray<T>(items:T[]):T[] {
    return new Array().concat(items);
}

let numArray : number[] = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad', 'John', 'Jill']);

strArray.push('hello');

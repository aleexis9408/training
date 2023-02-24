//example any
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}
// no create validation de type of data in the elements
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25); // OK
stringArray.push("Rabbits"); // OK
numberArray.push("This is not a number"); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]

// example generics
function getArrayGeneric<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArrayGeneric = getArrayGeneric<number>([5, 10, 15, 20]);
numberArrayGeneric.push(25);                      // OK
numberArrayGeneric.push('This is not a number');  // Generates a compile time type check error

let stringArrayGeneric = getArrayGeneric<string>(['Cats', 'Dogs', 'Birds']);
stringArrayGeneric.push('Rabbits');               // OK
stringArrayGeneric.push(30);                      // Generates a compile time type check error


// stringArrayGeneric
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
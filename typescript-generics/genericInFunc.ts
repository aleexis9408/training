//example initalization
function identity<T, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}

//limitation de generics
type ValidTypes = string | number;

function identityType<T extends ValidTypes, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}

let returnNumber = identityType<number, string>(100, "Hello!"); // OK
let returnString = identityType<string, string>("100", "Hola!"); // OK
let returnBoolean = identityType<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// keyof
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error

// typeof -> only for types primitives 
// instanceof -> for class type of class

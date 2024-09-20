// This line prints the text "Hello, world!" to the screen.
console.log("Hello, world! ");
// I create a box called 'firstName1' to store the name "Anders".
// The name inside this box can be changed later if needed.
var firstName1 = "Anders";
// This line combines the text "Hello, " with the name stored in 'firstName1'.
// It prints "Hello, Anders!" to the screen.
console.log("Hello, " + firstName1 + "!");
/*Type Inferences
*/
var aged = true;
var realAge = 10;
if (aged) {
    realAge = 10;
}
var dogAge = realAge * 4;
console.log("".concat(dogAge, " years"));
/*Type Shapes*/
var firstName = 'pinapple!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
firstName = "Abigail";
console.log(firstName.toUpperCase());
console.log(firstName.length);
/*any*/
var guess;
guess = "blue";
guess = 9;
console.log(guess);
/*Variable Type Annotations*/
var phoneNumber;
phoneNumber = "984384564";
if (Math.random() > 0.5) {
    phoneNumber = "+61770102062";
}
else {
    phoneNumber = "7167762323";
}
console.log(phoneNumber);
/*contact list*/
var contacts = [
    { name: "Steve", age: 34,
        street: "Avenue 37" },
    { name: "Elene",
        age: 47,
        street: "Corner 29" },
    { name: "Kirby",
        age: 27,
        street: "Everest 97" }
];
console.log(contacts[2].name);
console.log("Number of contacts:", contacts.length);

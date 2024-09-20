
// This line prints the text "Hello, world!" to the screen.
console.log("Hello, world! ");
// I create a box called 'firstName1' to store the name "Anders".
// The name inside this box can be changed later if needed.
let firstName1 = "Anders";

// This line combines the text "Hello, " with the name stored in 'firstName1'.
// It prints "Hello, Anders!" to the screen.
console.log("Hello, " + firstName1 + "!")


/*Type Inferences
*/
// We're saying 'aged' is true, which just means the person is old.
let aged = true;
// We start with 'realAge' as 10, like a starting point.
let realAge = 10;
// If 'aged' is true (which it is), we leave 'realAge' as 10.
if (aged) {
 realAge = 10;
}
// Now we figure out the dog’s age by multiplying 'realAge' by 4.
let dogAge = realAge * 4;
// Finally, we show the dog’s age, which is 40 years (10 * 4)
console.log(`${dogAge} years`);


/*Type Shapes*/
// We're starting with a name 'pinapple!' and saving it in 'firstName'
let firstName = 'pinapple!';
// We're making the name all uppercase and showing it.
console.log(firstName.toUpperCase());
// We're showing how many letters are in 'firstName' (including the exclamation mark)
console.log(firstName.length);
// Now we change 'firstName' to 'Abigail'
firstName = "Abigail";
// Again, we're making the new name uppercase and showing it
console.log(firstName.toUpperCase());
// Finally, we're showing how many letters are in 'Abigail'
console.log(firstName.length);



/*any*/
// We’re making a variable called 'guess', but we’re not putting anything in it yet
let guess;
// Now we set 'guess' to the word "blue"
guess = "blue";
// We change 'guess' to the number 9
guess = 9;
// Finally, we show whatever is in 'guess' (which is now the number 9)
console.log(guess);


/*Variable Type Annotations*/
// We’re making a box called 'phoneNumber' to store a phone number as text
let phoneNumber: string;
// Now we’re putting the number "984384564" in the box
phoneNumber = "984384564";
// We’re flipping a coin (random number) to decide which phone number to use
if (Math.random() > 0.5) {
  // If the random number is bigger than 0.5, we pick this phone number
  phoneNumber = "+61770102062";
} else {
  // If the random number is 0.5 or smaller, we pick this phone number
  phoneNumber = "7167762323";
}
// Now we show which phone number got picked
console.log(phoneNumber);





/*contact list*/
// We’re making a list (array) called 'contacts' with three people in it.
// Each person has a name, age, and street they live on
let contacts =[
    {name: "Steve", age: 34, 
    street: "Avenue 37"},
  
    {name: "Elene",
    age: 47,
    street: "Corner 29"},
  
    {name: "Kirby",
    age: 27,
    street: "Everest 97"}
  ];
  // We’re showing the name of the third person (Kirby) in the list
  console.log(contacts[2].name);
  // We’re showing how many people are in the 'contacts' list
  console.log("Number of contacts:", contacts.length);

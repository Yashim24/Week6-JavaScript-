//No. 1
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

//No.2

let email = "";

if (email) {
    console.log("Login successful");
} else {
    console.log("Please enter your email!");
}

//No.3

//For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//No.4
//While Loop


let i = 1;

while (i <= 5) {
    console.log("Bagwam Emmanuel Peter");
    i++;
}

//No.5
//Arrays and Loops


let names = ["Paracetamol", "Prazequantel", "Ciproflozacin", "P.Alazin", "Amoxicillin"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//No.6
//Accessing Array Elements


let languages = ["HTML", "CSS", "JavaScript", "React"];

console.log(languages[2]);

//No.7
//Working with Objects

let student = {
    firstName: "Emmanuel",
    middleName: "Peter",
    lastName: "Bagwam",
    score: 85
};

console.log(student.firstName);
console.log(student.middleName);
console.log(student.lastName);
console.log(student.score);

//No.9
//Logical OR (||)
//Question: Check whether at least one contact method is available.

let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
    console.log('Contact information provided');
} else {
    console.log('No contact information');
}

//No. 10
//Equality Operators (== and ===)
//Question: Compare the string '1234' with the number 1234 using both operators.


let password = '1234';

console.log(password == 1234);
console.log(password === 1234);
// Functions - Provide reusable code!

// Methods are Built-in functions!

// Function declaration syntax

//function sum() {
//  return 2 + 2;
//}
//console.log(sum());



//function sum(num1, num2) {
//    return num1 + num2;
//}
//console.log(sum(2, 6));

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(5, 10));


function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"))
};
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));

// Anonymous Function

const getUserNameFromEmail2 = function (email) {
    return email.slice(0, email.indexOf("@"))
}
console.log(getUserNameFromEmail2("Cerome@Rebirth.com"));

// Arrow Function

const getUserNameFromEmail3 = (email) => {
    return email.slice(0, email.indexOf("@"))
}
console.log(getUserNameFromEmail3("Don@TechNocrat.com"));



////
const toPropercase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toPropercase("sErOmE"));
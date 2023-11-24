//Question :-1 :-creat a variable of type string and try to add a number to it.
let a = "tulsi";
let b = 100;
console.log(a + b); // output :- tulsi100

//Question :-2 :- use typeof operater to find the datatype of the string in last question
console.log(typeof (a + b));//output :-string

//Question :-3 :-creat a const object in javacsript can you changr it to hold a number later
const c ={
    name : "harry",
    section : 1,
    principal : false
}
//c = 54;//output :- we can not change its value directly cause of const

//Question :-4 :-Try to add a new key to the const object in problem 3 were you able to do it
c["friend"] = "shubham"
c["name"] = "lovish"

console.log(c);

//Question :-5 :-write a js program to creat a word-meaning dictionary of 5 words
const dict = {
    appreciate : "recognize the full worth of.  ",
    ataraxia : "a state of freedom from emotional disturbunce and anxiety.",
    yakka : "work,especially hard work."
}
console.log(dict); //or dict.yakka or dict["yakka"]
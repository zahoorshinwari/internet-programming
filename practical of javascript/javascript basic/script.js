// ES5 java script (the java script which are before the 2015)
// ES6 hava script (the java script that are after 2015 comes)
// vanilla javascript(the javascript that are use without any libraries)




// variables
// when the value is changing then it is variables
// rules for variables
// 1. spaces are not allowed
// 2. special characters are not allowed
// 3. cannot start with number
// 4. reserve words cannot be used as a variable name
// 5. redeclearation is not allowed
// 6. they are case sensitive
// 7. camel case = empSalary , monthlySalary
// 8. snake case = emp_salary, monthly_salary





// variable declaration
// explicit declaration
// first define type then name and then assign value
// eg.
// int a;
// a = 20;
// (java , c++ , c#) can use this decleration




// implicit decleration  (js, php , python)
// var a = 10;
// var b = 10.5;
// var c = "x";
// var name = 'testing';
// var marks = [34,245,543,567,32];
// var obj = {
//     // name is node or key and zahoor is value
//     name: "zahoor",
//     rollNo: 88,
//     gpa: 3.7,
//     courses: ["c++, " , "java", "python"],
//     address: {
//         village: "landikotal"
//     }
// }






// variable types
// var
// it can be redeclare
// scope is not define (can be accessed globally)
// this is an es5 javascript


// let
// it can't be redeclare
// scope is defined only in the block


// const 
// const is used when it has no changes
// const is more usable









// objects
// it is a variable which can store multiple type data


const person = [{
    name: "zahoor", 
    rollno: "88",
    gpa: 2,
    courses: ["python" , "c++", "java"],
    isProgrammer: false,
    address: {
        tehsil: "khyber",
        district: "landikotal",
        village : "mirdad khel",
    }

},
{
    name: "aqib", 
    rollno: "34",
    gpa: 2.7,
    courses: ["c#" , "ruby", "rust"],
    isProgrammer: false,
    address: {
        tehsil: "peshwar",
        district: "peshawar",
        village : "dubai",
    }

},
{
    name: "arham", 
    rollno: "62",
    gpa: 2.8,
    courses: [".net" , "visual c++", "java"],
    isProgrammer: true,
    address: {
        tehsil: "khyber",
        district: "fr kohat",
        village : "dara adam khel",
    }

},
{
    name: "jawad", 
    rollno: "45",
    gpa: 3.0,
    courses: ["python" , "php", "javascript"],
    isProgrammer: true,
    address: {
        tehsil: "bara",
        district: "bara1",
        village : "sarokhel",
    }

}]

// average gpa 
let sum = 0;
for(let i = 0; i < person.length; i++){
        sum += person[i].gpa;
    }
    console.log(sum / person.length);



// if(person.isProgrammer){
//     console.log(person.gpa);
// }
// else{
//     console.log("not programmer")
// }






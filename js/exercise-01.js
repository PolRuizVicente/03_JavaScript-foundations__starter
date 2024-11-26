
/* 
    1. Create a variable called 'name' that points at a string containing your name
    2. Define function 'updateValue', which receives a value and updates variable 'name'
    3. On the next line, call function 'updateValue' with your favourite musician's name
      Log 'name' value.
    4. On the next line, call function 'updateValue' with value 'true'
      Log 'name' value.
    5. On the next line, call function 'updateValue' value '28'
      Log 'name' value.

*/
=======

let myName = "John Doe";

function updateValue(value) {
    myName = value;
}

updateValue("Freddie Mercury");
console.log(myName);

updateValue(true);
console.log(myName);

updateValue(28);
console.log(myName);
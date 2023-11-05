//Easy:

function exercise(workout){
    return "Today's exersice: "+workout;
}

console.log(exercise('Running'));
console.log(exercise('Swimming'));
console.log(exercise('Dancing'));
console.log(exercise('Fencing'));

//Medium:

function sharePizza(slices, ppl){
    let share = slices/ppl;
    share = share.toFixed(2); //round to 2 decimal places
    return `Each person gets ${share} slices of pizza, from our ${slices} slice pizza`
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));

//Hard: 

var patient2 = {
    getName: function(){
        return 'John';
    },
    getSSN: function(){
        return '123-45-6789';
    }
}

console.log(patient2.name);
console.log(patient2.SSN);
console.log(patient2.getName());
console.log(patient2.getSSN());

//Very Hard: 

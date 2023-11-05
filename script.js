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

class Person {
    constructor(name, job, age) {
        this.pName = name;
        this.job = job;
        this.age = age;
    }

    exercise(){
        console.log("Running is fun!");
    }

    fetchJob(){
        console.log(this.pName + " is a " + this.job+".");
    }
}

class Programmer extends Person {

    constructor(name, job, age, langs) {
        super(name, job, age);
        this.pLangs = langs;
    }

    learnLanguage(lang){
        this.pLangs.push(lang);
    }

    listLanguage(){
        return this.pLangs;
    }
  }


const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();

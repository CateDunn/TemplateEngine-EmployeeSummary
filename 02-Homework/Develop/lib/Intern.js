// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

var inquirer = require("inquirer");
var Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school  
    }
    
    getSchool(){
        inquirer 
        .prompt({
            type: "input",
            message:"What is their school?",
            name: "school"
        })
        

    }

    getRole(){
        console.log('Intern')
        return('Intern')
    }
}


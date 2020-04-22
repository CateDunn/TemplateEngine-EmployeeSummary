// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

var inquirer = require("inquirer");
var Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber    
    }
    
    get officeNumber(){
        inquirer 
        .prompt({
            type: "input",
            message:"What is their office number?",
            name: "officeNumber"
        })
        
    }
    getRole(){
        console.log('manager')
        return('Manager')
    }
}


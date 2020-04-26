// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

var inquirer = require("inquirer");
var Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber    
    };

    //returns office number
    get officeNumber(){
        return(this.officeNumber)
    };

    //returns Manager role
    getRole(){
        return('Manager')
    };
}

module.exports = Manager;

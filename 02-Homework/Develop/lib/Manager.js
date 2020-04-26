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

    team() {
        return `
        <div class="col-lg-4">
            <div class="teamRoster card text-center">
                <div class="card-header">
                    ${this.name} <br>
                    Manager
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email} </li>
                        <li class="list-group-item">Office Number: ${this.officeNumber} </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    //returns Manager role
    getRole(){
        return('Manager')
    };
}

module.exports = Manager;

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

var inquirer = require("inquirer");
var Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub,){
        super(name, id, email);
        this.gitHub = gitHub   
    }



    getGithub(){
        inquirer 
        .prompt({
            type: "input",
            message:"What is the Github Username?",
            name: "gitHub"
        })
        

    }
    
    getRole(){
        console.log('Engineer')
        return('Engineer')
    }
}



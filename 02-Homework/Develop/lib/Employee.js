// TODO: Write code to define and export the Employee class

var inquirer = require("inquirer");

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;  
    }

    getName(){
        inquirer 
        .prompt({
            type: "input",
            message:"What is the name?",
            name: "name"
        })
        

    }

    getId(){
        inquirer 
        .prompt({
            type: "input",
            message:"What is the ID",
            name: "id"
        })
        

    }

    getEmail(){
        inquirer 
        .prompt({
            type: "input",
            message:"What is the email?",
            name: "email"
        })
        

    }

    getRole(){
        console.log("Employee")
        return("Employee")
        
    }
}




module.exports = Employee;



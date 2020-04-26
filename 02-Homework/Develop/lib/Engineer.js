// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

var Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub,){
        super(name, id, email);
        this.gitHub = gitHub   
    };

    //returns github username
    getGithub(){
        return(this.gitHub)
    
    };
    
    //returns Engineering role
    getRole(){
        return('Engineer')
    }
}

module.exports = Engineer;


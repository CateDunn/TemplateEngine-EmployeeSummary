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

    team() {
        return `
        <div class="col-lg-4">
            <div class="teamRoster card text-center">
                <div class="card-header">
                    ${this.name} <br>
                    Engineer
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email} </li>
                        <li class="list-group-item">GitHub: ${this.github} </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
    
    //returns Engineering role
    getRole(){
        return('Engineer')
    };

    
}

module.exports = Engineer;


// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

var Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school  
    };
    
    //returns school
    getSchool(){
        return(this.school)
    };


    team() {
        return `
        <div class="col-lg-4">
            <div class="teamRoster card text-center">
                <div class="card-header">
                    ${this.name} <br>
                    Intern
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email} </li>
                        <li class="list-group-item">School: ${this.school} </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    };
    //returns intern role
    getRole(){
        return('Intern')
    }
}

module.exports = Intern;

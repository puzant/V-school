var employee = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name,
    this.jobTitle = jobTitle,
    this.salary = salary,
    this.status = 'full time'   
    this.printEmployeeForm = function() {
        console.log(this.name,
                    this.jobTitle,
                    this.salary,
                    this.status)
   }
}


//create the objects
var emp1 = new Employee('james', 'web developer', 3000, 'part time');
var emp2 = new Employee('mary', 'dentist', 2500);
var emp3 = new Employee('joe', 'doctor', 2500, 'contract');

employee.push(emp1, emp3, emp3);

// console.log(employee);
emp1.printEmployeeForm();
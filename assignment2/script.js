let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("dept").value;

    // employees.push({ name, empid, salary, department });

    if(name === "" || id === "" || isNaN(salary) || department === "") {
        alert("Please fill all the fields properly.");
        return;
    }
    // displayEmployees();


 let employee = {
    name: name,
    id: id,
    salary: salary, 
    department: department
};  
 
employees.push(employee);
alert("Employee added successfully!");

document.getElementById("name").value = "";
document.getElementById("id").value = "";
document.getElementById("salary").value = "";
document.getElementById("dept").value = "";
}



function displayEmployees() {
   let output = "Employee List:<br><hr>";
    employees.forEach((emp) => {
        output += `
        Name: ${emp.name} <br>
        Employee ID: ${emp.id} <br>
        Salary: ₹${emp.salary} <br>
        Department: ${emp.department} <br><hr>
        `;
    });
}

function filterSalary(){
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "Employees with Salary greater than ₹50,000:<br><hr>";
    filtered.forEach((emp) => {
        output += `
        Name: ${emp.name} <br>
        Employee ID: ${emp.id} <br>
        Salary: ₹${emp.salary} <br>
        Department: ${emp.department} <br><hr>
        `;
    });
    document.getElementById("output").innerHTML = output;
}


function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `Total Salary of all Employees: ₹${total}`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees to calculate average salary.";
        return;
    }
    let average = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
    document.getElementById("output").innerHTML = `Average Salary of all Employees: ₹${average.toFixed(2)}`;
}

function countByDepartment() {
    let deptName =  prompt("Enter Department Name:");
    let count = employees.filter(emp => emp.department.toLowerCase() === deptName.toLowerCase()).length;
    document.getElementById("output").innerHTML = `Number of Employees in ${deptName} Department: ${count}`;
}

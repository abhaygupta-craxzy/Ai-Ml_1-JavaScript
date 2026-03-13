let employees = JSON.parse(localStorage.getItem("employees")) || [];
let editIndex = -1;

saveAndRender();

// Add or Update Employee
function addEmployee() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let salary = parseFloat(document.getElementById("salary").value);
  let dept = document.getElementById("dept").value;

  if (!name || !id || !salary || !dept) {
    alert("Fill all fields");
    return;
  }

  let emp = { name, id, salary, department: dept };

  if (editIndex === -1) employees.push(emp);
  else {
    employees[editIndex] = emp;
    editIndex = -1;
  }

  clearInputs();
  saveAndRender();
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("dept").value = "";
}

// Save to LocalStorage + render
function saveAndRender() {
  localStorage.setItem("employees", JSON.stringify(employees));
  displayEmployees();
}

// Create Cards
function createCards(list) {
  if (list.length === 0) {
    document.getElementById("output").innerHTML =
      "<div class='stat'>No Data</div>";
    return;
  }

  let html = list.map((emp, i) => `
    <div class="emp-card">
      <h3>${emp.name}</h3>
      <p><b>ID:</b> ${emp.id}</p>
      <p><b>Salary:</b> ₹${emp.salary}</p>
      <p><b>Dept:</b> ${emp.department}</p>

      <button class="edit" onclick="editEmployee(${i})">Edit</button>
      <button onclick="deleteEmployee(${i})">Delete</button>
    </div>
  `).join("");

  document.getElementById("output").innerHTML = html;
}

// Display All
function displayEmployees() {
  createCards(employees);
}

// Delete
function deleteEmployee(i) {
  employees.splice(i, 1);
  saveAndRender();
}

// Edit
function editEmployee(i) {
  let emp = employees[i];

  document.getElementById("name").value = emp.name;
  document.getElementById("id").value = emp.id;
  document.getElementById("salary").value = emp.salary;
  document.getElementById("dept").value = emp.department;

  editIndex = i;
}

// Search
function searchEmployee() {
  let text = document.getElementById("search").value.toLowerCase();

  let filtered = employees.filter(e =>
    e.name.toLowerCase().includes(text)
  );

  createCards(filtered);
}

// Filter Salary
function filterSalary() {
  createCards(employees.filter(e => e.salary > 50000));
}

// Total Salary
function totalSalary() {
  let total = employees.reduce((s, e) => s + e.salary, 0);

  document.getElementById("output").innerHTML =
    `<div class="stat">Total Salary: ₹${total}</div>`;
}

// Average Salary
function averageSalary() {
  if (employees.length === 0) return;

  let total = employees.reduce((s, e) => s + e.salary, 0);
  let avg = total / employees.length;

  document.getElementById("output").innerHTML =
    `<div class="stat">Average Salary: ₹${avg.toFixed(2)}</div>`;
}

// Count Department
function countDepartment() {
  let dept = prompt("Enter department:");

  let count = employees.filter(e =>
    e.department.toLowerCase() === dept.toLowerCase()
  ).length;

  document.getElementById("output").innerHTML =
    `<div class="stat">${dept}: ${count} employees</div>`;
}
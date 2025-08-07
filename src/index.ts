import { students, Student } from "./student.js";
const content = document.querySelector("#content") as HTMLElement;
const addButton = document.querySelector("#addStudent") as HTMLElement;

function ShowStudents(): void {
  let info = document.createElement("p");

  if (students.length < 1) {
    info.innerText = "Listan är tom";   // Om det är färre än 1 student, visa då texten ''listan är tom''
    content.appendChild(info);
  }
// Loopar igenom listan och skapat ett p-element vid varje loop & sedan infogar den innehållet från listan in i p-tagen
students.forEach(student => { 
    let studentInfo = document.createElement("p");
    studentInfo.innerText = `${student.name} (${student.age} år) - ${student.isActive ? "Aktiv" : "Inaktiv"}`;
    studentInfo.classList.add(student.isActive ? "active" : "inactive");
    content.appendChild(studentInfo);
});
}

//lägg till en student i array när knappen är tryckt
function addStudent(): void {
    const newStudent: Student = {name: "Robert", isActive: true, age: 22};
    students.push(newStudent);
    console.log(students);    
}

ShowStudents();
addButton?.addEventListener("submit", addStudent);

import { students, Student } from "./student.js";
const content = document.querySelector("#content") as HTMLElement;
let addButton = document.querySelector<HTMLButtonElement>("#addButton");
const newStudent: Student = { name: "Robert", isActive: true, age: 22 };

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

//lägg till en student i array när knappen är tryckt en gång
function addStudent(): void {
  //uppdatera students array med en ny student
  students.push(newStudent);
  //skapa ett nytt p element och infoga innehållet av newStudent
  const addedStudent = document.createElement("p");
  addedStudent.innerText = `${newStudent.name} (${newStudent.age} år) - ${newStudent.isActive ? "Aktiv" : "Inaktiv"}`;
  addedStudent.classList.add(newStudent.isActive ? "active" : "inactive");
  content.appendChild(addedStudent);
  //avaktivera knappen efter att newStudents har lagts till i listan
  addButton?.setAttribute("disabled", "");
}

ShowStudents();
addButton?.addEventListener("click", addStudent);

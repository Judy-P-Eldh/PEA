import { students } from "./student.js";
const content = document.querySelector("#content") as HTMLElement;
console.log(content);

function ShowStudents(): void {
  console.log(students);

  if (students.length < 1) {
    let info = document.createElement("p");
    info.innerText = "Listan är tom";
    console.log("vi kommer hit");
    content.appendChild(info);
  }
}

ShowStudents();

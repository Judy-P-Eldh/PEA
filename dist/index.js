import { students } from "./student.js";
var content = document.querySelector("#content");
function ShowStudents() {
    var info = document.createElement("p");
    if (students.length < 1) {
        info.innerText = "Listan är tom"; // Om det är färre än 1 student, visa då texten ''listan är tom''
        content.appendChild(info);
    }
    // Loopar igenom listan och skapat ett p-element vid varje loop & sedan infogar den innehållet från listan in i p-tagen
    students.forEach(function (student) {
        var namn = document.createElement("p");
        namn.innerText = student.name;
        namn.classList.add(student.isActive ? "active" : "inactive");
        content.appendChild(namn);
    });
}
ShowStudents();
//# sourceMappingURL=index.js.map
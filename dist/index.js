import { students } from "./student.js";
var content = document.querySelector("#content");
console.log(content);
function ShowStudents() {
    console.log(students);
    if (students.length < 1) {
        var info = document.createElement("p");
        info.innerText = "Listan är tom";
        console.log("vi kommer hit");
        content.appendChild(info);
    }
}
ShowStudents();
//# sourceMappingURL=index.js.map
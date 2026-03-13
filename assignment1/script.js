function calculate() {
    let subjects = parseInt(document.getElementById("subjects").value);
    let total = 0;
    for (let i = 1; i <= subjects; i++) {
        let marks = parseFloat(prompt(`Enter marks for subject ${i}:`));
        total += marks;

    }
   


// let total = 0;
let average = total / subjects;
let grade = "";

if (average >= 90) {
    grade = "A";
}
else if (average >= 80) {
    grade = "B";
}
else if (average >= 70) {
    grade = "C";
}
else {
    grade = "D";
}


if (average <= 40) {
    grade = "Fail";
}

let result = document.getElementById("result").innerHTML ="Total Marks: " + total + "<br>Average Marks: " + average + "<br>Grade: " + grade;

}

// const $text = document.getElementById("text")
// console.dir($text);
// console.dir($text.innerText);


// function fetchData() {
//     const data = fetch("https://reqres.in/api/users?page=2")
//     console.log("data", data);
//     data.then(function (response) {
//         console.log("response", response);
//         const result = response.json()
//         console.log("result", result);
//         result.then(function (value) {
//             console.log("value", value);
//         })
//     },
//         function (reason) {
//             console.log("reason", reason);
//         }
//     )
// }

// fetchData()

// const $ul = document.getElementById("list")

// async function fetchData() {
//     const data = await fetch("https://reqres.in/api/users?page=2")
//     console.log("data", data);
//     const response = await data.json()
//     console.log(response);
//     renderUI(response)
// }

// fetchData()

// function renderUI(response){
//     response.data.forEach(item => {
//         let li = document.createElement("li")
//         $ul.appendChild(document.createElement("li").appendChild(document.createTextNode(item.id)))
//         $ul.appendChild(document.createElement("li").appendChild(document.createTextNode(item.email)))
//         $ul.appendChild(li)
//     });
// }

const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jeennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
]

averageClass()
function averageClass() {
    let total = 0
    const classLength = grades.length

    grades.forEach(function ({ name, grade, sex }) {
        total += grade;
    })
    return Math.ceil(total / classLength)
}
console.log(`a Thứ hạng trung bình của cả lớp là: ${ averageClass() }`);


averageM()
function averageM() {
    var maleGradesSum = 0;
    var maleCount = 0;
    grades.forEach(function ({ name, grade, sex }) {
        if (sex === 'M') {
            maleGradesSum += grade;
            maleCount++;
        }
    })
    return averageMaleGrade = maleGradesSum / maleCount;
}
console.log(`b Thứ hạng trung bình của Nam là: ${ averageM() }`);

averageF()
function averageF() {
    var FemaleGradesSum = 0;
    var FemaleCount = 0;
    grades.forEach(function ({ name, grade, sex }) {
        if (sex === 'F') {
            FemaleGradesSum += grade;
            FemaleCount++;
        }
    })
    return averageMaleGrade = FemaleGradesSum / FemaleCount;
}
console.log(`c Thứ hạng trung bình của Nu là: ${ averageF() }`);

MaxM()
function MaxM() {
    var highestMaleGrade = 0;
    grades.forEach(function ({ name, grade, sex }) {
        if (sex === 'M' && grade > highestMaleGrade) {
            highestMaleGrade = grade;
        }
    })
    return highestMaleGrade;
}
console.log(`d Thứ hạng Max của Nam là: ${ MaxM() }`);

MaxF()
function MaxF() {
    var highestMaleGrade = 0;
    grades.forEach(function ({ name, grade, sex }) {
        if (sex === 'F' && grade > highestMaleGrade) {
            highestMaleGrade = grade;
        }
    })
    return highestMaleGrade;
}
console.log(`e Thứ hạng Max của Nu là: ${ MaxF() }`);


MinM()
function MinM() {
    var MinMaleGrade = Infinity;
    grades.forEach(function ({ name, grade, sex }) {
        if (sex === 'M' && grade < MinMaleGrade) {
            MinMaleGrade = grade;
        }
    })
    return MinMaleGrade;
}
console.log(`f Thứ hạng Min của Nam là: ${ MinM() }`);

MinFM()
function MinFM() {
    var MinFeMaleGrade = Infinity;
    grades.forEach(function ({ name, grade, sex }) {
        if (sex === 'F' && grade < MinFeMaleGrade) {
            MinFeMaleGrade = grade;
        }
    })
    return MinFeMaleGrade;
}
console.log(`g Thứ hạng Min của Nu là: ${ MinFM() }`);


MaxGradeClass()
function MaxGradeClass() {
    var maxGrade = 0;
    grades.forEach(function ({ name, grade, sex }) {
        if (grade > maxGrade) {
            maxGrade = grade;
        }
    })
    return maxGrade;
}
console.log(`h Thứ hạng cao nhất của cả lớp là: ${ MaxGradeClass() }`);


MinGradeClass()
function MinGradeClass() {
    var minGrade = Infinity;
    grades.forEach(function ({ name, grade, sex }) {
        if (grade < minGrade) {
            minGrade = grade;
        }
    })
    return minGrade;
}
console.log(`i Thứ hạng thap nhất của cả lớp là: ${ MinGradeClass() }`);

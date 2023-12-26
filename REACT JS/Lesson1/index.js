// console.log(username);
// let username = "do huu minh";
// console.log(username);

// {
//     username = "chu hong ngoc"
// }



// username = "trương công tài"

// console.log(username);


/**
 * 
 * var, let: được phép gán lại giá trị của biến
 * const: k được phép gán lại giá trị cho biến
 * var, let: chỉ cần khai báo không cần khởi tạo
 * const: bắt buộ phải gán giá trị tại thời điểm khai báo
 * var,let: không có block scope
 * const: K được phép gán lại giá trị mới cho nó
 * var: move cái khai báo lên đầu chương trình, gán gtri undefined
 * let, const: k được sử dụng biến trước khi khai báo
 * 
 */


/**
 * 
 * global scope - window
 * block scope
 * funtion scope
 */

// scope
// var lastName = "tuan"

function logger() {
    console.log(lastName);
}
// logger()

function parent() {
    let firstName = "john"
}
// console.log(firstName);

{
    let firstName = "tuan anh"
}
// console.log(firstName)

for (let i = 0; i < 10; i++) {
    let firstName = "chu ba tuan"
}

// console.log(firstName);

const object = {
    firstName: "Nguyen",
    lastName: "Dung",

    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(object.fullName());

const person = {
    firstName: "nguyen",
    lastName: "a",
    age: 20
    };

    console.log(person.firstName)
    console.log(person.lastName)
    console.log(person.age)


let fullName = "Nguyễn Dũng"
let age = 23;

let String = `Tôi tên là ${fullName}, năm nay ${age} tuổi, không ế!`;
console.log(String);

let a = 5;
let b = 20;

let s = `Tổng của ${a} và ${b} là ${a + b}`;

console.log(s);

const arr = [2,4,6,8,10]
const arr2 = [...arr]
const arr3 = [5,7,9]
console.log(arr2);
const arr4 = [...arr2, ...arr3]
console.log(arr4);



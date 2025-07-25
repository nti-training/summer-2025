// Person   : id, name, address, email, department, phone,
// Student  : courses, level, gpa
// Staff    : courses, salary
// Employee :  salary

class Person {
    constructor(id, name, address, email, department, phone) {
        this.id = id
        this.name = name
        this.address = address
        this.email = email
        this.department = department
        this.phone = phone

        console.log('Person Instance Created');

    }

    displayBasicInfo() {
        console.log(`
            id : ${this.id}
            name : ${this.name}
            `);

    }

    changeEmail(newEmail) {
        this.email = newEmail
    }
}

class Student extends Person {
    constructor(id, name, address, email, department, phone, courses, level, gpa) {
        super(id, name, address, email, department, phone)
        this.courses = courses
        this.level = level
        this.gpa = gpa

        console.log('Student Instance Created');

    }

    getGpa() {
        return this.gpa
    }
}

class Employee{

}

// class Staff extends Employee {

// }

class Staff2 extends (Person, Employee){

}

const student1 = new Student(1, 'ahmed', 'MNF', 'a@a.com', 'IS', '0356974', ['Java', 'Data Structure'], 3, 3.8)
const Person1 = new Person(1, 'ahmed', 'MNF', 'a@a.com', 'IS', '0356974')



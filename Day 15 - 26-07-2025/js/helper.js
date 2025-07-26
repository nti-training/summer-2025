const Users = [{
    id: 100,
    fullName: "Ali Ahmed",
    email: "ali@gmail.com",
    gender: "male",
    phone: "123456",
    skills: ["HTML", "CSS"],
    dob: "1990-07-03",
    password: "4695"

},]

const skills = []

function isLettersOnly(str) {
    return /^[A-z]+$/.test(str);
}

function isPropertyDuplicated(value, proprty, users) {
    for (const user of users) {
        if (value == user[proprty]) {
            return true;
        }
    }
    return false;
}




function invalidElement(element, message) {
    element.textContent = message
    element.classList.remove('valid-feedback', 'text-success')
    element.classList.add('show', 'invalid-feedback', 'text-danger')
}
function validElement(element, message) {
    element.textContent = message
    element.classList.remove('invalid-feedback', 'text-danger')
    element.classList.add('show', 'valid-feedback', 'text-success')
}
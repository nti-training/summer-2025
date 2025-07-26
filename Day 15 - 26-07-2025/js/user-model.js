class User {
    static counter = 0
    constructor(firstName, lastName, email, phone, gender, skills, dob, password){
        this.id = ++User.counter
        this.fullName= `${firstName} ${lastName}`
        this.email = email
        this.phone= phone
        this.gender = gender
        this.skills = skills
        this.dob = dob
        this.password = password
    }
}

// Logic
registerForm.addEventListener('submit', registerFormhandler)

firstNameInput.addEventListener('keyup', function () {
    nameHandler(this, firstNameValidate)
})
lastNameInput.addEventListener('keyup', function () {
    nameHandler(this, lastNameValidate)
})

emailInput.addEventListener('keyup', function () {
    emailHander(emailInput, Users, emailValidate)
})

phoneInput.addEventListener('keyup', function () {
    phoneHander(phoneInput, Users, phoneValidate)
})

skillsInputs.forEach(input => {
    input.addEventListener('change', function () {
        // console.log(input.value)
        if (input.checked) {
            skills.push(input.value)
            console.log(skills);
        } else {
            const idx = skills.indexOf(input.value)

            if (skills.includes(input.value)) { 
                skills.splice(idx, 1) 
            }
            console.log(skills);  
        }
    })
})





// Select Items
 const registerForm = document.getElementById('form-register')
 const firstNameInput = document.getElementById('fname-input')
 const firstNameValidate = document.getElementById('fname-validate')
 const lastNameInput = document.getElementById('lname-input')
 const lastNameValidate = document.getElementById('lname-validate')
 const emailInput = document.getElementById('email-input')
 const emailValidate = document.getElementById('email-validate')
 const phoneInput = document.getElementById('phone-input')
 const phoneValidate = document.getElementById('phone-validate')

 const skillsInputs = document.querySelectorAll('.skills') 

function registerFormhandler(event){
    event.preventDefault();
    if (isLettersOnly(firstNameInput.value) && isLettersOnly(lastNameInput.value) && !isPropertyDuplicated(emailInput.value,'email',Users)){
        const user = new User(firstNameInput.value, lastNameInput.value, emailInput.value, phoneInput.value, 'male', skills, '2001-01-01','ajkd')
        Users.push(user)
        console.log(Users);
        

    }else{
        console.log('email or phone duplicated');
        
    }

    
}

function nameHandler (input, validate){
    if (isLettersOnly(input.value)){
        validElement(validate, 'valid name')
    }else{
        invalidElement(validate, 'invalid name')
    }
}

function emailHander(input, users, validate) {
    if (isPropertyDuplicated(input.value, 'email', users)) {
        invalidElement(validate, 'email alrady exists')
    } else {
        validElement(validate, 'valid email')
    }
}

function phoneHander(input, users , validate){
    if (isPropertyDuplicated(input.value, 'phone', users)){
        invalidElement(validate, 'phone already exists.')
    }else{
        validElement(validate, 'valid phone')
    }
}

function skillsHandler(){
    skillsInputs.forEach(skillInput => {
        skillInput.addEventListener('change' , function(){
            console.log(this);
            
            if (this.checked){
                console.log(this);
            }else{
                // remove skill from arr
            }
        })
    })
}
// let age = parseInt(prompt("Enter Your age"))
// console.log(age , typeof(age));

// if(age >= votingAge){
    //     console.log("Congrats. You are allowed for voting.");
    // }else{
        //     console.log("Opps. You are not allowd for voting.");
        
        // }
        
const inputAge = document.getElementById("input-age")
const checkBtn = document.getElementById("btn-check")
const res = document.getElementById("res")
let msg ;
let votingAge = 18;


const firstName= "Ahmed";
const lastName = "Aymen";

const fullName = `${firstName} ${lastName}`
checkBtn.onclick = function(){
    let value = parseInt(inputAge.value)
    res.classList.add("d-block")
    res.classList.remove("d-none");
    if (value <= 0 || value >=100){
        res.classList.add("bg-warning")
        msg = "Age must be greater  than Zero and less than 100"

    }else if (value > votingAge){
        res.classList.add("bg-success")
        res.classList.remove("bg-danger", "bg-warning");
        msg = "Congrats. You are allowed for voting."
    }else{
        res.classList.add("bg-danger")
        res.classList.remove("bg-success", "bg-warning")
        msg = "Opps. You are not allowd for voting."
        
    }
    console.log(`Welcome ${fullName}
    ${msg}
    `);
    
    res.innerText = `Welcome ${fullName}
    ${msg}
    `;
}


console.log("End of Program");


const firstInput =  document.getElementById("first-input")
const secondInput =  document.getElementById("second-input")
const operatorInput =  document.getElementById("operator-input")
const plusBtn = document.getElementById('plus-btn')
const resScreen = document.getElementById('res-div')
const caseBtn = document.getElementById('case-btn')

plusBtn.onclick = function(){
    const res = parseFloat(firstInput.value) + parseFloat(secondInput.value)
    resScreen.innerText = res;
    resScreen.classList.remove("d-none")
    resScreen.classList.add("d-block" , "bg-success", "text-light")
}

caseBtn.onclick = function(){
    const operator = operatorInput.value;
    let res ;
    switch(operator){
        
        case '+':  // operator === '+'
            res = parseFloat(firstInput.value) + parseFloat(secondInput.value);
            // break;
        case '-':
            res = parseFloat(firstInput.value) - parseFloat(secondInput.value);
            // break;
        default:
            // code
            res = "not valid operator"
            break;
        
        case '/':
            if (parseFloat(secondInput.value) == 0){
                res ="Can't Divide by Zero";
            }else{
                res = parseFloat(firstInput.value) / parseFloat(secondInput.value);
            }
            break;
        
        
    }
    resScreen.innerText = res;
    resScreen.classList.remove("d-none")
    resScreen.classList.add("d-block" , "bg-success", "text-light")

}
// //  start, condition, change in the condition
// let i  = parseInt(prompt("Entert start")) // start
// let end  = parseInt(prompt("Entert start")) // start
// while (i <= end) { // condition
//     // code
//     console.log(i);



//     // change
//     i++
// }

// const usernames = ["ali", "ali1", "ali12"]
// let counter = 1
// let username = prompt("Enter username: ")
// while (usernames.includes(username) || username.length == 0) {
//     counter++
//     username = prompt(`${username} is already exists.\nEnter username: `)
//     if (counter == 4){
//         break;
//     }
// }

// if (counter <= 3){
//     usernames.push(username)
//     console.log(`${username} added successfully.`);
//     console.log(usernames);
// }else{
//     console.log("the valid attempts are consumed.");
// }
    
let c= 0
while(c <= 10){
    console.log("Start of iteration #", c);
    c++
    if (c%3 == 0){
        continue
        
    }
    console.log("Iteration #",c);
    console.log("End of iteration #", c);
    console.log("#".repeat(15));
    
}

// let r=1
// do{
//     console.log(r);
    
// }while(r <=5);
let array = [10,20,50,80]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
console.log('-'.repeat(15));


for (let item of array){
    console.log(item);
}
console.log('-'.repeat(15));

for (let item in array){
    console.log(item);
}

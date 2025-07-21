let x = 10
let global = 20;
function test(){
    console.log(`Global: ${global}`);
    global += 5
    console.log(`Global: ${global}`);
    
}

display()

function display(){
    // let x = 15
    let index ;
    for ( index = 0; index < 3; index++) {
        // console.log(index);
        let x = 20
        console.log(x);
        
        
    }

    console.log(index);
    
    
    console.log(`Global: ${global}`);
    global -= 3
    console.log(`Global: ${global}`);
}

test()
display()

// Ahmed M.Zahran

function manipulateName(first,middle,last){
    function manipulateFirst(name){
        return `${name[0].toLocaleUpperCase()}${name.slice(1).toLocaleLowerCase()}`
    }

    function manipulateMiddle(){
        return `${middle[0].toLocaleUpperCase()}.`
    }

    // let fn = manipulateFirst(first)
    // let md = manipulateMiddle()
    // let lt = manipulateFirst(last)
    return `${manipulateFirst(first)} ${manipulateMiddle()}${manipulateFirst(last)}`
}



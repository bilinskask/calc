// let anchorElems = document.querySelectorAll("a")

// anchorElems.forEach(elem =>{
//     elem.addEventListener("click", (e)=>{
//         // if(e.target.style.backgroundColor === "red"){
//         //     e.target.style.backgroundColor="green";
//         // }        
//         // else{
//         //     e.target.style.backgroundColor="red"
//         // }
//         e.target.style.backgroundColor = e.target.style.backgroundColor === "green" ? "red" : "green";
//     })
// })


let firstDigit = document.getElementById("firstdigit");
let secondDigit = document.getElementById("seconddigit");
let operators = document.querySelectorAll("button");
let result = document.getElementById("finalResult")

operators.forEach(operator =>{
    operator.addEventListener("click", (e) =>{
        switch(e.target.id){
        case "add":
        result.innerText = addNumbers()    
        //console.log(addNumbers())
        break;
        case "subtract":
        result.innerText = subtractNumbers()
        break;
        case "multiply":
        result.innerText = multiplyNumbers()
        break;
        case "divide":
        result.innerText = divideNumbers()
        break;
        case "modulus":
        result.innerText = modulusNumbers()
        break;
        case "clear":
        firstDigit.value = null;
        secondDigit.value = null;
        result.innerText = null;
        break;
        }    
    })
})


function addNumbers(){
    const result = Number(firstDigit.value) + Number(secondDigit.value)
    return result
}

function subtractNumbers(){
    const result = Number(firstDigit.value) - Number(secondDigit.value)
    return result
}

function multiplyNumbers(){
    const result = Number(firstDigit.value) * Number(secondDigit.value)
    return result
}

function divideNumbers(){
    const result = Number(firstDigit.value) / Number(secondDigit.value)
    return result
}

function modulusNumbers(){
    const result = Number(firstDigit.value) % Number(secondDigit.value)
    return result
}



let count = 0

let countEl = document.getElementById("count-el")




function add() {
    count += + 1
    countEl.innerText = count
}

function remove() {
    count += - 1
    if (count < 0) {
        count = 0
    }
    countEl.innerText = count
}

function save() {
    console.log(count)
}

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
    let pre = count + " - "
    saveEl.textContent += pre
    countEl.textContent = 0
    count = 0
}



/* 
 let username = "per"
let message = "you have three new message "

let mymessage = message + username + "!" 

console.log(mymessage)


let points = 100
let bonus ="100"

let total = points + bonus 

console.log(total) */


 




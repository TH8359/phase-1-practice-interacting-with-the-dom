let counter = document.getElementById("counter")
let number = 0
let likes = document.getElementsByClassName("likes")[0]
let numberOfLikes
let likedNumbers = []
let currentNumber = {number: numberOfLikes}
let pause = document.getElementById("pause")
let intervalOne
let paused = false

function startInterval() {
        intervalOne = setInterval(function() {
        if (!paused){
         number++
        counter.textContent = number
        likes.textContent = currentNumber[number]
        }
        }, 1000)
    
    }
        
    startInterval()


function minusClick(){
    number--
    counter.textContent = number
    likes.textContent = currentNumber[number]
}

function plusClick(){
    number++
    counter.textContent = number
    likes.textContent = currentNumber[number]
}

function heartClick(){
    if (likedNumbers.indexOf(number, 0) === -1){
        likedNumbers.push(number)
        currentNumber[number] = 0
    }

    currentNumber[number]++
    likes.textContent = currentNumber[number]
}

function pauseClick(){
    if (pause.textContent === "pause"){
    clearInterval(intervalOne)
    paused = true
    document.getElementById("minus").removeEventListener("click", minusClick)
document.getElementById("plus").removeEventListener("click", plusClick)
document.getElementById("heart").removeEventListener("click", heartClick)
pause.textContent = "resume"
    }else{
        paused = false
        startInterval()
document.getElementById("minus").addEventListener("click", minusClick)
document.getElementById("plus").addEventListener("click", plusClick)
document.getElementById("heart").addEventListener("click", heartClick)
pause.textContent = "pause"
    }
    }

document.getElementById("minus").addEventListener("click", minusClick)
document.getElementById("plus").addEventListener("click", plusClick)
document.getElementById("heart").addEventListener("click", heartClick)
document.getElementById("pause").addEventListener("click", pauseClick)

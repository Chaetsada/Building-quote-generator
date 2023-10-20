// fetch("https://type.fit/api/quotes")
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });

const btn = document.getElementById("btn");
const message = document.getElementById("message");
const numer = document.getElementById('number')


fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(data => {
            // const randomNumber = Math.floor(Math.random()*16);
            message.innerText = data.quote;
            number.innerText = data.id
        })
        .catch((error)=>{
            console.log("Error Fetching :", error.message);
    })


btn.addEventListener("click",()=>{
    fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(data => {
            // const randomNumber = Math.floor(Math.random()*16);
            message.innerText = data.quote;
            number.innerText = data.id
        })
        .catch((error)=>{
            console.log("Error Fetching :", error.message);
        })
})


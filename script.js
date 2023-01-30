let quoteArea = document.querySelector(".quote")
let authorName = document.getElementById('name')
let seacrhButton = document.getElementById("serach")
let soundBut = document.querySelector(".speech")
let copyBut = document.querySelector(".copy")

seacrhButton.addEventListener("click", apiCall)
//  making API call on button click
function apiCall() {
    seacrhButton.classList.add('loading')
    seacrhButton.innerText = "Loading Quote..."
    let xhrreq = new XMLHttpRequest();
    xhrreq.onload = function () {
        let jsonRes = JSON.parse(xhrreq.response);
        console.log(jsonRes);
        console.log(jsonRes.content)
        console.log(jsonRes.author)
        authorName.innerHTML = jsonRes.author
        quoteArea.innerHTML = jsonRes.content
        seacrhButton.innerText = "New Quote"
        seacrhButton.classList.remove('loading')
    };
    xhrreq.open("get", "https://api.quotable.io/random", true)
    xhrreq.send()
}

// clicking on sound button
soundBut.addEventListener("click", () => {
    // SpeechSynthesisUtterance is a web based api that represent speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteArea.innerHTML} by ${authorName.innerHTML}`);
    // speech method
    speechSynthesis.speak(utterance)
})

// clicking on sound button
copyBut.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteArea.innerHTML)
})



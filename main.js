// https://meme-api.com/gimme/"subreddit"

const genBtn = document.querySelector(".meme-gen-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector("img");
const memeA = document.querySelector(".meme-a");
const inputEI = document.getElementById("input");
const formEI = document.querySelector("form");
const subR = document.querySelector(".sub");

let inputData = "";

function updateDetails(url, title, author){
    subR.innerHTML = `r/${inputData}`;
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeA.innerHTML = `Meme by : ${author}`;
};

async function genMeme(){
    inputData = inputEI.value;
    const url = `https://meme-api.com/gimme/${inputData}`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author)
    });
    genBtn.style.display = "inline";
    memeImg.style.width = "90%";
};

formEI.addEventListener("submit", (event) =>{
    event.preventDefault();
    genMeme();
});

genBtn.addEventListener("click", () =>{
    genMeme();
});

console.log(inputData);
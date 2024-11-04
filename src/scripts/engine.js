const emojis = [
    "🐶", "🐶", "🐱", "🐱", "🐭", "🐭", "🐹", "🐹", "🐰", "🐰", "🦊", "🦊", "🐻", "🐻", "🐼", "🐼"];
let openCards = [];

let shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 2: -1);

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.classList.add("item");
    box.onclick = handleClick;
    box.innerHTML = shuffledEmojis[i];

    document.querySelector(".game").appendChild(box);
}

function handleClick () {
    if(openCards.length < 2) {
        this.classList.add("open");
        openCards.push(this);
    }

    if(openCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML !== openCards[1].innerHTML) {
        openCards[0].classList.remove("open");
        openCards[1].classList.remove("open");
    } else {
        openCards[0].classList.add("match");
        openCards[1].classList.add("match");
    }

    if(document.querySelectorAll(".match").length === emojis.length) {
        alert("Você venceu!");
    }

    openCards = [];
}
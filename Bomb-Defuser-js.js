let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let counter = 10;

let textId = setInterval(function() {
    counter = counter - 1;
    timerEl.textContent = counter;
    if (counter === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(textId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(Event) {
    let defuserElVal = defuserEl.value;
    if (Event.key === "Enter" && defuserElVal === "Defuse" && defuserElVal !== 0) {
        timerEl.textContent = "You did it!";
        clearInterval(textId);
    }
});
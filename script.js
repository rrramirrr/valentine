const messages = [
    "Segura?",
    "DE VERDAD??",
    "POFAVO NO SIGAS...?",
    "POFAVO...",
    "DETENTE, ME ESTAS LASTIMANDO",
    "ME VOY A MORIR",
    "ESCUCHASTE ESO?",
    "FUE MI CORAZON ROMPERSEEE",
    "OKEY YA ENTENDI",
    "DI QUE SI POFAVO ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
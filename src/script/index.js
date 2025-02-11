const startDate = new Date("2023-06-11T00:00:00"); 

function updateCounter() {
    const now = new Date();
    const diff = now - startDate; 

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    document.getElementById("counter").textContent = 
        `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();

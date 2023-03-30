// afficher la date et l'heure
setInterval(() => {
    const date = new Date();
    document.getElementById("date").textContent = date.toLocaleDateString();
    document.getElementById("time").textContent = date.toLocaleTimeString();
}, 1000);
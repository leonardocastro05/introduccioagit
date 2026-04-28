function filtrar() {
    let input = document.getElementById("search").value.toLowerCase();
    let files = document.querySelectorAll("#taula tr");

    files.forEach((fila, index) => {
        if (index === 0) return;
        let text = fila.textContent.toLowerCase();
        fila.style.display = text.includes(input) ? "" : "none";
    });
}
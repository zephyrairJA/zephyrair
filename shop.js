// APRI MODAL PRENOTAZIONE
function openOrderModal(product) {
    // Mostra il nome nel titolo del modal
    document.getElementById("order-product").innerText = product;

    // Mostra il modal
    document.getElementById("order-modal").style.display = "flex";

    // Imposta il campo nascosto nel form
    document.getElementById("product-name").value = product;
}

function closeOrderModal() {
    const modal = document.getElementById("order-modal");
    modal.style.display = "none";

    // Resetta il form e il campo prodotto
    const form = document.getElementById("order-form");
    form.reset();
    document.getElementById("product-name").value = "";
}

// CHIUSURA CLICK FUORI MODAL
window.onclick = function(event) {
    const modal1 = document.getElementById("order-modal");
    const modal2 = document.getElementById("admin-panel");
    if(event.target === modal1) modal1.style.display = "none";
    if(event.target === modal2) modal2.style.display = "none";
}
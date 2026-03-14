function openModal(title, description, image) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-img").src = image;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function openEmailModal() {
    document.getElementById("email-modal").style.display = "flex";
}

function closeEmailModal() {
    document.getElementById("email-modal").style.display = "none";
}

const contactEmail = "zephyrairja2025@gmail.com";
const gmailComposeUrl = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=" + encodeURIComponent(contactEmail);

function copyEmail(event) {
    if (event) {
        event.preventDefault();
    }

    navigator.clipboard.writeText(contactEmail)
        .catch(function() {
            // ignore clipboard errors; still open Gmail
        })
        .finally(function() {
            window.open(gmailComposeUrl, "_blank");
        });
}

document.addEventListener("DOMContentLoaded", () => {

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if(toggle && nav){

toggle.addEventListener("click", function(e){

e.stopPropagation();

nav.classList.toggle("active");
toggle.classList.toggle("active");

});

}

});


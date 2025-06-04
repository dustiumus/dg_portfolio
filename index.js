
function toggleMe() {
    const about = document.getElementById("aboutMe");
    if (about.style.display === "none" || !about.style.display) {
        about.style.display = "block";    
    } else {
        about.style.display = "none"
    }
}

function toggleForm() {
    const form = document.getElementById("contactForm");
    form.style.display = (form.style.display === "none") ? "block" : "none";
}


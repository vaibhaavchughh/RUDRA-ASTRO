document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    
    let whatsappUrl = `https://wa.me/918950717319?text=Name: ${name}%0APhone: ${phone}%0AQuery: ${message}`;
    window.open(whatsappUrl, "_blank");
});

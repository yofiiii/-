function showStatusMessage(message, isSuccess) {
    const statusElement = document.getElementById("status");
    statusElement.innerText = message;
    statusElement.className = isSuccess ? 'show success' : 'show error';
    setTimeout(() => {
        statusElement.className = '';
    }, 3000);
}

function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        showStatusMessage("Harap isi semua kolom!", false);
        return;
    }

    emailjs.init("PBisDy5F8EIGkpew4"); // Gunakan Public Key yang ada
    
    emailjs.send("service_87o3jd5", "template_1jf4wci", {
        name: name,
        email: email,
        message: message,
        to_email: "myofi08@gmail.com"
    })
    .then(response => {
        showStatusMessage("Pesan berhasil dikirim!", true);
    })
    .catch(error => {
        showStatusMessage("Gagal mengirim pesan.", false);
    });
}

document.getElementById("message").addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});

function displayCopyright() {
    const notice = document.createElement('div');
    notice.innerText = '© Yofi 2025';
    notice.className = 'copyright-notice';
    document.body.appendChild(notice);
}

document.addEventListener('DOMContentLoaded', displayCopyright);




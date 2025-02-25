document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const submitBtn = document.getElementById("submitBtn");
    const countdownText = document.getElementById("countdownText");
    const loadingOverlay = document.getElementById("loadingOverlay");

    // Sembunyikan loading overlay di awal
    loadingOverlay.style.display = "none";

    // Reset status button dan countdown text jika kembali dari birthday.html
    if (document.referrer.includes('birthday.html')) {
        submitBtn.disabled = false;
        countdownText.textContent = "";
    }

    nameInput.addEventListener("input", () => {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
    });

    submitBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Nama tidak boleh kosong!");
            return;
        }
    
        let countdown = 7;
        countdownText.textContent = `Nama akan segera dikirim dalam ${countdown}...`;
        submitBtn.disabled = true;
    
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownText.textContent = `Nama akan segera dikirim dalam ${countdown}...`;
    
            if (countdown === 0) {
                clearInterval(countdownInterval);
                loadingOverlay.style.display = "flex";
                
                setTimeout(() => {
                    window.location.href = `birthday.html?name=${encodeURIComponent(name)}`;
                }, 4000);
            }
        }, 1000);
    });  
});

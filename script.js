document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const submitBtn = document.getElementById("submitBtn");
    const countdownText = document.getElementById("countdownText");
    const loadingOverlay = document.getElementById("loadingOverlay");

    // Sembunyikan loading overlay jika halaman diakses melalui tombol back
    if (performance.navigation.type === 2 || document.referrer.includes('birthday.html')) {
        loadingOverlay.style.display = "none";
        localStorage.setItem("hasLoaded", "true");
    }

    // Cek apakah sudah pernah loading sebelumnya
    if (localStorage.getItem("hasLoaded")) {
        loadingOverlay.style.display = "none";
    }

    nameInput.addEventListener("input", () => {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, ""); // Hanya huruf dan spasi
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
                
                // Hanya tampilkan loading jika belum pernah loading sebelumnya
                if (!localStorage.getItem("hasLoaded")) {
                    loadingOverlay.style.display = "flex";
                }
                
                // Simpan status loading di localStorage
                localStorage.setItem("hasLoaded", "true");

                setTimeout(() => {
                    window.location.href = `birthday.html?name=${encodeURIComponent(name)}`;
                }, 4000);
            }
        }, 1000);
    });  
});

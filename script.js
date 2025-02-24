document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const submitBtn = document.getElementById("submitBtn");
    const countdownText = document.getElementById("countdownText");
    const loadingOverlay = document.getElementById("loadingOverlay");

    // Cek apakah sudah pernah loading sebelumnya
    if (sessionStorage.getItem("hasLoaded")) {
        loadingOverlay.style.display = "none"; // Jangan tampilkan loading kalau sudah pernah masuk
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
                
                // Simpan status loading di sessionStorage
                sessionStorage.setItem("hasLoaded", "true");

                loadingOverlay.style.display = "flex"; // Baru tampil setelah hitungan selesai

                setTimeout(() => {
                    window.location.href = `birthday.html?name=${encodeURIComponent(name)}`;
                }, 4000); // Tambah delay agar loading terlihat sebelum pindah halaman
            }
        }, 1000);
    });  
});

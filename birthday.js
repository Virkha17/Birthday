document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const namaInput = params.get("name");
    const audio = document.getElementById("bgMusic");
    const btn = document.getElementById("tiupLilinBtn");
    
    document.getElementById("birthday-title").innerText = `🎉 Happy Birthday, ${namaInput}! 🎂`;
    document.getElementById("blowCandleBtn").addEventListener("click", tiupLilin);

    const kejutanButton = document.getElementById("kejutanButton");
    const kejutanOutput = document.getElementById("kejutanOutput");
    const cakeContainer = document.getElementById("cakeContainer");
    const birthdayCake = document.getElementById("birthdayCake");
    const fireworksContainer = document.getElementById("fireworksContainer");
    const blowCandleBtn = document.getElementById("blowCandleBtn");

    if (!sessionStorage.getItem("hasLoaded")) {
        sessionStorage.setItem("hasLoaded", "true"); // Set ini agar loading tidak muncul lagi
    }    

    function playAudio() {
        audio.play().catch(error => {
            console.log("Autoplay gagal, perlu interaksi pengguna terlebih dahulu.", error);
        });
    }

    playAudio();
    document.body.addEventListener("click", playAudio, { once: true });
    
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    var title = document.getElementById("fromME");
    var textDiv = document.getElementById("fromMe");
    title.addEventListener("click", function () {
        textDiv.classList.toggle("show");

        if (textDiv.classList.contains("show")) {
            textDiv.style.display = "block";
            setTimeout(() => {
                textDiv.style.opacity = "1"; // Animasi fade in
            }, 10);
        } else {
            textDiv.style.opacity = "0"; // Animasi fade out
            setTimeout(() => {
                textDiv.style.display = "none";
            }, 500); // Delay biar efek fade out selesai dulu
        }
    });

    function animateYear() {
        let yearElement = document.getElementById("yearAnimation");
        let startYear = 2007;
        let endYear = 2025;
        let delay = 400;
        let currentYear = startYear;

        function typeYear() {
            if (currentYear <= endYear) {
                yearElement.textContent = currentYear;
                currentYear++;
                setTimeout(typeYear, delay);
            }
        }
        typeYear();
    }

    function checkYearScroll() {
        let yearSection = document.getElementById("yearAnimation").parentElement;
        if (isElementInViewport(yearSection)) {
            animateYear();
            window.removeEventListener("scroll", checkYearScroll);
        }
    }

    window.addEventListener("scroll", checkYearScroll);

    function updateTotalTime() {
        let birthDate = new Date("2007-02-18T00:00:00");

        function calculateTimeDiff() {
            let now = new Date();
            let diff = now - birthDate;

            return {
                detik: Math.floor(diff / 1000),
                menit: Math.floor(diff / (1000 * 60)),
                jam: Math.floor(diff / (1000 * 60 * 60)),
                hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
                minggu: Math.floor(diff / (1000 * 60 * 60 * 24 * 7)),
                bulan: Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)),
                tahun: Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
            };
        }

        function animateCount(id, targetValue, duration, callback) {
            let startValue = 0;
            let step = Math.ceil(targetValue / (duration / 10));
            let counter = setInterval(() => {
                startValue += step;
                if (startValue >= targetValue) {
                    startValue = targetValue;
                    clearInterval(counter);
                    if (callback) callback();
                }
                document.getElementById(id).textContent = `${startValue.toLocaleString("id-ID")} ${id}`;

            }, 50);
        }

        let timeData = calculateTimeDiff();
        animateCount("detik", timeData.detik, 5000, startRealTimeUpdate);
        animateCount("menit", timeData.menit, 5000);
        animateCount("jam", timeData.jam, 5000);
        animateCount("hari", timeData.hari, 5000);
        animateCount("minggu", timeData.minggu, 5000);
        animateCount("bulan", timeData.bulan, 50000);
        animateCount("tahun", timeData.tahun, 50000);

        function startRealTimeUpdate() {
            setInterval(() => {
                let updatedTime = calculateTimeDiff();
                document.getElementById("detik").textContent = `${updatedTime.detik.toLocaleString("id-ID")} detik`;
                document.getElementById("menit").textContent = `${updatedTime.menit.toLocaleString("id-ID")} menit`;
                document.getElementById("jam").textContent = `${updatedTime.jam.toLocaleString("id-ID")} jam`;
                document.getElementById("hari").textContent = `${updatedTime.hari.toLocaleString("id-ID")} hari`;
                document.getElementById("minggu").textContent = `${updatedTime.minggu.toLocaleString("id-ID")} minggu`;
                document.getElementById("bulan").textContent = `${updatedTime.bulan.toLocaleString("id-ID")} bulan`;
                document.getElementById("tahun").textContent = `${updatedTime.tahun.toLocaleString("id-ID")} tahun`;
            }, 1000);
        }
    }

    function checkScroll() {
        let timeSection = document.getElementById("timeSection");

        if (isElementInViewport(timeSection)) {
            updateTotalTime();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    //Slideshow otomatis
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
    }

    showSlides();

    window.addEventListener("scroll", checkScroll);

    document.getElementById("funFactButton").addEventListener("click", tampilkanFunFact);
    function tampilkanFunFact() {
        const funFacts = [
            "18 Februari 2007 jatuh pada hari Minggu!",
            "Pada tahun 2007, iPhone generasi pertama dirilis oleh Apple.",
            "Aquarius dikenal sebagai zodiak yang kreatif dan inovatif.",
            "Bulan Februari 2007 memiliki 28 hari, karena bukan tahun kabisat.",
            "Pada 18 Februari 1930, Astronom asal Amerika Serikat (AS) Clyde William Tombaugh menemukan planet baru di observatoriumnya di Arizona, AS. Planet itu lantas diberi nama Pluto yang diambil dari nama dewa Yunani.",
            "Pada 18 Februari 2005, dua wartawan asal Indonesia, Meutya Hafid dan Budiyanto dari Metro TV, diculik saat meliput di Irak.",
            "Ternyata ultahmu barengan sama J-Hope BTS, DK Seventeen, dan Vernon Seventeen anjay",
            "18 Februari 2021 - Perseverance (rover) Mendarat di Kawah Jazero, Mars.",
            "Pada Februari 2007, model dan aktris Anna Nicole Smith meninggal dunia karena overdosis obat, yang memicu banyak spekulasi dan kontroversi media.",
            "Pada 2007, Facebook mulai membuka aksesnya ke pengguna di luar kalangan universitas, yang menandai awal dari peningkatan besar-besaran jumlah pengguna sosial media ini.",
            "18 Februari adalah hari ke-49 dalam kalender Gregorian.",
            "18 Februari 1965 - Gambia merdeka dari Britania Raya.",
            "18 Februari 1932 - Jepang mendirikan negara boneka Manchukuo di sebelah timur laut Republik Rakyat Tiongkok.",
            "18 Februari 1979 - Hujan salju di Gurun Sahara di selatan Aljazair, satu-satunya dalam sejarah.",
            "Tahun baru Imlek 2642 tepat pada tanggal 18 Februari 2091.",
            "Pada tanggal 18 Februari 2007, terjadi peristiwa besar yaitu terjadinya banjir besar di Jakarta. Banjir ini menggenangi sebagian besar wilayah Jakarta dan menyebabkan lebih dari 80 orang meninggal dunia serta lebih dari 100.000 orang mengungsi.",
            "Pada 18 Februari 2007, kampanye pemilihan presiden di Prancis dimulai dengan kandidat utama yang melibatkan Nicolas Sarkozy dan Ségolène Royal.",
            "Pada 18 Februari 2007, Israel kehilangan sinyal dari satelit Amos 1 yang menyebabkan gangguan dalam komunikasi satelit mereka."
        ];
        
        // Ambil fakta acak dari array
        let randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        
        // Tampilkan ke elemen
        document.getElementById("funFactOutput").textContent = randomFact;
    }

    document.getElementById("kejutanButton").addEventListener("click", tampilkanKejutan);
    function tampilkanKejutan() {
        const kejutanText = "🎉 Selamat! Kamu menemukan kejutan spesial! 🎁";
        
        // Tampilkan teks kejutan dengan animasi
        let kejutanOutput = document.getElementById("kejutanOutput");
        kejutanOutput.textContent = "";
        
        let i = 0;
        function typeEffect() {
            if (i < kejutanText.length) {
                kejutanOutput.textContent += kejutanText[i];
                i++;
                setTimeout(typeEffect, 50); // Efek mengetik
            } else {
                cakeContainer.classList.remove("hidden"); // Munculkan kue
                blowCandleBtn.classList.remove("hidden"); // Munculkan tombol
            }
        }
        
        typeEffect();
    }

    function tampilkanKejutan() {
        const kejutanText = "🎉 Selamat! Kamu menemukan kejutan spesial! 🎁";
        kejutanOutput.textContent = "";

        let i = 0;
        function typeEffect() {
            if (i < kejutanText.length) {
                kejutanOutput.textContent += kejutanText[i];
                i++;
                setTimeout(typeEffect, 50); // Efek mengetik
            } else {
                cakeContainer.classList.remove("hidden"); // Munculkan kue
                blowCandleBtn.classList.remove("hidden"); // Munculkan tombol
            }
        }

        typeEffect();
        kejutanButton.style.display = "none"; // Sembunyikan tombol setelah diklik
    }

    // Tambahkan event listener ke tombol kejutan
    kejutanButton.addEventListener("click", tampilkanKejutan);

    // Fungsi untuk meniup lilin
    function tiupLilin() {
        const cakeImg = document.getElementById("birthdayCake");
        const blowCandleBtn = document.getElementById("blowCandleBtn");
        
        if (cakeImg) {
            cakeImg.src = "src/cake-light-off-Trim.gif"; // Ganti gambar kue tanpa lilin
        }
        if (blowCandleBtn) {
            blowCandleBtn.style.display = "none"; // Sembunyikan tombol
        }
    
        // Efek Kembang Api
        const fireworksContainer = document.getElementById("fireworksContainer");

        if (fireworksContainer) {
            fireworksContainer.innerHTML = "";
            const FireworksConstructor = window.Fireworks && (window.Fireworks.default || window.Fireworks);
            if (typeof FireworksConstructor === "function") {
                const fireworks = new FireworksConstructor(fireworksContainer, {
                    acceleration: 1.05,
                    intensity: 20,
                    friction: 0.97,
                    gravity: 1.5,
                    particles: 250
                });
                fireworks.start();
                setTimeout(() => {
                    fireworks.stop();
                }, 5);
            } else {
                console.error("Library Fireworks tidak dimuat dengan benar.");
            }
        }        

    
        // Efek popper party (confetti)
        const confettiSettings = {
            particleCount: 250,
            spread: 50,
            origin: { y: 0.7 } // Mulai dari tengah layar
        };
        confetti(confettiSettings);
        confetti({ ...confettiSettings, angle: 60, decay: 0.85 });
        confetti({ ...confettiSettings, angle: 120, decay: 0.85 });
    }    
});

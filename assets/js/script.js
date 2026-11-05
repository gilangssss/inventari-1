/* ===== Halaman Login ===== */

function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" &&
        password === "admin123") {

        window.location.href = "dashboard.html";

    } else {
        alert("Email atau kata sandi salah!");
    }
}

function lupaPassword() {
    alert("Silakan hubungi administrator untuk reset kata sandi.");
}


/* ===== Halaman Dashboard: tanggal dan waktu ===== */

function tampilkanTanggalWaktu() {
    const elemenTanggal = document.getElementById("tanggal");
    const elemenWaktu = document.getElementById("waktu");

    if (!elemenTanggal || !elemenWaktu) {
        return;
    }

    const sekarang = new Date();

    const tanggal = sekarang.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const waktu = sekarang.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta"
    });

    elemenTanggal.textContent = tanggal;
    elemenWaktu.textContent = waktu + " WIB";
}

if (document.getElementById("tanggal")) {
    tampilkanTanggalWaktu();
    setInterval(tampilkanTanggalWaktu, 1000);
}


/* ===== Halaman Form Tambah/Edit Barang ===== */

const formBarang = document.getElementById("formBarang");

if (formBarang) {
    formBarang.addEventListener("submit", function (event) {
        event.preventDefault();

        const kode = document.getElementById("kode").value;
        const nama = document.getElementById("nama").value;
        const jumlah = document.getElementById("jumlah").value;

        alert(
            "Data barang berhasil disimpan!\n\n" +
            "Kode: " + kode +
            "\nNama barang: " + nama +
            "\nJumlah barang: " + jumlah
        );

        this.reset();
    });
}

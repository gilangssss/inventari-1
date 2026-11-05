/* ===== Data bersama (disimpan di localStorage) ===== */

const KUNCI_BARANG = "inventarisku_barang";
const KUNCI_KATEGORI = "inventarisku_kategori";
const KUNCI_PEMINJAMAN = "inventarisku_peminjaman";

const BARANG_AWAL = [
    { kode: "Y001", nama: "Laptop", kategori: "Elektronik", jumlah: 3, kondisi: "Baik" },
    { kode: "Y002", nama: "Handphone", kategori: "Elektronik", jumlah: 2, kondisi: "Baik" },
    { kode: "Y003", nama: "Kamera", kategori: "Elektronik", jumlah: 1, kondisi: "Baik" },
    { kode: "Y004", nama: "Playstation", kategori: "Elektronik", jumlah: 5, kondisi: "Baik" },
    { kode: "Y005", nama: "Printer", kategori: "Elektronik", jumlah: 2, kondisi: "Baik" },
    { kode: "Y006", nama: "Sound sistem", kategori: "Elektronik", jumlah: 10, kondisi: "Baik" },
    { kode: "Y007", nama: "Walkie talkie", kategori: "Elektronik", jumlah: 4, kondisi: "Baik" },
    { kode: "Y008", nama: "Projector", kategori: "Elektronik", jumlah: 7, kondisi: "Baik" }
];

const KATEGORI_AWAL = ["Elektronik", "Furniture", "Aksesoris", "Alat Tulis"];

function ambilArray(kunci) {
    try {
        const data = JSON.parse(localStorage.getItem(kunci) || "null");
        return Array.isArray(data) ? data : null;
    } catch (error) {
        console.error("Gagal membaca " + kunci, error);
        return null;
    }
}

function simpanArray(kunci, data) {
    localStorage.setItem(kunci, JSON.stringify(data));
}

// Isi data awal sekali saja, supaya semua halaman (termasuk dashboard)
// langsung punya data meskipun halaman Data Barang belum pernah dibuka.
if (ambilArray(KUNCI_BARANG) === null) {
    simpanArray(KUNCI_BARANG, BARANG_AWAL);
}

if (ambilArray(KUNCI_KATEGORI) === null) {
    simpanArray(KUNCI_KATEGORI, KATEGORI_AWAL);
}

/* ===== Tanggal dan waktu ===== */

function tampilkanTanggalWaktu() {
    const elemenWaktu = document.getElementById("tanggalWaktu");

    if (!elemenWaktu) {
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
        second: "2-digit"
    });

    elemenWaktu.textContent = tanggal + " | " + waktu;
}

tampilkanTanggalWaktu();
setInterval(tampilkanTanggalWaktu, 1000);

/* ===== Sidebar ===== */

const tombolMenu = document.getElementById("menuToggle");

if (tombolMenu) {
    tombolMenu.addEventListener("click", function () {
        const layout = document.querySelector(".layout");

        if (layout) {
            layout.classList.toggle("sidebar-hidden");
        }
    });
}

/* ===== Validasi form dan konfirmasi hapus ===== */

document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
        const kolomWajib = form.querySelectorAll("[required]");
        let valid = true;

        kolomWajib.forEach(function (kolom) {
            if (!kolom.value.trim()) {
                valid = false;
                kolom.focus();
            }
        });

        if (!valid) {
            event.preventDefault();
            alert("Mohon isi semua kolom yang wajib diisi!");
        }
    });
});

document.querySelectorAll(".btn-hapus").forEach(function (tombol) {
    tombol.addEventListener("click", function (event) {
        const yakin = confirm("Apakah kamu yakin ingin menghapus data ini?");

        if (!yakin) {
            event.preventDefault();
        }
    });
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("animate-fadeIn");
});

const buttons = document.querySelectorAll(".btn-anim");

buttons.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });

  // agar juga bekerja di HP
  btn.addEventListener("touchstart", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("touchend", () => {
    btn.style.transform = "scale(1)";
  });
});

const btnkategori = document.querySelectorAll(".btn-kategori");

btnkategori.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Jika tombol sedang aktif → hilangkan warna biru
    if (btn.classList.contains("bg-blue-500")) {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-gray-300", "text-gray-700");
    }
    // Jika belum aktif → ubah jadi biru
    else {
      btn.classList.remove("bg-gray-300", "text-gray-700");
      btn.classList.add("bg-blue-500", "text-white");
    }
  });
});

const sosmed = document.querySelectorAll(".sosmed");

sosmed.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.2)";
    btn.style.transition = "transform 0.2s ease";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
});

const downArrow = document.getElementById("downArrow");

downArrow.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight * 0.8, // scroll ke bawah 80% tinggi layar
    behavior: "smooth", // animasi halus
  });
});

document.addEventListener("DOMContentLoaded", () => {
  /* ===== GALLERI ===== */
  const gallery = document.querySelector(".animal-gallery");
  const images = document.querySelectorAll(".animal-gallery img");
  let index = 0;
  const step = 3;

  function updateGallery() {
    if (images.length === 0) return;
    const imgWidth = images[0].offsetWidth + 10;
    gallery.scrollTo({
      left: index * imgWidth * step,
      behavior: "smooth",
    });
  }

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (nextBtn) {
    nextBtn.onclick = () => {
      if ((index + 1) * step < images.length) index++;
      updateGallery();
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (index > 0) index--;
      updateGallery();
    };
  }

  /* ===== FORMULÄR ===== */
  const showFormBtn = document.getElementById("showFormBtn");
  const formSection = document.getElementById("formSection");

  if (showFormBtn && formSection) {
    showFormBtn.addEventListener("click", () => {
      formSection.hidden = false;
      showFormBtn.hidden = true;
    });
  }

  /* ===== DROPDOWN ===== */
  const djurBtn = document.getElementById("djurBtn"); // ✅ utan #
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (djurBtn && dropdownMenu) {
    djurBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        !djurBtn.contains(e.target) &&
        !dropdownMenu.contains(e.target)
      ) {
        dropdownMenu.classList.remove("open");
      }
    });
  }
});


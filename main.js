document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".option");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
      select.classList.toggle("select-clicked");
      menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        selected.classList.add("text-fade-in");

        setTimeout(() => {
          selected.classList.remove("text-fade-in");
        }, 300);

        select.classList.remove("select-clicked");
        menu.classList.remove("menu-open");

        options.forEach((option) => {
          option.classList.remove("active");
        });
        option.classList.add("active");
      });
    });

    window.addEventListener("click", (e) => {
      const size = dropdown.getBoundingClientRect();

      if (
        e.clientX < size.left ||
        e.clientX > size.right ||
        e.clientY < size.top ||
        e.clientY > size.bottom
      ) {
        select.classList.remove("select-clicked");
        menu.classList.remove("menu-open");
      }
    });
  });
});

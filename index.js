
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cart-card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            // Deselect all cards and radios
            cards.forEach(c => {
                c.classList.remove("selected");
                const radio = c.querySelector("input[type=radio]");
                if (radio) radio.checked = false;
            });

            // Select current card and radio
            this.classList.add("selected");
            const radio = this.querySelector("input[type=radio]");
            if (radio) radio.checked = true;
        });

        // Optional: highlight card if pre-checked on load
        const radio = card.querySelector("input[type=radio]");
        if (radio && radio.checked) {
            card.classList.add("selected");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cart-card");

    cards.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      const details = card.querySelector('.card-details');

      // Set default selected
      if (radio.checked) {
        card.classList.add("selected");
        details.style.height = details.scrollHeight + "px";
      } else {
        card.classList.remove("selected");
        details.style.height = "0";
      }

      card.addEventListener("click", function () {
        cards.forEach(c => {
          const d = c.querySelector('.card-details');
          c.classList.remove("selected");
          c.querySelector('input[type="radio"]').checked = false;
          d.style.height = "0"; // instant collapse
        });

        card.classList.add("selected");
        radio.checked = true;
        details.style.height = details.scrollHeight + "px"; // expand smoothly

        // Optional scroll into view
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  });
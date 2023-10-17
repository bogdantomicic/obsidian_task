// item checked START

function changeLabelColor(checkbox) {
    var label = document.getElementById('label1');
    if (checkbox.checked) {
      label.style.color = '#4D4D4D'; 
    } else {
      label.style.color = ''; 
    }
  }

  function changeLabelColor2(checkbox) {
    var label = document.getElementById('label2');
    if (checkbox.checked) {
      label.style.color = '#4D4D4D'; 
    } else {
      label.style.color = '';
    }
  }

// item checked START

// toggle START

document.addEventListener("DOMContentLoaded", function() {
  var subtitleToggles = document.querySelectorAll(".subtitle-toggle");
  subtitleToggles.forEach(function(toggle) {
    toggle.addEventListener("click", function() {
      var container = toggle.nextElementSibling;
      if (container.classList.contains("hidden")) {
        container.classList.remove("hidden");
        toggle.querySelector(".togglePlusMinus").textContent = "+";
      } else {
        container.classList.add("hidden");
        toggle.querySelector(".togglePlusMinus").textContent = "-";
      }
    });
  });
});

// toggle END


// carousel START

const container = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

function functionForDesktop() {
  if (window.innerWidth > 415) {
    document.addEventListener("DOMContentLoaded", () => {
      let translateX = 0;
      translateX = -100;
      container.style.transform = `translateX(${translateX}%)`;
      prevButton.addEventListener("click", () => {
        translateX += 100; // Scrolls by 100% of the width of one product
        if (translateX > -3) {
          translateX = 0; // It stops when the start is reached
          prevButton.disabled = true; // Disable prev-button
        }
        container.style.transform = `translateX(${translateX}%)`;
        nextButton.disabled = false; // Enable next-button
      });
      nextButton.addEventListener("click", () => {
        translateX -= 100; // Scrolls by 100% of the width of one product
        const maxTranslateX = -(container.children.length - 7) * 100;
        if (translateX < maxTranslateX + 3) {
          translateX = maxTranslateX; // It stops when the start is reached
          nextButton.disabled = true; // Disable next-button
        }
        container.style.transform = `translateX(${translateX}%)`;
        prevButton.disabled = false; // Disable prev-button
      });
    });
  }
}
window.addEventListener('resize', functionForDesktop);
functionForDesktop();


function functionForMobile() {
  if (window.innerWidth < 415) {
    document.addEventListener("DOMContentLoaded", () => {
      console.log("Ovo je mali ekran.");
      let translateX = 0;
      translateX = -400;
      container.style.transform = `translateX(${translateX}%)`;
      prevButton.addEventListener("click", () => {
        translateX += 100;
        if (translateX > -3) {
          translateX = 0;
          prevButton.disabled = true;
        }
        container.style.transform = `translateX(${translateX}%)`;
        nextButton.disabled = false;
      });
      nextButton.addEventListener("click", () => {
        translateX -= 100;
        const maxTranslateX = -(container.children.length - 1) * 100;
        if (translateX < maxTranslateX + 1) {
          translateX = maxTranslateX;
          nextButton.disabled = true;
        }
        container.style.transform = `translateX(${translateX}%)`;
        prevButton.disabled = false;
      });
    });
  }
}
window.addEventListener('resize', functionForMobile);
functionForMobile();

// carousel END


// add to card animation START

const card = document.querySelector('.card');
const addToCartButton = document.querySelector('.add-to-card-button');

  addToCartButton.addEventListener('click', () => {
    if (window.scrollY === 0) {
      card.classList.toggle('zoomed');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
        setTimeout(() => {
          card.classList.toggle('zoomed');
        }, 500);
    }
  });
    
// add to card animation END

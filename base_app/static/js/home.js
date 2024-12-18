/* Navbar expands and shrinking */

window.onload = function() {
scrollFunction(); 
};

window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.margin = "0";
    document.getElementById("navbar").style.borderRadius = "0";
} else {
    document.getElementById("navbar").style.margin = "40px 120px";
    document.getElementById("navbar").style.borderRadius = "20px";
}
}

/* Page loader script */

window.addEventListener("load", () => {
const loader = document.querySelector(".loader");
setTimeout(() => {
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
}, 1500); // 1500 milliseconds = 1.5 seconds
});

/* Contact Us */

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* Modal Script */

document.addEventListener("DOMContentLoaded", function() {
  const dropoutBtn = document.getElementById('drop-btn');
  const closeBtn = document.getElementById('close-modal');
  const modal = document.getElementById('modal');

  dropoutBtn.addEventListener("click", () => {
      modal.style.display = 'flex'; // Set display to flex before adding the open class
      setTimeout(() => {
          modal.classList.add("open"); // Add the open class after display is set
      }, 10); // Small timeout to allow the display change to take effect
  });

  closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
      // Wait for the fade-out transition to complete before hiding the modal
      setTimeout(() => {
          modal.style.display = 'none'; // Hide the modal after fade-out
      }, 500); // Match this duration with the CSS transition duration
  });

  // Optional: Hide the modal when clicking outside of it
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.classList.remove("open");
          setTimeout(() => {
              modal.style.display = 'none';
          }, 500);
      }
  });
});
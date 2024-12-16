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
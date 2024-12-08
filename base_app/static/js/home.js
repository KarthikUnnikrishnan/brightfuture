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
}, 1500); // 1000 milliseconds = 1 seconds
});
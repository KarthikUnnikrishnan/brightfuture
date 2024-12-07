/* Navbar expands and shrinking */

window.onload = function() {
    scrollFunction(); // Set the initial state of the navbar on page load
};

window.onscroll = function() {
    scrollFunction(); // Update the navbar style on scroll
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
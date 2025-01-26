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


// Dropout courseModal Script
document.addEventListener("DOMContentLoaded", function() {
    const courseBtn = document.getElementById('drop-btn');
    const closeBtn = document.getElementById('close-dropout-modal');
    const courseModal = document.getElementById('dropout-modal');

    courseBtn.addEventListener("click", () => {
        courseModal.style.display = 'flex';
        setTimeout(() => {
            courseModal.classList.add("open");
        }, 10);
    });

    closeBtn.addEventListener("click", () => {
        courseModal.classList.remove("open");
        setTimeout(() => {
            courseModal.style.display = 'none';
            window.location.href = '/'; // Redirect to home.html
        }, 500);
    });

    window.addEventListener("click", (event) => {
        if (event.target === courseModal) {
            courseModal.classList.remove("open");
            setTimeout(() => {
                courseModal.style.display = 'none';
                window.location.href = '/'; // Redirect to home.html
            }, 500);
        }
    });
});


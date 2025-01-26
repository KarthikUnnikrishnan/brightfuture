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
}, 500); // 1500 milliseconds = 1.5 seconds
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
      }, 500);
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === courseModal) {
        courseModal.classList.remove("open");
        setTimeout(() => {
          courseModal.style.display = 'none';
        }, 500);
      }
    });
  });
  
  // Course Recommendation courseModal Script
  document.addEventListener("DOMContentLoaded", function() {
    const courseBtn = document.getElementById('course-btn');
    const closeBtn = document.getElementById('close-course-modal');
    const courseModal = document.getElementById('course-modal');
  
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
      }, 500);
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === courseModal) {
        courseModal.classList.remove("open");
        setTimeout(() => {
          courseModal.style.display = 'none';
        }, 500);
      }
    });
  });


/* Scroll to Top Script */
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
	    $('.scroll-to-top-btn').fadeIn(250);
	}
	else{
	    $('.scroll-to-top-btn').fadeOut(250);
	}
    });
    $('.scroll-to-top-btn').click(function(){
	$('html,body').animate(
	    {scrollTop:0},50
	);
    });
});
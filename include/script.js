  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("hamburger1");
    const content = document.querySelector(".content");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        content.classList.add("activecon");
      } else {
        content.classList.remove("activecon");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("hamburger1");
    const img = document.querySelector(".navmoblimg");

    checkbox.addEventListener("change", function () {
      img.style.opacity = "0"; // ทำให้รูปหายไปก่อน

      setTimeout(() => {
        img.src = this.checked 
          ? "include/img/camera-icon-design-template-1c9a1e6bc593390fb55b15133b7c73e3_screen-removebg-preview.png" // รูปใหม่
          : "include/img/camera-icon.png"; // รูปเดิม
        img.style.opacity = "1"; // ค่อย ๆ แสดงรูปใหม่
      }, 200); // หน่วงเวลาให้ transition ทำงาน
    });
  });







  (function() {
    "use strict";
  
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
  })();
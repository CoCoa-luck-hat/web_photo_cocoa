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



  

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel-item").forEach(function (item) {
      item.addEventListener("click", function () {
        let icon = this.querySelector(".icon_cilck");
        if (icon && !icon.classList.contains("hidle_icon")) {
          icon.classList.add("hidle_icon"); // เริ่ม animation
          setTimeout(() => {
            icon.classList.add("hidle_icon_end"); // ซ่อน element หลังจาก animation จบ
          }, 500); // 500ms เท่ากับเวลา animation
        }
      });
    });
  });
  

  document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "include/img/QR.jpg";
    link.download = "QR.jpg"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
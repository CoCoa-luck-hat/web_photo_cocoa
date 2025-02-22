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

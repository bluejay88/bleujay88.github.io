document.addEventListener("DOMContentLoaded", function () {
  const colorOptions = document.querySelectorAll(".product-colors span");

  colorOptions.forEach(function (option) {
      option.addEventListener("click", function () {
          // Remove 'active' class from all options
          colorOptions.forEach(function (opt) {
              opt.classList.remove("active");
          });

          // Add 'active' class to the clicked option
          this.classList.add("active");

          // Get the data attributes from the clicked option
          const primaryColor = this.getAttribute("data-color-primary");
          const secondaryColor = this.getAttribute("data-color-sec");
          const imageUrl = this.getAttribute("data-pic");

          // Update the styles based on the selected option
          document.body.style.backgroundColor = primaryColor;
          document.querySelector(".content h2").style.color = secondaryColor;
          document.querySelector(".content h3").style.color = secondaryColor;
          document.querySelector(".container .imgBx").style.backgroundColor = secondaryColor;
          document.querySelector(".container .details button").style.backgroundColor = secondaryColor;
          
          // Update the image src to the new URL
          const imageElement = document.querySelector(".imgBx img");
          imageElement.src = imageUrl;

          // Check if the image URL is valid
          imageElement.onerror = function () {
              console.error("Failed to load image at URL:", imageUrl);
              // Optionally, you could set a fallback image here
              // imageElement.src = "fallback-image.png";
          };
      });
  });

  // Add event listener for the contact button
  document.getElementById("contact-button").addEventListener("click", function () {
      window.location.href = "contact_us.html";
  });
});

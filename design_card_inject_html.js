const productCardHTML = `
<div class="container" id="container">
    <div class="imgBx" id="imgBx">
        <img src="2.png" alt="Web Design Image" id="product-image">
    </div>
    <div class="details" id="details">
        <div class="content" id="content">
            <h2 id="product-title">Responsive Web Design<br>
                <span id="product-subtitle">Web Development Collection</span>
            </h2>
            <p id="description-theme1" class="product-description">
                We create responsive, modern, and user-friendly websites that look great on all devices.
                Our designs are tailored to provide a seamless experience, ensuring that your website 
                not only looks good but also performs exceptionally well across desktops, tablets, and mobile devices.
            </p>
            <p id="description-theme2" class="product-description" style="display: none;">
                Our creative web designs bring your brand's story to life. We focus on innovation and aesthetics 
                to ensure your website stands out while providing an engaging user experience across all platforms.
            </p>
            <p id="description-theme3" class="product-description" style="display: none;">
                Our e-commerce web designs are built to convert. We create streamlined, user-friendly online stores 
                that not only attract visitors but also encourage them to make purchases with ease.
            </p>
            <p class="product-colors" id="product-colors">Available Themes:
                <span class="theme1 active" id="theme1" data-color-primary="#001F3F" data-color-sec="#0074D9" data-pic="2.png" data-hover-pic="5.png" data-text="Responsive Web Design" data-desc="#description-theme1"></span>
                <span class="theme2" id="theme2" data-color-primary="#85144b" data-color-sec="#FF4136" data-pic="2.png" data-hover-pic="5.png" data-text="Creative Web Design" data-desc="#description-theme2"></span>
                <span class="theme3" id="theme3" data-color-primary="#2ECC40" data-color-sec="#01FF70" data-pic="2.png" data-hover-pic="5.png" data-text="E-Commerce Web Design" data-desc="#description-theme3"></span>
            </p>
            <h3 id="product-price">$ Contact Us for Pricing</h3>
            <button id="contact-button" onclick="location.href='site_form7.html'">Contact Us</button>
        </div>
    </div>
</div>
`;

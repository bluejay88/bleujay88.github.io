const productCardJS = `
<script>
    // Change The Picture, Text, Description, and Associated Element Color when Theme Options Are Clicked.
    $(".product-colors span").click(function() {
        $(".product-colors span").removeClass("active");
        $(this).addClass("active");

        // Update colors and image
        let colorPrimary = $(this).attr("data-color-primary");
        let colorSecondary = $(this).attr("data-color-sec");
        let imagePath = $(this).attr("data-pic");
        let hoverImagePath = $(this).attr("data-hover-pic");
        let text = $(this).attr("data-text");
        let desc = $(this).attr("data-desc");

        $(".active").css("border-color", colorSecondary);
        $("#product-title").css("color", colorSecondary);
        $("#product-price").css("color", colorSecondary);
        $("#imgBx").css("background", colorSecondary);
        $("#contact-button").css("background", colorSecondary);
        $("#product-image").attr('src', imagePath);
        $("#product-title").text(text);

        // Hide all descriptions and show the selected one
        $(".product-description").hide();
        $(desc).show();

        // Set hover effect
        $("#product-image").hover(
            function() {
                $(this).attr('src', hoverImagePath);
            }, function() {
                $(this).attr('src', imagePath);
            }
        );
    });

    // Initial hover effect
    $("#product-image").hover(
        function() {
            $(this).attr('src', '5.png');
        }, function() {
            $(this).attr('src', '2.png');
        }
    );
</script>
`;

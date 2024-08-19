document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Convert form data to a JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "contact_form1.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Form submitted successfully! Thank you for contacting us.");
                // Optionally, you can redirect the user to another page after submission
                // window.location.href = "thank_you.html";
            } else {
                alert("There was an error submitting the form. Please try again later.");
            }
        }
    };

    // Send the JSON data to the server
    xhr.send(JSON.stringify(jsonData));
});

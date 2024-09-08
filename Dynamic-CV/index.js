function takeValue() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var about = document.getElementById("About").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // Generating the styled CV content
    var output = "\n        <div class=\"cv-container\">\n          <h1>Your CV</h1>\n          <div class=\"cv-content\">\n            <h2 class=\"cv-name\">".concat(name, "</h2>\n            <p class=\"cv-email\"><strong>Email:</strong> ").concat(email, "</p>\n            <p class=\"cv-phone\"><strong>Phone:</strong> ").concat(phone, "</p>\n            <p class=\"cv-about\"><strong>About Me:</strong><br> ").concat(about, "</p>\n            <p class=\"cv-experience\"><strong>Experience:</strong><br> ").concat(experience, "</p>\n            <p class=\"cv-skills\"><strong>Skills:</strong><br> ").concat(skills, "</p>\n          </div>\n        </div>\n    ");
    // Insert the generated CV into the output div
    var outputDiv = document.getElementById("cv-output");
    if (outputDiv) {
        outputDiv.innerHTML = output;
    }
    // Return false to prevent form submission
    return false;
}

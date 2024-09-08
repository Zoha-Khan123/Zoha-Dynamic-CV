function takeValue(): boolean {
  const name = (document.getElementById("Name") as HTMLInputElement).value;
  const email = (document.getElementById("Email") as HTMLInputElement).value;
  const phone = (document.getElementById("Phone") as HTMLInputElement).value;
  const about = (document.getElementById("About") as HTMLTextAreaElement).value;
  const experience = (
    document.getElementById("Experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("Skills") as HTMLTextAreaElement)
    .value;

  // Generating the styled CV content
  const output = `
        <div class="cv-container">
          <h1>Your CV</h1>
          <div class="cv-content">
            <h2 class="cv-name">${name}</h2>
            <p class="cv-email"><strong>Email:</strong> ${email}</p>
            <p class="cv-phone"><strong>Phone:</strong> ${phone}</p>
            <p class="cv-about"><strong>About Me:</strong><br> ${about}</p>
            <p class="cv-experience"><strong>Experience:</strong><br> ${experience}</p>
            <p class="cv-skills"><strong>Skills:</strong><br> ${skills}</p>
          </div>
        </div>
    `;

  // Insert the generated CV into the output div
  const outputDiv = document.getElementById("cv-output");
  if (outputDiv) {
    outputDiv.innerHTML = output;
  }

  // Return false to prevent form submission
  return false;
}

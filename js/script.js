///welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greeting-name').innerHTML = `Hi ${name}, `;
}

/// Function to validate form inputs
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// Show alert if any field is empty
        alert("All fields are required!");
    } else {
        /// Show success message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }

    /// Display the submitted data
    const output = document.getElementById('form-output');
    output.innerHTML = `
        <p class="mt-3"><strong>Nama :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Pesan :</strong> ${message}</p>
      `;

}
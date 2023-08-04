// Function to create a new input field
function createInput(parentElement, inputType) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputType;
    input.required = true;
    li.appendChild(input);
    parentElement.appendChild(li);
}

// Event listener to add more skills
document.getElementById('add_skill').addEventListener('click', function() {
    createInput(document.getElementById('skills_list'), 'text');
});

// Event listener to add more certificates
document.getElementById('add_certificate').addEventListener('click', function() {
    createInput(document.getElementById('certificates_list'), 'text');
});

// Event listener to add more hobbies
document.getElementById('add_hobby').addEventListener('click', function() {
    createInput(document.getElementById('hobbies_list'), 'text');
});

// Event listener to generate resume and download as a text file
document.getElementById('generate_resume').addEventListener('click', function() {
    // Collect user input
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const graduationYear = document.getElementById('graduation_year').value;
    const jobTitle = document.getElementById('job_title').value;
    const employer = document.getElementById('employer').value;
    const employmentDuration = document.getElementById('employment_duration').value;
    const skills = Array.from(document.querySelectorAll('#skills_list input')).map(input => input.value);
    const certificates = Array.from(document.querySelectorAll('#certificates_list input')).map(input => input.value);
    const hobbies = Array.from(document.querySelectorAll('#hobbies_list input')).map(input => input.value);

    // Generate the resume content
    const resumeContent = `
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}

        Education:
        - Degree: ${degree}
        - University/College: ${university}
        - Graduation Year: ${graduationYear}

        Experience:
        - Job Title: ${jobTitle}
        - Employer: ${employer}
        - Employment Duration: ${employmentDuration}

        Skills:
        ${skills.map(skill => `- ${skill}`).join('\n')}

        Certificates:
        ${certificates.map(certificate => `- ${certificate}`).join('\n')}

        Hobbies:
        ${hobbies.map(hobby => `- ${hobby}`).join('\n')}
    `;

    // Create a Blob with the resume content
    const blob = new Blob([resumeContent], { type: 'text/plain' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link and simulate a click to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'resume.txt';
    downloadLink.click();

    // Clean up the URL and remove the link
    URL.revokeObjectURL(url);
});

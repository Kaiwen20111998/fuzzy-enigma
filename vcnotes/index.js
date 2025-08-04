console.log('Happy developing ✨')

document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Copyright Year
    const currentYearSpan = document.getElementById('currentYear');
    // Check if the element was found before trying to use it
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear().toString();
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const ticketLink = document.getElementById('ticketLink').value.trim(); // Trim whitespace
    const followUp = document.querySelector('input[name="followUp"]:checked').value;
    const expectations = document.getElementById('expectations').value.trim();
    const interactionDetails = document.getElementById('interactionDetails').value.trim();

    const formattedData = `
Contact Name: ${contactName}
Reason for call/text/email: ${reason}
Ticket Link (existing or new): ${ticketLink}
Is follow-up needed? ${followUp}
Expectations set with guests: ${expectations}
Interaction Details: ${interactionDetails}`.trim();

    navigator.clipboard.writeText(formattedData)
        .then(() => {
            const confirmationDiv = document.getElementById('copyConfirmation');
            confirmationDiv.style.display = 'block';
            setTimeout(() => {
                confirmationDiv.style.display = 'none';
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy data. Please try again or copy manually.');
        });
});

document.getElementById('clearButton').addEventListener('click', function () {
    // Clear all text areas
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => {
        textArea.value = '';
    });

    // Clear specific text/url inputs
    document.getElementById('contactName').value = '';
    document.getElementById('ticketLink').value = '';
    document.getElementById('reason').value = ''; // Ensure this is cleared if it's not a textarea
    document.getElementById('expectations').value = '';
    document.getElementById('interactionDetails').value = '';

    // Reset the radio button to 'No'
    document.getElementById('followUpNo').checked = true;
});

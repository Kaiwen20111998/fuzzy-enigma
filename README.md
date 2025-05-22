# Contact Form Webpage

## Overview

This project provides a simple HTML webpage for capturing contact information. It includes fields for contact name, reason for contact, ticket link, follow-up status, expectations, and interaction details.  The form includes a feature to copy the entered data to the clipboard and an option to clear the text areas.

## Features

* **Contact Information Form:**
    * Fields for:
        * Contact Name
        * Reason for call/text/email
        * Ticket Link
        * Is follow-up needed? (Yes/No)
        * Expectations set with guests
        * Interaction Details
* **Copy Data Button:** Copies the entered form data to the clipboard in a formatted text.
* **Clear Text Areas Button:** Clears all text within the text areas of the form.
* **Responsive Design:** The form is designed to be responsive.
* **Styling:** The form is styled with CSS, including Comfortaa font for labels and textareas.

## Technologies Used

* HTML
* CSS
* JavaScript
* Google Fonts (Roboto and Comfortaa)

## Setup

To use this form, simply save the provided HTML code as a `.html` file (e.g., `index.html`) and open it in a web browser.

## Usage

1.  Open the `index.html` file in your web browser.
2.  Fill out the form fields with the relevant contact information.
3.  Click the "Copy Data" button to copy the entered information to your clipboard. A confirmation message will appear briefly.
4.  Paste the copied data into any text editor, email, or other application.
5.  Click the "Clear Text Areas" button to clear all text from the text areas in the form.

## Code Structure

* **HTML (`<body>`):**
    * Form with labeled input fields (`<input>`, `<textarea>`, `<input type="radio">`).
    * "Copy Data" button (`<button type="submit">`).
    * "Clear Text Areas" button (`<button type="button" id="clearButton">`).
    * Confirmation message (`<div id="copyConfirmation">`).
* **CSS (`<style>`):**
    * Styling for the form, labels, inputs, buttons, and confirmation message.
    * Uses Roboto for the main body and buttons, and Comfortaa for labels and textareas.
    * Flexbox is used to center the buttons.
* **JavaScript (`<script>`):**
    * Event listener for the "Copy Data" button:
        * Prevents form submission.
        * Collects data from form fields.
        * Formats the data into a template string.
        * Copies the formatted string to the clipboard.
        * Displays a confirmation message.
    * Event listener for the "Clear Text Areas" button:
        * Clears the values of all text areas and input fields.

##  Customization
* **Fonts:** The font can be changed by modifying the `<link>` tag in the `<head>` section of the HTML and updating the `font-family` properties in the CSS.
* **Styling:** The appearance of the form can be customized by modifying the CSS rules in the `<style>` section.
* **Form Fields:** You can add or remove form fields as needed by modifying the HTML and updating the JavaScript code to handle the data.
* **Confirmation Message:** The text and display duration of the confirmation message can be changed in the JavaScript code.

##   ভবিষ্যতের 개발 (Future Development)

* Add more robust form validation.
* Implement backend functionality to submit the form data to a server.
* Enhance the user interface with additional styling and animations.
* Add more options for data export (e.g., download as a file).


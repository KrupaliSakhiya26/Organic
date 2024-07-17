// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Add submit event listener to the form
    $('#form_id').submit(function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get the values entered by the user
      var username = $('#username').val().trim();
      var password = $('#password').val().trim();
  
      // Example validation (you should implement proper validation)
      if (username === 'admin' || password === 'admin') {
        alert('Please enter both username and password.');
        return;
      }
  
      // Assume validation is successful, then redirect
      // For demonstration purposes, redirecting to a dummy page
      window.location.href = 'index.html'; // Replace with your actual page URL
    });
  });
  
// ==UserScript==
// @name         Copy Image Name
// @namespace    https://domainname.com/
// @version      1.0
// @description  Copies the image name from the URL to the clipboard
// @match        *://*/wp-content/uploads/*
// @grant        none
// ==/UserScript==
(function() {
  const currentURL = window.location.href;

  // Split the URL by '/' to get an array of parts
  const urlParts = currentURL.split('/');

  // Get the last part of the URL which should be the file name
  const fileNameWithExtension = urlParts[urlParts.length - 1];

  // Split the file name by '.' to remove the extension
  const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];

  // Console log the `fileNameWithoutExtension`
 // alert(fileNameWithoutExtension);

  // Function to copy the `fileNameWithoutExtension` to the clipboard
  function copyToClipboard() {
    navigator.clipboard.writeText(fileNameWithoutExtension)
      .then(function() {
        alert('Text copied to clipboard');
      })
      .catch(function(err) {
        alert('Failed to copy text: ' + err);
      });
  }

  // Call the copyToClipboard function when needed, for example, on a button click
  document.addEventListener('click', function(event) {
    if (event.ctrlKey && event.button === 0) {
      copyToClipboard();
    }
  });
})();

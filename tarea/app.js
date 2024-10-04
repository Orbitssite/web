// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Custom action on modal show
    $('#exampleModal').on('show.bs.modal', function (e) {
      console.log('Modal is about to be shown.');
    });
  
    // Example: Custom action on modal hide
    $('#exampleModal').on('hide.bs.modal', function (e) {
      console.log('Modal is about to be hidden.');
    });
  });
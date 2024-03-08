// Function to open a specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close modals when clicking on the 'close' button or outside the modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    } else if (event.target.classList.contains('close')) {
        event.target.closest('.modal').style.display = 'none';
    }
};

// Add event listeners to open modal buttons
document.querySelectorAll('.modal-open-btn').forEach(button => {
    button.onclick = function() {
        openModal(this.dataset.modal);
    };
});

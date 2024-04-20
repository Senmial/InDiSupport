document.addEventListener('DOMContentLoaded', function() {
    const modalToggleButtons = document.querySelectorAll('[data-modal-toggle]');

    modalToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetModalId = this.getAttribute('data-modal-target');
            const targetModal = document.getElementById(targetModalId);

            if (targetModal) {
                targetModal.classList.toggle('hidden');
                targetModal.setAttribute('aria-hidden', targetModal.classList.contains('hidden'));
            }
        });
    });
});
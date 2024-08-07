document.addEventListener("DOMContentLoaded", () => {
    // MAIN LOGIC
    const buyTrigger = document.querySelector('#buy-ton'),
          closeBuyModal = document.querySelector('.buy-modal-close');
          buyTonModal = document.querySelector('.buy-modal-background');

    const openBuyModal = function() {
        buyTonModal.classList.add('show-modal');
        buyTonModal.classList.remove('close-modal');
    }

    const closeBuyModalFunc = function() {
        buyTonModal.classList.add('close-modal');
        buyTonModal.classList.remove('show-modal');
    }
    
    buyTrigger.addEventListener('click', (event) => {
        if (event.target === buyTrigger) {
            openBuyModal();
        }
    });

    closeBuyModal.addEventListener('click', closeBuyModalFunc);
});
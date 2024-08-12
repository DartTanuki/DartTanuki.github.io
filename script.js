import TonConnectUI from '@tonconnect/ui'

const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://darttanuki.github.io/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

// document.addEventListener("DOMContentLoaded", async () => {
//     // MAIN LOGIC
//     const buyTrigger = document.querySelector('#buy-ton'),
//           closeBuyModal = document.querySelector('.buy-modal-close');
//           buyTonModal = document.querySelector('.buy-modal-background');

//     const openBuyModal = function() {
//         buyTonModal.classList.add('show-modal');
//         buyTonModal.classList.remove('close-modal');
//     }

//     const closeBuyModalFunc = function() {
//         buyTonModal.classList.add('close-modal');
//         buyTonModal.classList.remove('show-modal');
//     }
    
//     buyTrigger.addEventListener('click', (event) => {
//         if (event.target === buyTrigger) {
//             openBuyModal();
//         }
//     });

//     closeBuyModal.addEventListener('click', closeBuyModalFunc);
//     const walletsList = await tonConnectUI.getWallets();
//     console.log(walletsList);
// });
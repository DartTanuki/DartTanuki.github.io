import { tonConnection } from "./tonconnection.js";

function startTonFunc() {
    function createTransaction(amount) {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: 'UQD9nUcG-Ed5fK4gxnSYYIclAe8gi9gxWXgVl_ARMw20C8BC',
                    amount: amount,
                 // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
                }
            ]
        }
        return transaction;
    }

    const button = document.querySelector('#my-predictons');
    const rules_button = document.querySelector('#rules-1');

    button.addEventListener('click', async () => {
        const currentWallet = tonConnection.wallet.account.address;
        console.log(currentWallet);
    });

    rules_button.addEventListener('click', async () => {
        const currentIsConnectedStatus = tonConnection.connected;
        
        if (!currentIsConnectedStatus) {
            alert('Please connect your wallet to create transaction!');
        } else {
            const transaction = createTransaction(200000);      
            const result = await tonConnection.sendTransaction(transaction);
            alert(result);
            const someTxData = await myAppExplorerService.getTransaction(result.boc);
            alert('Transaction was sent successfully', someTxData);
        }
    });
}

export default startTonFunc;
import { tonConnection } from "./tonconnection.js";

function startTonFunc() {
    function createTransaction(amount) {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: 'UQCq4u9JZdtLXrIkSfOV2-mLIYl7qvsJ3rsPGvkWt16O76Om',
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
            alert(transaction.address);
        }
    });
}

export default startTonFunc;
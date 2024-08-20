import { tonConnection } from "./tonconnection.js";

function startTonFunc() {
    function createTransaction(to_address, amount) {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: to_address,
                    amount: amount, // Nanotons
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
        try {
            const result = await tonConnection.sendTransaction(
                createTransaction('UQBEVadLtLh0qALy2ZOloJXroeYsQF6-2Il_2umAqymawQy2', 200000)
            );
        } catch (e) {
            console.error(e);
        }
    })
}

export default startTonFunc;
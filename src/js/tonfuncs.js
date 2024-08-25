import { tonConnection } from "./tonconnection.js";
import {body_test} from './payload_test.js'
import { toNano } from "@ton/ton";

function startTonFunc() {
    function createTransaction(amount) {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: 'UQD9nUcG-Ed5fK4gxnSYYIclAe8gi9gxWXgVl_ARMw20C8BC',
                    amount: amount,
                    payload: body_test.toBoc().toString('base64')
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
            const transaction = createTransaction(toNano(0.002).toString());      
            const result = await tonConnection.sendTransaction(transaction);
        }
    });
}

export default startTonFunc;
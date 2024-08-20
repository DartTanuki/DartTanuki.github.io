import { TonConnectUI } from "@tonconnect/ui";
import { THEME } from "@tonconnect/ui";


const tonConnection = new TonConnectUI({
        manifestUrl: 'https://darttanuki.github.io/tonconnect-manifest.json',
        buttonRootId: 'ton-connect'
});

tonConnection.uiOptions = {
    language: 'ru',
    uiPreferences: {
        theme: THEME.DARK
    }
};

// EXPORTS
export { tonConnection };
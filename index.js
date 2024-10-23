console.log('\x1b[36m%s\x1b[0m', '================================');
console.log('\x1b[32m%s\x1b[0m', '   A U T H O R :  B A C T I A R 2 9 1');
console.log('\x1b[36m%s\x1b[0m', '================================');

const { Connection, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction } = require('@solana/web3.js');
const fs = require('fs');


const rpcUrl = 'https://mantis-testnet-rollup.composable-shared-artifacts.composablenodes.tech/rpc';
const connection = new Connection(rpcUrl, 'confirmed');

const secretKeyData = JSON.parse(fs.readFileSync('secretKey.json', 'utf-8'));
const secretKeyArray = secretKeyData.secretKeyArray;

const senderKeypair = Keypair.fromSecretKey(Uint8Array.from(secretKeyArray));


function getRandomWallet() {
    return Keypair.generate();
}

async function sendTransaction() {
    const recipient = getRandomWallet();

    const amount = 0.1 * 1_000_000_000; 

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: senderKeypair.publicKey,
            toPubkey: recipient.publicKey,
            lamports: amount,
        })
    );

    try {
        const { blockhash } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = senderKeypair.publicKey;

        await transaction.partialSign(senderKeypair);

        const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair], {
            commitment: 'confirmed',
            preflightCommitment: 'confirmed'
        });

        const transactionDetails = {
            sender: senderKeypair.publicKey.toString(),
            recipient: recipient.publicKey.toString(),
            amount: amount / 1_000_000_000,
            signature: signature,
        };

        fs.writeFileSync('nano.json', JSON.stringify(transactionDetails, null, 2));

        console.log('Transaction succeeded! Details saved to nano.json');
        return true;

    } catch (error) {
        console.error('Transaction failed:', error);
        return false;
    }
}

async function repeatSendTransaction() {
    while (true) {
        const success = await sendTransaction();

        if (!success) {
            console.log('Retrying in 10 seconds due to error...');
            await new Promise(resolve => setTimeout(resolve, 10000));
        } else {
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
}


repeatSendTransaction();

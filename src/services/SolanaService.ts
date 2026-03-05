import { Connection, PublicKey, Keypair, Transaction, SystemProgram } from '@solana/web3.js';

export class SolanaService {
    private connection: Connection;

    constructor(rpcUrl: string) {
        this.connection = new Connection(rpcUrl);
    }

    async createToken(mintAuthority: Keypair, payer: Keypair): Promise<PublicKey> {
        // ... Implementation for token creation
    }

    async transferToken(from: Keypair, to: PublicKey, amount: number): Promise<string> {
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: amount,
            })
        );

        const signature = await this.connection.sendTransaction(transaction, [from]);
        await this.connection.confirmTransaction(signature);
        return signature;
    }
}
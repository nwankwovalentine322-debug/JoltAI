// TypeScript types for Solana token operations

// Represents a Solana token
export interface SolanaToken {
    mint: string; // The mint address of the token
    name: string; // The name of the token
    symbol: string; // The symbol of the token
    decimals: number; // The number of decimals the token uses
}

// Represents a transaction involving Solana tokens
export interface TokenTransaction {
    from: string; // Sender's public key
    to: string; // Receiver's public key
    amount: number; // Amount of tokens being transferred
    token: SolanaToken; // The token being transferred
    timestamp: string; // Date and time of the transaction
}
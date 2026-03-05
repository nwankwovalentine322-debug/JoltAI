// chat.ts

// Define the structure for a chat message
export interface ChatMessage {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;
}

// Define the structure for a chat thread
export interface ChatThread {
    id: string;
    messages: ChatMessage[];
    participants: string[];
    createdAt: Date;
    updatedAt: Date;
}
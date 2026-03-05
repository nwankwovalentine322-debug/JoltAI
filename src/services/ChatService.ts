import { Injectable } from 'nestjs';
import { Subject } from 'rxjs';

@Injectable()
export class ChatService {
    private messages: string[] = [];
    private messagesSubject = new Subject<string[]>();

    // Method to send a message
    sendMessage(message: string) {
        this.messages.push(message);
        this.messagesSubject.next(this.messages);
    }

    // Method to get the message stream
    getMessages() {
        return this.messagesSubject.asObservable();
    }

    // Method to get all messages
    getAllMessages() {
        return this.messages;
    }
}
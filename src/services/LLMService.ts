// LLMService.ts

import { ChatGPTAPI } from 'chatgpt'; // Import necessary libraries

class LLMService {
    private chatGptApi: ChatGPTAPI;

    constructor(apiKey: string) {
        this.chatGptApi = new ChatGPTAPI({ apiKey });
    }

    async chat(payload: string): Promise<string> {
        const response = await this.chatGptApi.sendMessage(payload);
        return response.text;
    }

    async generateCode(prompt: string): Promise<string> {
        const codeResponse = await this.chatGptApi.sendMessage(prompt);
        return codeResponse.text;
    }
}

export default LLMService;

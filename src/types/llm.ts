export interface LLMConfig {
    model: string;
    temperature?: number;
    maxTokens?: number;
    topP?: number;
    frequencyPenalty?: number;
    presencePenalty?: number;
}

export interface LLMMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export interface LLMResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{ role: string; content: string; }>
}

export interface LLMProvider {
    name: string;
    config: LLMConfig;
    sendMessage(message: LLMMessage): Promise<LLMResponse>;
}
// CodeGenerationRequest interface
export interface CodeGenerationRequest {
    prompt: string;
    language: string;
    options?: any;
}

// CodeGenerationResponse interface
export interface CodeGenerationResponse {
    success: boolean;
    code?: string;
    error?: string;
}

// CodeWriter interface
export interface CodeWriter {
    writeCode(request: CodeGenerationRequest): Promise<CodeGenerationResponse>;
    formatCode(code: string): string;
}
import { streamText } from 'ai';
import {createOllama} from "ollama-ai-provider";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
const ollama = createOllama();

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: ollama('deepseek-r1:1.5b'),
        system: 'You are a helpful coding assistant.',
        messages,
    });

    return result.toDataStreamResponse();
}
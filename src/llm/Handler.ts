import {ChatHandler } from "@llamaindex/chat-ui";
import { Message, useChat } from 'ai/react'

const initialMessages: Message[] = [
    {
        id: '1',
        content: 'How is the validator determining which format to use?',
        role: 'user',
    },
    {
        id: '1',
        role: 'assistant',
        content:
            "The app determines the validation format based on the type of numeric literal being processed.\n\n" +
            "Referring to `validation.py`, first the `normalize_numeric_literal()` function identifies the type (hex, scientific, complex, etc.) and then applies the appropriate formatting function, such as `format_hex` or `format_scientific_notation`.\n\n" +
            "If that makes sense to you, we can look at `parsing.py` to see where the validation formats are used, or we can explore how `normalize_numeric_literal()` works in detail.",
    },
]

export function chat(): ChatHandler {
    return useChat({initialMessages,
    api: '/api/chat'}) // [ANNIE] probably wont work without express? this library confused me.
}
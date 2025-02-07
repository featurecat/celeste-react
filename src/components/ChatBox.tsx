import React, { FC } from 'react';
import {chat} from "../llm/Handler.ts";
import {ChatInput, ChatMessages, ChatSection} from "@llamaindex/chat-ui";

const ChatBox: FC = () => {
    return (
        <ChatSection className={"h-full w-full bg-gray-700"}
                     handler={chat()}>
                <ChatMessages className="rounded m-4 bg-gray-600 mb-0"/>
                <ChatInput>
                    <ChatInput.Form className="bg-gray-500 p-3 rounded">
                        <ChatInput.Field className="h-full"
                            type="input" />
                        <ChatInput.Submit />
                    </ChatInput.Form>
                </ChatInput>
            </ChatSection>
    );
};

export default ChatBox;
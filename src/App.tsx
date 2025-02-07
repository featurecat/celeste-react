import React, {useRef, useState} from 'react';
import './App.css'

import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import ChatBox from "./components/ChatBox.tsx";
import Terminal from "./components/Terminal.tsx";
import SplitPane from "./components/SplitPane.tsx";
import FileTree from "./components/FileTree.tsx";
import CodeEditor from "./components/CodeEditor.tsx";
import {FileItem, files} from "./Stores.ts";
import Drawer from "./components/Drawer.tsx";

interface MainViewProps {
    width: number,
}

const initialChatWidthPercentage = 0.4;

const App = ({width}: MainViewProps) => {
    const containerRef = useRef(null);
    const chatboxInitialWidth = Math.floor(width * initialChatWidthPercentage)
    const [fileTreeData] = useState<FileItem[]>(files)

    return (
        <div ref={containerRef}
             className="h-screen flex">
            <Drawer initialCollapsed={false}/>

            <div className="flex-1 flex">
                <SplitPane initialWidth={chatboxInitialWidth}>
                    <div className="w-full h-full border-r">
                        <ChatBox/>
                    </div>
                    <div className="w-full h-full border-r flex">
                        <div className="flex-1 flex flex-col bg-base-100">
                            <div className="h-1/2 flex border-b">
                                <SplitPane initialWidth={220}
                                           color={"#222"}>
                                    <div className="p-2 bg-base-200 overflow-y-auto h-full w-full">
                                        <FileTree data={fileTreeData}/>
                                    </div>
                                    <div className="flex-1 h-full w-full">
                                        <CodeEditor/>
                                    </div>
                                </SplitPane>
                            </div>

                            <div className="h-1/2 m-1">
                                <Terminal/>
                            </div>
                        </div>
                    </div>
                </SplitPane>

            </div>
        </div>
    );
};

export default App
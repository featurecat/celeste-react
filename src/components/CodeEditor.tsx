import React, {FC} from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import {dummyPython} from "../Stores.ts";

const Terminal: FC = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="navbar bg-base-100 min-h-8 h-8">
                <a className="btn text">validation.py</a>
            </div>

            <div className="flex-1">
                <AceEditor
                    mode="python"
                    theme="monokai"
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={dummyPython}
                    width="100%"
                    height="100%"
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                    style={{display: "flex"}}
                />
            </div>
        </div>
    );
};

export default Terminal;
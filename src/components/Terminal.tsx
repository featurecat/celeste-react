import { FC } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-terminal";

const Terminal: FC = () => {
    return (
        <AceEditor
            mode="text"
            theme="terminal"
            fontSize={14}
            readOnly
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={false}
            value={dummyText}
            width="100%"
            height="100%"
            className="terminal-theme"
            setOptions={{
                showLineNumbers: false,
                tabSize: 2,
            }}
        />
    );
};

const dummyText: string = `Compiled successfully!

You can now view celeste in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://18.6.1.231:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
Files successfully emitted, waiting for typecheck results...
Issues checking in progress...
No issues found.
^C
$ cat > ▮`;

export default Terminal;
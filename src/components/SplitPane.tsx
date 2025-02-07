import React, {useState, useRef, useEffect, ReactNode} from 'react';

interface SplitPaneProps {
    initialWidth: number,
    children: ReactNode,
    color?: string,
}

const SplitPane = ({initialWidth, children, color}: SplitPaneProps) => {
    const [leftWidth, setLeftWidth] = useState(initialWidth); // Initial width of the left div
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const startX = useRef(0);
    const startLeftWidth = useRef(0);

    // Start the dragging process
    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startX.current = e.clientX;
        startLeftWidth.current = leftWidth;
    };

    // Handle the dragging and resizing of the left div
    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX.current;
        const newWidth = startLeftWidth.current + deltaX;

        // Prevent resizing beyond a reasonable minimum and maximum width
        if (newWidth >= 100 && newWidth <= containerRef.current!.offsetWidth - 100) {
            setLeftWidth(newWidth);
        }
    };

    // Stop dragging when the mouse button is released
    const onMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        // Attach the mousemove and mouseup event listeners
        if (isDragging) {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        } else {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [isDragging]);

    const childrenArray = React.Children.toArray(children);
    const leftChild = childrenArray[0];
    const rightChild = childrenArray[1];

    return (
        <div ref={containerRef} className="flex w-full h-full">
            <div
                style={{width: `${leftWidth}px`}}>
                {leftChild}
            </div>

            <div
                onMouseDown={onMouseDown}
                className="divider cursor-col-resize w-2 h-full m-0"
                style={{backgroundColor: color}}
            />

            <div
                style={{flex: 1}}>
                {rightChild}
            </div>
        </div>
    );
};

export default SplitPane;
import React, {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";

interface DrawerProps {
    initialCollapsed: boolean,
}

const Drawer = ({initialCollapsed}: DrawerProps) => {
    const [collapsed, setCollapsed] = useState(initialCollapsed)

    return (
        <div className={`drawer bg-base-100 relative p-4 ${collapsed ? 'w-20' : 'w-40'} flex flex-col`}>
            <div className="flex items-center mb-2">
                <img
                    src="/favicon.svg"
                    alt="Favicon"
                    className="w-8 h-8 mr-2 ml-1 mt-1"
                />
                {!collapsed && <span className="celeste-logo text-lg font-semibold mt-1 pt-0 text-white p-1 rounded-lg bg-fuchsia-900/70">Celeste</span>}
            </div>

            <button
                className="btn btn-ghost h-10"
                onClick={() => setCollapsed(!collapsed)}>
                {collapsed ?
                    <ChevronRightIcon className="w-4 h-4 absolute"/> :
                    <ChevronLeftIcon className="w-4 h-4 absolute"/>}
            </button>
            {!collapsed && (
                <ul className="menu mt-2 pl-0 w-full">
                    <li><a onClick={() => alert('Option 1')}>Settings</a></li>
                    <li><a onClick={() => alert('Option 2')}>History</a></li>
                </ul>
            )}
        </div>
    );
};

export default Drawer;
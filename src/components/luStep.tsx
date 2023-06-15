import React from 'react';

export const LuStep: React.FC<LuStepProp> = (props) => {
    return (
        <div className="flex flex-col items-left border-2 border-df rounded-md p-4 shadow">
            <h2 className="font-bold mt-1.5">{props.title}</h2>
            <p className="text-gray-700 mt-2">
                {props.description}
            </p>
        </div>
    );
};

interface LuStepProp {
    title: string;
    description: string;
}
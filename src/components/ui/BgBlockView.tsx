import React from 'react';

interface BgBlockViewProps {
    col: number,
    row: number
}

const BgBlockView: React.FC<BgBlockViewProps> = ({ row, col }) => {
    return (
        <div className="absolute rounded-xl w-full h-full overflow-hidden bg-slate-800/25">
            <div className="absolute w-full h-full top-0 left-0 flex justify-between flex-col">
            {[...Array(row)].map((_, index) => (
                <div key={index} className="h-[1px] w-full bg-indigo-600/10 "></div>
            ))}
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex justify-between flex-row">
            {[...Array(col)].map((_, index) => (
                <div key={index} className="w-[1px] h-full bg-indigo-600/10 "></div>
            ))}
            </div>
           
        </div>
    );
};
export default BgBlockView;
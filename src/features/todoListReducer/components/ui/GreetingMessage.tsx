import React from 'react';

interface GreetinMessageProps {
   userName?: string,
   date?: string 
}

const GreetinMessage: React.FC<GreetinMessageProps> = ({ userName = 'Nicolas', date = 'Wed 6 July 2023'}) => {
    return (
        <div className="greeting-message">
            <h2 className="greeting-message--message font-bold text-3xl" >Good Morning, {userName} ! &#x1F596;</h2>
            <span className="greeting-message--date text-neutral-500 text-lg">{date}</span>
        </div>
    );
};

export default GreetinMessage;
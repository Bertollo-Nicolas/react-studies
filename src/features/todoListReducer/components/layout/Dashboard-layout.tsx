import React from 'react';
import GreetinMessage from '../ui/GreetingMessage';
import StatusFilter from '../dashboard/StatusFilter';

const DashboardLayout: React.FC = () => {

    return (
        <div className="header-app flex justify-between">
            <GreetinMessage />
            <StatusFilter />
        </div>
    );
};
export default DashboardLayout;
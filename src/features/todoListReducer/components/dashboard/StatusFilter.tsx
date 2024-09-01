import React, { useState } from 'react';

type FilterStatus = 'all' | 'completed' | 'active';

const StatusFilter: React.FC = () => {
    const [filterStatus, setFilterStatus] = useState<FilterStatus>("all")
    return (
        <div>
            <div className="filter-status">
                <select className="filter-status--select h-10 pl-2 capitalize rounded-md" value={filterStatus} onChange={e => setFilterStatus(e.target.value as FilterStatus)}>
                    <option value="all">all</option>
                    <option value="active">active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>
    );
};
export default StatusFilter;
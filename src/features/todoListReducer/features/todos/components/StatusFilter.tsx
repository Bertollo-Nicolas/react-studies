import React, { useEffect, useState } from 'react';
import { useTodos } from '../hooks/useTodos';


type FilterStatus = 'all' | 'completed' | 'active';

const StatusFilter: React.FC = () => {
    
    const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
    const { dispatch } = useTodos();
    
    useEffect(() => {
        if(filterStatus === 'active'){
            dispatch({ type: 'FILTER_COMPLETED', payload: false });
        }else if(filterStatus === 'completed'){
            dispatch({ type: 'FILTER_COMPLETED', payload: true });
        }else{
            dispatch({ type: 'FILTER_RESET' });
        }
    }, [dispatch, filterStatus])
    

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
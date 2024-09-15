import React from 'react';
import "./app.scss"
import Exercice from './components/Exercice';
import BgBlockView from '@/components/ui/BgBlockView';

const ModalReducer: React.FC = () => {
    
    return (
        <>
          <div className='studie-content mx-auto max-w-5xl py-10'>
            <Exercice />
            <div className="studie-code mt-20 mb-20">
                <section className="mt-4 -mb-3">
                  <div className="relative rounded-xl overflow-hidden bg-slate-950/50 border border-slate-700">
                  <BgBlockView col={24} row={8} />
                    <div className="relative rounded-xl overflow-auto p-8">
                      <div className="text-white text-sm font-bold bg-stripes-indigo rounded-lg bg-slate-900">
                        <div className="p-4 w-2/5 h-[100px] rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">01</div>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
          </div>
        </>);
};

export default ModalReducer;
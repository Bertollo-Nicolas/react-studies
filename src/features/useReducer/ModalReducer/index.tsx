import React, { useEffect, useReducer, useRef } from 'react';
import "./app.scss"
import Exercice from './components/Exercice';
import BgBlockView from '@/components/ui/BgBlockView';
import Card from './components/Card';
import { CardReducer, CardState, CardType } from './store/CardReducer';

const ModalReducer: React.FC = () => {
  const initialState: CardState = {
    cards: [],
    activeCardId: null,
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);
  const cardRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  const openCard = (type: CardType) => {
    const id = `card-${Date.now()}`;
    cardRefs.current[id] = React.createRef();
    dispatch({
      type: 'OPEN_CARD',
      payload: { id, type },
    });
  };

  const closeModal = (id: string) => {
    dispatch({ type: 'CLOSE_CARD', payload: { id } });
    delete cardRefs.current[id];
  };

  useEffect(() => {

  },[])

  return (
      <>
        <div className='studie-content mx-auto max-w-5xl py-10'>
          <Exercice />
          <div className="studie-code mt-10">
              <section className="mt-4 -mb-3">
                <div className="relative rounded-xl overflow-hidden bg-slate-950/50 border border-slate-700">
                <BgBlockView col={24} row={8} />
                  <div className="relative rounded-xl overflow-auto p-8">
                    <div className="text-white text-sm font-bold bg-stripes-indigo rounded-lg bg-slate-900 p-4">
                      <div className="options flex justify-end items-center h-14 bg-indigo-900 mb-6 rounded-xl px-5 gap-3">
                        <div onClick={() => openCard('list')} className="btn-card-list bg-indigo-950 px-4 py-1 rounded-xl cursor-pointer">Card list</div>
                        <div className="btn-card-list bg-indigo-950 px-4 py-1 rounded-xl cursor-pointer">Card Chart</div>
                        <div className="btn-card-list bg-indigo-950 px-4 py-1 rounded-xl cursor-pointer">Card Table</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 h-auto auto-rows-auto">
                        {
                          state.cards.map((card) => (
                          <Card key={card.id} {...card} onClose={() => closeModal(card.id)} title='Fake card' width='col-span-1 row-span-4' ref={cardRefs.current[card.id]} >
                            <div className="mt-5 flex flex-col gap-5">
                              <div className="w-full h-10 bg-indigo-500 rounded-full"></div>
                              <div className="w-full h-10 bg-indigo-500 rounded-full"></div>
                              <div className="w-full h-10 bg-indigo-500 rounded-full"></div>
                            </div>
                          </Card>
                          ))
                        }
                        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>
      </>
  );
};

export default ModalReducer;
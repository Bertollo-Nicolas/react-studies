type CardType = 'list' | 'chart' | 'table' | null;

interface CardData {
    id: string,
    isOpen: boolean,
    type: CardType,
}

interface CardState {
    cards: CardData[];
    activeCardId: string | null;
}

type CardAction =
    | { type: 'OPEN_CARD';  payload: Omit<CardData, 'isOpen'> }
    | { type: 'CLOSE_CARD'; payload: { id: string }  };

export const CardReducer = (state: CardState, action: CardAction): CardState => {
    switch (action.type) {
        case 'OPEN_CARD':
            return {
                cards: [...state.cards, { ...action.payload, isOpen: true }],
                activeCardId: action.payload.id,
            };
        case 'CLOSE_CARD':
            return {
                cards: state.cards.filter(card => card.id !== action.payload.id), activeCardId: state.cards.length > 1 
                    ? state.cards[state.cards.length - 2].id 
                    : null,
            };
        default:
            return state
    }
};

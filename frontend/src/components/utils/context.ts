import React from 'react';
export const SearchContext = React.createContext<any>({});
export const JobContext = React.createContext({
  cardId: -1,
  setCardId: (id: number) => {},
});

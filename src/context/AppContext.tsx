import React, { createContext, FC, ReactNode, useState } from "react";

interface InitialContext {
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
  handleFavorite: (id: number) => void;
}

const initialContext: InitialContext = {
  favorites: [],
  setFavorites: () => {},
  handleFavorite: () => {},
};

export const AppContext = createContext(initialContext);

interface Props {
  children: ReactNode;
}

const AppProvider: FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const clearContext = async () => {
    setFavorites([]);
  };

  const handleFavorite = (id: number) => {
    if (favorites.length > 0) {
      const indexToRemove = favorites.findIndex((item) => item === id);
      if (indexToRemove !== -1) {
        setFavorites(favorites.filter((item) => item !== id));
      } else {
        setFavorites([...favorites, id]);
      }
    } else {
      setFavorites([id]);
    }
  };

  const contextValue = {
    favorites,
    setFavorites,
    handleFavorite,
    clearContext,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

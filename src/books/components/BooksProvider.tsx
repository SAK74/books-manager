import React, { createContext, useContext } from "react";
import { Book, BookAction } from "../../types";
import { useBooksCollection } from "./useBookState";

interface ContextType {
   books: Book[],
   booksDispatch: React.Dispatch<BookAction>
}

const BooksContext = createContext<ContextType | undefined>(undefined);
export const BooksProvider: React.FC = ({ children }) => {
   const [{ books, initialized }, booksDispatch] = useBooksCollection();
   return <BooksContext.Provider value={{ books, booksDispatch }}>
      {initialized ? children : <div>... loading</div>}
   </BooksContext.Provider>
}

export const useBookContext = () => {
   const ctx = useContext(BooksContext);
   if (!ctx) {
      throw new Error("Component beyong Context");
   }
   return ctx;
}
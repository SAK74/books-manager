import React, { useEffect, useReducer } from "react";
import api from "../../api";
import { Book, BookAction } from "../../types";
interface BookState {
   books: Book[],
   initialized: boolean
}

export function useBooksCollection(): [BookState, React.Dispatch<BookAction>] {
   const bookReducer = (state: BookState, action: BookAction): BookState => {
      switch (action.type) {
         case "fetch":
      }
      return { ...state, books: action.payload, initialized: true }
   }
   const [state, dispatch] = useReducer(bookReducer, {
      books: [],
      initialized: false
   });
   useEffect(() => {
      api.fetch<Book[]>().then(data => dispatch({ type: 'fetch', payload: data }))
   }, []);
   return [state, dispatch];
}
import React, { memo, useEffect } from "react";
import { useBookContext } from "./BooksProvider";
import api from '../../api';

export const BooksList: React.FC = () => {
   const { books, booksDispatch: dispatch } = useBookContext();
   console.log(books);
   return (
      <div>Done  asd</div>
   )
}

// export default memo(BooksList);
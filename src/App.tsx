import { BooksList } from "./books/components/BooksList";
import { BooksProvider } from "./books/components/BooksProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BooksProvider>
        <BooksList />
      </BooksProvider>
    </div>
  );
}

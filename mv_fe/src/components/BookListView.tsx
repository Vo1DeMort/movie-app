import { BookCard } from "./BookCard";

export const BookListView = (props: {}) => {
  const books = Array.from({ length: 40 });
  return (

    <div className="grid grid-cols-4">
      {books.map((_, index) => (
        <BookCard key={index} />
      ))}
    </div>
  )
}

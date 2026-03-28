import BookInfo from "./BookInfo";

// props:
// { "genre" : "fantasy",
//    "books": [ {'title": 'Great Gatsby', 'author': 'F. Scott Fitzgerald', 'price': 10.000"} ],
//  }

export default function BookCollection({ genre, books }) {
  console.log("genre: ", genre, "books: ", books);
  return (
    <div className="book-collection">
      <h2>{genre}</h2>

      {books.map((book) => {
        return <BookInfo props={book} />;
      })}
    </div>
  );
}

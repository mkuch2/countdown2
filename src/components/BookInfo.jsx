// props: {'title": 'Great Gatsby', 'author': 'F. Scott Fitzgerald', 'price': 10.000"}
export default function BookInfo({ props }) {
  return (
    <>
      <div>
        <span className="book-title" style={{ fontStyle: "italic" }}>
          {props.title + ", "}
        </span>
        <span className="book-author">{props.author + ", "} </span>
        <span className="book-price">${props.price.toFixed(1)}</span>
      </div>
    </>
  );
}

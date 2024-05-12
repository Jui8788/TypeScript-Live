{
  // You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };

  function isRecentBook(book1: Book) {
    const { publishedYear } = book1;

    let publishedDate = new Date(publishedYear, 0);
    let diff = new Date().getFullYear() - publishedDate.getFullYear();

    if (diff <= 5) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  isRecentBook(book1);
}

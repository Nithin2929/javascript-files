const shelf = ["Wings of Fire", "The Alchemist", "Let Us C"];

console.log("Original Array:", shelf);
console.log("Array Length:", shelf.length);
console.log("First Element:", shelf[0]);
console.log("Last Element:", shelf[shelf.length - 1]);

shelf.push("Clean Code");
shelf.unshift("Godan");
console.log("After push and unshift:", shelf);

console.log("Removed Last:", shelf.pop());
console.log("Removed First:", shelf.shift());
console.log("After Removal:", shelf);

shelf.splice(1, 1, "Malgudi Days");
console.log("After Splice:", shelf);

console.log("Index of Let Us C:", shelf.indexOf("Let Us C"));
console.log("Includes Godan:", shelf.includes("Godan"));

const firstTwo = shelf.slice(0, 2);
console.log("First Two Books:", firstTwo);
console.log("Original Shelf:", shelf);

const sortedShelf = [...shelf].sort();
console.log("Sorted Shelf:", sortedShelf);

console.log("Is Array:", Array.isArray(shelf));

shelf.forEach(title => {
    console.log("Book:", title);
});


console.log("--- Part 2: Objects ---");

const book = {
    id: 101,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    price: 350,
    copies: 4,

    publisher: {
        name: "Universities Press",
        city: "Hyderabad"
    },

    tags: ["biography", "science"],

    
    describe() {
        return `${this.title} by ${this.author}`;
    }
};

console.log("Title:", book.title);
console.log("Author:", book["author"]);
console.log("Publisher City:", book.publisher.city);
console.log("Second Tag:", book.tags[1]);
console.log("Description:", book.describe());

book.price = 380;
book.isbn = "978-8173711466";

console.log("Updated Price:", book.price);
console.log("ISBN:", book.isbn);

delete book.isbn;
console.log("After Delete:", book);

console.log("Has ISBN:", "isbn" in book);
console.log("Has Price:", "price" in book);

console.log("Object Keys:", Object.keys(book));
console.log("Publisher Values:", Object.values(book.publisher));
console.log("Publisher Entries:", Object.entries(book.publisher));

const { title, price } = book;
console.log("Destructured Title:", title);
console.log("Destructured Price:", price);

const copiedBook = { ...book, price: 400 };

console.log("Original Price:", book.price);
console.log("Copied Price:", copiedBook.price);

console.log("--- Part 3: Functions ---");

const formatPrice = function(amount) {
    return "Rs " + amount;
};

console.log(formatPrice(350));

const calculateLateFee = function(daysLate, ratePerDay = 2) {
    return daysLate * ratePerDay;
};

console.log("Late Fee:", calculateLateFee(5));
console.log("Late Fee:", calculateLateFee(5, 3));

const createBook = function(id, title, author, category, price, copies, rating) {
    return {
        id,
        title,
        author,
        category,
        price,
        copies,
        rating
    };
};

console.log(createBook(
    107, "Ikigai", "Hector Garcia",
    "Self-help", 399, 6, 4.3
));


console.log("--- Part 4: Arrays of Objects ---");

const library = [
    createBook(101, "Wings of Fire", "A. P. J. Abdul Kalam", "Autobiography", 350, 4, 4.8),
    createBook(102, "The Alchemist", "Paulo Coelho", "Fiction", 299, 2, 4.5),
    createBook(103, "Let Us C", "Yashavant Kanetkar", "Programming", 450, 5, 4.2),
    createBook(104, "Clean Code", "Robert C. Martin", "Programming", 899, 0, 4.7),
    createBook(105, "Godan", "Munshi Premchand", "Fiction", 220, 3, 4.6),
    createBook(106, "Malgudi Days", "R. K. Narayan", "Fiction", 275, 1, 4.4)
];

const allTitles = library.map(book => book.title);
console.log("All Titles:", allTitles);

const cheapBooks = library
    .filter(book => book.price < 300)
    .map(book => book.title);

console.log("Books Below 300:", cheapBooks);

const book104 = library.find(book => book.id === 104);
console.log("Book ID 104:", book104.title);

const index105 = library.findIndex(book => book.id === 105);
console.log("Index of Book 105:", index105);

const outOfStock = library.some(book => book.copies === 0);
const allRatedAbove4 = library.every(book => book.rating > 4);

console.log("Any Book Out of Stock:", outOfStock);
console.log("Every Book Rating Above 4:", allRatedAbove4);

const isAvailable = function(book) {
    return book.copies > 0;
};


const addBook = function(lib, newBook) {
    return [...lib, newBook];
};


const removeBook = function(lib, id) {
    return lib.filter(book => book.id !== id);
};


const borrowBook = function(lib, id) {
    const book = lib.find(book => book.id === id);

    if (!book) {
        return "Book not found";
    }

    if (book.copies === 0) {
        return `Sorry, ${book.title} is out of stock`;
    }

    book.copies--;

    return `Borrowed: ${book.title} (${book.copies} copies left)`;
};

const searchByAuthor = function(lib, text) {
    return lib
        .filter(book =>
            book.author.toLowerCase().includes(text.toLowerCase())
        )
        .map(book => book.title);
};

const printReport = function(lib) {
    console.log("ID - Title - Price - Copies - Status");

    lib.forEach(book => {
        const status = isAvailable(book)
            ? "In stock"
            : "Out of stock";

        console.log(
            `${book.id} - ${book.title} - ${formatPrice(book.price)} - ${book.copies} - ${status}`
        );
    });
};

console.log("--- LibraTrack Test Sequence ---");

console.log(borrowBook(library, 101));
console.log(borrowBook(library, 104));
console.log(borrowBook(library, 999));

const updated = addBook(
    library,
    createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3)
);

console.log("Original Library Length:", library.length);
console.log("Updated Library Length:", updated.length);

const trimmed = removeBook(updated, 102);
console.log("Trimmed Library Length:", trimmed.length);

console.log("Search Kalam:", searchByAuthor(library, "kalam"));

printReport(trimmed);


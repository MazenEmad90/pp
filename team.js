/////////////////////////////////////////////Member 1/////////////////////////////////////////////
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        isBorrowed: false
    }
];

// // // Add by user
// // let id = parseInt(prompt("Enter book ID:"));
// // let title = prompt("Enter book title:");
// // let author = prompt("Enter book author:");
// // let isBorrowed = confirm("Is the book borrowed? Click 'OK' for Yes, 'Cancel' for No.");
// //console.log("After adding a new book:", books);

// // // Add a new book
let newBookId = 2;
let newBookTitle = "1984";
let newBookAuthor = "George Orwell";
let newBookIsBorrowed = false;
books.push({ id: newBookId, title: newBookTitle, author: newBookAuthor, isBorrowed: newBookIsBorrowed });
console.log("After adding a new book:", books);

// // // Remove by user
// let removebookId = parseInt(prompt("Enter the ID of the book you want to remove:"));

// for (let i = 0; i < books.length; i++) {
//     if (books[i].id === removebookId) {
//         console.log(`Book "${books[i].title}" has been removed.`);
//         books.splice(i, 1); 
//         break;
//     }
// }
// console.log("After removing the book with ID 1:", books);


// Remove a book by ID
let removeBookId = 1;
books = books.filter(book => book.id !== removeBookId);
console.log("After removing the book with ID 1:", books);

// // // List all available books 
console.log("Available books:");
for (let i = 0; i < books.length; i++) {
    if (!books[i].isBorrowed) {
        console.log(`ID: ${books[i].id}, Title: "${books[i].title}", Author: "${books[i].author}"`);
    }
}
/////////////////////////////////////////////Member 2/////////////////////////////////////////////
let books2 = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", isBorrowed: false },
    { id: 2, title: "1984", author: "George Orwell", isBorrowed: false },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false }
];

// // Borrow a book by user 
// let borrowBookId = 2;
// for (let i = 0; i < books2.length; i++) {
//     if (books2[i].id === borrowBookId) {
//         bookFound = true;
//         if (books2[i].isBorrowed) {
//             console.log(`The book "${books2[i].title}" is already borrowed.`);
//         } else {
//             books2[i].isBorrowed = true;
//             console.log(`You have successfully borrowed the book "${books2[i].title}".`);
//         }
//         break; // Exit the loop once the book is found
//     }
// }

// // Borrow a book 
let borrowBookId = 2; 
for (let i = 0; i < books2.length; i++) {
    if (books2[i].id === borrowBookId) {
        if (books2[i].isBorrowed) {
            console.log(`The book "${books2[i].title}" is already borrowed.`);
        } else {
            books2[i].isBorrowed = true;
            console.log(`You have borrowed the book "${books2[i].title}".`);
        }
        break;
    }
}

// // Return a books by user
// let returnBookId = 1; 

// for (let i = 0; i < books2.length; i++) {
//     if (books2[i].id === returnBookId) {
//         if (!books2[i].isBorrowed) {
//             console.log(`The book "${books2[i].title}" is not currently borrowed.`);
//         } else {
//             books2[i].isBorrowed = false;
//             console.log(`You have successfully returned the book "${books2[i].title}".`);
//         }
//         break; 
//     }
// }

// // Return a books 
let returnBookId = 2; 
for (let i = 0; i < books2.length; i++) {
    if (books2[i].id === returnBookId) {
        if (!books2[i].isBorrowed) {
            console.log(`The book "${books2[i].title}" was not borrowed.`);
        } else {
            books2[i].isBorrowed = false;
            console.log(`You have returned the book "${books2[i].title}".`);
        }
        break;
    }
}

// // List all borrowed books
console.log("Borrowed books:");
for (let i = 0; i < books2.length; i++) {
    if (books2[i].isBorrowed) {
        console.log(`ID: ${books2[i].id}, Title: "${books2[i].title}", Author: "${books2[i].author}"`);
    }
}
/////////////////////////////////////////////Member 3/////////////////////////////////////////////
let books3 = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", isBorrowed: true },
    { id: 2, title: "1984", author: "George Orwell", isBorrowed: false },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: true },
    { id: 4, title: "Harry Potter", author: "J.K. Rowling", isBorrowed: true },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isBorrowed: false }
];

// // Find the total number of books in the library
let totalBooks = 0;
for (let i = 0; i < books3.length; i++) {
    totalBooks++; 
}

// // Count how many books are borrowed vs available
let borrowedBooksCount = 0;
let availableBooksCount = 0;

for (let i = 0; i < books3.length; i++) {
    if (books3[i].isBorrowed) {
        borrowedBooksCount++;
    } else {
        availableBooksCount++;
    }
}

// Find the most borrowed author
let authorBorrowCounts = {};
for (let i = 0; i < books3.length; i++) {
    if (books3[i].isBorrowed) {
        if (authorBorrowCounts[books3[i].author]) {
            authorBorrowCounts[books3[i].author]++;
        } else {
            authorBorrowCounts[books3[i].author] = 1;
        }
    }
}
let mostBorrowedAuthor = null;
let maxBorrowedCount = 0;
for (let author in authorBorrowCounts) {
    if (authorBorrowCounts[author] > maxBorrowedCount) {
        maxBorrowedCount = authorBorrowCounts[author];
        mostBorrowedAuthor = author;
    }
}

// Generate the summary report
console.log("Library Summary Report:");
console.log(`Total Books: ${totalBooks}`);
console.log(`Books Borrowed: ${borrowedBooksCount}`);
console.log(`Books Available: ${availableBooksCount}`);
console.log(`Most Borrowed Author: ${mostBorrowedAuthor || "None"} (${maxBorrowedCount} book(s) borrowed)`);
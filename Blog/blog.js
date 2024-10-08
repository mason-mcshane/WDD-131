window.addEventListener("load", createInfo);

const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description:
            "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "****"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description:
            "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc:
            "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
            "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];
function createInfo() {
    // Select the main element where the articles will be appended
    const bookInfoDiv = document.querySelector("main");

    // Loop through each article in the 'articles' array
    articles.forEach((article) => {
        // Create an 'article' element to hold all the content for this book
        const parent = document.createElement("article");
        parent.className = "book-parent"; // Assign a class to the 'article' element
        bookInfoDiv.appendChild(parent); // Append this 'article' to the main element

        // Create a 'div' to hold information like date, ages, genre, and stars
        const infoDiv = document.createElement("div");
        infoDiv.className = "info-div"; // Assign a class to this div for styling
        parent.appendChild(infoDiv); // Append it to the 'article' element

        // Loop through specific keys of the 'article' and create a paragraph for each
        ["date", "ages", "genre", "stars"].forEach(key => {
            const p = document.createElement("p"); // Create a paragraph element
            p.textContent = article[key]; // Set the text to the corresponding value from the article object
            infoDiv.appendChild(p); // Append each paragraph to the infoDiv
        });

        // Create a 'div' to hold the book's title, image, and description
        const bookDiv = document.createElement("div");
        bookDiv.className = "book-div"; // Assign a class to this div for styling
        parent.appendChild(bookDiv); // Append this div to the 'article' element

        // Create and append the book's title (h2 element)
        const title = document.createElement("h2");
        title.textContent = article.title; // Set the text to the article's title
        bookDiv.appendChild(title); // Append the title to the bookDiv

        // Create and append the book's image (img element)
        const img = document.createElement("img");
        img.src = article.imgSrc; // Set the image source
        img.alt = article.imgAlt; // Set the alt text for accessibility
        bookDiv.appendChild(img); // Append the image to the bookDiv

        // Create and append the book's description (p element)
        const description = document.createElement("p");
        description.textContent = article.description; // Set the description text
        bookDiv.appendChild(description); // Append the description to the bookDiv

        // Create a div for filters (content placeholder)
        const filterDiv = document.createElement("div");
        filterDiv.className = "filter-div"; // Assign a class to this div for styling
        filterDiv.innerHTML = "<p>Filters here</p>"; // Add placeholder text for the filters
        parent.appendChild(filterDiv); // Append this div to the 'article' element
    });
}
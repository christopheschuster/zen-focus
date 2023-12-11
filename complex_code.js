/* 
   Filename: complex_code.js
   Description: This complex JavaScript code is a web application that simulates a virtual art gallery.
                Users can browse through a collection of artworks, add them to a favorites list, and leave comments on each artwork.
                The code uses an object-oriented approach and showcases various advanced JavaScript concepts.

   Note: This code is just a simulation and does not implement any actual backend or database.
*/

// ARTWORK CLASS
class Artwork {
  constructor(title, artist, year, image) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.image = image;
    this.comments = [];
    this.favorite = false;
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// GALLERY CLASS
class Gallery {
  constructor(name) {
    this.name = name;
    this.artworks = [];
  }

  addArtwork(artwork) {
    this.artworks.push(artwork);
  }

  removeArtwork(title) {
    this.artworks = this.artworks.filter((artwork) => artwork.title !== title);
  }

  searchArtwork(keyword) {
    return this.artworks.filter(
      (artwork) =>
        artwork.title.includes(keyword) ||
        artwork.artist.includes(keyword) ||
        artwork.year.includes(keyword)
    );
  }
}

// CREATE GALLERY AND ARTWORKS
const myGallery = new Gallery("Virtual Gallery");

const artwork1 = new Artwork(
  "Mona Lisa",
  "Leonardo da Vinci",
  "1503-1506",
  "mona_lisa.jpg"
);
artwork1.addComment("Beautiful artwork");
artwork1.addComment("The most famous painting in the world");

const artwork2 = new Artwork(
  "The Starry Night",
  "Vincent van Gogh",
  "1889",
  "starry_night.jpg"
);
artwork2.addComment("Love the swirling stars");
artwork2.addComment("Impressive use of color");

myGallery.addArtwork(artwork1);
myGallery.addArtwork(artwork2);

// USER INTERFACE FUNCTIONS
function displayGallery(gallery) {
  console.log(`-- ${gallery.name} --`);
  gallery.artworks.forEach((artwork) => {
    console.log("--------------------");
    console.log(`Artwork: ${artwork.title}`);
    console.log(`Artist: ${artwork.artist}`);
    console.log(`Year: ${artwork.year}`);
    console.log(`Image: ${artwork.image}`);
    console.log("Comments:");
    artwork.comments.forEach((comment) => console.log(`- ${comment}`));
    console.log("--------------------");
  });
}

function toggleFavorite(artwork) {
  artwork.toggleFavorite();
  console.log(
    `${artwork.title} is ${
      artwork.favorite ? "added to" : "removed from"
    } favorites.`
  );
}

function addComment(artwork, comment) {
  artwork.addComment(comment);
  console.log(`Comment added to ${artwork.title}: ${comment}`);
}

// RUN THE VIRTUAL GALLERY
displayGallery(myGallery);

console.log("\nSearching for 'starry'...");
const searchResult = myGallery.searchArtwork("starry");
displayGallery(new Gallery("Search Result"), searchResult);

console.log("\nToggling favorite for Mona Lisa...");
toggleFavorite(artwork1);

console.log("\nAdding comment to Starry Night...");
addComment(artwork2, "One of my favorites!");

console.log("\nFinal gallery:");
displayGallery(myGallery);
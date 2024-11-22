import React from 'react';
import './App.css';

let title = "Gallery";
let message = "This is a collection of drawings.";

const images = [
  '/images/img01.jpg',
  '/images/img02.jpg',
  '/images/img03.jpg',
  '/images/img04.jpg',
  '/images/img05.jpg',
  '/images/img06.jpg',
  '/images/img07.jpg',
  '/images/img08.jpg',
  '/images/img09.jpg',
  '/images/img10.jpg',
  '/images/img11.jpg',
  '/images/img12.jpg',
  '/images/img13.jpg',
  '/images/img14.jpg',
  '/images/img15.jpg',
];

function App() {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{message}</h2>
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
import React from "react";
import Header from "../../components/Header";
import ImageHeader from "../../images/header_bg_3.jpg";
import "./gallery.css";
function Gallery() {
  const images = [];
  const galleryLength = 14;

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  console.log(images);

  return (
    <div>
      <Header title="Our Gallery" image={ImageHeader}>
        This is the list of my prefered pictures that were faund in my liked
        instagram hot images, that Why I would like to share them with you!!!
      </Header>
      <section className="gallery">
        <div className="gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallerry Image_${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Gallery;

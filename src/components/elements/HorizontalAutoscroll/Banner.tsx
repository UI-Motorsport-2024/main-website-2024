import React from "react";

// Define a type for the image object
type Image = {
    id: string;
    image: string;
  };
  
// Define a type for the props
type BannerProps = {
images: Image[];
speed?: number;
};

const Banner: React.FC<BannerProps> = ({ images, speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section className="section-scroller" style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
            {images.map(({ id, image }) => (
              <div className="img-container" key={id}>
                <img className="image" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="section-scroller" style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
            {images.map(({ id, image }) => (
              <div className="img-container" key={id}>
                <img className="image" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="section-scroller" style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
            {images.map(({ id, image }) => (
              <div className="img-container" key={id}>
                <img className="image" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };
import React from "react";

const GalleryCard = ({ toy }) => {
  const { subCategories } = toy;

  console.log(subCategories);
  return (
    <div>
      {subCategories.map((subCategory) => (
        <div 
        key={subCategory.id}
        subCategory={subCategory}
         >
          {
          subCategory.id == 0 && <div className="card ml-4 glass">
            <figure>
            <img src={subCategory.pictureUrl}  className="w-96 h-96" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">{subCategory.name}</h2>
              {/* <p>How to park your car at your garage?</p> */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary mx-auto mt-4 ">Buy Now</button>
              </div>
            </div>
          </div>
          }
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
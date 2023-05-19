import React from "react";


const ShopByCategoryTabs = ({ toy }) => {
  const { Category, subCategories } = toy;

  const slicedSubCat = subCategories.slice(0, 2);
  console.log(subCategories);
  //   console.log(slicedToys);
  //   const firstToys = slicedToys[0];
  //   const secondToys = slicedToys[1];
  //   const thirdToys = slicedToys[2];

  //   const firstSub = firstToys.subCategories[0];
  //   console.log(firstToys,secondToys,thirdToys);

  //   console.log(slicedToys[0].subCategories[0].name);
  // console.log(slicedToys[2].subCategories[2].name);
  return (
    <div>
      {/* {
            firstToys.subCatories[0].map(subCatory => <h1

                key={subCatory.id}
               
            >  
            {subCatory.name}
            </h1>


            )
        }
         */}
      
    </div>
  );
};

export default ShopByCategoryTabs;

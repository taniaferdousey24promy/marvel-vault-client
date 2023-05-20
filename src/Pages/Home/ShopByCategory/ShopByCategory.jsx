import React, { useEffect, useState } from "react";
import ShopByCategoryTabs from "../ShopByCategoryTabs/ShopByCategoryTabs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  // console.log(toys);

  console.log(toys[0]);

 

  // const firstToySub = firstToy.subCategories[0];
  // console.log(firstToySub);

  // const values =[];
  // for(let i = 0; i<firstToy.subCategories.length; i++){
  //   const object = toys;
  //   const value= object.id;
  //   values.push(value);
  // }

  // console.log(values);

  return (
    <div className=" ms-36 mt-28">
      <h1 className="text-7xl font-bold text-black text-center ">
        Shop By Category
      </h1>

      <div className="flex mx-32 mt-20">
        {/* {toys.map((toy) => (
          <ShopByCategoryTabs key={toy.id} toy={toy}></ShopByCategoryTabs>
        ))} */}

        <Tabs>
          <TabList>
            {/* <Tab>{subCategories[0].name} and {subCategories[1].name}</Tab> */}
            <Tab></Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="flex gap-2 ">
                <div className="basis-1/2 ml-4 ">
                  <img
                    src=""
                    className="w-96 h-72"
                  />
                </div>
                <div className="basis-1/2  ">
                  <img
                    src="{subCategories[1].pictureUrl}"
                    className="w-96 h-72"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;

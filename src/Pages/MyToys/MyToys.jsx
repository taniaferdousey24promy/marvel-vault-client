import React, { useEffect, useState } from 'react';

const MyToys = () => {
    const [newToys, setnewToys] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/newToys")
        .then((res) => res.json())
        .then((data) => setnewToys(data));
    }, []);
    console.log(newToys);
    return (
        <div>
            <p>this is my toys page{newToys.length}</p>
        </div>
    );
};

export default MyToys;
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch Man']);

  /* const handleAdd = () => {
    setCategories(['Pokemon', ...categories]);
    // setCategories([...categories, 'Pokemon']);
    // setCategories((cats) => [...cats, 'Pokemon']);
  }; */

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GiftExpertApp;

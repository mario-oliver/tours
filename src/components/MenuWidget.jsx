import React, { useState } from 'react';
import MenuTitle from './MenuTitle';
import menu from '../data/menu_data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((items) => items.category))];
const ALL_CATEGORY = 'all';

const MenuWidget = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const handleCategory = (chosenCategory) => {
    console.log(chosenCategory);
    if (chosenCategory === ALL_CATEGORY) {
      setMenuItems(menu);
      return;
    }
    const tempItems = [];
    menu.map((menuItem) => {
      if (menuItem.category === chosenCategory) tempItems.push(menuItem);
    });
    setMenuItems(tempItems);
    return;
  };

  return (
    <main>
      <section className="menu">
        <MenuTitle text="Our Title"></MenuTitle>
        <Categories categories={categories} handleCategory={handleCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MenuWidget;

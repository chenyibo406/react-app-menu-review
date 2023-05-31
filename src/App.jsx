import { useState } from "react";
import menu from "./data";
import MenuContent from "./MenuContent";
import "./App.css";
import MenuIcon from "./MenuIcon";

function App() {
  const [showMenu, setShowMenu] = useState(menu);
  const [selectedItem, setSelectedItem] = useState("");

  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

  const seletedMenu = (item) => {
    if (item == "all") {
      setShowMenu(menu);
      return;
    }
    const newItem = menu.filter((menuItem) => menuItem.category === item);
    setShowMenu(newItem);
  };

  return (
    <>
      <div className="main-container">
        <h1>AC MENU</h1>
        <MenuIcon category={allCategories} selectedMenu={seletedMenu} />
        <MenuContent content={showMenu} />
      </div>
    </>
  );
}

export default App;

// everytime setshowContent update, it would cause rerender and it would rerender the
// newItem filter function once again

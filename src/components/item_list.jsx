import "./item_list.css";
import CircleIcon from "../assets/circle_icon";
import CheckIcon from "../assets/check_icon";
import { useState } from "react";

function itemList({ item_name, itemId, isPurchased }) {
  const [itemIsBought, setItem] = useState(isPurchased);
  const updateItem = async (event) => {
  
    
    
    try {
      const items = await fetch(`http://localhost:4000/api/v1/updatelist`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: itemId, isPurchased: !itemIsBought}),
      });
      const convertedItems = await items.json()

      setItem(convertedItems.isPurchased)
      console.log(itemIsBought);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <li>
        {item_name}

 
        <button onClick={updateItem}>
          <a href={itemId}></a>
          {itemIsBought ? (
            <CheckIcon color="#49cd5c" />
          ) : (
            <CircleIcon color="white" />
          )}
        </button>
      </li>
    </>
  );
}

export default itemList;

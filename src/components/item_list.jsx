import "./item_list.css";
import CircleIcon from "../assets/circle_icon";
import CheckIcon from "../assets/check_icon";
import { useState } from "react";

function itemList({ item_name, itemId }) {
  const [itemIsBought, setItem] = useState(false);

  return (
    <>
      <li>
        {item_name}
        <span>
          <button onClick={() => setItem(prev => !prev)}>
            {itemIsBought ? (<CheckIcon color="#49cd5c" />) : (<CircleIcon color="white" />)}
          </button>
        </span>
      </li>
    </>
  );
}

export default itemList;

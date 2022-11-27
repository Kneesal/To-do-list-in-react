import React from "react";

const ListItems = ({ listofitems, onDelete }) => {
  return (
    <ul>
      {listofitems.map((item) => (
        <li key={item.id}>
          {item.item} <button onClick={()=>onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ListItems;

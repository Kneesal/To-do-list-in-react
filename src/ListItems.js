import React from "react";

const ListItems = ({ listofitems, onDelete, handleDone }) => {
  return (
    <ul>
      {listofitems.map((item) => (
        <li key={item.id}  onClick = {handleDone}>
          {item.item} <button onClick={()=>onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ); 
};
export default ListItems;

import React from "react";

const ListItems = ({ listofitems, onDelete, toggleDone, handleComplete }) => {
  return (
    <ul>
      {listofitems.map((item) => (
        <li key={item.id} className = {`${toggleDone}`} onClick = {handleComplete}>
          {item.item} <button onClick={()=>onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ); 
};
export default ListItems;

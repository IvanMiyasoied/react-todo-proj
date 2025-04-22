import React from "react";


const List = ({items}) => {
  
  return (
    <ul>
      {items.map(({id,title,description}) => {

        return (
          <li key={id}>
            <h4>{title}</h4>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
